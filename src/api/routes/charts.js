const e = require("express");
const express = require("express");
const route = express.Router();
const puppeteer = require("puppeteer");

route.get("/", async function (req, res) {
  const param = req.query;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.billboard.com/charts/hot-100");
  await page.waitForSelector(".chart-list");

  const list = await page.evaluate(() => {
    const nodelist = Array.from(
      document.querySelectorAll(".chart-element__information__song")
    );
    const nodelist2 = Array.from(
      document.querySelectorAll(".chart-element__information__artist")
    );

    var lista = nodelist2.map((e, i) => {
      return {
        song: e.innerHTML,
        artist: nodelist[i].innerHTML,
        timestamp: Date.now(),
      };
    });

    return lista;
  });

  await browser.close();
  res.json(list);
});

module.exports = route;
