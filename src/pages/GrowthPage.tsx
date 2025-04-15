
import React from 'react';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Circle } from 'lucide-react';

const VACCINATION_SCHEDULE = [
  {
    age: 'عند الولادة',
    vaccines: [
      { name: 'التهاب الكبد B', completed: true },
      { name: 'BCG (السل)', completed: true },
      { name: 'شلل الأطفال', completed: true },
    ]
  },
  {
    age: 'شهرين',
    vaccines: [
      { name: 'خماسي (DTP + Hib + التهاب الكبد B)', completed: false },
      { name: 'شلل الأطفال', completed: false },
      { name: 'المكورات الرئوية PCV13', completed: false },
      { name: 'الروتا', completed: false },
    ]
  },
  {
    age: '4 أشهر',
    vaccines: [
      { name: 'خماسي (DTP + Hib + التهاب الكبد B)', completed: false },
      { name: 'شلل الأطفال', completed: false },
      { name: 'المكورات الرئوية PCV13', completed: false },
      { name: 'الروتا', completed: false },
    ]
  },
  {
    age: '6 أشهر',
    vaccines: [
      { name: 'خماسي (DTP + Hib + التهاب الكبد B)', completed: false },
      { name: 'شلل الأطفال', completed: false },
      { name: 'المكورات الرئوية PCV13', completed: false },
      { name: 'الروتا', completed: false },
    ]
  },
  {
    age: '9 أشهر',
    vaccines: [
      { name: 'الحصبة، النكاف، الحصبة الألمانية (MMR)', completed: false },
    ]
  },
  {
    age: '12 شهر',
    vaccines: [
      { name: 'الحصبة، النكاف، الحصبة الألمانية (MMR)', completed: false },
      { name: 'جدري الماء', completed: false },
    ]
  },
  {
    age: '18 شهر',
    vaccines: [
      { name: 'خماسي (DTP + Hib + التهاب الكبد B)', completed: false },
      { name: 'شلل الأطفال', completed: false },
    ]
  }
];

const MILESTONES = [
  {
    age: '0-3 أشهر',
    physical: [
      { description: 'يرفع رأسه ورقبته عند وضعه على بطنه', achieved: true },
      { description: 'يتابع الأشياء المتحركة بعينيه', achieved: true },
      { description: 'يفتح ويغلق يديه', achieved: true },
    ],
    social: [
      { description: 'يبتسم استجابة للابتسامة', achieved: true },
      { description: 'يهدأ عند سماع صوت مألوف', achieved: true },
      { description: 'يبدأ بإصدار أصوات غير البكاء', achieved: true },
    ]
  },
  {
    age: '4-6 أشهر',
    physical: [
      { description: 'يتدحرج من الظهر إلى البطن والعكس', achieved: false },
      { description: 'يجلس بمساعدة', achieved: false },
      { description: 'يبدأ في الإمساك بالأشياء', achieved: false },
    ],
    social: [
      { description: 'يضحك بصوت عالٍ', achieved: false },
      { description: 'يظهر اهتماماً بالألعاب', achieved: false },
      { description: 'يتعرف على الوجوه المألوفة', achieved: false },
    ]
  },
  {
    age: '7-9 أشهر',
    physical: [
      { description: 'يجلس دون دعم', achieved: false },
      { description: 'يبدأ في الحبو', achieved: false },
      { description: 'يقف بمساعدة', achieved: false },
    ],
    social: [
      { description: 'يستجيب لاسمه', achieved: false },
      { description: 'يقلد أصواتاً وحركات بسيطة', achieved: false },
      { description: 'يظهر قلقاً من الغرباء', achieved: false },
    ]
  },
  {
    age: '10-12 شهر',
    physical: [
      { description: 'يقف لوحده لفترة قصيرة', achieved: false },
      { description: 'يمشي بمساعدة أو بالتشبث بالأثاث', achieved: false },
      { description: 'يلتقط أشياء صغيرة بإبهامه وسبابته', achieved: false },
    ],
    social: [
      { description: 'يقول كلمة أو كلمتين مثل "ماما" أو "بابا"', achieved: false },
      { description: 'يشير للأشياء التي يريدها', achieved: false },
      { description: 'يلعب ألعاباً بسيطة مثل "بيبو"', achieved: false },
    ]
  }
];

const GrowthPage = () => {
  return (
    <div>
      <Header title="النمو والتطعيمات" />
      
      <Tabs defaultValue="milestones">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="milestones">مراحل النمو</TabsTrigger>
          <TabsTrigger value="vaccinations">جدول التطعيمات</TabsTrigger>
        </TabsList>
        
        <TabsContent value="milestones" className="mt-4 space-y-4">
          {MILESTONES.map((milestone, index) => (
            <Card key={index} className="p-4">
              <h3 className="font-bold text-lg mb-3 bg-tameny-light p-2 rounded-lg text-tameny-primary">
                {milestone.age}
              </h3>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">التطور الجسدي</h4>
                <ul className="space-y-2">
                  {milestone.physical.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      {item.achieved ? (
                        <CheckCircle2 className="text-green-500 mt-0.5" size={18} />
                      ) : (
                        <Circle className="text-gray-300 mt-0.5" size={18} />
                      )}
                      <span className={item.achieved ? 'text-gray-800' : 'text-gray-500'}>
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">التطور الاجتماعي واللغوي</h4>
                <ul className="space-y-2">
                  {milestone.social.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      {item.achieved ? (
                        <CheckCircle2 className="text-green-500 mt-0.5" size={18} />
                      ) : (
                        <Circle className="text-gray-300 mt-0.5" size={18} />
                      )}
                      <span className={item.achieved ? 'text-gray-800' : 'text-gray-500'}>
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="vaccinations" className="mt-4 space-y-4">
          {VACCINATION_SCHEDULE.map((schedule, index) => (
            <Card key={index} className="p-4">
              <h3 className="font-bold text-lg mb-3 bg-tameny-light p-2 rounded-lg text-tameny-primary">
                {schedule.age}
              </h3>
              
              <ul className="space-y-2">
                {schedule.vaccines.map((vaccine, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                    {vaccine.completed ? (
                      <CheckCircle2 className="text-green-500" size={18} />
                    ) : (
                      <Circle className="text-gray-300" size={18} />
                    )}
                    <span className={vaccine.completed ? 'text-gray-800' : 'text-gray-500'}>
                      {vaccine.name}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GrowthPage;
