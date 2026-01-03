import React from 'react';
import { motion } from 'framer-motion';
import { Baby, MessageCircle, AlertTriangle, Activity, Heart, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'صباح الخير';
    if (hour < 17) return 'مساء الخير';
    return 'مساء الخير';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const tips = [
    "تذكري أن تشربي الكثير من الماء والسوائل خصوصًا إذا كنتِ ترضعين طفلك طبيعياً",
    "النوم على الظهر هو الوضع الأكثر أماناً لطفلك",
    "تحدثي مع طفلك كثيراً، حتى الرضع يستفيدون من سماع صوتك",
  ];
  
  const [currentTip] = React.useState(() => tips[Math.floor(Math.random() * tips.length)]);

  return (
    <div>
      <Header title="طمّنّي" />
      
      {/* Welcome Card */}
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden bg-white rounded-3xl p-6 shadow-soft mb-6"
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />
        
        <div className="relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-1 bg-gradient-to-l from-foreground to-foreground/80 bg-clip-text">
              {getWelcomeMessage()} 👋
            </h2>
            <p className="text-muted-foreground">كيف يمكننا مساعدتك اليوم؟</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Daily Tip */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.01 }}
        className="relative overflow-hidden bg-gradient-to-l from-primary/5 via-white to-white rounded-3xl p-5 shadow-soft mb-6 border border-primary/10"
      >
        <div className="flex items-start gap-4">
          <motion.div 
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20"
          >
            <Heart size={22} className="text-white" />
          </motion.div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-foreground">نصيحة اليوم</h3>
              <Sparkles size={14} className="text-primary" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{currentTip}</p>
          </div>
        </div>
      </motion.div>
      
      {/* Feature Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <motion.div variants={itemVariants}>
          <FeatureCard
            to="/chat"
            title="استشارة طبية"
            description="استشيري المساعد الذكي حول أعراض طفلك"
            icon={<MessageCircle />}
            color="#4E9AFF"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <FeatureCard
            to="/normal"
            title="هل هذا طبيعي؟"
            description="تعرفي على الأعراض الطبيعية وغير الطبيعية"
            icon={<Baby />}
            color="#46C8B2"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <FeatureCard
            to="/growth"
            title="النمو والتطعيمات"
            description="تتبعي نمو طفلك وجدول التطعيمات"
            icon={<Activity />}
            color="#9747FF"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <FeatureCard
            to="/emergency"
            title="دليل الطوارئ"
            description="متى يجب الذهاب للمستشفى"
            icon={<AlertTriangle />}
            color="#FF6B6B"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
