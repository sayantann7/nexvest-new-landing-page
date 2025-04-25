import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { ArrowRight, Check, X, ChevronRight, ChevronDown, Brain, BarChart3, AreaChart, LineChart } from 'lucide-react';
import NavbarWithoutAnimation from '../components/NavbarWithoutAnimation';
import BubbleAnimation from '../components/BubbleAnimation';
// Types for our questions and results
interface Question {
    id: number;
    question: string;
    options: {
        text: string;
        value: number;
    }[];
}

interface Result {
    title: string;
    description: string;
    investmentType: string;
    riskLevel: string;
    color: string;
}

// Investing facts and myths
const investingFacts = [
    "Time in the market beats timing the market",
    "Diversification reduces risk",
    "Compound interest is the 8th wonder of the world",
    "Start investing early for better returns",
    "Long-term investing generally outperforms short-term trading"
];

const investingMyths = [
    "You need a lot of money to start investing",
    "Investing is the same as gambling",
    "You need to time the market perfectly",
    "You should always buy the dip",
    "Only experts can succeed at investing"
];

function PersonalityTest() {
    // Refs for scrolling
    const testSectionRef = useRef<HTMLDivElement>(null);
    const resultsSectionRef = useRef<HTMLDivElement>(null);
    const educationSectionRef = useRef<HTMLDivElement>(null);
    const bubblesContainerRef = useRef<HTMLDivElement>(null);

    // State management
    const [isTestStarted, setIsTestStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [result, setResult] = useState<Result | null>(null);
    const [progress, setProgress] = useState(0);
    const [showBubbles, setShowBubbles] = useState(false);

    // Scroll handlers
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Questions for the test
    const questions: Question[] = [
        {
            id: 1,
            question: "How would you feel if your investment lost 20% of its value in a month?",
            options: [
                { text: "Extremely uncomfortable - I would sell immediately", value: 1 },
                { text: "Concerned - I might consider selling", value: 2 },
                { text: "Neutral - I understand markets fluctuate", value: 3 },
                { text: "Confident - I see it as a buying opportunity", value: 4 }
            ]
        },
        {
            id: 2,
            question: "Which statement best describes your investment goals?",
            options: [
                { text: "Preserving capital is my primary concern", value: 1 },
                { text: "I want steady growth with minimal risk", value: 2 },
                { text: "I'm looking for a balance between growth and safety", value: 3 },
                { text: "I'm focused on maximum long-term growth", value: 4 }
            ]
        },
        {
            id: 3,
            question: "Which investment scenario appeals to you most?",
            options: [
                { text: "5% annual return with almost no risk of loss", value: 1 },
                { text: "8% annual return with small risk of loss", value: 2 },
                { text: "10% annual return with moderate risk of loss", value: 3 },
                { text: "12%+ annual return with significant risk of loss", value: 4 }
            ]
        },
        {
            id: 4,
            question: "If you had ₹1,00,000 to invest, which would you choose?",
            options: [
                { text: "Bank fixed deposits and government bonds", value: 1 },
                { text: "A mix of mutual funds with good track records", value: 2 },
                { text: "A diversified portfolio of stocks and bonds", value: 3 },
                { text: "Aggressive growth stocks and some alternatives", value: 4 }
            ]
        },
        {
            id: 5,
            question: "What is the compound interest on ₹10,000 invested at 10% for 2 years?",
            options: [
                { text: "₹1,000", value: 1 },
                { text: "₹2,000", value: 1 },
                { text: "₹2,100", value: 3 },
                { text: "₹3,000", value: 1 }
            ]
        }
    ];

    const results: Result[] = [
        {
            title: "Conservative Investor",
            description: "You prioritize capital preservation over growth. You're uncomfortable with market volatility and prefer safer investments.",
            investmentType: "Fixed deposits, government bonds, debt mutual funds",
            riskLevel: "Low",
            color: "#1E3A8A" // Dark blue for conservative
        },
        {
            title: "Moderate Investor",
            description: "You seek a balance between growth and safety. You can tolerate some market fluctuations for better returns.",
            investmentType: "Balanced mutual funds, blue-chip stocks, corporate bonds",
            riskLevel: "Medium",
            color: "#2563EB" // Medium blue for moderate
        },
        {
            title: "Growth Investor",
            description: "You're focused on long-term growth and can handle significant market volatility for potentially higher returns.",
            investmentType: "Growth stocks, equity mutual funds, some international exposure",
            riskLevel: "Medium-High",
            color: "#0369A1" // Blue-teal for growth
        },
        {
            title: "Aggressive Investor",
            description: "You're seeking maximum returns and are comfortable with high volatility and risk. You have a long investment horizon.",
            investmentType: "Small-cap stocks, aggressive growth funds, alternative investments",
            riskLevel: "High",
            color: "#0891B2" // Teal for aggressive
        }
    ];

    // Start the test
    const startTest = () => {
        setIsTestStarted(true);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setProgress(0);
        setResult(null);
    };

    // Handle answer selection
    const handleAnswer = (value: number) => {
        const newAnswers = [...answers, value];
        setAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
        } else {
            // Calculate result
            const totalScore = newAnswers.reduce((sum, value) => sum + value, 0);
            const avgScore = totalScore / questions.length;

            let resultIndex = 0;
            if (avgScore > 1.5 && avgScore <= 2.5) {
                resultIndex = 1;
            } else if (avgScore > 2.5 && avgScore <= 3.5) {
                resultIndex = 2;
            } else if (avgScore > 3.5) {
                resultIndex = 3;
            }

            setResult(results[resultIndex]);
            setProgress(100);
            setIsTestStarted(false);

            // Scroll to results after a small delay
            setTimeout(() => {
                if (resultsSectionRef.current) {
                    resultsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    };

    // Reset test
    const resetTest = () => {
        startTest();
        // Scroll back to test section
        if (testSectionRef.current) {
            testSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to handle scroll observation for elements
    const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        callback();
                    }
                },
                { threshold: 0.3 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [ref, callback]);
    };

    // Trigger bubble animations when education section is visible
    useIntersectionObserver(educationSectionRef, () => {
        setShowBubbles(true);
    });

    // Create bubble animations for the education section
    useEffect(() => {
        if (showBubbles && bubblesContainerRef.current) {
            const container = bubblesContainerRef.current;
            let interval: NodeJS.Timeout;

            const createBubble = () => {
                const bubble = document.createElement('div');
                const isMyth = Math.random() > 0.5;
                const content = isMyth
                    ? investingMyths[Math.floor(Math.random() * investingMyths.length)]
                    : investingFacts[Math.floor(Math.random() * investingFacts.length)];

                bubble.className = `absolute rounded-full flex items-center justify-center text-center p-6 
                          ${isMyth ? 'bg-[#FF6B6B]/80' : 'bg-[#1E3A8A]/80'} text-white text-sm font-medium
                          shadow-lg`;

                // Random size between 100px and 200px
                const size = Math.random() * 100 + 100;
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;

                // Random position
                const left = Math.random() * 80 + 10; // 10-90% of container width
                bubble.style.left = `${left}%`;
                bubble.style.bottom = '-100px';
                bubble.style.zIndex = '10';

                // Add content and icon
                bubble.innerHTML = `
          <div class="relative w-full h-full flex flex-col items-center justify-center">
            <span class="absolute top-4 right-4">
              ${isMyth ?
                        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>' :
                        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>'}
            </span>
            <p>${content}</p>
            <span class="absolute bottom-4 text-xs opacity-70">${isMyth ? 'Myth' : 'Fact'}</span>
          </div>
        `;

                container.appendChild(bubble);

                // Animate upward
                const animation = bubble.animate(
                    [
                        { transform: 'translateY(0) scale(1)', opacity: 0 },
                        { transform: 'translateY(-100px) scale(1)', opacity: 1 },
                        { transform: 'translateY(-300px) scale(1)', opacity: 1 },
                        { transform: isMyth ? 'translateY(-500px) scale(1.5)' : 'translateY(-700px) scale(1)', opacity: isMyth ? 0 : 0.7 }
                    ],
                    {
                        duration: isMyth ? 7000 : 12000,
                        easing: 'ease-out'
                    }
                );

                animation.onfinish = () => {
                    if (bubble.parentNode === container) {
                        container.removeChild(bubble);
                    }
                };

                // If it's a myth, make it burst halfway through
                if (isMyth) {
                    setTimeout(() => {
                        if (bubble.parentNode === container) {
                            bubble.animate(
                                [
                                    { transform: 'scale(1)', opacity: 1 },
                                    { transform: 'scale(1.5)', opacity: 0 }
                                ],
                                {
                                    duration: 500,
                                    fill: 'forwards'
                                }
                            );
                        }
                    }, 3500);
                }
            };

            // Create a bubble every second
            interval = setInterval(createBubble, 2000);

            return () => {
                clearInterval(interval);
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
            };
        }
    }, [showBubbles]);

    return (
        <>
            <NavbarWithoutAnimation />

            <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-blue-900">
                {/* Hero Section */}
                <section
                    className="relative w-full min-h-[500px] md:h-[651px] flex items-center overflow-hidden"
                >
                    {/* Video Background */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/bgVideo.mp4" type="video/mp4" />
                        {/* Fallback to image if video doesn't load */}
                        <img
                            src="/mutualFund/mf-bg.png"
                            alt="Investment Background"
                            className="w-full h-full object-cover"
                        />
                    </video>
                    {/* Lighter overlay for entire video */}
                    <div className="absolute inset-0 bg-white/70 z-[1]"></div>

                    {/* Gradient fade overlay - creates smooth transition from navbar */}
                    <div
                        className="absolute top-0 left-0 right-0 h-32 z-[2]"
                        style={{
                            background: 'linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0) 100%)'
                        }}
                    ></div>

                    {/* Bottom gradient fade overlay - creates smooth transition to next section */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-32 z-[2]"
                        style={{
                            background: 'linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0) 100%)'
                        }}
                    ></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            {/* Hero Text */}
                            <motion.div
                                className="md:w-1/2 text-blue-900"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your <span className="text-[#1E3A8A]">Investment</span> Personality</h1>
                                <p className="text-xl mb-8 max-w-lg text-blue-900 font-medium">
                                    Understand your risk tolerance, financial knowledge, and investment mindset to receive
                                    personalized investment recommendations tailored to your unique profile.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#1E3A8A] hover:bg-[#15296B] text-white font-bold py-4 px-8 rounded-full flex items-center"
                                    onClick={() => scrollToSection(testSectionRef)}
                                >
                                    <span>Get Started With The Test</span>
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </motion.button>
                            </motion.div>

                            {/* Hero Card */}
                            <motion.div
                                className="md:w-1/2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl shadow-lg overflow-hidden">
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold mb-4 text-blue-900">Why Take Our Personality Test?</h3>

                                        <ul className="space-y-4">
                                            {[
                                                "Understand your risk tolerance level",
                                                "Assess your financial knowledge",
                                                "Discover your investment mindset",
                                                "Get personalized investment recommendations",
                                                "Create a strategy aligned with your goals"
                                            ].map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start text-blue-900"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.5 + (index * 0.1) }}
                                                >
                                                    <div className="mr-3 rounded-full bg-[#1E3A8A]/20 p-1">
                                                        <Check className="w-4 h-4 text-[#1E3A8A]" />
                                                    </div>
                                                    <span className="font-medium">{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <p className="mt-6 text-sm text-blue-900 font-medium">
                                            The test takes approximately 5 minutes to complete. Your results will help
                                            NexVest suggest investments that match your personal financial profile.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        <motion.div
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        >
                        </motion.div>
                    </div>
                </section>

                {/* Test Section */}
                <section
                    ref={testSectionRef}
                    className="py-16 md:py-24"
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <motion.div
                                className="mb-12 flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1E3A8A]/20 mb-6">
                                    <Brain className="w-8 h-8 text-[#1E3A8A]" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">Investment Personality Test</h2>
                                <p className="text-blue-900 font-medium max-w-2xl mb-8">
                                    Your answers to these carefully designed questions will help us understand your approach
                                    to investing. We'll analyze your risk tolerance, knowledge level, and investment
                                    preferences to create a personalized profile.
                                </p>
                            </motion.div>

                            {/* Test Features */}
                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                {[
                                    {
                                        icon: <BarChart3 className="w-6 h-6 text-[#1E3A8A]" />,
                                        title: "5 Simple Questions",
                                        description: "Quick assessment that takes just minutes to complete"
                                    },
                                    {
                                        icon: <AreaChart className="w-6 h-6 text-[#1E3A8A]" />,
                                        title: "Scientific Analysis",
                                        description: "Evaluates multiple factors including risk tolerance & knowledge"
                                    },
                                    {
                                        icon: <LineChart className="w-6 h-6 text-[#1E3A8A]" />,
                                        title: "Personalized Results",
                                        description: "Get tailored investment recommendations based on your profile"
                                    }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-xl border border-blue-100"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-4">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-blue-900">{feature.title}</h3>
                                        <p className="text-blue-900 font-medium text-sm">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {isTestStarted ? (
                                // Test Questions
                                <Card className="bg-white border border-blue-100 rounded-xl shadow-md">
                                    <CardContent className="p-8">
                                        <div className="mb-8">
                                            <h3 className="text-xl font-semibold mb-4 text-blue-900">Question {currentQuestionIndex + 1} of {questions.length}</h3>
                                            <Progress value={progress} className="w-full h-2 bg-gray-100" indicatorColor="bg-[#1E3A8A]" />
                                        </div>

                                        <motion.div
                                            key={currentQuestionIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <h3 className="text-2xl font-bold mb-6 text-blue-900">
                                                {questions[currentQuestionIndex].question}
                                            </h3>

                                            <div className="space-y-4">
                                                {questions[currentQuestionIndex].options.map((option, idx) => (
                                                    <motion.button
                                                        key={idx}
                                                        className="w-full text-left p-4 rounded-lg border border-blue-100 hover:border-[#1E3A8A] hover:bg-blue-50 transition-all flex justify-between items-center text-blue-900 font-medium"
                                                        onClick={() => handleAnswer(option.value)}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        <span>{option.text}</span>
                                                        <ChevronRight className="w-5 h-5 text-blue-700" />
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            ) : (
                                // Start Test Button
                                <motion.div
                                    className="flex justify-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <Button
                                        onClick={startTest}
                                        className="bg-[#1E3A8A] hover:bg-[#15296B] text-white text-lg font-bold py-6 px-8 rounded-full flex items-center"
                                        size="lg"
                                    >
                                        Start The Test Now
                                        <ArrowRight className="ml-2 w-6 h-6" />
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section
                    ref={resultsSectionRef}
                    className="py-16 md:py-24 bg-gray-50"
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <motion.div
                                className="mb-12 flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-[#1E3A8A]/20 p-2 rounded-full mb-4">
                                    <AreaChart className="w-8 h-8 text-[#1E3A8A]" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">Your Investment Profile</h2>
                                <p className="text-blue-900 font-medium max-w-2xl">
                                    After completing the test, you'll receive a detailed analysis of your investment personality,
                                    including recommended investment types and strategies tailored to your profile.
                                </p>
                            </motion.div>

                            {result ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="text-center mb-8">
                                        <span className="inline-block bg-[#1E3A8A] text-white font-bold px-4 py-1 rounded-full text-sm mb-4">
                                            Your Results
                                        </span>
                                        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-blue-900">You are a <span style={{ color: result.color }}>{result.title}</span></h2>
                                        <p className="text-blue-900 font-medium">{result.description}</p>
                                    </div>

                                    <Card className="bg-white border border-blue-100 rounded-xl mb-8 shadow-md">
                                        <CardContent className="p-8">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-4">
                                                    <h3 className="text-xl font-semibold text-blue-900">Recommended Investment Types</h3>
                                                    <p className="text-blue-900 font-medium">{result.investmentType}</p>
                                                </div>

                                                <div className="space-y-4">
                                                    <h3 className="text-xl font-semibold text-blue-900">Your Risk Tolerance</h3>
                                                    <div className="flex items-center">
                                                        <div className="w-full bg-gray-100 rounded-full h-4">
                                                            <div
                                                                className="h-4 rounded-full"
                                                                style={{
                                                                    width: result.riskLevel === "Low" ? "25%" :
                                                                        result.riskLevel === "Medium" ? "50%" :
                                                                            result.riskLevel === "Medium-High" ? "75%" : "100%",
                                                                    backgroundColor: result.color
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <span className="ml-3 text-blue-900 font-semibold">{result.riskLevel}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                                        <Button
                                            onClick={resetTest}
                                            className="bg-transparent border border-blue-800 text-blue-900 hover:bg-blue-800 hover:text-white font-medium"
                                        >
                                            Retake Test
                                        </Button>
                                        <Button
                                            onClick={() => scrollToSection(educationSectionRef)}
                                            className="bg-[#1E3A8A] hover:bg-[#15296B] text-white font-medium"
                                        >
                                            Continue to Education
                                        </Button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true }}
                                    className="bg-white border border-blue-100 rounded-xl p-8 text-center shadow-md"
                                >
                                    <p className="text-lg text-blue-900 font-medium mb-6">
                                        Complete the personality test to see your detailed investment profile and personalized recommendations.
                                    </p>
                                    <Button
                                        onClick={() => scrollToSection(testSectionRef)}
                                        className="bg-[#1E3A8A] hover:bg-[#15296B] text-white font-medium"
                                    >
                                        Take the Test
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Education Section - Updated with Framer Motion Bubbles */}
                <section
                    ref={educationSectionRef}
                    className="py-16 md:py-24 relative overflow-hidden bg-white"
                >
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">
                                NexVest helps you in <span className="text-[#1E3A8A]">bursting the myths</span> about investing
                            </h2>
                            <p className="text-blue-900 font-medium max-w-2xl mx-auto">
                                Watch as investment myths pop while facts rise to the top. Understanding the
                                difference between facts and myths is crucial for making informed investment decisions.
                            </p>
                        </motion.div>

                        {/* Bubbles container with Framer Motion */}
                        <div
                            className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-xl"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(240, 249, 255, 0.8) 100%)',
                                boxShadow: 'inset 0 0 20px rgba(30, 58, 138, 0.1)'
                            }}
                        >
                            {showBubbles && (
                                <BubbleAnimation facts={investingFacts} myths={investingMyths} />
                            )}
                        </div>

                        {/* Legend */}
                        <div className="max-w-md mx-auto mt-8 flex justify-center gap-8">
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-[#1E3A8A]/80 mr-2"></div>
                                <span className="text-blue-900 font-semibold">Investment Facts</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-[#FF6B6B]/80 mr-2"></div>
                                <span className="text-blue-900 font-semibold">Investment Myths</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default PersonalityTest;