import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

export default function LeftPanel() {
  return (
    <div className="fixed left-0 top-0 h-screen w-[400px] p-4">
      <div className="h-full rounded-3xl bg-white/10 backdrop-blur-lg backdrop-filter transition-all duration-300 hover:bg-white/15">
        <div className="flex h-full flex-col p-6">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white/20">
              <img
                src="/assets/IMG-20240725-WA0000.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-bold text-white">Mathivanan G</h1>
            <h2 className="mt-1 text-lg text-white/80">Full Stack Developer</h2>
          </div>
          
          {/* Bio */}
          <p className="mb-6 text-center text-sm text-white/70">
            Passionate developer with expertise in building modern web applications.
            Focused on creating beautiful, performant, and accessible user experiences.
          </p>
          
          {/* Social Links */}
          <div className="mb-6 flex justify-center space-x-4">
            <a 
              href="#" 
              className="rounded-full bg-white/5 p-2.5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="rounded-full bg-white/5 p-2.5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="/assets/Mathivanan.pdf"
              download
              className="rounded-full bg-white/5 p-2.5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
              title="Download CV"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="mt-auto space-y-3">
            <div className="overflow-hidden rounded-lg bg-white/5 p-3">
              <span className="block text-xs font-medium uppercase text-white/60">Location</span>
              <span className="mt-1 block text-sm text-white">Shenpagapuram, Thenkasi</span>
            </div>
            <div className="overflow-hidden rounded-lg bg-white/5 p-3">
              <span className="block text-xs font-medium uppercase text-white/60">Email</span>
              <span className="mt-1 block text-sm text-white break-all">mathimathi8843@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}