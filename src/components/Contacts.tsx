import { useTheme } from "../context/ThemeContext.tsx";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contacts(){
    const { isDark } = useTheme();
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return(
        <section className={`h-full px-28 max-md:px-4 py-12 flex items-center justify-center max-md:border-t ${isDark?`bg-black`:`bg-white`}`}>
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-37.5 max-md:gap-12 items-center w-full`}>

                <div className={`gap-12 max-md:gap-6 flex flex-col items-center justify-center`}>
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`font-['Work Sans'] font-semibold text-[140px] max-md:text-5xl leading-[110.00000000000001%] max-md:leading-[120%] tracking-[-2%] max-md:tracking-[-2%] ${isDark?`text-white`:`text-black`}`}>
                        Let's talk!
                    </motion.span>
                    <motion.button 
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className = {`rounded-[144px] flex flex-row items-center justify-center gap-2 max-w-65 py-8 max-md:py-6 px-13.25 ${isDark?`bg-[#141414]`:`bg-black`}`}>
                        <a href="#" className={`font-['Work Sans'] font-semibold text-xl leading-[140%] tracking-[-1%] text-white`}>hello@joey.co</a>
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_535_429)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1794 5.87411C12.7556 5.89159 12.254 5.90228 11.7073 5.89454C10.1229 5.87229 8.10058 5.6952 6.50783 5.03934L6.8886 4.11467C8.30115 4.6963 10.1679 4.87276 11.7213 4.89471C12.4904 4.90553 13.168 4.87844 13.653 4.84863C13.8953 4.8337 14.089 4.8182 14.2213 4.80646C14.2875 4.80062 14.3383 4.7957 14.3722 4.79227L14.41 4.78838L14.419 4.78745L14.421 4.7872L15.0424 4.71817L14.9733 5.33927L14.9731 5.34157L14.9722 5.35054L14.9683 5.38838C14.9648 5.42227 14.9599 5.47308 14.9541 5.53923C14.9423 5.67159 14.9268 5.86524 14.9119 6.10756C14.8821 6.59253 14.855 7.27014 14.8658 8.03927C14.8878 9.59266 15.0643 11.4594 15.6459 12.8719L14.7212 13.2527C14.0654 11.66 13.8883 9.63767 13.866 8.05328C13.8583 7.50662 13.869 7.00496 13.8864 6.58129L4.9305 15.5372L4.2234 14.8301L13.1794 5.87411Z" fill="white" stroke="white"/></g><defs><clipPath id="clip0_535_429"><rect width="13" height="15" fill="white" transform="translate(9.19239 19.7991) rotate(-135)"/></clipPath></defs></svg>
                        </span>
                    </motion.button>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-row max-md:flex-col-reverse gap-190 max-md:gap-4">

                    <p className={`font-['Work Sans'] font-medium text-sm max-md:text-[10px] leading-6 tracking-[-1%] max-md:text-center ${isDark?`text-white`:`text-black`}`}>2026 © — Made by Djectstudio</p>
                    <ul className={`flex flex-row font-['Work Sans'] font-medium text-xs leading-6 tracking-[-1%] gap-10 ${isDark?`text-white`:`text-black`}`}>
                        <li>Dribbble</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>

                </motion.div>

            </motion.div>
        </section>
    );
}