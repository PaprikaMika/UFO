const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const port = 3000;
const app = express();

//STEP 1: Setting up the boilerplate and routing
app.get('/wikipedia', function(req, res) {

  var url = 'https://en.wikipedia.org/wiki/Greek_mythology';

  request(url, function(error, response, html) {
    if (!error) {

      var $ = cheerio.load(html);
      var data = {
        articleTitle: '',
        articleImg: '',
        articleParagraph: ''

      }
      $('#content').filter(function() {
        data.articleTitle = $(this).find('#firstHeading').text();
        data.articleImg = $(this).find('img').first().attr('src');
        data.articleParagraph = $(this).find('p').first().text();

      });

      //All the web scraping magic will happen here
      res.send(data);

      fs.writeFile('wiki-output.js', JSON.stringify(data, null, 4), function(error) {
        console.log('file written on hard drive!');

      })
    }
  });

});

app.get('/UFO', function(req, res) {

  var url = 'https://www.ufocasebook.com/bestufopictures.html';

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var data = []

      $('tbody').filter(function() {
        $('tr').filter(function() {
          $('td').filter(function() {
            $('center').filter(function() {
              $(this).find('center').each(function(i, elem) {
                data[i] = "'" + $(this).find('a').find('img').attr('src') + "'";
              })
            })
          })
        })
      });

      //All the web scraping magic will happen here
      res.send(data);

      fs.writeFile('ufo-output.js', function(error) {
        console.log('file written on hard drive!');

      })
    }
  });

});


app.get('/UFO2', function(req, res) {

  var url = 'https://www.ufocasebook.com/bestufopictures2.html';

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var data = []

      $('tbody').filter(function() {
        $('tr').filter(function() {
          $('td').filter(function() {
            $('center').filter(function() {
              $(this).find('center').each(function(i, elem) {
                data[i] = "'" + $(this).find('a').find('img').attr('src') + "'";
              })
            })
          })
        })
      });

      //All the web scraping magic will happen here
      res.send(data);

      fs.writeFile('ufo-output2.js', 'var ufo_list2 = [' + data + ']', function(error) {
        console.log('file written on hard drive!');

      })
    }
  });

});

app.get('/UFO3', function(req, res) {

  var url = 'https://www.ufocasebook.com/bestufopictures3.html';

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var data = []

      $('tbody').filter(function() {
        $('tr').filter(function() {
          $('td').filter(function() {
            $('center').filter(function() {
              $(this).find('center').each(function(i, elem) {
                data[i] = "'" + $(this).find('a').find('img').attr('src') + "'";
              })
            })
          })
        })
      });

      //All the web scraping magic will happen here
      res.send(data);

      fs.writeFile('ufo-output3.js', 'var ufo_list3 = [' + data + ']', function(error) {
        console.log('file written on hard drive!');

      })
    }
  });

});

app.get('/UFO4', function(req, res) {

  var url = 'https://www.ufocasebook.com/bestufopictures4.html';

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var data = []

      $('tbody').filter(function() {
        $('tr').filter(function() {
          $('td').filter(function() {
            $('center').filter(function() {
              $(this).find('center').each(function(i, elem) {
                data[i] = "'" + $(this).find('a').find('img').attr('src') + "'";
              })
            })
          })
        })
      });

      //All the web scraping magic will happen here
      res.send(data);

      fs.writeFile('ufo-output4.js', 'var ufo_list4 = [' + data + ']', function(error) {
        console.log('file written on hard drive!');

      })
    }
  });
});


app.get('/UFO5', function(req, res) {

  var url = 'https://www.ufocasebook.com/bestufopictures5.html';

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var data = []

      $('tbody').filter(function() {
        $('tr').filter(function() {
          $('td').filter(function() {
            $('center').filter(function() {
              $(this).find('center').each(function(i, elem) {
                data[i] = "'" + $(this).find('a').find('img').attr('src') + "'";
              })
            })
          })
        })
      });

      //All the web scraping magic will happen here
      res.send(data);

      fs.writeFile('ufo-output5.js', 'var ufo_list5 = [' + data + ']', function(error) {
        console.log('file written on hard drive!');

      })
    }
  });

});

app.get('/UFO6', function(req, res) {

  var url = 'https://www.ufocasebook.com/bestufopictures6.html';

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var data = []

      $('tbody').filter(function() {
        $('tr').filter(function() {
          $('td').filter(function() {
            $('center').filter(function() {
              $(this).find('center').each(function(i, elem) {
                data[i] = "'" + $(this).find('a').find('img').attr('src') + "'";
              })
            })
          })
        })
      });

      //All the web scraping magic will happen here
      res.send(data);

      fs.writeFile('ufo-output6.js', 'var ufo_list6 = [' + data + ']', function(error) {
        console.log('file written on hard drive!');

      })
    }
  });

});

app.get('/UFO7', function(req, res) {

  var url = 'https://www.ufocasebook.com/bestufopictures7.html';

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var data = []

      $('tbody').filter(function() {
        $('tr').filter(function() {
          $('td').filter(function() {
            $('center').filter(function() {
              $(this).find('center').each(function(i, elem) {
                data[i] = "'" + $(this).find('a').find('img').attr('src') + "'";
              })
            })
          })
        })
      });

      //All the web scraping magic will happen here
      res.send(data);

      fs.writeFile('ufo-output7.js', 'var ufo_list7 = [' + data + ']', function(error) {
        console.log('file written on hard drive!');

      })
    }
  });

});

app.get('/UFO8', function(req, res) {

  var url = 'https://www.ufocasebook.com/bestufopictures8.html';

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var data = []

      $('tbody').filter(function() {
        $('tr').filter(function() {
          $('td').filter(function() {
            $('center').filter(function() {
              $(this).find('center').each(function(i, elem) {
                data[i] = "'" + $(this).find('a').find('img').attr('src') + "'";
              })
            })
          })
        })
      });

      //All the web scraping magic will happen here
      res.send(data);

      fs.writeFile('ufo-output8.js', 'var ufo_list8 = [' + data + ']', function(error) {
        console.log('file written on hard drive!');

      })
    }
  });

});

app.get('/UFO9', function(req, res) {

  var url = 'https://www.ufocasebook.com/bestufopictures8.html';

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var data = []

      $('tbody').filter(function() {
        $('tr').filter(function() {
          $('td').filter(function() {
            $('center').filter(function() {
              $(this).find('center').each(function(i, elem) {
                data[i] = "'" + $(this).find('a').find('img').attr('src') + "'";
              })
            })
          })
        })
      });

      //All the web scraping magic will happen here
      res.send(data);

      fs.writeFile('ufo-output9.js', 'var ufo_list9 = [' + data + ']', function(error) {
        console.log('file written on hard drive!');

      })
    }
  });

});


app.get('/UFO10', function(req, res) {

  var url = 'https://www.ufocasebook.com/bestufopictures8.html';

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var data = []

      $('tbody').filter(function() {
        $('tr').filter(function() {
          $('td').filter(function() {
            $('center').filter(function() {
              $(this).find('center').each(function(i, elem) {
                data[i] = "'" + $(this).find('a').find('img').attr('src') + "'";
              })
            })
          })
        })
      });

      //All the web scraping magic will happen here
      res.send(data);

      fs.writeFile('ufo-output10.js', 'var ufo_list10 = [' + data + ']', function(error) {
        console.log('file written on hard drive!');

      })
    }
  });

});




app.listen(port);
console.log('Magic happens on port ' + port);

exports = module.exports = app;
