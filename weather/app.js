// const axios = require("axios");

// axios
//   .get(
//     "http://api.weatherstack.com/current?access_key=cbeadaa2b65c459556f30f582f2eb0d0&query=New%20York"
//   )
//   .then(function (response) {
//     console.log(response.data.current);
//   })
//   .catch((error) => {
//     console.log(error.info || 'error');
//   });

// const geoCode = (city, callback) => {
//   setTimeout(() => {
//     const data = {
//       long: 0,
//       lat: 0,
//     };
//     callback(data);
//   }, 1000);
// };

// geoCode("Delhi", (data) => {
//   console.log(data);
// });

var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://google-search3.p.rapidapi.com/api/v1/serp/',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-key': 'f962e9dcb4mshf5671dc6e83f692p1f6777jsn76539ab78f7f',
    'x-rapidapi-host': 'google-search3.p.rapidapi.com'
  },
  data: {query: 'q=samsung&num=50&lr=lang_id&cr=ID', website: 'https://www.tokopedia.com/find/samsung'}
};
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});