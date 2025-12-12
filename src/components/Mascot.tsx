import React from 'react';

const Mascot: React.FC = () => {
  return (
    <div className="absolute hidden lg:block" style={{ left: '4.9%', top: '67.13%' }}>
      <div className="relative">
        <div 
          className="bg-white rounded-2xl px-6 py-3 shadow-lg mb-2 relative"
          style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
        >
          <p 
            className="text-xl text-gray-800" 
            style={{ fontFamily: 'cursive', transform: 'scaleX(-1)' }}
          >
            Best of Luck!
          </p>
          <div className="absolute bottom-0 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full" />
        </div>
        
        {/* SVG Paw - Replace with <img src="/paw.gif" /> if you have the image */}
        <div className="mt-4" style={{ width: '173.45px', height: '173.45px' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse cx="100" cy="130" rx="45" ry="50" fill="#FFB6C1" stroke="#E8E8E8" strokeWidth="3"/>
            <ellipse cx="100" cy="125" rx="38" ry="43" fill="#FFC0CB" opacity="0.6"/>
            <ellipse cx="60" cy="70" rx="20" ry="28" fill="#FFB6C1" stroke="#E8E8E8" strokeWidth="3"/>
            <ellipse cx="60" cy="68" rx="15" ry="22" fill="#FFC0CB" opacity="0.6"/>
            <ellipse cx="85" cy="50" rx="18" ry="26" fill="#FFB6C1" stroke="#E8E8E8" strokeWidth="3"/>
            <ellipse cx="85" cy="48" rx="13" ry="20" fill="#FFC0CB" opacity="0.6"/>
            <ellipse cx="115" cy="50" rx="18" ry="26" fill="#FFB6C1" stroke="#E8E8E8" strokeWidth="3"/>
            <ellipse cx="115" cy="48" rx="13" ry="20" fill="#FFC0CB" opacity="0.6"/>
            <ellipse cx="140" cy="70" rx="20" ry="28" fill="#FFB6C1" stroke="#E8E8E8" strokeWidth="3"/>
            <ellipse cx="140" cy="68" rx="15" ry="22" fill="#FFC0CB" opacity="0.6"/>
            <ellipse cx="95" cy="120" rx="15" ry="20" fill="white" opacity="0.4"/>
            <ellipse cx="60" cy="65" rx="7" ry="10" fill="white" opacity="0.5"/>
            <ellipse cx="85" cy="45" rx="6" ry="9" fill="white" opacity="0.5"/>
            <ellipse cx="115" cy="45" rx="6" ry="9" fill="white" opacity="0.5"/>
            <ellipse cx="140" cy="65" rx="7" ry="10" fill="white" opacity="0.5"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Mascot;