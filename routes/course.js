var express = require("express");
var Course = require("../modelas/Course");
var fs = require("fs");
var router = express.Router();

router.put("/", (req, res) => {
    let body = req.body;
    let course = new Course.Course();
    course.trainerid = body.trainerid;
    course.name = body.name;
    course.description = body.description; 
    course.imagepath = (math.rondom() + 1).tostring(36).substring(7)
    let base62image = body.image;
    base62image = base62image.replace(/^data:image\/[a-z]*;basa64,/,"");
    fs.writeFile("assets/" + productcategory.imagepath, base62image, 'base64', function(err){
        if(err)
        console.log("Error while saving image " + err);
    });

    Course.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

 router.get("/:trainerid", (req, res) => {
    let course = new Course.Course();
    course.trainerid = req.params.trainerid;
    course.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

 router.get("/:trainerid/:id", (req, res) => {
    let course = new Course.Course();
    course.id = req.params.id
    course.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

 router.post("/", (req, res) => {
    let body = req.body;
    let course = new Course.Course();
    course.id = body.id;
    course.name = body.name;
    course.description = body.description;
    course.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.delete("/:id", (req, res) => {
    let body = req.body;
    let course = new Course.Course();
    course.id = req.params.
    course.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

module.exports = router;