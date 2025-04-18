import { motion } from 'framer-motion';
import WordAnimation from './WordAnimation';

function Hero() {

    return (
        <div className="container mx-auto px-11 py-20 grid md:grid-cols-5 gap-12 items-center bg-[#0D0C34] z-10">
            
            <WordAnimation />

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