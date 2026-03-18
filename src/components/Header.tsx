import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useActiveAnchor } from '../hooks/useActiveAnchor';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const activeAnchor = useActiveAnchor();

    const isActive = (anchor: string) => activeAnchor === anchor;

    return(
        <>
            <section className={`h-30 flex justify-center items-center max-md:max-h-18 max-md:px-7 max-md:py-5 max-md:justify-between w-full ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div className="flex flex-col items-center justify-center gap-8 max-md:flex-row max-md:justify-between max-md:w-full">

                    <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:hidden">
                        <path d="M89.395 12.7998C87.9421 14.2528 86.1547 14.9792 84.0329 14.9792C81.9112 14.9792 80.1123 14.2528 78.6363 12.7998C77.1833 11.3469 76.4568 9.57103 76.4568 7.47232C76.4568 5.37362 77.1833 3.60932 78.6363 2.17943C80.1123 0.726475 81.9112 0 84.0329 0C86.1547 0 87.9421 0.726475 89.395 2.17943C90.871 3.60932 91.609 5.37362 91.609 7.47232C91.609 9.57103 90.871 11.3469 89.395 12.7998ZM79.8125 3.21725C78.7054 4.34732 78.1519 5.76568 78.1519 7.47232C78.1519 9.17897 78.7054 10.6089 79.8125 11.762C80.9425 12.8921 82.3494 13.4571 84.0329 13.4571C85.7165 13.4571 87.1118 12.8921 88.2188 11.762C89.3489 10.6089 89.9139 9.17897 89.9139 7.47232C89.9139 5.76568 89.3489 4.34732 88.2188 3.21725C87.1118 2.08718 85.7165 1.52214 84.0329 1.52214C82.3494 1.52214 80.9425 2.08718 79.8125 3.21725ZM81.3692 10.8971V3.80535H84.8978C85.6358 3.80535 86.2354 4.00138 86.6967 4.39345C87.1579 4.78552 87.3886 5.2929 87.3886 5.91559C87.3886 6.35378 87.2502 6.73432 86.9734 7.05719C86.6967 7.38007 86.3277 7.58764 85.8664 7.67989C86.6044 7.84133 86.9965 8.32565 87.0426 9.13284L87.1118 10.1361C87.1579 10.5743 87.2041 10.828 87.2502 10.8971H85.5897C85.5436 10.828 85.4974 10.5973 85.4513 10.2053L85.3821 9.23662C85.336 8.61393 85.0362 8.30258 84.4827 8.30258H83.0297V10.8971H81.3692ZM83.0297 7.19557H84.5864C85.3245 7.19557 85.6935 6.81504 85.6935 6.05397C85.6935 5.75415 85.5897 5.51199 85.3821 5.32749C85.1745 5.14299 84.9093 5.05074 84.5864 5.05074H83.0297V7.19557Z" fill={isDark ? 'black' : 'white'}/>
                        <path d="M56.7427 27.2256C59.4411 27.9175 61.2861 27.2486 62.2778 25.2191L62.5546 24.5964L55.3936 7.36856H61.067L65.4951 18.6116L69.6117 7.36856H75.0084L67.9166 25.0115C66.8096 27.8252 65.276 29.7855 63.3156 30.8925C61.3553 32.0226 59.1643 32.2878 56.7427 31.6882V27.2256Z" fill={isDark ? 'white' : 'black'}/>
                        <path d="M47.6061 25.5651C44.9308 25.5651 42.7284 24.6771 40.9987 22.9013C39.2689 21.1255 38.4041 18.8769 38.4041 16.1555C38.4041 13.411 39.2689 11.1508 40.9987 9.37502C42.7284 7.59919 44.9193 6.71127 47.5715 6.71127C50.5466 6.71127 52.8529 7.80675 54.4904 9.99771C56.1278 12.1656 56.7159 14.7832 56.2547 17.8506H43.8008C43.893 18.8884 44.2966 19.7417 45.0116 20.4105C45.7265 21.0794 46.6144 21.4138 47.6753 21.4138C48.5286 21.4138 49.3012 21.1947 49.9931 20.7565C50.685 20.2952 51.1578 19.7071 51.4115 18.9922L55.9433 19.6495C55.5974 21.333 54.6518 22.7399 53.1066 23.8699C51.5844 25 49.751 25.5651 47.6061 25.5651ZM43.8354 13.8723H51.1001C51.1001 12.9959 50.7657 12.2463 50.0969 11.6236C49.4281 11.0009 48.5863 10.6896 47.5715 10.6896C46.5798 10.6896 45.738 10.9894 45.0462 11.589C44.3773 12.1656 43.9737 12.9267 43.8354 13.8723Z" fill={isDark ? 'white' : 'black'}/>
                        <path d="M28.1753 25.4267C25.4539 25.4267 23.2053 24.5618 21.4295 22.8321C19.6767 21.0793 18.8003 18.8538 18.8003 16.1555C18.8003 13.4341 19.6767 11.2085 21.4295 9.47879C23.2053 7.72602 25.4539 6.84964 28.1753 6.84964C30.9198 6.84964 33.1684 7.72602 34.9212 9.47879C36.697 11.2085 37.5849 13.4341 37.5849 16.1555C37.5849 18.8538 36.697 21.0793 34.9212 22.8321C33.1684 24.5618 30.9198 25.4267 28.1753 25.4267ZM25.2694 12.696C24.5314 13.5955 24.1624 14.7486 24.1624 16.1555C24.1624 17.5623 24.5314 18.7154 25.2694 19.6149C26.0305 20.4912 26.9991 20.9294 28.1753 20.9294C29.3746 20.9294 30.3432 20.4912 31.0812 19.6149C31.8423 18.7154 32.2228 17.5623 32.2228 16.1555C32.2228 14.7486 31.8423 13.5955 31.0812 12.696C30.3432 11.7966 29.3746 11.3469 28.1753 11.3469C26.9991 11.3469 26.0305 11.7966 25.2694 12.696Z" fill={isDark ? 'white' : 'black'}/>
                        <path d="M8.57934 25.3921C6.04244 25.3921 3.97832 24.6079 2.38699 23.0397C0.795664 21.4714 0 19.4304 0 16.9165L5.32749 16.5706C5.32749 17.7698 5.61578 18.7039 6.19235 19.3727C6.79198 20.0415 7.59917 20.3759 8.61393 20.3759C9.60563 20.3759 10.3898 20.0531 10.9663 19.4073C11.5429 18.7615 11.8312 17.8736 11.8312 16.7436V0.691895H17.4354V16.7436C17.4354 19.3266 16.6167 21.4138 14.9792 23.0051C13.3418 24.5964 11.2085 25.3921 8.57934 25.3921Z" fill={isDark ? 'white' : 'black'}/>
                    </svg>


                    <ul className={`rounded-[80px] flex gap-8 h-14 items-center py-2.25 px-3 fixed top-8 left-1/2 -translate-x-1/2 max-md:hidden ${isDark ? 'bg-white' : 'bg-black'}`}>
                        <a
                            href="#home"
                            className={`font-['Work Sans'] font-medium text-xl leading-4 -tracking-[1%] px-4 py-3 rounded-full transition-all ${
                                isActive('home')
                                    ? isDark ? 'bg-black text-white' : 'bg-white text-black'
                                    : isDark ? 'text-black' : 'text-[#C4C4C4]'
                            }`}
                        >
                            Home
                        </a>
                        <a
                            href="#projects"
                            className={`font-['Work Sans'] font-medium text-xl leading-4 -tracking-[1%] px-4 py-3 rounded-full transition-all ${
                                isActive('projects')
                                    ? isDark ? 'bg-black text-white' : 'bg-white text-black'
                                    : isDark ? 'text-black' : 'text-[#C4C4C4]'
                            }`}
                        >
                            Projects
                        </a>
                        <a
                            href="#about"
                            className={`font-['Work Sans'] font-medium text-xl leading-4 -tracking-[1%] px-4 py-3 rounded-full transition-all ${
                                isActive('about')
                                    ? isDark ? 'bg-black text-white' : 'bg-white text-black'
                                    : isDark ? 'text-black' : 'text-[#C4C4C4]'
                            }`}
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className={`font-['Work Sans'] font-medium text-xl leading-4 -tracking-[1%] px-4 py-3 rounded-full transition-all ${
                                isActive('contact')
                                    ? isDark ? 'bg-black text-white' : 'bg-white text-black'
                                    : isDark ? 'text-black' : 'text-[#C4C4C4]'
                            }`}
                        >
                            Contact
                        </a>

                        <button onClick={toggleTheme} className={`w-10 h-10 rounded-[50%] flex items-center justify-center ${isDark ? 'bg-black' : 'bg-white'}`}>
                            {isDark ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
                                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                                </svg>
                            )}
                        </button>
                    </ul>

                    <button onClick={() => setIsOpen(!isOpen)} className={`py-2.25 px-3 fixed top-8 right-0 -translate-y-1/3 -translate-x-1/2 w-10 h-10 rounded-[50%] flex items-center justify-center z-500 md:hidden ${isOpen ? 'bg-black' : 'bg-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-list ${isOpen ? 'text-white' : 'text-black'}`} viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                </div>
            </section>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 md:hidden z-40" onClick={() => setIsOpen(false)}></div>
            )}

            <div className={`flex items-center justify-center fixed top-0 right-0 h-1/2 w-2/3 rounded-bl-lg transform transition-transform duration-300 z-50 md:hidden ${isDark ? 'bg-white' : 'bg-black'} ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className="flex flex-col gap-4 items-center justify-center w-full">
                    <a href="#home" className={`font-['Work Sans'] font-medium text-xl leading-4 -tracking-[1%] ${isDark ? 'text-black' : 'text-[#C4C4C4]'}`}>Home</a>
                    <div className={`h-px w-[60%] ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`}></div>

                    <a href="#projects" className={`font-['Work Sans'] font-medium text-xl leading-4 -tracking-[1%] ${isDark ? 'text-black' : 'text-[#C4C4C4]'}`}>Projects</a>
                    <div className={`h-px w-[60%] ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`}></div>

                    <a href="#about" className={`font-['Work Sans'] font-medium text-xl leading-4 -tracking-[1%] ${isDark ? 'text-black' : 'text-[#C4C4C4]'}`}>About</a>
                    <div className={`h-px w-[60%] ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`}></div>

                    <a href="#contact" className={`font-['Work Sans'] font-medium text-xl leading-4 -tracking-[1%] ${isDark ? 'text-black' : 'text-[#C4C4C4]'}`}>Contact</a>

                    <button onClick={toggleTheme} className={`w-10 h-10 rounded-[50%] flex items-center justify-center mt-4 cursor-pointer ${isDark ? 'bg-black' : 'bg-white'}`}>
                        {isDark ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
                                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                            </svg>
                        )}
                    </button>
                </ul>
            </div>
        </>
    );
}
