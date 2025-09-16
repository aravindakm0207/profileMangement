const express = require("express");
const profileCtrl  = require("../controllers/profileController");
const upload = require("../middlewares/upload"); 
const router = express.Router();

router.post(
  "/",
  upload.fields([
    { name: "photo", maxCount: 1 },         
    { name: "projectImages", maxCount: 10 }, 
  ]),
  profileCtrl.createProfile
);


router.get("/", profileCtrl.getProfiles);
router.get("/:id", profileCtrl.getProfileById);

module.exports = router;
