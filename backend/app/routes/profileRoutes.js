const express = require("express");
const profileCtrl  = require("../controllers/profileController");
const upload = require("../middlewares/upload"); 
const router = express.Router();
// profileRoutes.js
router.post(
  "/",
  upload.fields([
    { name: "photo", maxCount: 1 },          // profile picture
    { name: "projectImages", maxCount: 10 }, // project screenshots
  ]),
  profileCtrl.createProfile
);


router.get("/", profileCtrl.getProfiles);
router.get("/:id", profileCtrl.getProfileById);

module.exports = router;
