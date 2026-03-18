import {useTheme} from "../context/ThemeContext.tsx";

const cards = [
    {
        title: 'Branding',
        description: 'Collaborating closely, we\'ll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.',
    },
    {
        title: 'UI Design',
        description: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
    },
    {
        title: 'UX Design',
        description: 'I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.',
    },
    {
        title: 'Development',
        description: 'I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.',
    },

]

export default function Expertise(){
    const {isDark} = useTheme();
    return(
        <section className={`h-auto flex items-center justify-center px-28 max-md:px-4 py-19 max-md:py-12 ${isDark ? 'bg-black' : 'bg-white'}` }>
            <div className={`flex flex-col gap-11 max-md:gap-3.5 `}>
                <h2 className={`font-['Work Sans'] font-semibold text-5xl max-md:text-2xl leading-[120%] tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>Expertise</h2>

                <div className = {`grid grid-cols-2 max-md:grid-cols-1 gap-x-68.5 gap-y-20 max-md:gap-y-8 justify-center w-full`}>
                    {cards.map((card, index) => (
                        <div key={index}>
                            <h3 className={`font-['Work Sans'] font-semibold text-3xl max-md:text-xl leading-[130%] tracking-[-1%] mb-4 max-md:mb-3 ${isDark?`text-white before:content-['•'] before:mr-2 before:text-white`:`text-black before:content-['•'] before:mr-2 before:text-black`}`}>{card.title}</h3>
                            <p className={`font-['Work Sans'] font-medium text-xl max-md:text-sm leading-[140%] tracking-[-1%] max-w-112 ${isDark?`text-white`:`text-black`}`}>{card.description}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}