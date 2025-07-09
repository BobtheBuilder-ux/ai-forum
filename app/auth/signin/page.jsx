'use client';

import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  const [isLoading, setIsLoading] = useState({
    google: false,
    github: false
  });

  const handleSignIn = async (provider) => {
    try {
      setIsLoading(prev => ({ ...prev, [provider]: true }));
      await signIn(provider, { callbackUrl: '/' });
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
    } finally {
      setIsLoading(prev => ({ ...prev, [provider]: false }));
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a14] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-white/20">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Join our community of AI enthusiasts and professionals
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => handleSignIn('google')}
            disabled={isLoading.google || isLoading.github}
            className="flex w-full items-center justify-center px-4 py-2 border border-white/20 rounded-lg text-gray-300 bg-black/20 hover:bg-black/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading.google ? (
              <div className="w-5 h-5 mr-2 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <FcGoogle className="w-5 h-5 mr-2" />
            )}
            {isLoading.google ? 'Signing in...' : 'Sign in with Google'}
          </button>

          <button 
            onClick={() => handleSignIn('github')}
            disabled={isLoading.google || isLoading.github}
            className="flex w-full items-center justify-center px-4 py-2 border border-white/20 rounded-lg text-gray-300 bg-black/20 hover:bg-black/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading.github ? (
              <div className="w-5 h-5 mr-2 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <FaGithub className="w-5 h-5 mr-2" />
            )}
            {isLoading.github ? 'Signing in...' : 'Sign in with Github'}
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            By signing in, you agree to our{' '}
            <a href="/terms" className="text-purple-400 hover:text-purple-300">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-purple-400 hover:text-purple-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}