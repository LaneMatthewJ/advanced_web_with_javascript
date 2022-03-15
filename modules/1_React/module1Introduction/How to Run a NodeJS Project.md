# How to Run a NodeJS Project

It's not always apparent how to run a nodejs project. When running a singular file with the node engine, you simply only type: 

```bash
node filename.js
```

However, when running an entire application, things are slightly more difficult. 



## package.json and scripts:

When you want to run a specific node project, you'll need to first look into the `package.json`.  Unless the project you've downloaded is a utility module (we'll cover those later), you'll likely see that inside the module, there exists a `scripts` key. 

```json
{
  "name": "introduction",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "mdx-deck deck.mdx",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Matt Lane <mjlane@monsanto.com>",
  "license": "ISC",
  "dependencies": {
    "mdx-deck": "^3.0.13"
  }
}
```



Notice that the `"scripts"` key contains an object, with two subsequent keys, `"start"` and `"test"`.  `"test"` has only a sentence in it, but `"start" ` has an actual command. To access this script, in the command line, you need to run: 

```bash
npm run start
```

This will run the `"start"` script. This is how to start most node applications. Because this is JSON, however, any script name that you type in the `"scripts"` object will be an available option. 

Running `npm run start` is how you will be able to access the slides for all of our notes. 