import { useState, useEffect } from "react";
export default function Line() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    let animationFrame: number;
    let currentWidth: number = 0;

    function increaseLineWidth(): void {
      currentWidth += 5;
      setWidth(currentWidth);

      if (currentWidth <= 100) {
        animationFrame = requestAnimationFrame(increaseLineWidth);
      }
    }

    animationFrame = requestAnimationFrame(increaseLineWidth);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return <div className="show-line" style={{ maxWidth: `${width}px` }}></div>;
}
