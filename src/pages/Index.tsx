
import React from 'react';
import { Baby, MessageCircle, AlertTriangle, Activity, Heart } from 'lucide-react';
import Header from '@/components/Header';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  // Sample welcome message based on time of day
  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'صباح الخير';
    if (hour < 17) return 'مساء الخير';
    return 'مساء الخير';
  };

  return (
    <div>
      <Header title="طمّنّي" />
      
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold mb-1">{getWelcomeMessage()}</h2>
        <p className="text-gray-600 mb-4">كيف يمكننا مساعدتك اليوم؟</p>
        
        <div className="bg-tameny-light rounded-lg p-4 border border-blue-100">
          <h3 className="flex items-center gap-2 font-medium mb-2">
            <Heart size={18} className="text-tameny-primary" />
            نصيحة اليوم
          </h3>
          <p className="text-sm">تذكري أن تشربي الكثير من الماء والسوائل خصوصًا إذا كنتِ ترضعين طفلك طبيعياً</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <FeatureCard
          to="/chat"
          title="استشارة طبية"
          description="استشيري المساعد الذكي حول أعراض طفلك"
          icon={<MessageCircle />}
          color="#4E9AFF"
        />
        
        <FeatureCard
          to="/normal"
          title="هل هذا طبيعي؟"
          description="تعرفي على الأعراض الطبيعية وغير الطبيعية"
          icon={<Baby />}
          color="#46C8B2"
        />
        
        <FeatureCard
          to="/growth"
          title="النمو والتطعيمات"
          description="تتبعي نمو طفلك وجدول التطعيمات"
          icon={<Activity />}
          color="#9747FF"
        />
        
        <FeatureCard
          to="/emergency"
          title="دليل الطوارئ"
          description="متى يجب الذهاب للمستشفى"
          icon={<AlertTriangle />}
          color="#FF6B6B"
        />
      </div>
    </div>
  );
};

export default Index;
