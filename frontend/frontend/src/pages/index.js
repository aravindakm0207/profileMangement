import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function StudentPortal() {
  const router = useRouter();
  const [cards, setCards] = useState(
    Array(6).fill({ name: 'Saksham Arora', age: 25, pronoun: 'He/Him' })
  );

  const fetchMoreData = () => {
    if (cards.length >= 12) return;
    setTimeout(() => {
      setCards((prev) =>
        prev.concat(
          Array(2).fill({ name: 'Saksham Arora', age: 25, pronoun: 'He/Him' })
        )
      );
    }, 1500);
  };

  // Header component
  const Header = () => (
    <div className="w-full h-[68px] bg-gray-200 flex items-center justify-between px-4 md:px-8 border-b border-gray-300">
      <img src="/assets/asset11.png" alt="TAPMI Logo" className="h-[64px]" />
      <div className="flex space-x-4">
        <img src="/assets/asset1@4.png" alt="PRME Logo" className="h-[40px]" />
        <img src="/assets/asset2@4.png" alt="AACSB Logo" className="h-[41px]" />
      </div>
    </div>
  );

  // Card component
  const Card = ({ name, age, pronoun }) => (
    <div
      onClick={() => router.push(`/studentProfile/${name}`)}
      className="bg-white rounded-[20px] p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 relative w-[300px] h-[400px] cursor-pointer"
    >
      <div className="w-full h-[200px] bg-[#F6893C] absolute top-0 rounded-t-[20px] flex items-center justify-center">
        <img
          src="/assets/arora.png"
          alt={name}
          className="w-[140px] h-[140px] rounded-full border-4 border-white object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mt-[180px] text-center">{name}</h3>
      <p className="text-sm text-gray-600 mt-2 text-center">
        Male | {age} | {pronoun}
      </p>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-4 px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 border border-gray-300">
          Download my Resume
        </button>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-4">
      <Header />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 mt-8 justify-items-center">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div
        className="mt-6 text-center cursor-pointer text-gray-600"
        onClick={fetchMoreData}
      >
        {cards.length < 12 ? 'Load More...' : 'No more data'}
      </div>
    </div>
  );
}
