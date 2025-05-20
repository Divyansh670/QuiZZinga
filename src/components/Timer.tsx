import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Clock } from 'lucide-react';

interface TimerProps {
  seconds: number;
  total: number;
}

const Timer: React.FC<TimerProps> = ({ seconds, total }) => {
  const { theme } = useTheme();
  const percentage = (seconds / total) * 100;
  
  let timerColor = 'bg-green-500';
  if (percentage < 50) {
    timerColor = 'bg-yellow-500';
  }
  if (percentage < 25) {
    timerColor = 'bg-red-500';
  }

  return (
    <div className="flex items-center">
      <div className="mr-2">
        <Clock size={20} />
      </div>
      <div className="flex items-center">
        <div className="mr-2 font-bold min-w-[2rem]">{seconds}s</div>
        <div className="w-24 h-2 rounded-full bg-gray-200">
          <div 
            className={`h-full rounded-full ${timerColor} transition-all duration-300 ease-linear`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Timer;