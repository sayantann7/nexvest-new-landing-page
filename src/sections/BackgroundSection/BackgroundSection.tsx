import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, BarChart3, TrendingUp } from "lucide-react";

const calculators = [
  {
    id: 1,
    title: "SIP Calculator",
    description: "Calculate returns on systematic monthly investments and plan your financial goals.",
    icon: <Calculator className="w-6 h-6 text-[#0d0c34]" />,
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: 2,
    title: "Lumpsum Calculator",
    description: "Project growth on your one-time investments with adjustable time periods and returns.",
    icon: <BarChart3 className="w-6 h-6 text-[#0d0c34]" />,
    color: "from-purple-500/10 to-cyan-500/10",
  },
  {
    id: 3,
    title: "Mutual Fund Returns",
    description: "Compare historical performance of different mutual funds based on various time frames.",
    icon: <TrendingUp className="w-6 h-6 text-[#0d0c34]" />,
    color: "from-emerald-500/10 to-cyan-500/10",
  },
];

export const BackgroundSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 md:py-32 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-[#fdfffc] to-[#f7f9ff]">
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              
              <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-[#0d0c34] leading-tight max-w-[578px]">
                Mutual Fund Tools &amp; Calculators
              </h2>
              
              <p className="text-gray-600 text-lg max-w-xl">
                Leverage our powerful calculators to plan your investments and visualize potential returns 
                over time based on historical performance data.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="rounded-full bg-[#0d0c34] text-white hover:bg-[#09ffec] hover:text-[#0d0c34] font-medium w-fit px-6 py-6 text-base flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>See all Tools &amp; Calculators</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full lg:max-w-[900px]">
            {calculators.map((calculator, index) => (
              <motion.div
                key={calculator.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="w-full"
              >
                <Card className="w-full h-full bg-white rounded-2xl overflow-hidden border-none shadow-[0px_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0px_16px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
                  <CardContent className="p-6 md:p-8 h-full flex flex-col">
                    <div className="flex flex-col gap-6 h-full">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${calculator.color}`}>
                        {calculator.icon}
                      </div>

                      <div className="flex flex-col gap-3 flex-grow">
                        <h3 className="font-semibold text-[#0d0c34] text-xl md:text-2xl">
                          {calculator.title}
                        </h3>
                        <p className="font-normal text-gray-600 text-sm md:text-base leading-relaxed">
                          {calculator.description}
                        </p>
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className="rounded-full bg-[#f7f9ff] hover:bg-[#09ffec] text-[#0d0c34] hover:text-[#0d0c34] font-medium text-sm md:text-base w-full flex items-center justify-center gap-2 py-5"
                        >
                          <span>Calculate now</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};