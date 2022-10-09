const express = require("express");
require("./db/conn");
const User = require("./userModel");
const excel = require("exceljs");
var path = require("path");

const app = express();

app.get("/", async (req, res, next) => {
  const users = await User.find({}).select(
    "email firstName lastName userName primaryEmail secondaryEmail dogs active credits registerSuccess country createdAt "
  );
  let workbook = new excel.Workbook(); //creating workbook
  let worksheet = workbook.addWorksheet("Users");

  //  WorkSheet Header
  worksheet.columns = [
    { header: "Id", key: "_id", width: 30 },
    { header: "Firstname", key: "firstName", width: 30 },
    { header: "Lastname", key: "lastName", width: 30 },
    { header: "Username", key: "userName", width: 30 },
    { header: "Email", key: "email", width: 30 },
    { header: "Primaryemail", key: "primaryEmail", width: 30 },
    { header: "Secondoryemail", key: "secondaryEmail", width: 30 },
    { header: "Dogs", key: "dogs", width: 30 },
    { header: "Country", key: "country", width: 30 },
    { header: "Register Success", key: "registerSuccess", width: 30 },
    { header: "Active", key: "active", width: 30 },
    { header: "Credits", key: "credits", width: 30 },
    { header: "CreatedAt", key: "createdAt", width: 30 },
  ]; //creating worksheet
  worksheet.addRows(users);
  
  try {
    await workbook.xlsx.writeFile("users.xlsx").then(function () {
      console.log("file saved!");
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    // console.log(workbook);
  } catch (error) {
    console.log(error);
  }
  var options = {
    root: path.join(__dirname),
  };
  var fileName = "users.xlsx";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

// app.get('/get', async (req, res) => {
//   res.sendFile('');
// });

app.listen(4000, () => {
  console.log("server started on port 4000");
});
