import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a14] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-white/20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-2 bg-gradient-to-tr from-purple-400 to-pink-400 text-black font-semibold rounded-lg hover:brightness-110 transition"
            >
              Return Home
            </Link>
            <Link
              href="/forum"
              className="px-6 py-2 border border-white/20 text-gray-300 rounded-lg hover:bg-white/5 transition"
            >
              Browse Forum
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}