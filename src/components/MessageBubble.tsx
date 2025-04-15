
import React from 'react';
import { cn } from '@/lib/utils';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.sender === 'user';
  
  return (
    <div 
      className={cn(
        "max-w-[85%] rounded-2xl p-3 mb-2",
        isUser 
          ? "bg-tameny-primary text-white self-end rounded-tr-none" 
          : "bg-white self-start rounded-tl-none shadow-sm border border-gray-100"
      )}
    >
      <p className="text-sm">{message.text}</p>
      <div 
        className={cn(
          "text-xs mt-1",
          isUser ? "text-blue-100" : "text-gray-400"
        )}
      >
        {message.timestamp.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

export default MessageBubble;
