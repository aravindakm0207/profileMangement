

"use client";
import Image from 'next/image';

const ProfileCard = ({ name, age, gender, bio, projects }) => {
  return (
    <div className="bg-orange-500 p-4 text-white">
      <div className="flex items-center">
        <Image src="/profile.jpg" alt="Profile" width={50} height={50} className="rounded-full mr-4" />
        <div>
          <h2 className="text-xl">{name}</h2>
          <p>{age} | {gender}</p>
        </div>
      </div>
      <p className="mt-2">{bio}</p>
      <div className="mt-4">
        {projects.map((proj, index) => (
          <a key={index} href={proj.link} className="block">{proj.title}</a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;