const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const database = require("./database");

const memos = [];

app.use(bodyParser.json());

//데이터 로드
app.get("/api/memos", async (req, res) => {
  const result = await database.run("SELECT * FROM memos");
  res.send(result);
});

//데이터 추가
app.post("/api/memos", (req, res) => {
  memos.push(req.body.content);
  res.send(memos);
});

//데이터 수정
app.put("/api/memos/:idx", (req, res) => {
  // req를 로그해보면 idx는 params에 들어있습니다. 바뀔 데이터인 content는 body에 들어있습니다.
  console.log(req);
  memos[req.params.idx] = req.body.content;
  res.send(memos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
