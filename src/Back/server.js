const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
const knex = require("./data/knex");
const axios = require("axios");
const path = require("path");

app.use(express.json());

// const nodeFetch = require("node-fetch");
// const nodeFetch = import("node-fetch").then((module) => module.default);
// app.use(express.static("build"));

//ビルドして静的な場所を指定する
// 一つのPORTでフロントとバックを行う（サーバーから静的なHTMLなどを読み込む）
app.use(express.static(path.join(__dirname, "../../build")));

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
  for (let i = min; i < max; i++) {
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
    return Math.floor(Math.random() * (max - min));
  }

  return randoms;
};

//タイトルに沿った画像をCount枚数分取得する
app.get("/auto/:title/:count", async (req, res) => {
  const count = req.params.count;
  const title = req.params.title;
  // APIから画像を取得する枚数
  const getCount = 50;
  let fetchImg;
  do {
    console.log("⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️while⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️");
    fetchImg = await axios
      .get(
        `https://pixabay.com/api/?key=${process.env.API_KEY}&q=${title}&image_type=photo&pretty=true&per_page=${getCount}`
      )
      .then(async (e) => {
        const result = await e.data;
        console.log(result.hits.length >= 5);
        return result.hits.length >= 5
          ? await axios.get(
              `https://pixabay.com/api/?key=${process.env.API_KEY}&q=${title}&image_type=photo&pretty=true&per_page=${getCount}`
            )
          : await axios.get(
              `https://pixabay.com/api/?key=${process.env.API_KEY}&q=犬&image_type=photo&pretty=true&per_page=${getCount}`
            );
      });
  } while (fetchImg.data.length < 5);

  let imgArr = fetchImg.data.hits;

  console.log({ imgArr });

  // ランダムな配列を取得
  const randomArrOfNum = randomArr(imgArr.length);
  console.log("###########ランダム", randomArrOfNum);
  // スライスで指定個数分に変更
  const numSlice = randomArrOfNum.slice(0, count);

  let imgResult = [];
  // ランダムな画像を配列に格納(getCountから厳選)
  numSlice.forEach((element) => {
    imgResult.push(imgArr[element]);
  });
  console.log({ imgResult });

  imgResult = imgResult.map((item) => {
    if (item === undefined) {
      return {
        largeImageURL:
          "https://pixabay.com/get/g593ed16665f2d9e620fdfd6eafe17143de89ad41a568e283cf22ae784e6a1db797934817edcc6e0fa7eb0825e3832f4c2faf7ca04765ce13bc785022c6170a1c_1280.jpg",
      };
    } else {
      return item;
    }
  });

  // URLのみに変更
  const imgURL = imgResult.map((e) => {
    console.log("#########", e);
    console.log("#########", e.largeImageURL);
    return e.largeImageURL;
  });
  console.log({ imgURL });
  res
    .set("content-type", "application/json")
    .status(200)
    .send(JSON.stringify(imgURL));
});

//スライドの情報を全て取得する
app.get("/slide", async (req, res) => {
  const data = await knex.select("*").from("slides");
  res
    .set("content-type", "application/json")
    .status(200)
    .send(JSON.stringify(data));
});

//接続確認
app.get("/", async (req, res) => {
  res.status(200);
  res.send("接続確認OK");
});

//スライドを登録
app.post("/slide", async (req, res) => {
  await knex("slides").insert(req.body);

  res.status(200).send("成功");
});

app.listen(port, () => {
  console.log(`🚩listening on:${port}`);
});
