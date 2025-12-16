import React from 'react';
import { motion } from "framer-motion";
import { skill } from '../../constants';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  // Triple the array for seamless loop (33 skills x 3 = 99 total)
  const marqueeSkills = [...skill, ...skill, ...skill];

  return (
    <section 
      id="skills"
      className="py-16 md:py-20 px-6 md:px-12 lg:px-16 font-sans bg-skills-gradient clip-path-custom overflow-hidden relative"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#8245ec]/10 to-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-pink-500/10 to-[#8245ec]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Dual Marquees - FASTER for 30s cycle */}
      <div className="relative space-y-12 md:space-y-16 max-w-7xl mx-auto">
        {/* Forward Marquee - 30s cycle */}
        <motion.div
          className="flex gap-4 md:gap-6 mb-8 md:mb-12"
          animate={{ x: [0, -2800] }} // Full width for 33 skills
          transition={{ 
            duration: 30,  // All skills in 30s
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {marqueeSkills.map((skillItem, index) => (
            <SkillCard key={`forward-${index}`} skill={skillItem} />
          ))}
        </motion.div>

        {/* Reverse Marquee - 30s cycle */}
        <motion.div
          className="flex gap-4 md:gap-6"
          animate={{ x: [-2800, 0] }}
          transition={{ 
            duration: 30,  // All skills in 30s
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {marqueeSkills.map((skillItem, index) => (
            <SkillCard key={`reverse-${index}`} skill={skillItem} />
          ))}
        </motion.div>
      </div>

      {/* Fade Edges */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-24 bg-gradient-to-r from-current via-current/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-24 bg-gradient-to-l from-current via-current/80 to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default SkillsSection;
