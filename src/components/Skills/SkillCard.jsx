import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -10,
        rotateX: 2,
        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
      }}
      whileTap={{ scale: 0.97 }}
      className="group relative  flex-shrink-0 w-72 h-24 bg-gradient-to-br from-slate-900/98 via-[#8245ec]/3 to-slate-900/98 rounded-full border border-slate-700/40 hover:border-[#8245ec]/80 shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_25px_60px_rgba(130,69,236,0.25)] transition-all duration-500 overflow-hidden backdrop-blur-xl"
    >
      {/* Polished grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(130,69,236,0.06)_50%,transparent_75%)] bg-[length:24px_24px]" />
      </div>
      
      {/* Refined glow aura */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8245ec]/10 via-transparent/50 to-[#8245ec]/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-800" />
      
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-20 group-hover:opacity-60 shadow-sm transition-all duration-500" />
      
      {/* Content */}
      <div className="relative flex items-center gap-6 p-6 h-full">
        {/* Premium logo container */}
        <motion.div 
          className="relative flex-shrink-0 w-16 h-16 bg-white/8 hover:bg-white/12 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-slate-600/30 hover:border-[#8245ec]/60 shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_30px_rgba(130,69,236,0.3)] transition-all duration-500"
          whileHover={{ 
            scale: 1.2, 
            rotate: [0, -12, 12, 0],
            boxShadow: "0 0 30px rgba(130,69,236,0.5)"
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img 
            src={skill.logo} 
            alt={skill.name}
            className="w-10 h-10 object-contain filter brightness-100 invert group-hover:brightness-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-400"
          />
        </motion.div>

        {/* Polished typography */}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-xl leading-tight text-white/95 group-hover:text-[#8245ec] tracking-wide truncate drop-shadow-sm hover:drop-shadow-lg transition-all duration-400">
            {skill.name}
          </h4>
        </div>

        {/* Elegant arrow */}
        <motion.div 
          className="text-2xl opacity-0 group-hover:opacity-100 text-[#8245ec] ml-4 drop-shadow-2xl"
          animate={{ x: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.8, 
            ease: "easeInOut",
            repeatDelay: 0.5
          }}
        >
          →
        </motion.div>
      </div>

      {/* Premium bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8245ec]/90 to-transparent opacity-30 group-hover:opacity-100 shadow-lg transition-all duration-600" />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#8245ec]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
};

export default SkillCard;
