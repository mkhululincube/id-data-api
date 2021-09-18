module.exports = {
  // host: process.env.HOST || "localhost",
  // user: process.env.USER || "root",
  // password: process.env.PASSWORD || "",
  // db: process.env.DB || "yos_db"
  // host: "localhost",
  // user: "root",
  // password: "",
  // db: "yospaza_sa",
  host: "ec2-52-2-118-38.compute-1.amazonaws.com",
  user: "vfeyljacegxgxe",
  port: 5432,
  password: "58edde81edf90f628644aa7bc794e037702d98d59fa318eb35e421ff8dadd02e",
  db: "d3ls2rr436eem7"
};



// Database
// d3ls2rr436eem7
// User
// vfeyljacegxgxe
// Port
// 5432
// Password
// 58edde81edf90f628644aa7bc794e037702d98d59fa318eb35e421ff8dadd02e
// URI
// postgres://vfeyljacegxgxe:58edde81edf90f628644aa7bc794e037702d98d59fa318eb35e421ff8dadd02e@ec2-52-2-118-38.compute-1.amazonaws.com:5432/d3ls2rr436eem7
// Heroku CLI
// heroku pg:psql postgresql-concave-16294 --app id-data-api


// DB 2


/* PRODUCTION */
// mysql://bdb4a3c0d7a576:531b08ce@us-cdbr-east-05.cleardb.net/heroku_fb45cbbcecaecab?reconnect=true

// const config = {
// production : { 
// HOST: "us-cdbr-east-05.cleardb.net",
// USER: "bdb4a3c0d7a576",
// PASSWORD: "531b08ce",
// DB: "heroku_fb45cbbcecaecab"
// },
// default: {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "",
//   DB: "yos_db"
// } 
// }

// exports.get = function get(env){
//   return config[env] || config.default
// }
