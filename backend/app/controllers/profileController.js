const Profile = require("../models/Profile");
const profileCtrl={}

profileCtrl.createProfile = async (req, res) => {
  try {
    console.log("📥 req.body:", req.body);
    console.log("📥 req.files:", req.files);

    const {
      name, bio, course, year,
      skills, projects, videoUrl,
      email, phoneNumber, github, linkedin, resume
    } = req.body;

    
    const photo = req.files?.photo ? req.files.photo[0].path : null;
    console.log("📸 Profile photo URL:", photo);

   
    const projectImages = req.files?.projectImages
      ? req.files.projectImages.map(file => file.path)
      : [];
    console.log("🖼️ Project images URLs:", projectImages);

    
    const parsedSkills = skills ? skills.split(",").map(s => s.trim()) : [];
    console.log("💡 Parsed skills:", parsedSkills);

  
    let parsedProjects = [];
    if (projects) {
      parsedProjects = JSON.parse(projects).map((proj, idx) => ({
        title: proj.title,
        description: proj.description || "",
        image: projectImages[idx] || null
      }));
      console.log("📝 Parsed projects:", parsedProjects);
    }

    const newProfile = new Profile({
      name,
      photo,
      bio,
      course,
      year,
      skills: parsedSkills,
      projects: parsedProjects,
      videoUrl,
      email,
      phoneNumber,
      github,
      linkedin,
      resume
    });

    await newProfile.save();

    res.status(201).json({ message: "Profile created successfully", profile: newProfile });

  } catch (err) {
    console.error(" Error in createProfile:", err);
    res.status(500).json({ error: err.message });
  }
};





profileCtrl.getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

profileCtrl.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports=profileCtrl