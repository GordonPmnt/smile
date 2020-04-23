const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');

const category = "blagues-courtes/blagues-de-beauf/"
const pages = 35

const scrapper = async (category, pages) => {
    let data = [];
    let id = 0;

    for(let page=1; page<=pages; page++) {
        await JSDOM.fromURL(`https://jokes-de-papa.com/${category}?quotes_page=${page}`)
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
            
                data.push(...jokes.map(
                    joke => {
                        id += 1;
                        return {
                            id,
                            joke,
                        };
                    }
                ));
    
            })
            .catch(
                err => console.log(err.message)
            )
        ;
    }
    return data;
};

scrapper(category, pages).then(
    data => {
        fs.writeFileSync(
            './src/back/data/redneckJokes.json', 
            JSON.stringify(data), 
            err => { if (err) throw err }
        )
        console.log('Redneck jokes generated')
    }
);

