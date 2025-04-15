
import React from 'react';
import { AlertCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EmergencyCardProps {
  title: string;
  symptoms: string[];
  action: string;
  severity: 'high' | 'medium' | 'low';
  phoneNumber?: string;
}

const EmergencyCard = ({ title, symptoms, action, severity, phoneNumber }: EmergencyCardProps) => {
  const severityColors = {
    high: 'bg-red-100 border-red-500 text-red-800',
    medium: 'bg-orange-100 border-orange-500 text-orange-800',
    low: 'bg-blue-100 border-blue-500 text-blue-800'
  };
  
  const severityIcons = {
    high: <AlertCircle className="text-red-500" />,
    medium: <AlertCircle className="text-orange-500" />,
    low: <AlertCircle className="text-blue-500" />
  };

  return (
    <div className={cn(
      "rounded-lg p-4 mb-4 border-r-4",
      severityColors[severity]
    )}>
      <div className="flex items-start gap-3">
        {severityIcons[severity]}
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          
          <h4 className="font-medium mb-1">الأعراض:</h4>
          <ul className="list-disc list-inside mb-3 text-sm">
            {symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
          
          <div className="bg-white bg-opacity-50 rounded-lg p-3 mb-3">
            <h4 className="font-medium mb-1">الإجراء المطلوب:</h4>
            <p className="text-sm">{action}</p>
          </div>
          
          {phoneNumber && (
            <Button 
              variant="outline"
              className="w-full flex items-center justify-center gap-2 border-current text-inherit hover:bg-white hover:bg-opacity-20"
              onClick={() => window.location.href = `tel:${phoneNumber}`}
            >
              <Phone size={16} />
              اتصل بطوارئ الأطفال
              <ArrowRight size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmergencyCard;
