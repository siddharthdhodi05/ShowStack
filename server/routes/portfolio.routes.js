import express from "express";

import PortfolioModel from "#models/portfolio.model.js";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const portfolio = await PortfolioModel.findOne({ user: req.params.userId });
  if (portfolio) {
    res.json(portfolio);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
