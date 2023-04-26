var Database = require("./database");

class Course {
  constructor() {
    this.id = 0;
    this.Trainerid = 0;
    this.name = "";
    this.description = "";
    this.imagepath = "";

    this.query = "";
    this.db = new Database()
  }

  save = () => {
    this.query = "INSERT INTO course(trainerid, name, description, imagepath)";
    this.query +=
      "VALUES(" +
      this.trainerid +
      ", '" +
      this.name +
      "', '" +
      this.description +
      "'  '" + this.imagepath + "')";

    console.log("query : " + this.query);
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        if (err)

          reject(err);

        else
          resolve(result);

      });

    });
  }



  list = () => {
    this.query = "SELECT *FROM courses WHERE trainerid =" + this.Trainerid + " ORDER BY name";
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        if (err)
          reject(err);
        else
          resolve(result);

      })

    });
  }



  get = () => {
    this.query = "INSERT INTO courses WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        if (err)

          reject(err);

        else
          resolve(result);

      });

    });
  }

  

  update = () => {
    this.query = "UPDATE courses ";
    this.query += "SET name  = '" + this.name + "',";
    this.query += "description  = '" + this.description + "',";
    this.query += "WHERE id =" + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        if (err)

          reject(err);

        else
          resolve(result);

      });

    });
  }


  delete = () => {
    this.query = "DELETE FROM courses WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        if (err)

          reject(err);

        else
          resolve(result);

      })

    });
  }
}

module.exports = {
  Course: Course
}