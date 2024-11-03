const mongoose = require('mongoose');

// Job Category Schema
const jobCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

// Job Schema
const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  lastDate: {
    type: Date,
    required: true
  },
  applyLink: {
    type: String,
    required: true
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'JobCategory'
    }
  ]
});

// User Schema (stores job preferences by category)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  preferredCategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'JobCategory'
    }
  ]
});

// Models
const JobCategory = mongoose.model('JobCategory', jobCategorySchema);
const Job = mongoose.model('Job', jobSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Job, JobCategory, User };
