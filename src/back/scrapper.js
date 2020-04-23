const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');

const url = "https://jokes-de-papa.com/blagues-courtes/blagues-de-beauf/"
const param = "?quotes_page=1"

JSDOM.fromURL(url)
    .then(dom => {
        const body = dom.window.document.body;
        const quotes = body.getElementsByTagName('blockquote');

        const jokes = [...quotes]
            .map(
                quote => quote.textContent
            )
            .filter(
                quote => quote.slice(0, 19) !== 'Vous aimez les jeux'
            )
            .map(
                quote => {
                    let joke = ''
                    for(let j=0; j<quote.length; j++) {
                        if(quote.slice(j, j+8).includes('— @Jokes')) {
                            break
                        }
                        joke += quote[j];
                    }
                    return joke
                }
            )
            .filter(
                quote => quote.slice(0, 4) !== 'eval'
            )
        ;
    
        const data = jokes.map(
            (joke, id) => {
                return {
                    id,
                    joke,
                };
            }
        );

        let jsonString = JSON.stringify(data);
        fs.writeFileSync(
            './src/back/data/redneckJokes.json', 
            jsonString, 
            err => { if (err) throw err }
        );
        
        console.log('Redneck jokes generated')

    })
    .catch(
        err => console.log(err.message)
    )