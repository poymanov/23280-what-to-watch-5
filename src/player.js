export const calculateTimeData = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  return {hours, minutes, seconds};
};

export const calculatePlayingPosition = (currentTime, duration) => {
  return (currentTime / duration) * 100;
};

export const calculateElapsedData = (durationData, currentTimeData) => {
  return {
    hours: durationData.hours - currentTimeData.hours,
    minutes: durationData.minutes - currentTimeData.hours,
    seconds: durationData.seconds - currentTimeData.seconds,
  };
};
