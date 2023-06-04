const Institute = require("../models/institute");
const mongoose = require("mongoose");

// post reInstt of add Institutes

const addInst = async (req, res) => {
    const {
        name,
        address,
        shortName,
        tel
    } = req.body;
    const institute = await Institute.create({
        name,
        address,
        shortName,
        tel
    });
    res.json({ mssg: "institute added successfully" });
};

//Get reInstt of all Institutes

const getInst = async (req, res) => {
    const institute = await Institute.find({});
    res.json(institute);
};

//Get reInstt of single Institutes
const getOneInst = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ error: "No such institute" });
    }
    const institute = await Institute.findById(id);
    res.json(institute);
};

// // delete Institute

const deleteInstitute = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "No such Institute" });
  }

  const Institutes = await Institute.findOneAndDelete({ _id: id });

  if (!Institutes) {
    return res.json({ error: "No such Institute" });
  }

  res.json(Institutes);
};

// //delete many Institutes

// const deleteMore = async (req, res) => {
//   const { deleteMany } = req.body;
//   try {
//     const Institutes = await Institute.deleteMany({ _id: { $in: deleteMany } });
//     res.json("Institute deleted successfully");
//   } catch (err) {
//     res.json(err);
//   }
// };

// // update Institute

const updateInstitute = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "No such Institute" });
  }

  const Institutes = await Institute.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!Institutes) {
    return res.json({ error: "No such Institute" });
  }

  res.json(Institutes);
};

// // Approve Institute by user
// const approveInstitute = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.json({ error: "No such Institute" });
//   }

//   const Institutes = await Institute.findOneAndUpdate(
//     { _id: id },
//     {
//       ...req.body,
//     }
//   );

//   if (!Institutes) {
//     return res.json({ error: "No such Institute" });
//   }

//   res.json(Institutes);
// };

module.exports = {
    getOneInst,
    getInst,
    addInst,
    deleteInstitute,
    updateInstitute
};
