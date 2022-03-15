# Databases and Persistence

Up to now we've been either getting data from hard coded data in a file or from another service via network calls. This is fine, but storing our own data can be helpful! This is where databases come in. There are a ton of options for storing data not only in types of databases (such as document stores versus relational databases), but also database services. For the sake of easiness (and something new), we're going to use MongoDB, a document store! 



### MongoDB

Mongo is a document based database that is extremely easy to use! We're going to download and work with a local instance, but if you are interested, it is possible to set up a cloud based mongo instance via their website! In order to install mongo, follow the [installation guide](https://docs.mongodb.com/manual/installation/) in their documentation. 

If you are running a windows machine the below steps may be necessary (Thank you Duc): 

1. Once you install your mongodb, open Control Panel > 
2. Make sure you in View By: Category > 
3. Click on [System and Security] > 
4. Click on [System] > 
5. On left side, click on [Advanced system settings] > 
6. On the bottom, click on [Environment Variables...] > 
7. Look for PATH variable and if you don't have one, just create one > 
8. EDIT > add this "C:\Program Files\MongoDB\Server\4.2\bin"
9. Open your favorite terminal and type "mongo --version" >

10. If something show up, then you are done)



Once you've installed mongo, go to your terminal and type `mongo --version`, you should see something along the lines of: 

```
➜  ~ mongo --version
MongoDB shell version v4.2.5
git version: 2261279b51ea13df08ae708ff278f0679c59dc32
allocator: system
modules: none
build environment:
    distarch: x86_64
    target_arch: x86_64
```

If you type `mongo` you'll wind up opening a command line interface with mongo. Before we do that, however, let's download some data first. 



**Inserting Datasets**

First, we'll need to download a dataset to our machine. We're going to be using a  [pokemon dataset from github](https://github.com/ATL-WDI-Exercises/mongo-pokemon). Navigate to a directory in your machine and type: 

```bash
git clone https://github.com/ATL-WDI-Exercises/mongo-pokemon.git
cd mongo-pokemon
```

Once inside the mongo-pokemon directory, take a quick look at the `seed.json` file. This is the data we'll be loading into our database. It's nothing but JSON, and, unsurprisingly, that's how the data will be worked with (i.e. just like how we work with JSON objects). 

To load our data, type: 

```bash
mongoimport -d pokemon -c pokemons --jsonArray < seed.json
```

What we're doing above is importing the seed array (as a json array) into the collection `pokemons` inside of the database `pokemon`. 



**Viewing the Data**

Inserting data is fine and dandy, but actually viewing it within your database is also nice! First, we'll need to open mongo via our command line, so go to your command line and type: 

```bash
mongo
```

This will open a mongo session. When you type that, it ought to have an output that looks something along the lines of: 

```bash
(base) ➜  mongo
MongoDB shell version v4.2.5
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("ff306c58-6817-4c8a-a39c-b5c6f2ad46d1") }
MongoDB server version: 4.2.5
>
```

You may also have some warnings about deprecations and possibly a message or two about getting a cloud instance. You can ignore those for now! One thing that we'll need to note is  `connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb` What we really care about is knowing that initial URL, which we'll need later. For now, just remember, our base url where our database lives is: 

```
mongodb://127.0.0.1:27017
```

In order to access our database, we'll need to choose it! But first, type `help` into your mongo repl: 

```
> help
	db.help()                    help on db methods
	db.mycoll.help()             help on collection methods
	sh.help()                    sharding helpers
	rs.help()                    replica set helpers
	help admin                   administrative help
	help connect                 connecting to a db help
	help keys                    key shortcuts
	help misc                    misc things to know
	help mr                      mapreduce

	show dbs                     show database names
	show collections             show collections in current database
	show users                   show users in current database
	show profile                 show most recent system.profile entries with time >= 1ms
	show logs                    show the accessible logger names
	show log [name]              prints out the last segment of log in memory, 'global' is default
	use <db_name>                set current database
	db.foo.find()                list objects in collection foo
	db.foo.find( { a : 1 } )     list objects in foo where a == 1
	it                           result of the last line evaluated; use to further iterate
	DBQuery.shellBatchSize = x   set default number of items to display on shell
	exit                         quit the mongo shell
> 

```

Here we get a list of options to work with! Now let's use some of these to find our database. In order to do that, type in `show dbs`. This will display all of the database names that we have in our instance: 

```
> show dbs
admin    0.000GB
config   0.000GB
local    0.000GB
pokemon  0.000GB
> 
```

We have our newly added pokemon database at the very bottom! Let's use that, and then look at the collections inside of it: 

```
> use pokemon
switched to db pokemon
> show collections
pokemons
> 
```

In order to access the data, we'll use the syntax `db.<collection_name>.<function>`. To retrieve all of the data, you pass nothing into find, so your query looks like: 

```bash
db.pokemons.find()
```

This will grab everything, but luckily will ask us if we want to continue printing the data (databases can get very big). 

To find a specific pokemon, we search on any key within the dataset! Let's search for Charizard: 

```bash
> db.pokemons.find({name: "Charizard"})
{ "_id" : ObjectId("5e93c8708a0be3ec97f570fc"), "id" : "006", "name" : "Charizard", "img" : "http://img.pokemondb.net/artwork/charizard.jpg", "type" : [ "Fire", "Flying" ], "stats" : { "hp" : "78", "attack" : "84", "defense" : "78", "spattack" : "109", "spdefense" : "85", "speed" : "100" }, "moves" : { "level" : [ { "learnedat" : "", "name" : "dragon claw", "gen" : "V" }, { "learnedat" : "", "name" : "shadow claw", "gen" : "V" }, { "learnedat" : "", "name" : "air slash", "gen" : "V" }, { "learnedat" : "", "name" : "scratch", "gen" : "V" }, { "learnedat" : "", "name" : "growl", "gen" : "V" }, { "learnedat" : "", "name" : "ember", "gen" : "V" }, { "learnedat" : "", "name" : "smokescreen", "gen" : "V" }, { "learnedat" : "7", "name" : "ember", "gen" : "V" }, { "learnedat" : "10", "name" : "smokescreen", "gen" : "V" }, { "learnedat" : "17", "name" : "dragon rage", "gen" : "V" }, { "learnedat" : "21", "name" : "scary face", "gen" : 
....
"method" : "Move Tutor  FRLG" }, { "name" : "mimic", "method" : "Move Tutor  FRLG" } ] }, "damages" : { "normal" : "1", "fire" : "0.5", "water" : "2", "electric" : "2", "grass" : "0.25", "ice" : "1", "fight" : "0.5", "poison" : "1", "ground" : "0", "flying" : "1", "psychic" : "1", "bug" : "0.25", "rock" : "4", "ghost" : "1", "dragon" : "1", "dark" : "1", "steel" : "0.5" }, "misc" : { "sex" : { "male" : 87.5, "female" : "12.5" }, "abilities" : { "normal" : [ "Blaze" ], "hidden" : [ "Solar Power" ] }, "classification" : "flame pokemon", "height" : "5’07”", "weight" : "199.5", "capturerate" : 45, "eggsteps" : "5120", "expgrowth" : "1059860", "happiness" : "70", "evpoints" : [ "3 Sp. Attack Point(s)" ], "fleeflag" : "94", "entreeforestlevel" : "36" } }

```

That's a lot of data! And it's incredibly difficult to read. In order to make it more readable for ourselves, we can tack on a `.pretty()` to our commands: 

```
> db.pokemons.find({name: "Charizard"}).pretty()
{
	"_id" : ObjectId("5e93c8708a0be3ec97f570fc"),
	"id" : "006",
	"name" : "Charizard",
	"img" : "http://img.pokemondb.net/artwork/charizard.jpg",
	"type" : [
		"Fire",
		"Flying"
	],
  ...
		"classification" : "flame pokemon",
		"height" : "5’07”",
		"weight" : "199.5",
		"capturerate" : 45,
		"eggsteps" : "5120",
		"expgrowth" : "1059860",
		"happiness" : "70",
		"evpoints" : [
			"3 Sp. Attack Point(s)"
		],
		"fleeflag" : "94",
		"entreeforestlevel" : "36"
	}
}
```

For the sake of space, you've noticed that we've pared a lot of the data out. Take note that in our JSON that we looked at earlier, there was no `_id` key. That key is a unique identifier for mongo!  You can [create your own unique identifiers](https://docs.mongodb.com/manual/core/index-unique/) as well. 

We could spend an entire week (or more) talking about the intricacies of mongo's system, but knowing the basics for how to view your data within your command line is good enough! If you have any other interest, please [consult the documentation](https://docs.mongodb.com/manual/mongo/)! 



### Working with Mongo in Node:

Having a working database is great, but it doesn't help us if we can't interact with it in our code!  Let's take our code from the previous lecture (middleware) and add on to it! 

First, we need to add a package for us to interact with our database. There are a number of available options, but we're going to use [Mongoose](https://mongoosejs.com/)! Mongoose is robust package that allows for us to quickly and simply interact with our data in our mongo database. 

```bash
npm i mongoose
```

Now that we have mongoose added to our code, we'll need to connect to our database! Let's start by adding mongoose and opening a connection within our our `index.js`: 

```javascript
const express = require("express");
const officeRouter = require("./routes/office/officeRoute");
const parksAndRecRouter = require("./routes/parksAndRec/parksAndRecRoute");

// NEW ROUTE *that doesn't exist yet! 
const xfilesRouter = require("./routes/xfiles/xfilesRoute"); 

const logger = require("./lib/middleware/logger");
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./lib/swagger");
const mongoose = require("mongoose"); 

// New DB Stuffs! 
const mongoURL = "mongodb://127.0.0.1:27017/xfiles";
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const dbConnection = mongoose.connection
dbConnection.on('error', err => console.error(err))
dbConnection.once('open', () => console.log("Connected to db"))


app.use(logger);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use("/office", officeRouter);
app.use("/parksAndRec", parksAndRecRouter);


app.use("/xfiles", xfilesRouter); // NEW ROUTE! 


const port = 3000;
app.listen(port, () => console.log("Now listening on port:", port));
console.log(`Swagger docs at localhost:${port}/api-docs`);

```

In the above code, we're connecting to our database with the IP address of our mongo instance. Tt may look familiar (i.e. almost exactly the same) as the url in the terminal! You might notice the `xfiles` at the end of the `mongoURL` and you guessed it. That's going to be connecting to our `xfiles` database. You definitely guessed that we're going to create a mongo instance for our xfiles data!  In the event that you already have a database named `xfiles` then you'll connect to it, but if you don't, no worries! You've now created one! 

To connect to our database, you'll need to use the `mongoose.connect` function and pass in `mongoURL`. Notice that we're also passing in an object. You don't have to pass anything in now, however, without `useNewUrlParser: true` and `useUnifiedTopology: true`, you will get deprecation warnings (which basically mean that, in the future, you may run into some problems). 

Next we extract our connection to `dbConnection` where we can then add some callback functions to log an error if we run into an error, and also to note when we are connected to our database instance! 

Finally, we want to create a route `/xfiles`. That doesn't exist yet, but let's make it now!  





Now, let's create a brand new route for characters from our favorite show: X-Files! We'll need to create a new directory: `xfiles` and a file in there `xfilesRoute.js`

```
.
├── index.js
├── lib
│   ├── middleware
│   │   ├── bodyParser.js
│   │   └── logger.js
│   └── swagger.js
├── package-lock.json
├── package.json
└── routes
    ├── office
    │   ├── office.js
    │   └── officeRoute.js
    ├── parksAndRec
    │   ├── parksAndRecRoute.js
    │   └── parksNRec.js
    └── xfiles
        └── xfilesRoute.js
```

Let's start with our xfilesRoute.js being nothing more than a quick "hello world" styled file, and then we can add the route in our index: 

`xfilesRoute.js`

```javascript
const express = require("express");
const bodyParser = require("../../lib/middleware/bodyParser");


const sayHello = (req, res) => {
  res.send("The Truth Is Out There")
}


const xfilesRouter = express.Router();

xfilesRouter
  .route("/")
  .get(sayHello);

module.exports = xfilesRouter;
```

So, now when we attempt to call our API's with a `GET` at `localhost:3000/xfiles`, we'll now receive: 

```
"The Truth Is Out There"
```

Now that we have our endpoint set up, let's turn our server into a CRUD app! CRUD stands for `Create`, `Read`, `Update`, and `Delete`, which are all methods we'll want to add to our server so that we can add, read, update, and delete characters from the X-Files! 



**Creating a New Character**

Before we can read, update, or delete a character, we'll need to create one first! And in order to create a character, we'll need to create a new schema and model with Mongoose! Let's start by creating a `models` directory, into which we'll place our `xfilesCharacter` model: 

```
.
├── index.js
├── lib
│   ├── middleware
│   │   ├── bodyParser.js
│   │   └── logger.js
│   └── swagger.js
├── models
│   └── xfilesCharacter.js
├── package-lock.json
├── package.json
└── routes
    ├── office
    │   ├── office.js
    │   └── officeRoute.js
    ├── parksAndRec
    │   ├── parksAndRecRoute.js
    │   └── parksNRec.js
    └── xfiles
        └── xfilesRoute.js
```

`xfilesCharacter.js`: 

```javascript
const mongoose = require('mongoose')

const xfilesCharacterSchema = mongoose.Schema({
  lastname: {
    type: String, 
    required: true,
  }, 
  firstname: {
    type: String, 
    required: true
  }
})

module.exports = mongoose.model("xfilescharaters", xfilesCharacterSchema)
```

In the above code, we've created a schema with mongoose, where we will now be accessing and saving character data (i.e. a required firstname and lastname) defined by the schema. Finally, when we export, we're exporting a model that will be stored in the `xfilescharacters` collection). 

In order to access this in our program, we'll have to import our model, and access it: 

`xfilesRoute.js`: 

```javascript
const express = require("express");
const bodyParser = require("../../lib/middleware/bodyParser");
const xFilesCharacterModel = require('../../models/xfilesCharacter')


const getAllCharacter = async (req, res) => {
  try {
    const results = await xFilesCharacterModel.find()
    res.send(results);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(error);
  }
};

const addXfilesCharacter = async (req, res) => {
  try {

    const xfilesCharacter = new xFilesCharacterModel({
      lastname: req.body.lastname,
      firstname: req.body.firstname
    });

    const result = await xfilesCharacter.save();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(error);
  }
};

const xfilesRouter = express.Router();


xfilesRouter
  .route("/")
  .post(bodyParser.json(), addXfilesCharacter)

module.exports = xfilesRouter;

```

We created the sayHello function just to make sure our route was working, but now we can get rid of it (or keep it if you want to know where the truth is)!  In the above code, we've added a few things! First and foremost, we brought in our `mongoose` model at line 3. We can't really do much without that. 

In the above code, we've added our insert data endpoint! For our first route, we're posting at the basic route as well. Here we actually create a new model (at line 20), and then save it to our database (at line 25): 

![addCharacter](/Users/mjlane/Projects/notes4011/modules/Express/module4databaseConnections/addCharacter.png)

On sending the post with a body similar to that of our schema, we receive an entirely new body with the keys we sent, but with an `_id` and a `__v`. The `_id` is the same as the ` "_id" : ObjectId("5e93c8708a0be3ec97f570fc")` key value pairing we saw with Charizard above! That is just the unique key. The `__v` you can just ignore for now, as it's the `versionKey` property. Now that we've inserted a character, insert another one with the body: 

```json
{
  "lastname" : "Scully", 
  "firstname" : "Dana"
}
```



**Reading Data**

After creating a couple of characters, now let's see if we can retrieve them! Because it's the easier of the two options (if you remember from the pokemon example above), let's see if we can just get everything! 

```javascript
... 

const getAllCharacter = async (req, res) => {
  try {
    const results = await xFilesCharacterModel.find()
    res.send(results);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(error);
  }
};

... 


const xfilesRouter = express.Router();

xfilesRouter
  .route("/")
  .post(bodyParser.json(), addXfilesCharacter)
  .get(getAllCharacter);

module.exports = xfilesRouter;
```

Just like how we used the find in the database repl, we just use the same general idea with our schema! If we use our schema, and call find with no arguments, we'll receive everything! 

![getAll](/Users/mjlane/Projects/notes4011/modules/Express/module4databaseConnections/getAll.png)

For getting a specific character, however, we'll need to pass in a parameter. Let's grab those characters by their last names: 

```javascript
... 

const getXfilesCharacter = async (req, res) => {
  try {
    const results = await xFilesCharacterModel.find({
      lastname: req.params.lastname,
    }).exec();

    res.send(results);
  } catch (error) {
    console.error("error", error);
    res.status(500);
    res.send(error);
  }
};
... 

const xfilesRouter = express.Router();

xfilesRouter
  .route("/")
  .post(bodyParser.json(), addXfilesCharacter)
  .get(getAllCharacters);

xfilesRouter.route("/:lastname").get(getXfilesCharacter);

module.exports = xfilesRouter;

```

![getByLastname](/Users/mjlane/Projects/notes4011/modules/Express/module4databaseConnections/getByLastname.png)



You might be tempted to try to update data by just overwriting something, such as changing `Dana Scully` to `Medical Doctor, Dana Scully`, and you'd be right in wanting to do so (she is a medical doctor, after all), but if you were to attempt to overwrite based entirely off of values that are not the unique `_id`, then you'll only create a new record:

**Overwrite Attempt**:  ![medicalDoctorScullyInsert](/Users/mjlane/Projects/notes4011/modules/Express/module4databaseConnections/medicalDoctorScullyInsert.png)

**Get all:** 

![doubleScully](/Users/mjlane/Projects/notes4011/modules/Express/module4databaseConnections/doubleScully.png)



**Updating Data**

In order to update data, you'll need to find by a specific unique key! Let's write some code so that we can update `Fox Mulder` with his `_id`: 

```javascript
... 


const updateCharacter = async (req, res) => {
  try {
    const id = req.params.id;
    const character = await xfilesCharacterModel.findById(id)
    
    character.set(req.body);
    const result = await character.save();
    res.send(result);
  } catch (error) {
    console.error("error", error);
    res.status(500);
    res.send(error);
  }
};

...

const xfilesRouter = express.Router();

xfilesRouter
  .route("/")
  .post(bodyParser.json(), addXfilesCharacter)
  .get(getAllCharacter);

xfilesRouter
  .route("/:id")
  .put(bodyParser.json(), updateCharacter)
  
xfilesRouter.route("/:lastname").get(getXfilesCharacters);

module.exports = xfilesRouter;

```

There are multiple things happening in the above code! First, notice that we're grabbing an ID out of the params, and then using `XfilesCharacter.findById(id)`. There, we're grabbing an object that specifically matches on only that ID (given that it's a unique identifier). Then, we're using the character we assigned it to, and using `character.set(req.body)`.  This is where we're passing in our new and improved body to be saved over our previous data, which we then do with the following line of `character.save()`. 

Additionally, take note of the router we're using. We're passing in a parameter, but more importantly, we're using `put`, a common http method to denote that we're updating data. 

![updateMulder](/Users/mjlane/Projects/notes4011/modules/Express/module4databaseConnections/updateMulder.png)

**Removing Data**

Often times you'll need to remove data from a given database, this can be for any number of reasons (maybe you accidentally added two of the same characters?). For us, we're going to remove our characters with the same route as the update: 

```javascript
... 

const removeCharacter = async (req, res) => {
  try {
    const id = req.params.id;
    const character = await xFilesCharacterModel.findById(id)
    const result = await character.remove()
    console.log("Results? ", result)
    
    res.send(result);
  } catch (error) {

    console.error("error", error);
    res.status(500);
    res.send(error);
  }
};

const xfilesRouter = express.Router();

xfilesRouter
  .route("/")
  .post(bodyParser.json(), addXfilesCharacter)
  .get(getAllCharacter);

xfilesRouter
  .route("/:id")
  .put(bodyParser.json(), updateCharacter)
  .delete(removeCharacter);

xfilesRouter.route("/:lastname").get(getXfilesCharacter);

module.exports = xfilesRouter;

```

Here, we take in the id, and then choose the `deleteOne` method, and pass in the `{ _id: id }`. Let's try removing our duplicate Scully! 

![delete](/Users/mjlane/Projects/notes4011/modules/Express/module4databaseConnections/delete.png)



![getAllAfterDelete](/Users/mjlane/Projects/notes4011/modules/Express/module4databaseConnections/getAllAfterDelete.png)





There are a ton of ways to expand further on Mongo, but for the time being (and because this isn't a databases class), this is more than enough to know for how to store and retrieve information! 


