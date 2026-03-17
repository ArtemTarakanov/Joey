import { useTheme } from "../context/ThemeContext";

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
    return(
        <section className = {`h-full pb-38 flex flex-col px-28 max-md:px-4 max-md:py-14 gap-10 max-md:gap-8 items-center justify-center ${isDark ? 'bg-black' : 'bg-white'}`}>

            <div className = "flex flex-col gap-2.5 justify-start w-full">
                <h2 className={`font-['Work Sans'] font-semibold text-5xl max-md:text-2xl  leading-[120%] max-md:leading-[130%] tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>Projects</h2>
                <p className={`font-['Work Sans'] font-medium text-xl leading-[140%] tracking-[-1%] max-w-100 max-md:hidden ${isDark?`text-white`:`text-black`}`}>As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
                <p className={`font-['Work Sans'] font-medium text-sm leading-6 tracking-[-1%]  md:hidden ${isDark?`text-white`:`text-black`}`}>As an experienced developer of modern, intuitive websites and digital products, I want to help you build the brand of your dreams.</p>
            </div>

            <div className = "grid grid-cols-2 gap-8 max-md:gap-12 max-md:grid-cols-1">
                {cards.map((item, index)=>(
                    <div key={index} className="flex flex-col gap-4 max-md:gap-3">
                        <img src={item.card} alt="card"/>

                        <span className = "flex flex-row gap-2 text-center items-center">
                            <h2 className = {`font-['Work Sans'] font-semibold text-xl leading-[140%] tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>{item.title}</h2>
                            <span className={isDark?`text-white`:`text-black`}>-</span>
                            <p className = {`font-['Work Sans'] font-medium text-xl leading-[140%] tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>{item.subtitle}</p>
                        </span>
                    </div>
                    ))}
            </div>
        </section>
    );
}