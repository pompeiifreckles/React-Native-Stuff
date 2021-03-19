const fetch = require('node-fetch')

fetch('https://www.omdbapi.com/?apikey=d0afcd37&s=piku')
	.then(response => response.json())
	.then( data => data['Search'].map(obj => console.log(obj['Title'] + " " + obj['Year']) ) )
	.catch(err => console.log(err))
