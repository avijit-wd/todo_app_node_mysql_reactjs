const router = require("express").Router();
const db = require("../database/db");

router.get("/", (req, res, next) => {
  db.query("SELECT * FROM Todos", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      next(err);
    }
  });
});

router.get("/:id", (req, res, next) => {
  const todoId = req.params.id;
  db.query(`SELECT * FROM Todos WHERE id=${todoId}`, (err, rows, fields) => {
    if (!err) {
      if (!rows[0]) {
        res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json(rows[0]);
    } else {
      next(err);
    }
  });
});

router.post("/", (req, res, next) => {
  const { id, title, isDone } = req.body;

  const sql = `SET @id= ?; SET @title= ?; SET @isDone= ?; CALL TodosAddOrEdit(@id, @title, @isDone);`;

  db.query(sql, [id, title, isDone], (err, rows, fields) => {
    if (!err) {
      const newRow = rows.filter((item) => item.constructor === Array);
      res.status(200).send(newRow[0][0]);
    } else {
      next(err);
    }
  });
});

router.put("/", (req, res, next) => {
  const { id, title, isDone } = req.body;

  const sql = `SET @id= ?; SET @title= ?; SET @isDone= ?; CALL TodosAddOrEdit(@id, @title, @isDone);`;

  db.query(sql, [id, title, isDone], (err, rows, fields) => {
    if (!err) {
      const newRow = rows.filter((item) => item.constructor === Array);
      res.status(200).send(newRow[0][0]);
    } else {
      next(err);
    }
  });
});

router.delete("/:id", (req, res, next) => {
  const empId = req.params.id;
  db.query(`DELETE FROM Todos WHERE id= ?`, [empId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json({ msg: "resourse deleted" });
    } else {
      next(err);
    }
  });
});

module.exports = router;
