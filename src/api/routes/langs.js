const express = require("express")
const route = express.Router()
const puppeteer = require('puppeteer')

route.get("/", async function (req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.tiobe.com/tiobe-index/");

  const list = await page.evaluate(() => {
    // const nodelist = document.querySelectorAll("#top20 tr td:nth-child(4)");
    // const nodelist2 = document.querySelectorAll("#top20 tr td:nth-child(5)");
    // const linguagens = [...nodelist];
    // const porcentagem = [...nodelist2];
    // linguagens.forEach((e, i) => {
    //   var c = {
    //     linguagem: e.innerHTML,
    //     porcentagem: porcentagem[i].innerHTML,
    //   };
    //   console.log(c)
    // });
    return {
      lang: document.querySelector("#top20 tr td:nth-child(4)").innerHTML,
      height: document.querySelector("#top20 tr td:nth-child(5)").innerHTML,
      timestamp: Date.now(),
    };
  });
  await browser.close();
  console.log(list);

  res.json(list);
});

module.exports = route