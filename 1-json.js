// const fs = require("fs");
// const book = {
//   title: "Title",
//   body: "body",
// };

// const bookJson = JSON.stringify(book);

// fs.writeFileSync('one.json', bookJson);

// const data = JSON.parse(fs.readFileSync('one.json').toString());
// console.log(data.title);

const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=cbeadaa2b65c459556f30f582f2eb0d0&query=New%20York";

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunks) => {
    data += chunks.toString();
  });
  response.on("end", () => {
    console.log(JSON.parse(data));
  });
});

request.on("error", (error) => {
  console.log(error);
});

request.end();
