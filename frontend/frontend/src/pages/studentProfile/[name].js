import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; // optional, for optimized images

export default function ProfilePage() {
  const router = useRouter();
  const { name } = router.query;

  const Header = () => (
    <div className="w-full h-[100px] bg-white flex items-center justify-between px-4 md:px-8 border-b border-[#D3D3D3] z-50 relative">
      {/* Use path directly from public */}
      <img src="/assets/asset11.png" alt="TAPMI Logo" className="h-[64px]" />
      <div className="flex items-center space-x-4 md:space-x-8">
        <img src="/assets/asset1@4.png" alt="PRME Logo" className="h-[40px]" />
        <img src="/assets/asset2@4.png" alt="AACSB Logo" className="h-[41px]" />
      </div>
    </div>
  );

  return (
     <div className="min-h-screen bg-white">
      <Header />

       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
        <button
          onClick={() => navigate('/')} // <-- navigate back to portal
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
        >
          ← Back
        </button>
      </div>
      {/* Hero Section */}
      <div className="bg-[#F6893C] pt-8 pb-32 md:pb-40">
  <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 m">
    
    {/* Email and Phone Icons */}
    <div className="flex space-x-4 ">
      <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
      <div className="w-[69px] h-[24px] flex items-center justify-center bg-[#F1F1F1]bg-white text-[#333333] rounded ">
        <img src={/assets/email.png} alt="Email" className="w-40 h-5 mt-64" />
      </div>
      </a>
      <a
    href="https://www.youtube.com"
    target="_blank"
    rel="noopener noreferrer"
  >
      <div className="w-[71px] h-[24px] flex items-center justify-center bg-[#F1F1F1]bg-white text-[#333333] rounded">
        <img src={/assets/phone.png} alt="Phone" className="w-40 h-5  mt-64" />
      </div>
      </a>
    </div>

    {/* Download Resume Button */}
    <a
  href="https://www.youtube.com/"
  target="_blank"
  rel="noopener noreferrer"
>
 <button className="w-[239px] h-[48px] mb-64 bg-white text-[#333333] rounded-full flex items-center justify-center text-sm hover:bg-[#E0E0E0] shadow absolute top-[248px] left-[1100.5px] rotate-0 opacity-100">
  <img src={/assets/downloadresume.png} alt="Download resume" className="w-5 h-5 mr-2" />
  Download My Resume
</button>
</a>

    
  </div>
</div>

      {/* Profile Info */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-24 md:-mt-32 flex flex-col items-center">
         <img
    src={/assets/arora.png}
    alt="Saksham Arora"
    className="w-[240px] md:w-[312px] h-[240px] md:h-[312px] rounded-full border-4 border-white shadow-lg object-cover"
  /> {/* Placeholder for image */}

        <h1
          className="text-center text-3xl md:text-4xl font-bold text-[#333333] mt-4 md:mt-6"
        >
          Saksham Arora
        </h1>

        <p
          className="text-center text-xl md:text-2xl font-medium text-[#666666] mt-2"
        >
          Male | 25 | He/Him
        </p>
   <a
  href="https://www.youtube.com/"
  target="_blank"
  rel="noopener noreferrer"
>
        <button
          className="mt-8 md:mt-10 w-[240px] h-[48px] bg-[#F6893C] text-white rounded-full flex items-center justify-center text-sm hover:bg-[#E07A2A] shadow"
        >
          Watch my Visual Resume
        </button>
        </a>
      </div>

      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 md:mt-16">
       <div
  className="flex flex-col md:flex-row items-center justify-between px-4 py-4 md:py-6 border border-[#D3D3D3] rounded-lg text-center shadow-sm space-y-4 md:space-y-0 md:space-x-4"
  style={{
    fontFamily: "'Helvetica Neue', sans-serif",
    fontWeight: 700,
    fontStyle: "normal", // Bold is controlled by fontWeight
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "-0.37px",
    textAlign: "center",
  }}
>
  <span>Core Skills & Technical Proficiencies</span>
  <span>Professional Journey & Internship Roles</span>
  <span>Case Insights & Key Projects</span>
  <span>Learning & Academic Milestones</span>
  <span>Endorsements from Mentors & Peers</span>
</div>

      </div>

      {/* Bio Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 md:mt-22">
        <div
          className="p-4 md:p-6 border border-[#D3D3D3] rounded-lg shadow-sm"
        >
          <p
            className="text-base md:text-2xl leading-8 md:leading-[33px] text-center text-[#444444]"
          >
            I am Saksham Arora, a 25-year-old MBA candidate at TAPMI, Bengaluru (2024-2026), with a BTech in Electronics & Communication (CGPA 7.95). I bring 35 months of experience, including boosting system scalability by 30% and earning the Rise Insta Award at Infosys for enhancing backend efficiency by 25%.
          </p>
          
          <p
            className="text-base md:text-2xl leading-8 md:leading-[33px] text-center text-[#444444] mt-4"
          >
            I have developed Python-based analytics tools during internships and drove a 20% rise in donations through strategic social media campaigns. Certified in SQL, Python, Java, and IoT, I have also delivered impactful projects like a ReactJS prototype for accessibility and a QR-based attendance system. My achievements in national contests showcase both my technical expertise and creative problem-solving.
          </p>
        </div>
      </div>

      {/* Skills Icons Section */}
      <div className="bg-white py-8 md:py-10 mt-28 md:mt-14"> {/* Overlap adjustment for larger screens */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-around items-center flex-wrap">
          <img src={/assets/a.png} alt="Image a" className="w-[80px] md:w-[104px] h-[80px] md:h-[102px] m-2 " />

          <img src={/assets/b.png} alt="Image b" className="w-[70px] md:w-[84px] h-[80px] md:h-[98px] m-2" />
          <img src={/assets/c.png} alt="Image c" className="w-[70px] md:w-[87px] h-[80px] md:h-[100px] m-2" />
          <img src={/assets/c.png} alt="Image d" className="w-[70px] md:w-[90px] h-[80px] md:h-[101px] m-2" />
          <img src={/assets/e.png} alt="Image e" className="w-[80px] md:w-[100px] h-[80px] md:h-[100px] m-2" />
          <img src={/assets/f.png} alt="Image f" className="w-[80px] md:w-[100px] h-[80px] md:h-[94px] m-2" />
          <img src={/assets/f.png} alt="Image g" className="w-[80px] md:w-[99px] h-[80px] md:h-[93px] m-2" />
          <img src={/assets/h.png} alt="Image h" className="w-[80px] md:w-[99px] h-[80px] md:h-[93px] m-2" />
        </div>
      </div>

      {/* Key Projects & Case Studies Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 md:mt-24">
        <h2
  className="absolute"
  style={{
    width: "419px",
    height: "120px",
    top: "1500.59px",
    left: "63.95px",
    fontFamily: "'Helvetica Now Display', sans-serif",
    fontWeight: 700,
    fontStyle: "bold",
    fontSize: "48px",
    lineHeight: "60px",
    letterSpacing: "-0.28px",
    opacity: 1,
  }}
>
  Case Insights & Key Projects
</h2>
<div className="flex justify-end space-x-4 mb-6 ">
  <button className="px-4 py-2  bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
    Case Studies
  </button>
  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
    Projects
  </button>
</div>

        <div className="pt-[140px] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
  {/* Card 1 */}
  <div>
    <div
      className="h-[250px] md:h-[300px] bg-cover bg-center rounded-lg shadow"
      style={{ backgroundImage: `url(${/assets/assetA.png})` }}
    ></div>
    <p
      className="mt-4 text-center"
      style={{
        fontFamily: "'Helvetica Neue', sans-serif",
        fontWeight: 700,
        fontSize: "26.91px",
        lineHeight: "32px",
        letterSpacing: "0.2px",
      }}
    >
      ONDC Case Study
    </p>
  </div>

  {/* Card 2 */}
  <div>
    <div
      className="h-[250px] md:h-[300px] bg-cover bg-center rounded-lg shadow"
      style={{ backgroundImage: `url(${/assets/assetB.png})` }}
    ></div>
    <p
      className="mt-4 text-center"
      style={{
        fontFamily: "'Helvetica Neue', sans-serif",
        fontWeight: 700,
        fontSize: "26.91px",
        lineHeight: "32px",
        letterSpacing: "0.2px",
      }}
    >
      Jal Jeevan Mission Case Study
    </p>
  </div>

  {/* Card 3 */}
  <div>
    <div
      className="h-[250px] md:h-[300px] bg-cover bg-center rounded-lg shadow"
      style={{ backgroundImage: `url(${/assets/assetC.png})` }}
    ></div>
    <p
      className="mt-4 text-center"
      style={{
        fontFamily: "'Helvetica Neue', sans-serif",
        fontWeight: 700,
        fontSize: "26.91px",
        lineHeight: "32px",
        letterSpacing: "0.2px",
      }}
    >
      FinEasy Case Study
    </p>
  </div>
</div>

      </div>

      {/* Visual Resume Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 md:mt-24">
      <h2
  className="mx-auto"
  style={{
    width: "1054px",
    height: "60px",
    fontFamily: "'Helvetica Now Display', sans-serif",
    fontWeight: 700,
    fontStyle: "bold",
    fontSize: "48px",
    lineHeight: "60px",
    letterSpacing: "-0.28px",
    textAlign: "center",
    verticalAlign: "middle",
    opacity: 1,
  }}
>
  Visual Resume
</h2>

        <img
          src={/assets/assetD.png}
          alt="Visual Resume"
          className="pt-[80px] w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Connect Section */}
      <div
      className="max-w-[1254px] mx-auto px-4 md:px-8 mt-16 md:mt-24 relative"
      style={{
        height: '254px',
        background: 'linear-gradient(90deg, #F6893C, #E07A2A)',
        borderRadius: '20px',
        border: '5px solid #FFFFFF',
      }}
    >
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl py-12 flex flex-col items-center justify-center">
  {/* Heading */}
     <a
  href="https://www.youtube.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  <h2
    className="text-white text-center"
    style={{
      fontFamily: "'Helvetica Now Display', sans-serif",
      fontWeight: 700,
      fontSize: "48px",
      lineHeight: "60px",
      letterSpacing: "-0.28px",
      opacity: 1,
    }}
  >
    Connect with Saksham Arora
  </h2>
  </a>

  {/* Button */}
     <a
  href="https://www.youtube.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="flex items-center justify-center bg-white text-[#F6893C] font-medium rounded-full hover:bg-gray-200 mt-6 shadow-md"
    style={{
      width: "239px",
      height: "48px",
      fontSize: "14px",
      lineHeight: "24px",
      opacity: 1,
    }}
  >
   
    <span className="mr-2">⬇</span> Download My Resume
  </button>
  </a>
</div>

<div className="w-full flex justify-between items-center mt-10 px-10">
 
  <div className="flex items-center gap-6 text-gray-700">
  
    <div className="flex items-center space-x-2">
         <a
  href="https://www.youtube.com/"
  target="_blank"
  rel="noopener noreferrer"
>
      <span>📧</span>
      <span>Email</span>
      </a>
    </div>

   
    <div className="flex items-center space-x-2">
         <a
  href="https://www.youtube.com/"
  target="_blank"
  rel="noopener noreferrer"
>
      <span>📞</span>
      <span>Phone</span>
      </a>
    </div>
  </div>


  <div className="flex items-center gap-6">
   
       <a
  href="https://www.youtube.com/"
  target="_blank"
  rel="noopener noreferrer"
>
    <button className="flex items-center space-x-2 border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-100">
      <span>🐙</span>
      <span>Git Hub</span>
    </button>
    </a>

   
       <a
  href="https://www.youtube.com/"
  target="_blank"
  rel="noopener noreferrer"
>
    <button className="flex items-center space-x-2 border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-100">
      <span>🔗</span>
      <span>LinkedIn</span>
    </button>
    </a>
  </div>
</div>


  

    </div>
    </div>
  );
};

