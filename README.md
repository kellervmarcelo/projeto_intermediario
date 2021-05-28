# Projeto Intermediário 

### Endpoint 1 - Tiobe Index (/api/langs)

O primeiro endpoint se refere a um webscrapping, utilizando o puppeteer, que retira os dados 
do site do Tiobe Index (https://www.tiobe.com/tiobe-index/), pegando as linguagens a porcentagem de utilização e
a posição da linguagem no ranking da Tiobe
As repostas são em json 
```
{
    position,
    lang, 
    percent,
    timestamp
}
```
### Endpoint 2 - Billboard hot 100 (/api/charts)
O segundo endpoint se refere a um webscrapping que retira os dados, utilizando o puppeteer,
do site da Billboard (https://www.billboard.com/charts/hot-100), pegando a música, artista e timestamp de quando foi feita a requisição
As repostas são em json 
```
{
    position,
    song, 
    artist,
    timestamp
}
```
## Bibliotecas adicionais 
### Puppeteer (https://pptr.dev/)
O Puppeteer é uma biblioteca do Node que fornece uma API de para controlar o Chrome ou o Chromium através do Protocolo do DevTools. Através dele é possível fazer o scraping de páginas da web.

[Link para o repositório no github](https://github.com/kellervmarcelo/projeto_intermediario)
[Link para o repositório no heroku](https://trabalho-intermediario-mkv.herokuapp.com/)
