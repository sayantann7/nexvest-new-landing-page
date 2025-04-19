import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function WordAnimation() {

    const words = ['honest', 'trusted', 'powerful', 'reliable'];
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 1700);

        return () => clearInterval(interval);
    }, []);

    return (
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
                className="bg-[#0AFFFF] text-black px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-colors"
            >
                <span>Get Started</span>
                <ChevronRight className="w-9 h-9" />
            </motion.button>
        </motion.div>
    )
}

export default WordAnimation