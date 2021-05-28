const e = require("express");
const express = require("express");
const route = express.Router();
const puppeteer = require("puppeteer");

route.get("/", async function (req, res) {
  const param = req.query.song;

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
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
        song: nodelist[i].innerHTML,
        artist: e.innerHTML,
        timestamp: Date.now(),
      };
    });

    return lista;
  });
  await browser.close();
  if(!param){
    res.json(list);
  } else{
    const filtro = list.filter(i=>{
      if(i.song.toLowerCase().split(" ").join("") === param){
        return i
      }
    })
    res.json(filtro)
  }

  
});

module.exports = route;
