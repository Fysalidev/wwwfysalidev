/*
	Installed from https://reactbits.dev/tailwind/
*/

"use client";

import { useRef, useEffect } from "react";
import { createBallpit } from "../lib/ballpit";

const Ballpit = ({ className = "", followCursor = true, ...props }) => {
  const canvasRef = useRef(null);
  const spheresInstanceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    spheresInstanceRef.current = createBallpit(canvas, {
      followCursor,
      ...props,
    });

    return () => {
      if (spheresInstanceRef.current) {
        spheresInstanceRef.current.dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas className={`${className} w-full h-full`} ref={canvasRef} />;
};

export default Ballpit;
