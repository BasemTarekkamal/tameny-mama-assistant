
export interface AssistantMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function createThread() {
  const response = await fetch('https://api.openai.com/v1/threads', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('openai_key')}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.id;
}

export async function addMessageToThread(threadId: string, content: string) {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('openai_key')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      role: 'user',
      content: content,
    }),
  });
  return response.json();
}

export async function runAssistant(threadId: string) {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('openai_key')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      assistant_id: "asst_rD0jhh9IjfGbtgmAE47GjBf6"
    }),
  });
  return response.json();
}

export async function checkRunStatus(threadId: string, runId: string) {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('openai_key')}`,
    },
  });
  return response.json();
}

export async function getMessages(threadId: string) {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('openai_key')}`,
    },
  });
  const data = await response.json();
  return data.data[0].content[0].text.value;
}
