var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
        title: 'Article one i am Manohar Reddy',
        heading: 'Article One',
        date: 'august 14, 2017',
        content: `
         <p>
            This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.
        </p>
        <p>
            This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.
        </p>
        <p>
            This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.This is my content in my first web page.
        </p>`
},
    'article-two': {
        title: 'Article Two i am Manohar Reddy',
        heading: 'Article Two',
        date: 'august 15, 2017',
        content: `
             <p>
                This is my content in my second web page.
            </p>
            <p>
                This is my content in my secondt web page.
            </p>
            <p>
                This is my content in my second web page.
            </p>`
},
    'article-three': {
        title: 'Article Three i am Manohar Reddy',
        heading: 'Article Three',
        date: 'august 16, 2017',
        content: `
             <p>
                This is my content in my third web page.
            </p>
            <p>
                This is my content in my third web page.
            </p>
            <p>
                This is my content in my third web page.
            </p>`
},
};

function createTemplate (data) {
  var title = data.title;
  var date = data.date;
  var heading = data.heading;
  var content = data.content;

var htmlTemplate =`
<html>
    <head>
        <title>
            ${title}
         </title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="/ui/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
             <div>
               ${content}
             </div>
            </div>
        </body>
    </html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var countet = 0;
app.get('/counter', function (req, res) {
   counter = counter + 1;
   res.send(counter, 'toString()');
});

app.get('/:articleName', function (req,res) {
    //articleName = article-one
    //articles[articleName] = {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD serv
var port = 80; // Use 8080 for local development because you might already have apache running on 80
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
