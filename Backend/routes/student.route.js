const router = require("express").Router();
const Student = require("../model/student.model");

router.post("/", async (req, res) => {
  try {
    // Create new student
    let student = new Student({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      subject: req.body.subject,
      nationalID: req.body.nationalID,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
    });
    // Save student
    await student.save();
    res.json(student);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let student = await Student.find();
    res.json(student);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find student by id
    let student = await Student.findById(req.params.id);

    // Delete student from db
    await student.remove();
    res.json(student);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let student = await Student.findById(req.params.id);
    const data = {
      firstName: req.body.firstName || student.firstName,
      lastName: req.body.lastName || student.lastName,
      dateOfBirth: req.body.dateOfBirth || student.dateOfBirth,
      subject: req.body.subject || student.subject,
      nationalID: req.body.nationalID || student.nationalID,
      mobileNumber: req.body.mobileNumber || student.mobileNumber,
      email: req.body.email || student.email,
    };
    student = await Student.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(student);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find student by id
    let student = await Student.findById(req.params.id);
    res.json(student);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
