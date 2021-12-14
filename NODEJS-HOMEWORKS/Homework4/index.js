const fs = require("fs");
//Node.js FS Modülü kullanarak CRUD işlemleri

//employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
fs.writeFile(
  "employees.json",
  '{ "name": "Employee 1 Name", "salary": 2000 }',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("dosya basşarılı bir şekilde oluşturuldu");
  }
);

//Bu veriyi okuyalım. (READ)
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("dosya okundu");
});

//Bu veriyi güncelleyelim.
fs.appendFile(
  "employees.json",
  '\n { "name": "Employee 2 Name", "salary": 3000 }',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("yeni veri eklendi");
  }
);

//Dosyayı silelim.
fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  console.log("dosya silindi");
});
