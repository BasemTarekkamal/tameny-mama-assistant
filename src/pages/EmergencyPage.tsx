
import React from 'react';
import Header from '@/components/Header';
import EmergencyCard from '@/components/EmergencyCard';
import { PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmergencyPage = () => {
  return (
    <div>
      <Header title="دليل الطوارئ" />
      
      <div className="bg-red-100 p-4 rounded-xl mb-6 flex items-center gap-3 border border-red-200">
        <PhoneCall className="text-red-600" size={24} />
        <div>
          <h3 className="font-bold text-red-600">للطوارئ - اتصلي فوراً</h3>
          <p className="text-sm text-red-800">في حالات الطوارئ الشديدة، اتصلي بالإسعاف</p>
          <Button 
            className="mt-2 bg-red-600 hover:bg-red-700"
            onClick={() => window.location.href = 'tel:123'}
          >
            اتصال بالإسعاف 123
          </Button>
        </div>
      </div>
      
      <EmergencyCard
        title="ارتفاع شديد في درجة الحرارة"
        symptoms={[
          'درجة حرارة أعلى من 38 درجة للأطفال أقل من 3 أشهر',
          'درجة حرارة أعلى من 39 درجة للأطفال أكبر من 3 أشهر',
          'الحمى مصحوبة بطفح جلدي',
          'الطفل خامل جداً أو غير مستجيب'
        ]}
        action="توجهي فوراً إلى أقرب طوارئ أطفال أو اتصلي بالإسعاف إذا كان الطفل غير مستجيب"
        severity="high"
        phoneNumber="123"
      />
      
      <EmergencyCard
        title="صعوبة في التنفس"
        symptoms={[
          'تنفس سريع أو متقطع',
          'شحوب أو زرقة الشفاه أو الوجه',
          'سماع صوت صفير عند التنفس',
          'تقعر الصدر أثناء التنفس'
        ]}
        action="توجهي فوراً إلى أقرب طوارئ أطفال أو اتصلي بالإسعاف"
        severity="high"
        phoneNumber="123"
      />
      
      <EmergencyCard
        title="الجفاف"
        symptoms={[
          'قلة التبول (أقل من 4 حفاضات مبللة في 24 ساعة)',
          'جفاف الفم واللسان',
          'عدم نزول الدموع عند البكاء',
          'خمول غير معتاد',
          'يافوخ غائر (لدى الرضع)'
        ]}
        action="قدمي للطفل سوائل باستمرار وبكميات صغيرة. إذا كانت الأعراض شديدة أو لم يقبل الطفل السوائل، توجهي للطبيب."
        severity="medium"
      />
      
      <EmergencyCard
        title="الإسهال المصحوب بالقيء"
        symptoms={[
          'إسهال مستمر لأكثر من 24 ساعة',
          'وجود دم في البراز',
          'قيء مستمر لأكثر من 12 ساعة',
          'علامات الجفاف'
        ]}
        action="احرصي على ترطيب الطفل ومراقبة علامات الجفاف. إذا كان هناك دم في البراز أو أصبح الطفل خاملاً، توجهي للطبيب فوراً."
        severity="medium"
      />
      
      <EmergencyCard
        title="طفح جلدي لا يزول عند الضغط"
        symptoms={[
          'بقع حمراء أو أرجوانية لا تختفي عند الضغط عليها',
          'طفح مصحوب بحمى',
          'طفل في حالة إعياء أو خمول'
        ]}
        action="هذه قد تكون علامة على عدوى خطيرة مثل التهاب السحايا. توجهي فوراً إلى أقرب طوارئ أطفال."
        severity="high"
        phoneNumber="123"
      />
    </div>
  );
};

export default EmergencyPage;
