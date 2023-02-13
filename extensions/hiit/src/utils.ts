export const secondsToTime = (secs: number) => {
  return new Date(secs * 1000).toISOString().substring(14, 19);
};

export const setsToSeconds = (sets: number, high: number, low: number, warmup: number, cooldown: number) => {
  return sets * high + (sets - 1) * low + warmup + cooldown;
};

export const calculateInterval = (sets: number, warmup: number, cooldown: number) => {
  let intervals = sets * 2 - 1;
  if (warmup > 0) intervals++;
  if (cooldown > 0) intervals++;
  return intervals;
};

export const requiresNumberGreaterThan = (value: string | undefined, minValue?: number) => {
  if (!value?.length) {
    return "Please enter a number";
  }
  if (value && isNaN(parseInt(value))) {
    return "Please enter a number";
  }
  if (minValue && value && value <= minValue.toString()) {
    return `Please select a number greater than ${minValue}`;
  }
};
