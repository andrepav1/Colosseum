const express = require("express");
const bodyParser = require("body-parser");

const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./modules/typeDefs");
const resolvers = require("./modules/resolvers");

const { MovieDb } = require("moviedb-promise");
const moviedb = new MovieDb("c781a3dabef946805a961db3b7b916eb");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);

const getYear = (date) =>
  !date || date.length == 0 ? null : " (" + date.substring(0, 4) + ")";

app.get("/autocompletions", async (req, res, err) => {
  // console.log(req.query);
  const { results } = await moviedb
    .searchMulti({ query: req.query.text, include_adult: true })
    .catch(console.error);
  res.send(
    results.map(
      ({ name, title, media_type, id, release_date, first_air_date }) => {
        switch (media_type) {
          case "tv":
            return { value: name + getYear(first_air_date), media_type, id };
          case "person":
            return { value: name, media_type, id };
          case "movie":
            return { value: title + getYear(release_date), media_type, id };
        }
      }
    )
  );
});
