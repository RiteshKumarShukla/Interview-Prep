const fs = require("fs");
const express = require("express");

const logger = (req, res, next) => {
  const logs = fs.readFileSync("./logs.txt", "utf-8");
  let list = req.method + req.path + req.get("User-Agent") + "\n";
  try {
    fs.appendFileSync("./logs.txt", list, (err, data) => {
      console.log(err);
    });
    next();
  } catch (e) {
    console.log(e);
  }
};

module.exports = { logger };
