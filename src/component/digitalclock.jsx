import  { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen bg-gray-900">
    <h5 className="text-white  text-7xl font-mono bg-gray-800 p-10 rounded-lg shadow-lg">Digital Clock</h5>
      <div className="text-white text-7xl font-mono bg-gray-800 p-10 rounded-lg shadow-lg">
        {formatTime(time)}
      </div>
    </div>
  );
}

export default DigitalClock;
