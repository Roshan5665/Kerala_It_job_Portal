const express = require('express');
const { getAllJobs } = require('../Controllers/Get_New_Jobs');
const { userRegister, userLogin } = require('../Controllers/userController');
const router = express.Router();

// fetching Datas form Website
router.get("/get-new-jobs",getAllJobs)
router.post('/register',userRegister)
router.get('/login',userLogin)
module.exports = router;
