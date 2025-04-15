
import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import ChatInput from '@/components/ChatInput';
import MessageBubble, { Message } from '@/components/MessageBubble';
import LoadingIndicator from '@/components/LoadingIndicator';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import ApiKeyInput from '@/components/ApiKeyInput';
import { createThread, addMessageToThread, runAssistant, checkRunStatus, getMessages } from '@/services/openAiService';
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
  const [threadId, setThreadId] = useState<string | null>(null);
  const [hasApiKey, setHasApiKey] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const apiKey = localStorage.getItem('openai_key');
    if (apiKey) {
      setHasApiKey(true);
      initializeThread();
    }
  }, []);

  const initializeThread = async () => {
    try {
      const newThreadId = await createThread();
      setThreadId(newThreadId);
    } catch (error) {
      console.error('Error creating thread:', error);
      toast.error('حدث خطأ في إنشاء المحادثة');
    }
  };

  const handleApiKeySet = () => {
    setHasApiKey(true);
    initializeThread();
  };

  const handleSendMessage = async (text: string) => {
    if (!threadId) {
      toast.error('لم يتم إنشاء المحادثة بشكل صحيح');
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      await addMessageToThread(threadId, text);
      const run = await runAssistant(threadId);
      
      // Poll for completion
      const checkCompletion = async () => {
        const status = await checkRunStatus(threadId, run.id);
        if (status.status === 'completed') {
          const response = await getMessages(threadId);
          
          const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: response,
            sender: 'assistant',
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, assistantMessage]);
          setIsLoading(false);
        } else if (status.status === 'failed') {
          toast.error('حدث خطأ في معالجة الرسالة');
          setIsLoading(false);
        } else {
          setTimeout(checkCompletion, 1000);
        }
      };
      
      checkCompletion();
    } catch (error) {
      console.error('Error processing message:', error);
      toast.error('حدث خطأ في معالجة الرسالة');
      setIsLoading(false);
    }
  };

  if (!hasApiKey) {
    return (
      <div className="h-[calc(100vh-7rem)] flex flex-col">
        <Header title="استشارة طبية" />
        <div className="flex-1 flex items-center justify-center p-4">
          <ApiKeyInput onApiKeySet={handleApiKeySet} />
        </div>
      </div>
    );
  }

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
            onClick={initializeThread}
          >
            بدء محادثة جديدة
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
