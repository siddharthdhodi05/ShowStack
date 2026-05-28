import express from "express";

import UserModel from "#models/user.model.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
