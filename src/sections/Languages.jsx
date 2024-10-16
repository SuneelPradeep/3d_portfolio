


import React, { useState, useEffect,useRef } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useInView} from 'framer-motion';
import {LanguagesData} from '../constants/index'
import useWindowDimensions, { Breakpoints } from '../hooks/useWindowDimensions';



const ProgressBar = ({ targetPercentage, duration, language }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const {width} = useWindowDimensions()
  // const isDesktop = width > Breakpoints.lg;
  // const isTablet = width >Breakpoints.md && width < Breakpoints.lg;
  // let imagewidth = isDesktop ? 178 : isTablet ? 90 : 45;
  // let imageheight = isDesktop ? 80 : isTablet ? 60 : 25;
  const [imageDimensions, setImageDimensions] = useState({width: 178 , height : 90})

  useEffect(() => {
    const isDesktop = width > Breakpoints.lg;
    const isTablet = width > Breakpoints.md && width < Breakpoints.lg;

    setImageDimensions({
      width: isDesktop ? 178 : isTablet ? 90 : 45,
      height: isDesktop ? 80 : isTablet ? 60 : 25,
    });
  }, [width]);

  useEffect(() => {
    const animateProgress = async () => {
      let start = 0;
      const interval = (duration * 1000) / targetPercentage;
      const intervalId = setInterval(() => {
        if (start < targetPercentage) {
          start++;
          setProgress(start);
        } else {
          clearInterval(intervalId);
        }
      }, interval);
    };

    if (isInView) {
      animateProgress();
    }
  }, [targetPercentage, duration, isInView]);

  return (
  <div ref={ref} className="relative w-[15%] flex flex-col items-center justify-center text-center gap-6 dark:text-white text-black">
       
         <CircularProgressbarWithChildren
          value={progress}
          className="dark:text-white text-black"
          text={`${progress}%`}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            // pathColor: "#ff8a05",
            // trailColor: "#ff5478",
            // backgroundColor: '#3e98c7',
            pathColor: "#00c6ff",
            trailColor: "#ff5478",
            backgroundColor: '#0072ff',
            // group-hover:from-[#00c6ff] group-hover:via-[#ff5478] group-hover:to-[#0072ff] absolute rounded-xl" />
   
          })}
        >
          <div className="my-4" >
            <img
              src={language.image}
              width={imageDimensions.width}
              height={imageDimensions.width}
              className="rounded-full"
              alt={language.name}  style={{ width: `${imageDimensions.width}px`}}
            />
          </div>
        </CircularProgressbarWithChildren>
        <p className="mt-2 mb-10 font-poppins">{language.name} ({progress}%)</p>
      </div>
  )}


const Languages = () => {

  return (
    <div id="Languages" className="mx-6 lg:mx-12 my-6 flex flex-col gap-12"> 
    <h3 className='subhead-text'> Languages </h3>
      <div className="flex gap-12 lg:gap-16 items-center justify-center flex-row">
        {LanguagesData.map((lang, id) => ( 
          <ProgressBar key={id} targetPercentage={lang.percentage} language={lang} duration={2.5} />
        ))}
      </div>
    </div>
  );
};

export default Languages;

