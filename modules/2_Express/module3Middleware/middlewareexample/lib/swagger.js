const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "My applicationo's API Document",
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
        description: "Gets all the office characters",
        responses: {
          "200": {
            description: "A list of the office characters",
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
        description: "Get specific actors based on their character name",
        responses: {
          "200": {
            description: "A list of the office characters",
            parameters: [
              {
                name: "body",
                in: "body",
                description: "Material IDs",
                required: true,
                schema: {
                  type: "object",
                  properties: {
                    events: {
                      type: "array",
                      description:
                        "A list of event names desired for status report responses.",

                      items: {
                        type: "array",
                        description: "Single Events or Stack Events",
                        items: {
                          type: "Ann Perkins",
                          description: "Events",
                        },
                      },
                    },
                  },
                },
              },
            ],
            content: {
              "application/json": {
                example: [
                  {
                    character: "Leslie Knope",
                    actor: "Amy Poehler",
                  },
                  {
                    character: "Tom Haverford",
                    actor: "Aziz Ansari",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
};

module.exports = swaggerDocument;
