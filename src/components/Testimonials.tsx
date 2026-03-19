import { useTheme } from "../context/ThemeContext.tsx";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonials(){
    const { isDark } = useTheme();
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return(
        <section className={`h-full flex items-center justify-center py-20 max-md:py-12 px-28 max-md:px-4 ${isDark?`bg-black`:`bg-white`}`}>
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-4 max-md:gap-6`}>
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`font-['Work Sans'] font-semibold text-[64px] max-md:text-2xl max-md:leading-[130%]  leading-[110.00000000000001%] tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>
                    Testimonials
                </motion.h2>

                <div className={`flex flex-row max-md:flex-col gap-20 max-md:gap-4 items-start`}>
                    <motion.p 
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className={`font-['Work Sans'] font-medium text-5xl max-md:text-sm leading-[130%] max-md:leading-6 tracking-[-1%] max-w-238 ${isDark?`text-white`:`text-black`}`}>
                        "Joey is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I've witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature."
                    </motion.p>

                    <motion.span 
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className={`flex flex-col gap-2.125`}>
                        <h3 className={`font-['Work Sans'] font-bold text-xl max-md:text-sm leading-[140%] tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>Chris Ellington</h3>
                        <p className={`font-['Work Sans'] font-medium text-lg max-md:text-xs max-md:leading-6 leading-[140%] tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>Product Lead,Gatha.</p>
                    </motion.span>
                </div>
            </motion.div>
        </section>
    );
}