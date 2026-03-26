import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  projectName: {
    type: String,
    required: [true, "Project name is required"],
  },
  projectImage: {
    type: String,
    required: [true, "Project image is required"],
  },
  projectDescription: {
    type: String,
    required: [true, "project description needed"],
  },
  github: {
    type: String,
  },
  liveLink: {
    type: String,
  },
  projectStack: [
    {
      type: String,
      required: [true, "Please mention the used stack"],
    },
  ],
});

const portfolioSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      ref: "UserModel",
      unique: true,
    },
    role: {
      type: String,
      required: [true, "User Role is required"],
    },
    description: {
      type: String,
      required: [true, "User Description is required"],
    },
    image: {
      type: String,
      required: [true, "User image is required"],
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    projects: {
      type: [projectSchema],
      validate: [(val) => val.length <= 6, "Maximum 6 projects allowed"],
    },
  },
  {
    timestamps: true,
    collection: "portfolios",
  },
);

const PortfolioModel = mongoose.model("PortfolioModel", portfolioSchema);

export default PortfolioModel;
