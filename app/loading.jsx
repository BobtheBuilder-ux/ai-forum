export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a14]">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-purple-400/30 border-t-purple-400 animate-spin"></div>
        </div>
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}