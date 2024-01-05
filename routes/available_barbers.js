const express = require("express");
const router = express.Router();

const{getAvailableBarbers, getAvailableBarbersTesting}= require("../controllers/availablebarbers");

router.route("/").get(getAvailableBarbers);
router.route("/testing").get(getAvailableBarbersTesting);

module.exports=router;