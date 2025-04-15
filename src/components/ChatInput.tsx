
import React, { useState } from 'react';
import { Send, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      toast.info('تم إيقاف التسجيل');
      // In a real app, we would process the voice recording here
    } else {
      // Start recording
      setIsRecording(true);
      toast.info('جاري التسجيل... انقر مرة أخرى للإنهاء');
      // In a real app, we would start the voice recording here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-md">
      <Button 
        type="button"
        variant="outline"
        size="icon"
        className={`rounded-full ${isRecording ? 'bg-red-100 text-red-500 animate-pulse' : ''}`}
        onClick={toggleRecording}
      >
        <Mic size={20} />
      </Button>
      
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="اكتبي سؤالك هنا..."
        className="flex-1 border-0 focus:ring-0 focus:outline-none bg-transparent"
        dir="rtl"
      />
      
      <Button 
        type="submit" 
        variant="ghost" 
        size="icon"
        className="rounded-full text-tameny-primary"
        disabled={!message.trim() || isLoading}
      >
        <Send size={20} />
      </Button>
    </form>
  );
};

export default ChatInput;
