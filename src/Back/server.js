const express = require("express");
const app = express();
require("dotenv").config();
// const port = 8000;
const port = process.env.S_PORT || 8000;
const knex = require("./data/knex");
const axios = require("axios");

app.use(express.json());

// const nodeFetch = require("node-fetch");
// const nodeFetch = import("node-fetch").then((module) => module.default);
app.use(express.static("build"));

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
  const count = req.params.count;
  const title = req.params.title;
  // APIから画像を取得する枚数
  const getCount = 100;
  const fetchImg = await axios
    .get(
      `https://pixabay.com/api/?key=${process.env.API_KEY}&q=${title}&image_type=photo&pretty=true&per_page=50`
    )
    .then(async (e) => {
      const result = await e.data;
      return result.hits.length >= 5
        ? await axios.get(
            `https://pixabay.com/api/?key=${process.env.API_KEY}&q=${title}&image_type=photo&pretty=true&per_page=50`
          )
        : await axios.get(
            `https://pixabay.com/api/?key=${process.env.API_KEY}&q=犬&image_type=photo&pretty=true&per_page=50`
          );
    });
  const imgArr = await fetchImg.data;

  // ランダムな配列を取得
  const randomArrOfNum = randomArr(imgArr.hits.length);
  // スライスで指定個数分に変更
  const numSlice = randomArrOfNum.slice(0, count);
  const imgResult = [];
  // ランダムな画像を配列に格納(getCountから厳選)
  numSlice.forEach((element) => {
    imgResult.push(imgArr.hits[element]);
  });

  // URLのみに変更
  const imgURL = imgResult.map((e) => e.largeImageURL);
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

  const result = await axios
    .get(process.env.REACT_APP_TEST ? "http://localhost:7777/slide" : "/slide")
    .then((e) => e.data);

  res
    .set("content-type", "application/json")
    .status(200)
    .send(JSON.stringify(result));
});

app.listen(port, () => {
  console.log(`🚩listening on:${port}`);
});
