const sql = require("../config/db");

const User = function(user) {
  this.email = user.email;
  this.name = user.name;
  this.city = user.city;
  this.age = user.age;
  this.someNote = user.someNote;
  this.data_hash = user.data_hash;
};

// Creating user and saving in our database

User.create = (newUser, result) => {
  sql.query("INSERT INTO citizens SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }
    console.log("user created", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};
 
 // Fetch users from our database

User.getAll = (pagination, result) => {
  const perPage = pagination.perPage;
  const pageNum = pagination.pageNum;
  const previousPage = pageNum - 1;
  const nextPage = pageNum + 1;
  const offset  = pageNum > 1 ? previousPage * perPage : 0;
console.log(offset);
  sql.query(`SELECT count(*) as TotalCount from citizens`,
  (err, res) => {

    const totalCount = res[0].totalCount;

    const numPages = Math.ceil(totalCount / perPage);

  sql.query(`SELECT * FROM citizens LIMIT ${perPage} OFFSET ${offset}`, 
  
  (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("citizens: ", res);
    result(null, res);
  });
});

};
 
module.exports = User;
