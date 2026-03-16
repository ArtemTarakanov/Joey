import { useTheme } from '../context/ThemeContext';
export default function Hero(){
    const { isDark } = useTheme();
    return(
        <section className = {`h-185 gap-20 max-md:gap-8 flex flex-col items-center max-md:py-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className = "flex flex-row  ">
                <h1 className = {` font-['Work Sans'] font-semibold text-[227px] leading-[90%] tracking-[-2%] max-md:text-5xl max-md:leading-[120%] max-md:tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>Websites& <span className = "flex flex-row items-center align-middle gap-10 max-md:flex-col max-md:gap-5 "> Branding <button className = {`flex items-center justify-center  mt-16 max-md:mt-0 rounded-[144px] py-7 max-md:py-4 px-8 max-md:px-5 max-md:w-[180px] ${isDark?`bg-[#141414]`:`bg-[#F9F9F9]`}`}>
                    <a href="#" className = {`font-['Work Sans'] font-semibold text-xl max-md:text-sm leading-[140%] tracking-[-1%] flex flex-row gap-2 items-center ${isDark?`text-white`:`text-black`}`}>

                        SCROLL DOWN

                        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.02722 12.6657C7.3145 12.3537 7.66169 11.9914 8.05373 11.6103C9.1898 10.5057 10.745 9.20094 12.335 8.53846L12.7196 9.46154C11.3095 10.0491 9.86474 11.2443 8.75081 12.3272C8.1993 12.8634 7.73931 13.3617 7.41747 13.7257C7.25668 13.9076 7.13071 14.0555 7.04541 14.1574C7.00277 14.2083 6.97032 14.2477 6.94878 14.2741L6.92477 14.3036L6.91909 14.3106L6.91785 14.3122L6.52727 14.8004L6.1369 14.3124L6.13545 14.3106L6.12976 14.3036L6.10575 14.2741C6.08422 14.2477 6.05177 14.2083 6.00912 14.1574C5.92383 14.0555 5.79786 13.9076 5.63707 13.7257C5.31523 13.3617 4.85524 12.8634 4.30373 12.3272C3.1898 11.2443 1.74502 10.0491 0.334961 9.46154L0.719576 8.53846C2.30951 9.20094 3.86474 10.5057 5.00081 11.6103C5.39281 11.9914 5.73996 12.3537 6.02722 12.6656V0H7.02722V12.6657Z" fill={`${isDark?`white`:`black`}`} stroke={`${isDark?`white`:`black`}`}/>
                        </svg>

                    </a></button></span></h1>

            </div>

            <div className={`flex flex-row gap-155 max-md:gap-12 items-center justify-around `}>

                <div className={`flex flex-col gap-2.25`}>
                    <p className = {` font-['Work Sans'] font-semibold text-2xl max-md:text-xl leading-[130%] max-md:leading-[140%] tracking-[-1%] ${isDark? `text-white`:`text-black`}`}>Let’s Talk</p>
                    <span className = {`font-['Work Sans'] font-medium text-xl max-md:text-sm leading-[140%] max-md:leading-6 tracking-[-1%] ${isDark?`text-white`:`text-black`}`}>hello@joey.co</span>
                </div>

                <p className = {`font-[Work Sans] font-medium text-xl max-md:text-sm leading-[140%] max-md:leading-6 tracking-[-1%] max-w-117.75 max-md:w-52 max-md:hidden ${isDark?`text-white`:`text-dark`}`}>Hello, I'm Joey, an online product designer focusing on brand identity, advertising, and no-code instruments.</p>
                <p className = {`font-[Work Sans] font-medium text-xl max-md:text-sm leading-[140%] max-md:leading-6 tracking-[-1%] max-w-117.75 max-md:w-52 md:hidden ${isDark?`text-white`:`text-dark`}`}>Hey there, I'm Joey, a digital product designer specializing in branding, marketing, and no-code tools.</p>


            </div>
        </section>
    );
}