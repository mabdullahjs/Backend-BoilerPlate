const Student = require("../models/student");
const mongoose = require("mongoose");

// post reStudentt of add Students

const addStudent = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    contact
  } = req.body;
  const student = await Student.create({
    firstName,
    lastName,
    email,
    password,
    contact
  });
  res.json({ mssg: "student added successfully" });
};

//Get reStudentt of all Students

const getStudent = async (req, res) => {
  const student = await Student.find({});
  res.json(student);
};

//Get reStudentt of single Students
const getOneStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "No such student" });
  }
  const student = await Student.findById(id);
  res.json(student);
};

// // delete Student

// const deleteStudent = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.json({ error: "No such Student" });
//   }

//   const Students = await Student.findOneAndDelete({ _id: id });

//   if (!Students) {
//     return res.json({ error: "No such Student" });
//   }

//   res.json(Students);
// };

// //delete many Students

// const deleteMore = async (req, res) => {
//   const { deleteMany } = req.body;
//   try {
//     const Students = await Student.deleteMany({ _id: { $in: deleteMany } });
//     res.json("Student deleted successfully");
//   } catch (err) {
//     res.json(err);
//   }
// };

// // update Student

// const updateStudent = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.json({ error: "No such Student" });
//   }

//   const Students = await Student.findOneAndUpdate(
//     { _id: id },
//     {
//       ...req.body,
//     }
//   );

//   if (!Students) {
//     return res.json({ error: "No such Student" });
//   }

//   res.json(Students);
// };

// // Approve Student by user
// const approveStudent = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.json({ error: "No such Student" });
//   }

//   const Students = await Student.findOneAndUpdate(
//     { _id: id },
//     {
//       ...req.body,
//     }
//   );

//   if (!Students) {
//     return res.json({ error: "No such Student" });
//   }

//   res.json(Students);
// };

module.exports = {
  getOneStudent,
  getStudent,
  addStudent
};
