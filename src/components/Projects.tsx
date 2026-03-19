import { useTheme } from "../context/ThemeContext";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cards = [
    {
        card: '/images/card-1.svg',
        title: 'Crtly',
        subtitle: 'Mobile App'
    },
    {
        card: '/images/card-2.svg',
        title: 'Tansto',
        subtitle: 'Web Design'
    },
    {
        card: '/images/card-3.svg',
        title: 'Senta',
        subtitle: 'Mobile App & Branding'
    },
    {
        card: '/images/card-4.svg',
        title: 'Crint',
        subtitle: 'Mobile App'
    },
]

export default function Projects() {
    const { isDark } = useTheme();
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.5
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 60,
            scale: 0.85
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return(
        <section className = {`h-full pb-38 flex flex-col px-40 max-md:px-4 max-md:py-14 max-md:pb-0 gap-10 max-md:gap-8 items-center justify-center max-w-400 ${isDark ? 'bg-black' : 'bg-white'}`}>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className = "flex flex-col gap-2.5 w-full">
                <h2 className={`font-['Work Sans'] font-semibold text-5xl max-md:text-2xl  leading-[120%] max-md:leading-[130%] tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>Projects</h2>
                <p className={`font-['Work Sans'] font-medium text-xl leading-[140%] tracking-[-1%] max-w-100 max-md:hidden ${isDark?`text-white`:`text-black`}`}>As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
                <p className={`font-['Work Sans'] font-medium text-sm leading-6 tracking-[-1%]  md:hidden ${isDark?`text-white`:`text-black`}`}>As an experienced developer of modern, intuitive websites and digital products, I want to help you build the brand of your dreams.</p>
            </motion.div>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className = "grid grid-cols-2 gap-8 max-md:gap-12 max-md:grid-cols-1">
                {cards.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="flex flex-col gap-4 max-md:gap-3">
                        <img src={item.card} alt="card"/>
                        <span className = "flex flex-row gap-2 text-center items-center">
                            <h2 className = {`font-['Work Sans'] font-semibold text-xl leading-[140%] tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>{item.title}</h2>
                            <span className={isDark?`text-white`:`text-black`}>-</span>
                            <p className = {`font-['Work Sans'] font-medium text-xl leading-[140%] tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>{item.subtitle}</p>
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}