const path = require('path');
const express = require('express');

const app = express();
const puclicDirPath = path.join(__dirname, '../public');
// const helpPath = path.join(puclicDirPath, '/help.html');
// const aboutPath = path.join(puclicDirPath, '/about.html');

app.use(express.static(puclicDirPath));

// app.get('', (req, res) => {
//   res.send('Hello!');
// });

// app.use('/about',express.static(helpPath));

// app.use('/about',express.static(aboutPath));

// app.get('/about', (req, res) => {
//   res.send('About!');
// });

// app.get('/help', (req, res) => {
//   res.send({
//     name: 'HB'
//   });
// });

app.get('/weather', (req, res) => {
  res.send('<h1>Weather!<h1>');
})

app.listen(3000, () => {
    console.log('running at 3000');
});