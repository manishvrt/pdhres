// hooks/useCountUp.js
const useCountUp = () => {
    const countUp = (ref, start, end, duration) => {
      if (!ref.current) return;
  
      const count = { value: start };
      const updateCount = () => {
        if (ref.current) {
          ref.current.innerText = Math.floor(count.value);
        }
        if (count.value < end) {
          count.value += end / (duration * 60);
          requestAnimationFrame(updateCount);
        } else {
          if (ref.current) {
            ref.current.innerText = end;
          }
        }
      };
      updateCount();
    };
  
    return countUp;
  };
  
  export default useCountUp;
  