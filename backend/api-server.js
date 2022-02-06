const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const database = require("./database");

const memos = [];

app.use(bodyParser.json());

//데이터베이스에서 검색후 프론트로 데이터 전송

app.get("/api/memos", async (req, res) => {
  const result = await database.run("SELECT * FROM memos");
  res.send(result);
});

//서버와 연동후 데이터베이스에 데이터 추가
//MySQL에서는 INSERT INTO 문을 사용하여 테이블에 새로운 레코드를 추가할 수 있습니다.
app.post("/api/memos", async (req, res) => {
  //
  await database.run(`INSERT INTO memos (content) VALUES(?)`, [
    req.body.content,
  ]);
  const result = await database.run("SELECT * FROM memos");
  res.send(result);
});

app.put("/api/memos/:id", async (req, res) => {
  await database.run(`UPDATE memos SET content = ? WHERE id = ?`, [
    req.body.content,
    req.params.id,
  ]);

  const result = await database.run("SELECT * FROM memos");
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

////////////////////////////////////////////////////////////////////////////
//로그인

app.get("/api/account", (req, res) => {
  res.send({
    mid: 3,
    memberName: "홍길동",
  });
});
