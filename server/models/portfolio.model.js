import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User ID is required"],
    ref: "UserModel",
  },
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
      name: {
        type: String,
        required: [true, "Please mention the used stack"],
      },
    },
  ],
});

const portfolioSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      ref: "UserModel",
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
        skillName: {
          type: String,
          required: true,
        },
      },
    ],
    projects: [projectSchema],
  },
  {
    timestamps: true,
    collection: "portfolios",
  },
);

const PortfolioModel = mongoose.model("PortfolioModel", portfolioSchema);

export default PortfolioModel;
