const express = require('express');
const morgan = require('morgan');

const app = express();  //all the express() function to create an Express application.

app.set('views', './views'); //app.set() method is used to add specific configurations to Express.
app.set('view engine', 'ejs');

app.use(morgan('dev'));  //app.use() method is used to register a middleware function so that it will be executed on each request.

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});
app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});
app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});
app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});


//without using ejs
// app.get('/', (req, res) => { 
//     res.send('Hello From Node.js');
// }); //app.get() method is used to respond to GET HTTP requests

// app.get('/contact', (req, res) => {
//     res.send('The Contact Page');
// });

// app.get('/about', (req, res) => {
//     res.send('The About Page');
// });

// app.get('*', (req, res) => {
//     res.status(404).send('Not Found');
// });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); //app.listen() method to enable the server to listen for requests.






// const server = http.createServer((req, res) => {
    
//     const { url } = req;
//     console.log(url);
//     if(url === '/') {
//         res.end('Hello From Node.js');
//     } else if (url === '/contact') {
//         res.end('The Contact Page');
//     } else if (url === '/about') {
//         res.end('The About Page');
//     } else {
//         res.writeHead(404) //The writeHead() method allows you to write specific data that you want to sendback to the client.
//         res.end('Not Found');
//     }
    
// });
// server.listen(3000, () => {
// console.log('Server running on port 3000');
// });