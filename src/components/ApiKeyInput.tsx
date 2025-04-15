
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface ApiKeyInputProps {
  onApiKeySet: () => void;
}

const ApiKeyInput = ({ onApiKeySet }: ApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      localStorage.setItem('openai_key', apiKey.trim());
      toast.success('API key saved');
      onApiKeySet();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-right">إعداد المساعد الذكي</h2>
      <p className="text-sm text-gray-600 text-right">
        يرجى إدخال مفتاح API الخاص بك من OpenAI للمتابعة
      </p>
      <Input
        type="password"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="sk-..."
        className="w-full"
      />
      <Button type="submit" className="w-full">
        حفظ المفتاح
      </Button>
    </form>
  );
};

export default ApiKeyInput;
