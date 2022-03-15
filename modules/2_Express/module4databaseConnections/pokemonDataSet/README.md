# Mongo Pokemon Dataset

I have forked [ALT-WDI's](https://github.com/ATL-WDI-Exercises) excellent MongoDB lab repository ([mongo-pokemon](https://github.com/ATL-WDI-Exercises/mongo-pokemon)).

I am referencing the mongo-pokemon repo's dataset as of 04/19/2019. The post that I will be using this in will be static in nature and therefore I'm saving this dataset in my own GitHub to preserve it's state.

![gif of terminal showing mongodb being loaded with pokemon dataset](https://media.giphy.com/media/kbXJ7f8lW9f5czPKHF/giphy.gif)

Instructions for loading in MongoDB:

* Clone this repository to your local device
* Start your MongoDB instance
* Navigate to `/pokemonData/pokemon.json` in your terminal
* Run the following command:
`mongoimport -d pokemon -c pokemons --jsonArray < pokemon.json`
* Launch your MongoDB shell by running `mongo` in your terminal
* Run the following commands to confirm the data was loaded:
&nbsp;&nbsp;&nbsp;&nbsp;` show dbs `
&nbsp;&nbsp;&nbsp;&nbsp;` use pokemon `
&nbsp;&nbsp;&nbsp;&nbsp;` show collections `
&nbsp;&nbsp;&nbsp;&nbsp;` db.pokemons.find().pretty() ` 

**Useful Cleanup Command**
```
mongo --quiet --eval 'db.getMongo().getDBNames().forEach(function(i){db.getSiblingDB(i).dropDatabase()})'
```

source: [answer by kev on MongoDB drop every database](https://stackoverflow.com/a/16908246)
