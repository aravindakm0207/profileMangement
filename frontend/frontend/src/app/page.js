
"use client";
import { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/profile')
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <ProfileCard {...profile} />
      <div className="mt-4">
        <h3 className="text-lg">Case Insights & Projects</h3>
        {/* Add project thumbnails or links here */}
      </div>
      <div className="mt-4">
        <h3 className="text-lg">Visual Resume</h3>
        {/* Add video or image here */}
      </div>
      <button className="mt-4 bg-orange-500 text-white p-2 rounded">Connect with {profile.name}</button>
    </div>
  );
}