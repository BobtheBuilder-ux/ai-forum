import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <main className="relative min-h-dvh bg-[url('/bg.jpg')] bg-cover bg-center text-white px-4 py-16">
      <div className="flex flex-col items-center justify-center w-full mx-auto h-dvh rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
        {/* Main Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Join the Future of AI Discussion and Innovation
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-200 text-base md:text-lg max-w-2xl mx-auto mb-12">
          Connect with AI enthusiasts, share insights, and explore the latest
          developments in artificial intelligence, machine learning, and
          autonomous systems.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { label: "Active Members", value: "10K+" },
            { label: "Daily Discussions", value: "500+" },
            { label: "Topics Covered", value: "100+" },
            { label: "Expert Contributors", value: "50+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-6">
          <Link
            href="/forum"
            className="bg-gradient-to-tr from-purple-400 to-pink-400 px-8 py-3 rounded-full text-black font-semibold shadow-lg transition duration-300 hover:brightness-110 text-center"
          >
            Browse Forums
          </Link>
          <Link
            href="/auth/signin"
            className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full text-white font-semibold shadow-lg transition duration-300 hover:bg-white/20 text-center"
          >
            Join Community
          </Link>
        </div>

        {/* Featured Topics */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {[
            "Machine Learning",
            "Neural Networks",
            "Computer Vision",
            "NLP",
            "Robotics",
          ].map((topic) => (
            <span
              key={topic}
              className="px-4 py-1 rounded-full bg-white/10 text-sm border border-white/20"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
