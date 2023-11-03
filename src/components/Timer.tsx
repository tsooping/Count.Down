import React, { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(240); // Initial time in seconds (4 minutes)
  const [isActive, setIsActive] = useState<boolean>(false);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    // Change text color based on time
    const textColor = time <= 10 ? "red" : time < 60 ? "yellow" : "white";
    return (
      <span style={{ color: textColor }}>
        {minutes}:{remainingSeconds}
      </span>
    );
  };

  useEffect(() => {
    let countdown: number;

    if (isActive && time > 0) {
      countdown = window.setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      // Time's up
      setIsActive(false);
    }

    return () => window.clearInterval(countdown);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(240); // Reset to 4 minutes (240 seconds)
  };

  return (
    <>

        <div className="gradientBackground w-screen h-screen justify-center items-center flex">
          <div className="text-[50vh] font-bold mt-[-100px]">
            {formatTime(time)}
          </div>
        </div>
        <div className="fixed bottom-0 w-full text-white text-center flex items-center justify-center m-4 space-x-4 ml-0">
          {!isActive && (
            <button
              className=" text-white px-4 py-2 rounded-md"
              onClick={startTimer}
            >
              <FaPlay />
            </button>
          )}
          {isActive && (
            <button
              className=" text-white px-4 py-2 rounded-md"
              onClick={stopTimer}
            >
              <FaPause />
            </button>
          )}
          <button
            className=" text-white px-4 py-2 rounded-md"
            onClick={resetTimer}
            disabled={isActive}
          >
            <LuTimerReset />
          </button>
        </div>
    </>
  );
};

export default Timer;
