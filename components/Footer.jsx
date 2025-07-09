import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                  M
                </div>
                <span className="font-bold text-lg text-white">AI Forum</span>
              </div>
              <p className="text-sm text-gray-400">
                Your destination for AI discussions, knowledge sharing, and community-driven innovation.
              </p>
            </div>
            
            {/* Main Navigation */}
            <div>
              <h3 className="font-medium mb-4 text-white">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/forum" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Forum
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Topics */}
            <div>
              <h3 className="font-medium mb-4 text-white">Popular Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/forum?topic=machine-learning" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="/forum?topic=neural-networks" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Neural Networks
                  </Link>
                </li>
                <li>
                  <Link href="/forum?topic=computer-vision" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Computer Vision
                  </Link>
                </li>
                <li>
                  <Link href="/forum?topic=nlp" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Natural Language Processing
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h3 className="font-medium mb-4 text-white">Join Our Community</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/aiforum" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaTwitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a 
                  href="https://github.com/aiforum" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/company/aiforum" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="https://discord.gg/aiforum" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaDiscord className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </a>
              </div>
              <div className="mt-6">
                <Link
                  href="/auth/signin"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-tr from-purple-400 to-pink-400 text-black font-semibold text-sm hover:brightness-110 transition"
                >
                  Join the Community
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AI Forum. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}