import express from "express";
import { resolve } from "path";
import fetch from "node-fetch";

const server = express();
const url = 'https://api.fivespark.com/docs/?access_token=-tfhE-ZUueSF8jxhSMgpTNr2k2yum-8f#';

server.set("view engine", "ejs");
server.set("views", "./views");
server.set("port", process.env.PORT || 8000);

server.use(express.static(resolve('public')));

server.listen(server.get("port"), () => {
  console.log(`Application started on http://localhost:${server.get("port")}`);
});
server.get('/', (_request, response) => {
  let itemUrl = url + '/ItemsActivities/readItemsActivities';

  dataFetch(itemUrl).then((data) => {
    response.render('index', { data: data });
  });
});

async function dataFetch(url) {
  const data = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
  return data;
}
