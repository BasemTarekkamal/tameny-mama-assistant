
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

const NORMAL_SITUATIONS = [
  {
    category: 'النوم',
    items: [
      {
        title: 'استيقاظ الطفل الرضيع عدة مرات خلال الليل',
        description: 'من الطبيعي جداً أن يستيقظ الأطفال الرضع كل 2-3 ساعات للرضاعة، خاصة في الأشهر الأولى. مع نمو الطفل، تطول فترات نومه تدريجياً.',
        isNormal: true
      },
      {
        title: 'نوم الطفل بعيون نصف مفتوحة',
        description: 'قد ينام بعض الأطفال بعيون نصف مفتوحة خاصة خلال مرحلة النوم الخفيف (REM). هذا طبيعي ولا يستدعي القلق.',
        isNormal: true
      }
    ]
  },
  {
    category: 'التغذية',
    items: [
      {
        title: 'رفض الطفل للطعام الصلب في البداية',
        description: 'من الطبيعي أن يرفض الطفل الأطعمة الصلبة في البداية لأنه معتاد على الحليب فقط. استمري في تقديم الطعام بصبر وبكميات صغيرة.',
        isNormal: true
      },
      {
        title: 'البراز الأخضر لدى الرضيع',
        description: 'البراز الأخضر قد يكون طبيعياً خاصة عند الرضاعة الطبيعية وقد يكون بسبب تناول الأم لأطعمة معينة أو عندما يرضع الطفل الحليب الأمامي أكثر من الخلفي.',
        isNormal: true
      }
    ]
  },
  {
    category: 'الجلد',
    items: [
      {
        title: 'بقع بيضاء في وجه الطفل (Milia)',
        description: 'هذه البثور البيضاء الصغيرة تظهر غالباً على الأنف والخدين والذقن، وهي طبيعية تماماً وتختفي من تلقاء نفسها خلال أسابيع.',
        isNormal: true
      },
      {
        title: 'طفح الحفاضات',
        description: 'يعاني معظم الأطفال من طفح الحفاضات في مرحلة ما. لتجنبه، غيري الحفاضات بانتظام واتركي المنطقة لتجف قبل وضع حفاضة جديدة.',
        isNormal: true
      }
    ]
  },
  {
    category: 'التطور',
    items: [
      {
        title: 'عدم القدرة على رفع الرأس قبل 3 أشهر',
        description: 'يبدأ معظم الأطفال برفع رؤوسهم تدريجياً خلال الأشهر الثلاثة الأولى. إذا لم يستطع طفلك رفع رأسه على الإطلاق بعد 3 أشهر، استشيري الطبيب.',
        isNormal: false
      },
      {
        title: 'تأخر التسنين حتى 12 شهراً',
        description: 'يختلف وقت ظهور الأسنان الأولى من طفل لآخر. بعض الأطفال تظهر أسنانهم في الشهر الرابع، وآخرون قد لا تظهر حتى الشهر 12-14، وكلاهما طبيعي.',
        isNormal: true
      }
    ]
  }
];

const NormalPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredSituations = NORMAL_SITUATIONS.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.title.includes(searchQuery) || 
      item.description.includes(searchQuery)
    )
  })).filter(category => category.items.length > 0);

  return (
    <div>
      <Header title="هل هذا طبيعي؟" />
      
      <div className="relative mb-6">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="ابحثي عن حالة أو عَرَض..."
          className="pr-10 bg-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="النوم">
        <TabsList className="w-full justify-between mb-4">
          {NORMAL_SITUATIONS.map(category => (
            <TabsTrigger key={category.category} value={category.category}>
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {NORMAL_SITUATIONS.map(category => (
          <TabsContent key={category.category} value={category.category} className="space-y-4">
            {(searchQuery ? filteredSituations.find(c => c.category === category.category)?.items : category.items).map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border-r-4 border-tameny-secondary">
                <div className="flex items-start gap-2">
                  <div className={`p-1 rounded-full ${item.isNormal ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {item.isNormal ? '✓' : '✗'}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NormalPage;
