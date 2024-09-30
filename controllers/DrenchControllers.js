import Drench from "../models/Drench.js";

export const getDrenchInfo = async (req, res) => {
  try {
    const info = await Drench.find();
    res.status(200).json(info);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

export const editDrenchInfo = async (req, res) => {
  const { leastMovesTaken, leastMovesTakenBy } = req.body;

  try {
    const updatedInfo = await Drench.findOneAndUpdate(
      { id: 1 },
      {
        leastMovesTaken: leastMovesTaken,
        leastMovesTakenBy: leastMovesTakenBy,
      },
      { new: true, useFindAndModify: false }
    );

    if (!updatedInfo) {
      return res.status(404).json({ message: "Drench info not found" });
    }

    res.status(200).json(updatedInfo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

export const incrementDrenchCount = async (req, res) => {
  try {
    const updatedInfo = await Drench.findOneAndUpdate(
      { id: 1 },
      { $inc: { drenchCount: 1 } },
      { new: true, useFindAndModify: false }
    );

    if (!updatedInfo) {
      return res.status(404).json({ message: "Drench info not found" });
    }

    res.status(200).json(updatedInfo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

export const addDrench = async (req, res) => {
  try {
    const newDrench = new Drench({
      drenchCount: 0,
      leastMovesTaken: null,
      leastMovesTakenBy: null,
    });

    const savedDrench = await newDrench.save();

    res.status(201).json(savedDrench);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
