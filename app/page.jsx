import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Join Our Community?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Insights",
                description: "Connect with AI professionals and researchers sharing cutting-edge developments.",
                icon: "🎯"
              },
              {
                title: "Active Discussions",
                description: "Engage in meaningful conversations about AI technology and its implications.",
                icon: "💡"
              },
              {
                title: "Knowledge Sharing",
                description: "Access resources, tutorials, and real-world AI implementation examples.",
                icon: "📚"
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-card/30 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Topics Preview */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a14] to-[#0a0a14]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Latest Discussions</h2>
            <Link 
              href="/forum"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "The Future of Neural Networks in 2025",
                author: "Dr. Sarah Chen",
                replies: 42,
                category: "Neural Networks"
              },
              {
                title: "Implementing Ethical AI Systems",
                author: "James Wilson",
                replies: 38,
                category: "Ethics"
              },
              {
                title: "Advances in Computer Vision",
                author: "Maria Garcia",
                replies: 27,
                category: "Computer Vision"
              },
              {
                title: "Natural Language Processing Breakthroughs",
                author: "Alex Kumar",
                replies: 31,
                category: "NLP"
              }
            ].map((topic) => (
              <div 
                key={topic.title}
                className="bg-card/30 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/5 transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white hover:text-purple-400 transition">
                    <Link href="/forum">{topic.title}</Link>
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                    {topic.category}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>By {topic.author}</span>
                  <span>{topic.replies} replies</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#0a0a14]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Discussion?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Become part of a growing community of AI enthusiasts and professionals shaping the future of artificial intelligence.
          </p>
          <Link 
            href="/auth/signin"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 text-black font-semibold shadow-lg hover:brightness-110 transition"
          >
            Join Now
          </Link>
        </div>
      </section>
    </main>
  );
}
