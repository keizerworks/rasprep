"use client"
import React, { useState, useEffect } from 'react';

// Sound to play when timer ends
const alarmSound = new Audio('https://www.soundjay.com/button/beep-07.wav');

const Pomodoro = () => {
  const [mode, setMode] = useState('25/5'); // Mode: '25/5' or '50/10'
  const [time, setTime] = useState(1500); // Time in seconds (25 minutes initially)
  const [isRunning, setIsRunning] = useState(false);

  const switchMode = () => {
    if (mode === '25/5') {
      setMode('50/10');
      setTime(3000); // 50 minutes in seconds
    } else {
      setMode('25/5');
      setTime(1500); // 25 minutes in seconds
    }
    setIsRunning(false); // Stop the timer when mode is switched
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    if (mode === '25/5') {
      setTime(1500); // Reset to 25 minutes
    } else {
      setTime(3000); // Reset to 50 minutes
    }
    setIsRunning(false);
  };

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      alarmSound.play(); // Play the alarm when time is up
      resetTimer(); // Reset the timer automatically after time finishes
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  // Format time in mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Pomodoro Timer</h1>
      <div className="flex items-center justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 rounded-lg ${mode === '25/5' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={switchMode}
        >
          25/5 Mode
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-lg ${mode === '50/10' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={switchMode}
        >
          50/10 Mode
        </button>
      </div>
      <div className="text-6xl font-mono mb-6">{formatTime(time)}</div>
      <div className="flex">
        {isRunning ? (
          <button
            className="px-6 py-2 mx-2 bg-red-500 text-white rounded-lg"
            onClick={stopTimer}
          >
            Stop
          </button>
        ) : (
          <button
            className="px-6 py-2 mx-2 bg-green-500 text-white rounded-lg"
            onClick={startTimer}
          >
            Start
          </button>
        )}
        <button
          className="px-6 py-2 mx-2 bg-gray-500 text-white rounded-lg"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
