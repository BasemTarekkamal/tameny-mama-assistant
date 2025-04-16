
export const sendMessageToWebhook = async (message: string) => {
  try {
    const response = await fetch('https://hook.eu2.make.com/mgot8zcgyc2vxn4t9ikttf397tahsv26', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Webhook request failed');
    }

    const data = await response.json();
    return data.response || 'عذراً، لم أتمكن من فهم سؤالك. هل يمكنك إعادة صياغته؟';
  } catch (error) {
    console.error('Webhook error:', error);
    throw error;
  }
};
