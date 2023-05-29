import React, {useState} from 'react';
import { motion, useAnimationControls } from 'framer-motion';

type TextSpanProps = {
  children: string;
};

export const TextSpan: React.FC<TextSpanProps> = ({ children }) => {
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false)

  const rubberBand = () => {
    controls.start({
        transform: [
            "scale3d(1, 1, 1)",
            "scale3d(1.4, .55, 1)",
            "scale3d(.75, 1.25, 1)",
            "scale3d(1.25, .85, 1)",
            "scale3d(.9, 1.05, 1)",
            "scale3d(1, 1, 1)",
          ],
          transition: {
            time: [
                0,.4,.5,.6,.7,.8,.9,
            ]
          }
    })
   setIsPlaying(true)
  };

  return (
    <motion.span 
    animate={controls}
    onMouseOver={() => {    
        if(!isPlaying){
            rubberBand()
        }
    }}
    onAnimationComplete={()=>setIsPlaying(false)}
    className="inline-block">
      {children}
    </motion.span>
  );
};