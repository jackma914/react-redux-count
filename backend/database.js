const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "1323",
  connectionLimit: 5,
  database: "memo",
});

module.exports = {
  async run(query) {
    return new Promise((resolve) => {
      pool
        .getConnection()
        .then((conn) => {
          conn
            .query(query)
            .then((rows) => {
              resolve(rows);
            })
            .catch((err) => {
              //handle error
              conn.end();
            });
        })
        .catch((err) => {
          //not connected
        });
    });
  },
};
