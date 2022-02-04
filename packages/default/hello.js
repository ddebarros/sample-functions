var mysql = require('mysql');

function main(args) {
  var con = mysql.createConnection(process.env.DB_URL)
  con.connect(function (err) {
    if (err) throw err;
    con.query("SHOW tables", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  let name = args.name || 'stranger'
  let greeting = 'Hello ' + '!'
  console.log(greeting)
  return {"body": greeting}
}
