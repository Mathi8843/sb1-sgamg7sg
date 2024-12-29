import React from 'react';

export default function Bubbles() {
  return (
    <>
      {/* Top left bubbles */}
      <div className="fixed left-4 top-4 -z-10">
        <div className="absolute h-24 w-24 rounded-full bg-pink-500/20 blur-xl animate-pulse" />
        <div className="absolute h-16 w-16 translate-x-8 translate-y-4 rounded-full bg-purple-500/20 blur-xl animate-pulse" 
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Top right bubbles */}
      <div className="fixed right-4 top-4 -z-10">
        <div className="absolute h-20 w-20 rounded-full bg-blue-500/20 blur-xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        <div className="absolute h-16 w-16 -translate-x-6 translate-y-8 rounded-full bg-cyan-500/20 blur-xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      {/* Bottom left bubbles */}
      <div className="fixed bottom-4 left-4 -z-10">
        <div className="absolute h-28 w-28 rounded-full bg-teal-500/20 blur-xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute h-20 w-20 translate-x-10 -translate-y-4 rounded-full bg-green-500/20 blur-xl animate-pulse"
          style={{ animationDelay: '1.2s' }}
        />
      </div>

      {/* Bottom right bubbles */}
      <div className="fixed bottom-4 right-4 -z-10">
        <div className="absolute h-24 w-24 rounded-full bg-orange-500/20 blur-xl animate-pulse"
          style={{ animationDelay: '0.8s' }}
        />
        <div className="absolute h-16 w-16 -translate-x-8 -translate-y-6 rounded-full bg-yellow-500/20 blur-xl animate-pulse"
          style={{ animationDelay: '1.8s' }}
        />
      </div>
    </>
  );
}