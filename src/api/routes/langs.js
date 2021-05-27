const express = require("express");
const route = express.Router();
const puppeteer = require("puppeteer");

route.get("/", async function (req, res) {
  let langs = [];

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.tiobe.com/tiobe-index/");

  const list = await page.evaluate(() => {
    const nodelist = document.querySelectorAll(
      "#top20 tr td"
    );
    const linguagensList = [...nodelist];
    console.log(linguagensList[1].innerHTML)
    
    return linguagensList.forEach(e => e)
    // return {
    //   position: document.querySelector("#top20 tr td:nth-child(1)").innerHTML,
    //   lang: document.querySelector("#top20 tr td:nth-child(4)").innerHTML,
    //   percent: document.querySelector("#top20 tr td:nth-child(5)").innerHTML,
    //   timestamp: Date.now(),
    // }
  });
  //   await browser.close()
  console.log(list);

  res.json(list);
});

module.exports = route;
