
import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import ChatInput from '@/components/ChatInput';
import MessageBubble, { Message } from '@/components/MessageBubble';
import LoadingIndicator from '@/components/LoadingIndicator';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';

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

  const handleSendMessage = (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      // Simple rule-based responses for demo
      if (text.includes('حمى') || text.includes('سخونة')) {
        response = 'إذا كان طفلك يعاني من ارتفاع في درجة الحرارة، فقد يكون ذلك بسبب عدوى فيروسية أو بكتيرية. إذا كان عمر طفلك أقل من 3 أشهر وتجاوزت درجة حرارته 38 درجة مئوية، فيجب عليك استشارة الطبيب فوراً. للأطفال الأكبر سناً، يمكنك استخدام خافض للحرارة مناسب لعمره وإعطائه الكثير من السوائل.';
      }
      else if (text.includes('إسهال') || text.includes('براز')) {
        response = 'الإسهال عند الرضع قد يكون علامة على عدوى معوية أو حساسية من الطعام. من المهم الحفاظ على ترطيب طفلك. إذا استمر الإسهال لأكثر من يومين، أو ظهرت علامات الجفاف مثل قلة التبول أو جفاف الفم، يجب عليك استشارة الطبيب فوراً.';
      }
      else if (text.includes('نوم') || text.includes('ينام')) {
        response = 'أنماط نوم الرضع متغيرة ويمكن أن تختلف من طفل لآخر. الرضع الجدد قد ينامون من 14-17 ساعة في اليوم، ولكن ليس بالضرورة بشكل متواصل. مع نمو الطفل، ستلاحظين زيادة فترات الاستيقاظ خلال النهار. حاولي إنشاء روتين نوم ثابت وبيئة هادئة ومريحة لطفلك.';
      }
      else {
        response = 'شكراً على سؤالك. لتقديم إجابة أكثر دقة، هل يمكنك إخباري بالمزيد عن عمر طفلك والأعراض التي تلاحظينها؟ ومتى بدأت هذه الأعراض؟';
      }
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
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
          <Button variant="outline" className="text-xs text-gray-500 py-1 h-auto">
            بدء محادثة جديدة
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
