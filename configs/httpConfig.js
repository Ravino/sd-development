"use strict";

module. exports = (app) => {

  return {

    "initialization": function (middlewares) {

      for (const middleware of middlewares) {

        if (typeof middleware === "object") {

          this. initialization (middleware);
          continue;

        }

        app. use (middleware);

      }

    },


    "settings": () => {

      app. set ("view engine", "pug");
      app. set ("views", "frontPublic");

    },


    "middlewares": () => [
      require ("./cookieParser/cookieParser.js") (),
      require ("./bodyParser/bodyParser.js") (),
      require ("./expressFlash/expressFlash.js") (),
      require ("./expressLogger/expressLogger.js") (),
      require ("./expressSession/expressSession.js") (),
      require ("./passport/passport.js") (),
    ],
  };

};
