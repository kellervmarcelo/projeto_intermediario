const { response } = require("express");
const express = require("express");
const puppeteer = require("puppeteer");

const server = express();

server.get("/", async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.alura.com.br/formacao-front-end');
    
   const pageData = await page.evaluate(() => {
      return {
        title: document.querySelector('.formacao-headline-titulo').innerText,
        subtitle: document.querySelector('.formacao-headline-subtitulo').innerHTML,
      };
    });
  
    await browser.close();
  
    res.send({
      "id": 33082,
      
      "title": pageData.title,
      "subtitle": pageData.subtitle,
      
    })
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor tá rolando em http://localhost:3000`);
});

// (async () => {

// })();
