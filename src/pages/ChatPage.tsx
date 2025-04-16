
import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import ChatInput from '@/components/ChatInput';
import MessageBubble, { Message } from '@/components/MessageBubble';
import LoadingIndicator from '@/components/LoadingIndicator';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { sendMessageToWebhook } from '@/utils/chatWebhook';
import { toast } from 'sonner';

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: 'مرحباً، أنا طمّني - المساعد الطبي لصحة طفلك. كيف يمكنني مساعدتك اليوم؟',
    sender: 'assistant',
    timestamp: new Date()
  }
];

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      const response = await sendMessageToWebhook(text);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      toast.error("عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col">
      <Header title="استشارة طبية" />
      
      <div className="bg-gray-50 p-3 rounded-lg mb-4 flex items-center gap-2 text-sm">
        <Info size={16} className="text-tameny-primary flex-shrink-0" />
        <p>المعلومات المقدمة هنا استرشادية وليست بديلاً عن استشارة الطبيب</p>
      </div>
      
      <div className="flex-1 overflow-y-auto mb-4 py-2">
        <div className="flex flex-col">
          {messages.map(message => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isLoading && <LoadingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="mt-auto sticky bottom-0">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        
        <div className="flex justify-center mt-2">
          <Button 
            variant="outline" 
            className="text-xs text-gray-500 py-1 h-auto"
            onClick={() => setMessages(INITIAL_MESSAGES)}
          >
            بدء محادثة جديدة
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
