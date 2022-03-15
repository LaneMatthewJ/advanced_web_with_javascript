const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "My application's API Document",
    description: "This is how you use my application!",
    termsOfService: "Nah",
    contact: {
      name: "Matt Lane",
      email: "mjlny2@umsl.edu",
      url: "www.google.com/mattlane",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  paths: {
    "/office": {
      get: {
        description: "GET THE OFFICE CHARACTERS",
        responses: {
          "200": {
            description: "200 - ok - got the characters",
            content: {
              "application/json": {
                example: {
                  "Michael Scott": "Steve Carell",
                  "Dwight Schrute": "Rainn Wilson",
                  "Jim Halpert": "John Krasinski",
                  "Pam Beesly": "Jenna Fischer",
                  "Ryan Howard": "B.J. Novak",
                  "Andy Bernard": "Ed Helms",
                  "Robert California": "James Spader",
                  "Stanley Hudson": "Leslie David Baker",
                  "Kevin Malone": "Brian Baumgartner",
                  "Meredith Palmer": "Kate Flannery",
                  "Angela Martin": "Angela Kinsey",
                  "Oscar Martinez": "Oscar Nunez",
                  "Phyllis Lapin": "Phyllis Smith",
                  "Roy Anderson": "David Denman",
                  "Jan Levinson": "Melora Hardin",
                  "Kelly Kapoor": "Mindy Kaling",
                  "Toby Flenderson": "Paul Lieberstein",
                  "Creed Bratton": "Creed Bratton",
                  "Darryl Philbin": "Craig Robinson",
                  "Erin Hannon": "Ellie Kemper",
                  "Gabe Lewis": "Zach Woods",
                  "Holly Flax": "Amy Ryan",
                },
              },
            },
          },
        },
      },
    },
    "/parksAndRec": {
      post: {
        summary: "Get multiple characters back based on their character names",
        consumes: "application/json",
        produces: "application/json",
        requestBody: {
          description: "an array of names to send",
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "string",
                  example: "Ann Perkins",
                },
              },
            },
          },
        },

        responses: {
          "200": {
            description: "A response with the desired characters and actors",
          },
        },
      },
    },
  },
};

module.exports = swaggerDocument;
