export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "/team/alex.jpg",
      bio: "10+ years experience in AI and Machine Learning"
    },
    {
      name: "Maria Garcia",
      role: "Head of Research",
      image: "/team/maria.jpg",
      bio: "PhD in Computer Science, specializing in Neural Networks"
    },
    // Add more team members as needed
  ];

  return (
    <main className="min-h-screen bg-[#0a0a14] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About AI Forum
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're building the future of AI collaboration, bringing together developers,
            researchers, and enthusiasts to share knowledge and push boundaries.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400">
              To create an inclusive community where AI enthusiasts can learn,
              collaborate, and innovate together. We believe in the power of
              shared knowledge and open discussion to drive technological advancement.
            </p>
          </div>
          <div className="bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400">
              To become the leading platform for AI discourse and collaboration,
              fostering innovations that positively impact society while maintaining
              ethical standards and accessibility.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card/30 backdrop-blur-md p-6 rounded-2xl border border-white/20"
              >
                <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden mb-4 bg-gradient-to-tr from-purple-400 to-pink-400 p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Members", value: "10K+" },
            { label: "Daily Discussions", value: "500+" },
            { label: "Countries Reached", value: "50+" },
            { label: "Success Stories", value: "1000+" }
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card/30 backdrop-blur-md rounded-2xl border border-white/20"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}