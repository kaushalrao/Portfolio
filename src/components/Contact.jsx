import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover, linkedin, medium } from '../assets';

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row
        overflow-hidden"
    >
      <motion.div
        className="flex justify-center items-center gap-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <a target="_blank" href="https://www.linkedin.com/in/kaushal-kudpi/">
          <div className="bg-jetLight rounded-[20px] py-5 px-10 min-h-[150px] flex justify-evenly items-center flex-col">
            <img
              src={linkedin}
              alt={'linkedin'}
              className="w-16 h-16 object-contain"
            />
          </div>
        </a>
        <a target="_blank" href="https://medium.com/@kaushalraok">
          <div className="bg-jetLight rounded-[20px] py-5 px-10 min-h-[150px] flex justify-evenly items-center flex-col">
            <img
              src={medium}
              alt={'medium blog'}
              className="w-16 h-16 object-contain"
            />
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
