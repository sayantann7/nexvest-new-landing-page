import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function Hero() {
    const words = ['honest', 'trusted', 'powerful', 'reliable'];
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 1700);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="container mx-auto px-11 py-20 grid md:grid-cols-5 gap-12 items-center bg-[#0D0C34] z-10">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:col-span-2"
            >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
                    The world's most{' '}
                    <br />
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={words[currentWord]}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="text-[#0AFFFF] inline-block text-6xl"
                        >
                            {words[currentWord]}
                        </motion.span>
                    </AnimatePresence>
                    {' '}<br />trade app.
                </h1>
                <p className="text-lg text-white mb-8">
                    Get the latest updates regarding market trends, comprehensive analysis tools, and real-time trading insights.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#0AFFFF] text-black px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-yellow-300 transition-colors"
                >
                    <span>Get Started</span>
                    <ChevronRight className="w-9 h-9" />
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative md:col-span-3 md:-mr-20 -mx-10 sm:-mx-0"
                style={{ zIndex: 0 }}
            >
                <div className="relative overflow-visible bg-[#0D0C34] p-[1px]">
                    <div className="relative overflow-hidden transform scale-105">
                        <div className="relative" style={{
                            marginTop: -2,
                            marginLeft: -2,
                            marginRight: -1,
                            marginBottom: -1
                        }}>
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover pt-1"
                                preload="auto"
                                style={{
                                    outline: 'none',
                                    borderWidth: 0,
                                    display: 'block'
                                }}
                            >
                                <source
                                    src="/vid2.mp4"
                                    type="video/mp4"
                                />
                            </video>

                            {/* Only keeping minimal edge blending for smooth transition to background */}
                            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0D0C34] to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0D0C34] to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default Hero