'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [serverCount, setServerCount] = useState(null);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const fetchFromServer = async () => {
    try {
      const response = await fetch('/api/counter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count }),
      });
      
      const data = await response.json();
      setServerCount(data.count);
    } catch (error) {
      console.error('Error fetching from server:', error);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Counter</h1>
      <p>This page demonstrates client-side interactivity and API calls.</p>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={decrementCount}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <span className="text-2xl">{count}</span>
        <button 
          onClick={incrementCount}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
      
      <div className="space-y-4">
        <button 
          onClick={fetchFromServer}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send to Server
        </button>
        
        {serverCount !== null && (
          <div className="p-4 border rounded bg-gray-100">
            <p>Server response: The count multiplied by 2 is <strong>{serverCount}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}