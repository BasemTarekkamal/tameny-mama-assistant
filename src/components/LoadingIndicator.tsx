
import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="flex items-center gap-1 self-start bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[85%]">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
    </div>
  );
};

export default LoadingIndicator;
