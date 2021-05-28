const express = require("express");
const route = express.Router();
const puppeteer = require("puppeteer");

route.get("/", async function (req, res) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.tiobe.com/tiobe-index/");

  const list = await page.evaluate(() => {
    const positions = Array.from(document.querySelectorAll('#top20 tr td:nth-child(1)'))
    const langs = Array.from(document.querySelectorAll('#top20 tr td:nth-child(4)'))
    const percent = Array.from(document.querySelectorAll('#top20 tr td:nth-child(5)'))
    
    let lista = positions.map((e,i)=> {
      return {
        'position': e.innerHTML,
        'lang': langs[i].innerHTML,
        'percent': percent[i].innerHTML,
        'timestamp': Date.now()
      }
    })
    
    return lista;
  });
  await browser.close()

  res.json(list);
});

module.exports = route;
