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
app.post("/api/memos", async (req, res) => {
  await database.run(
    `INSERT INTO memos (content) VALUES('${req.body.content}')`
  );
  const result = await database.run("SELECT * FROM memos");
  res.send(result);
});

app.put("/api/memos/:id", async (req, res) => {
  await database.run(
    `UPDATE memos SET content = '${req.body.content}' WHERE id = ${req.params.id}`
  );

  const result = await database.run("SELECT * FROM memos");
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
