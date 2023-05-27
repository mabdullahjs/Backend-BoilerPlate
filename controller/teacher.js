const Teacher = require("../models/teacher");
const mongoose = require("mongoose");

// post reTeachert of add Teachers

const addTeacher = async (req, res) => {
    const {
        name,
        course,
        contact
    } = req.body;
    const teacher = await Teacher.create({
        name,
        course,
        contact
    });
    res.json({ mssg: "teacher added successfully" });
};

//Get reTeachert of all Teachers

const getTeacher = async (req, res) => {
    const teacher = await Teacher.find({});
    res.json(teacher);
};

//Get reTeachert of single Teachers
const getOneTeacher = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ error: "No such teacher" });
    }
    const teacher = await Teacher.findById(id);
    res.json(teacher);
};

// // delete Teacher

// const deleteTeacher = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.json({ error: "No such Teacher" });
//   }

//   const Teachers = await Teacher.findOneAndDelete({ _id: id });

//   if (!Teachers) {
//     return res.json({ error: "No such Teacher" });
//   }

//   res.json(Teachers);
// };

// //delete many Teachers

// const deleteMore = async (req, res) => {
//   const { deleteMany } = req.body;
//   try {
//     const Teachers = await Teacher.deleteMany({ _id: { $in: deleteMany } });
//     res.json("Teacher deleted successfully");
//   } catch (err) {
//     res.json(err);
//   }
// };

// // update Teacher

// const updateTeacher = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.json({ error: "No such Teacher" });
//   }

//   const Teachers = await Teacher.findOneAndUpdate(
//     { _id: id },
//     {
//       ...req.body,
//     }
//   );

//   if (!Teachers) {
//     return res.json({ error: "No such Teacher" });
//   }

//   res.json(Teachers);
// };

// // Approve Teacher by user
// const approveTeacher = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.json({ error: "No such Teacher" });
//   }

//   const Teachers = await Teacher.findOneAndUpdate(
//     { _id: id },
//     {
//       ...req.body,
//     }
//   );

//   if (!Teachers) {
//     return res.json({ error: "No such Teacher" });
//   }

//   res.json(Teachers);
// };

module.exports = {
    getOneTeacher,
    getTeacher,
    addTeacher
};
