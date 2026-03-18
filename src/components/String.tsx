import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.tsx";

export default function String() {
    const { isDark } = useTheme();
    
    return (
        <section className={`h-full py-12 max-md:py-5.25 flex items-center overflow-hidden ${isDark ? `bg-[#141414]` : `bg-black`}`}>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: [0, -1000]
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear"
                    }
                }}
            >
                <p className={`font-['Work Sans'] font-semibold text-[140px] max-md:text-5xl leading-[110%] tracking-[-2%] text-white mr-10`}>
                    Visual design for digital experiences
                </p>
                <p className={`font-['Work Sans'] font-semibold text-[140px] max-md:text-5xl leading-[110%] tracking-[-2%] text-white mr-10`}>
                    Visual design for digital experiences
                </p>
                <p className={`font-['Work Sans'] font-semibold text-[140px] max-md:text-5xl leading-[110%] tracking-[-2%] text-white mr-10`}>
                    Visual design for digital experiences
                </p>
            </motion.div>
        </section>
    );
}