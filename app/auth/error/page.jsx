'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BiErrorCircle } from 'react-icons/bi';

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const getErrorMessage = (error) => {
    switch (error) {
      case 'AccessDenied':
        return 'Access denied. You do not have permission to access this resource.';
      case 'Verification':
        return 'The verification link has expired or has already been used.';
      case 'Configuration':
        return 'There is a problem with the server configuration.';
      case 'OAuthSignin':
        return 'Error occurred during sign in attempt. Please try again.';
      case 'OAuthCallback':
        return 'Error occurred during authentication. Please try again.';
      case 'OAuthCreateAccount':
        return 'Could not create user account. Please try again.';
      case 'EmailCreateAccount':
        return 'Could not create user account. Email may already be in use.';
      case 'Callback':
        return 'Authentication callback failed. Please try again.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a14] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-white/20">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <BiErrorCircle className="w-16 h-16 text-red-400" />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-white mb-2">
            Authentication Error
          </h2>
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-8">
            <p className="text-center text-red-400">
              {getErrorMessage(error)}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/auth/signin"
              className="flex items-center justify-center px-4 py-2 bg-gradient-to-tr from-purple-400 to-pink-400 text-black font-semibold rounded-lg hover:brightness-110 transition-all"
            >
              Try Again
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center px-4 py-2 border border-white/20 text-gray-300 rounded-lg hover:bg-white/5 transition-all"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}