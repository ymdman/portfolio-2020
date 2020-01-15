export const throttle = (func: Function, timeFrame: number): Function => {
  let lastTime = 0;

  return (): void => {
    const now = Number(new Date());
    if (now - lastTime >= timeFrame) {
      func();
      lastTime = now;
    }
  };
};
