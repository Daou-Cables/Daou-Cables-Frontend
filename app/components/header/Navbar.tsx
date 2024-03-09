"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = ['Home', 'About Us', 'Products', 'Contact Us'];

  return (
    <div className="flex justify-center space-x-4 py-2">
      {tabs.map((tab) => (
        <div key={tab} className="relative">
          <button
            onClick={() => setActiveTab(tab)}
            className="pb-1 text-black mr-2"
          >
            {tab}
          </button>
          {activeTab === tab && (
            <div 
              className="absolute bottom-0 h-[2px] w-3/5 bg-black transform skew-x-12"
              style={{
                left: '50%',
                transform: 'translateX(-80%) skewX(-12deg)', 
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;

