const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');

const url = "https://jokes-de-papa.com/blagues-courtes/blagues-de-beauf/?quotes_page=1"

JSDOM.fromURL(url)
    .then(dom => {
        const body = dom.window.document.body;
        const quotes = body.getElementsByTagName('blockquote');
        const jokes = [...quotes].map(quote => quote.textContent);

        const data = jokes.map(
            (joke, id) => {
                return {
                    id,
                    joke,
                };
            }
        )

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