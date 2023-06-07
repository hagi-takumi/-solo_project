const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.S_PORT || 8000;
const knex = require("./data/knex");
// const { default: axios } = require("axios");

app.use(express.json());

// console.log(process.env.REACT_APP_TEST);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ランダムな数字を指定数（５つ）分取得する
const randomArr = (max = 10) => {
  /** 重複チェック用配列 */
  const randoms = [];
  /** 最小値と最大値 */
  const min = 0;

  /** 重複チェックしながら乱数作成 */
  for (let i = min; i <= max; i++) {
    while (true) {
      const tmp = intRandom(min, max);
      if (!randoms.includes(tmp)) {
        randoms.push(tmp);
        break;
      }
    }
  }

  /** min以上max以下の整数値の乱数を返す */
  function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return randoms;
};

//タイトルに沿った画像をCount枚数分取得する
app.get("/auto/:title/:count", async (req, res) => {
  // console.log(req.params.title);
  const count = req.params.count;
  console.log(count);
  const title = req.params.title;
  // APIから画像を取得する枚数
  const getCount = 100;
  const fetchImg = await fetch(
    `https://pixabay.com/api/?key=${process.env.API_KEY}&q=${title}&image_type=photo&pretty=true&per_page=${getCount}`
  ).then(async (e) => {
    const imgArr = await e.json();
    console.log("era-------", imgArr.total);
    return imgArr.total >= 5
      ? e
      : await fetch(
          `https://pixabay.com/api/?key=${process.env.API_KEY}&image_type=photo&pretty=true&per_page=${getCount}`
        );
  });
  const imgArr = await fetchImg.json();
  // ランダムな配列を取得
  const randomArrOfNum = randomArr(imgArr.hits.length);
  console.log({ randomArrOfNum });
  // スライスで指定個数分に変更
  const imgSlice = randomArrOfNum.slice(0, count);
  console.log({ imgSlice });
  let imgResult = [];
  // ランダムな画像を配列に格納(getCountから厳選)
  imgSlice.forEach((element) => {
    imgResult.push(imgArr.hits[element]);
  });
  console.log(imgResult.length);

  // URLのみに変更
  const imgURL = imgResult.map((e) => e.largeImageURL);
  console.log({ imgURL });
  res.status(200);
  res.send(JSON.stringify(imgURL));
});

//スライドの情報を全て取得する
app.get("/slide", async (req, res) => {
  const data = await knex.select("*").from("slides");

  res.status(200);
  res.send(JSON.stringify(data));
});

//接続確認
app.get("/", async (req, res) => {
  res.status(200);
  res.send("接続確認OK");
});

//スライドを登録
app.post("/slide", async (req, res) => {
  console.log(req.body);
  await knex("slides").insert(req.body);

  const result = await fetch(
    process.env.REACT_APP_TEST ? "http://localhost:7777/slide" : "/slide"
  ).then((e) => e.json());

  res.set("content-type", "application/json").status(200).send(result);
});

app.listen(port, () => {
  console.log(`🚩listening on:${port}`);
});
