import { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface Stock {
  ticker: string;
  company: string;
  price: number;
  percent_change: number;
}

const StockTicker = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const controls = useAnimationControls();
  
  // Animation settings - defined once to ensure consistency
  const animationSettings = {
    x: '-100%',
    transition: {
      repeat: Infinity,
      duration: 60,
      ease: 'linear',
      repeatType: "loop" as const,
      repeatDelay: 0,
    }
  };
  
  // Initial placeholder stocks to show immediately
  const placeholderStocks: Stock[] = [
    { ticker: "AAPL", company: "Apple", price: 182.52, percent_change: 0.75 },
    { ticker: "MSFT", company: "Microsoft", price: 417.88, percent_change: 1.22 },
    { ticker: "GOOGL", company: "Alphabet", price: 165.31, percent_change: -0.48 },
    { ticker: "AMZN", company: "Amazon", price: 182.30, percent_change: 0.63 },
  ];

  // Separate function just for data fetching
  const fetchStockData = async () => {
    try {
      const response = await fetch('/example_response.json');
      const data = await response.json();
      setStocks(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Start animation immediately
    controls.start(animationSettings);
    
    // Fetch data initially
    fetchStockData();
    
    // Set up interval for periodic data updates
    const intervalId = setInterval(() => {
      fetchStockData();
    }, 60000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Use placeholder stocks while loading or real stocks when loaded
  const displayData = loading ? placeholderStocks : stocks;
  
  // Triple the stocks array for better continuous scrolling
  const displayStocks = [...displayData, ...displayData, ...displayData];

  return (
    <div className="relative bg-[#011800] overflow-hidden h-12 mb-0 flex items-center">
      {/* Edge fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#011800] to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#011800] to-transparent"></div>
      
      <motion.div
        initial={{ x: '0%' }}
        animate={controls}
        className="flex whitespace-nowrap absolute items-center py-2"
      >
        {displayStocks.map((stock, index) => (
          <div key={index} className="flex items-center mx-5 group cursor-pointer">
            <span className="font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors">
              {stock.company}
            </span>
            <span className="mx-2 text-white">
              {stock.price.toFixed(2)}
            </span>
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className={`${
                stock.percent_change > 0 
                  ? 'text-green-400' 
                  : stock.percent_change < 0 
                    ? 'text-red-400' 
                    : 'text-gray-400'
                } font-medium`}
            >
              ({stock.percent_change > 0 ? '+' : ''}{stock.percent_change.toFixed(2)}%)
            </motion.span>
            
            {/* Separator */}
            {index < displayStocks.length - 1 && (
              <span className="mx-5 text-[#004400]">|</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StockTicker;