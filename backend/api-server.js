const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const database = require("./database");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
app.use(cookieParser());

const members = [
  { id: 3, name: "도서관", loginId: "lib", loginPw: "africa" },
  { id: 4, name: "갈동", loginId: "a", loginPw: "1" },
];

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
  // if (req.cookies && req.cookies.token) {
  //   jwt.verify(req.cookies.token, "1323", (err, decoded) => {
  //     if (err) {
  //       return res.send(401);
  //     } else {
  //       res.send(decoded);
  //     }
  //   });
  // } else {
  //   res.send(401);
  // }

  console.log(req.cookies);
  if (req.cookies && req.cookies.account) {
    const member = JSON.parse(req.cookies.account);
    if (member.id) {
      return res.send(member);
    }
  }
});

app.post("/api/account", (req, res) => {
  console.log(req);
  const loginId = req.body.loginId;
  const loginPw = req.body.loginPw;

  const member = members.find(
    (m) => m.loginId === loginId && m.loginPw === loginPw
  );
  if (member) {
    const options = {
      domain: "localhost",
      path: "/",
      httpOnly: true,
    };

    // const token = jwt.sign({ id: member.id, name: member.name }, "1323", {
    //   expiresIn: "10h",
    //   issuer: "africalib",
    // });

    // res.cookie("token", token, options);

    res.cookie("account", JSON.stringify(member), options);
    res.send(member);
  } else {
    res.send(404);
  }
});
