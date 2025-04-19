import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight, TrendingUp, BarChart2, PieChart } from "lucide-react";

const equityFundData = [
  {
    name: "Bandhan Small Cap Fund",
    logo: "/mutualFund/bandhan.png",
    returns: "37.25% p.a.",
  },
  {
    name: "Bandhan Small Cap Fund",
    logo: "/mutualFund/bandhan-1.png",
    returns: "37.25% p.a.",
  },
  {
    name: "HDFC Mid-Cap Opportunities Fund",
    logo: "/mutualFund/hdfc.png",
    returns: "33.14% p.a.",
    twoLines: true,
  },
  { name: "HDFC Focused 30 Fund", logo: "/hdfc-1.png", returns: "31.42% p.a." },
  {
    name: "ICICI Prudential Large & Mid Cap Fund",
    logo: "/mutualFund/icici-prudential.png",
    returns: "30.59% p.a.",
    twoLines: true,
  },
  { name: "HDFC Flexi Cap Fund", logo: "/hdfc-2.png", returns: "30.58% p.a." },
];

const debtFundData = [
  {
    name: "Bandhan Small Cap Fund",
    logo: "/mutualFund/bandhan-2.png",
    returns: "37.25% p.a.",
  },
  {
    name: "Bandhan Small Cap Fund",
    logo: "/mutualFund/bandhan-3.png",
    returns: "37.25% p.a.",
  },
  {
    name: "HDFC Mid-Cap Opportunities Fund",
    logo: "/mutualFund/hdfc-3.png",
    returns: "33.14% p.a.",
    twoLines: true,
  },
  { name: "HDFC Focused 30 Fund", logo: "/hdfc-4.png", returns: "31.42% p.a." },
  {
    name: "ICICI Prudential Large & Mid Cap Fund",
    logo: "/mutualFund/icici-prudential-1.png",
    returns: "30.59% p.a.",
    twoLines: true,
  },
  { name: "HDFC Flexi Cap Fund", logo: "/hdfc-5.png", returns: "30.58% p.a." },
];

const hybridFundData = [
  {
    name: "Bandhan Small Cap Fund",
    logo: "/mutualFund/bandhan-4.png",
    returns: "37.25% p.a.",
  },
  {
    name: "Bandhan Small Cap Fund",
    logo: "/mutualFund/bandhan-5.png",
    returns: "37.25% p.a.",
  },
  {
    name: "HDFC Mid-Cap Opportunities Fund",
    logo: "/mutualFund/hdfc-6.png",
    returns: "33.14% p.a.",
    twoLines: true,
  },
  { name: "HDFC Focused 30 Fund", logo: "/hdfc-7.png", returns: "31.42% p.a." },
  {
    name: "ICICI Prudential Large & Mid Cap Fund",
    logo: "/mutualFund/icici-prudential-2.png",
    returns: "30.59% p.a.",
    twoLines: true,
  },
  { name: "HDFC Flexi Cap Fund", logo: "/hdfc-8.png", returns: "30.58% p.a." },
];

const equityFundTypes = [
  {
    title: "Large-Cap Funds",
    description:
      "These funds invest at least 80% of their assets in the top 100 companies by market capitalization.",
  },
  {
    title: "Mid-Cap Funds",
    description:
      "These funds invest at least 65% of their assets in the next 150 (101st to 250th) companies ranked by market capitalization.",
  },
  {
    title: "Small-Cap Funds",
    description:
      "Such funds invest at least 65% of their assets in companies ranked 251 and above by market capitalization.",
  },
  {
    title: "Multi-Cap Funds",
    description:
      "These funds invest at least 25% of their assets in each of the large, mid, and small-cap stocks.",
  },
];

const debtFundTypes = [
  {
    title: "Money Market Funds",
    description:
      "These funds generate returns by lending to companies or governments for up to 1 year.",
  },
  {
    title: "Corporate Bond Funds",
    description:
      "These funds earn returns by lending mostly (at least 80%) to companies with the highest-rated debt papers.",
  },
  {
    title: "Overnight Funds",
    description:
      "These funds earn their returns by lending to companies or governments for one business day.",
  },
  {
    title: "Liquid Funds",
    description:
      "These funds generate their returns by lending to companies or governments for up to 91 days.",
  },
];

const hybridFundTypes = [
  {
    title: "Aggressive Hybrid",
    description:
      "These funds have to invest at least 65% of their assets in equities while it can't exceed 80%. The rest goes into debt.",
  },
  {
    title: "Multi Asset Allocation",
    description:
      "Also known as Balanced Advantage Funds, these funds can go up to 0-100% in equities or debt based on predefined asset allocation models they follow.",
  },
  {
    title: "Dynamic Asset Allocation Funds",
    description:
      "Also known as Balanced Advantage Funds, these funds can go up to 0-100% in equities or debt based on predefined asset allocation models they follow.",
  },
  {
    title: "Arbitrage Funds",
    description:
      "These funds generate returns by using opportunities of price differences of securities in different markets.",
  },
];

export const TypesOfMutualFundsSection = (): JSX.Element => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // Icons for fund types
  const fundTypeIcons = {
    "Equity": <TrendingUp className="w-8 h-8 text-[#09ffec]" />,
    "Debt": <BarChart2 className="w-8 h-8 text-[#09ffec]" />,
    "Hybrid": <PieChart className="w-8 h-8 text-[#09ffec]" />
  };

  const FundCard = ({ data, fundType }: { data: typeof equityFundData, fundType: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full md:w-[532px]"
    >
      <Card className="flex flex-col items-center gap-5 p-4 bg-white rounded-2xl overflow-hidden shadow-[0px_0px_30px_rgba(0,0,0,0.1)] transform transition-all duration-300 hover:shadow-[0px_0px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 border-none">
        <CardContent className="flex flex-col w-full items-start p-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative w-full border-b border-gray-100 pb-4 mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-[#0d0c34] to-[#1a1956] p-2 rounded-lg">
                {fundTypeIcons[fundType as keyof typeof fundTypeIcons]}
              </div>
              <div className="font-medium text-[#333] text-lg">
                Top {fundType} Mutual Funds
              </div>
            </div>
            <div className="bg-[#f5f7ff] px-4 py-2 rounded-full text-[#0d0c34] font-medium text-sm">
              5Y Returns (Annualized)
            </div>
          </div>

          <div className="flex flex-col items-start w-full">
            {data.map((fund, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row w-full border-b border-[#f5f7ff] hover:bg-[#f9faff] transition-colors"
              >
                <div className="w-full md:w-[286px] py-4 px-3">
                  <div className="flex items-center">
                    <div
                      className="w-11 h-11 rounded-full border border-solid border-[#eaeaea] bg-cover bg-center shadow-sm"
                      style={{ backgroundImage: `url(${fund.logo})` }}
                    />
                    <div className="ml-3.5 font-medium text-[#222222] text-[15px] leading-5">
                      {fund.twoLines ? (
                        <>
                          {fund.name.split(" ").slice(0, -1).join(" ")}
                          <br />
                          <span className="text-[#666]">{fund.name.split(" ").slice(-1)[0]}</span>
                        </>
                      ) : (
                        fund.name
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full md:w-auto">
                  <div className="py-4 px-5 border-l border-[#f5f7ff] flex items-center justify-center">
                    <div className="font-bold text-[#0d0c34] text-base md:text-lg text-center leading-5">
                      {fund.returns}
                    </div>
                  </div>
                  <div className="py-4 px-5 border-l border-[#f5f7ff] flex items-center justify-center">
                    <Button
                      className="h-[34px] rounded-full border-none bg-gradient-to-r from-[#0d0c34] to-[#1a1956] text-white hover:shadow-lg transition-all duration-300"
                    >
                      <span className="font-medium text-white text-sm">
                        Invest
                      </span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>

        <motion.div 
          className="flex items-center justify-center mt-4 cursor-pointer group"
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-medium text-[#0d0c34] text-sm text-center mr-2">
            See all {fundType} Mutual Funds
          </span>
          <ChevronRight className="w-4 h-4 text-[#09ffec] group-hover:translate-x-1 transition-transform duration-300" />
        </motion.div>
      </Card>
    </motion.div>
  );

  const FundTypeSection = ({
    title,
    description,
    types,
    sectionIndex,
  }: {
    title: string;
    description: React.ReactNode;
    types: typeof equityFundTypes;
    sectionIndex: number;
  }) => {
    const fundType = title.split(" ")[0];
    
    // Color classes based on section position in the gradient
    const headingColor = sectionIndex === 0 ? "text-white" : sectionIndex === 1 ? "text-gray-100" : "text-[#0d0c34]";
    const descriptionColor = sectionIndex === 0 ? "text-gray-300" : sectionIndex === 1 ? "text-gray-200" : "text-[#444]";
    const typesHeadingColor = sectionIndex === 0 ? "text-white" : sectionIndex === 1 ? "text-gray-200" : "text-[#0d0c34]";
    const borderColor = sectionIndex === 0 ? "border-gray-700" : sectionIndex === 1 ? "border-gray-300" : "border-[#f5f7ff]";
    
    // Card colors
    const cardBg = sectionIndex === 0 ? "bg-[#131740]" : "bg-white";
    const cardText = sectionIndex === 0 ? "text-white" : "text-[#0d0c34]";
    const cardDesc = sectionIndex === 0 ? "text-gray-300" : "text-[#666]";
    const cardBorder = sectionIndex === 0 ? "border-gray-700" : "border-gray-100";
    const cardHover = sectionIndex === 0 ? "hover:bg-[#1c2254]" : "hover:bg-[#f9faff]";
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col w-full md:w-[625px] items-start gap-10"
      >
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex items-center gap-3.5 w-full">
            <div className="w-[5px] h-[42px] bg-gradient-to-b from-[#09ffec] to-[#0d0c34] rounded-full" />
            <h2 className={`font-bold ${headingColor} text-2xl md:text-[40px] leading-normal`}>
              {title}
            </h2>
          </div>
          <div className={`pl-8 border-l-2 ${borderColor}`}>
            <p className={`font-normal ${descriptionColor} text-lg md:text-xl leading-relaxed`}>
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <div className="flex items-center gap-3">
            {fundTypeIcons[fundType as keyof typeof fundTypeIcons]}
            <h3 className={`font-semibold ${typesHeadingColor} text-xl md:text-2xl leading-normal`}>
              Types of {fundType} Funds
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {types.map((type, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${cardBg} rounded-xl shadow-sm p-5 border ${cardBorder} ${cardHover} transition-shadow duration-300`}
              >
                <h4 className={`font-semibold ${cardText} text-lg md:text-xl leading-normal border-b ${cardBorder} pb-2 mb-3`}>
                  {type.title}
                </h4>
                <p className={`font-normal ${cardDesc} text-sm md:text-[15px] leading-relaxed`}>
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#0D0C34] to-[#fdfffc] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <h1 className="text-center font-bold text-white text-3xl md:text-[54px] leading-normal mb-4">
            Types of <span className="relative inline-block">
              Mutual Funds
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#09ffec]/40"></span>
            </span>
          </h1>
          <p className="text-center font-medium text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Mutual funds in India are classified into different categories based
            on the asset class they invest in.
          </p>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#09ffec]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-10 w-40 h-40 bg-[#09ffec]/10 rounded-full blur-3xl"></div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-28 md:gap-40"
        >
          {/* First section - Equity */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-start gap-12 md:gap-[86px]">
              <FundTypeSection
                title="Equity Mutual Funds"
                description="Equity funds invest a majority of their assets in stocks. These funds are classified into different categories based on the market cap of the stocks they invest in."
                types={equityFundTypes}
                sectionIndex={0}
              />
              <FundCard data={equityFundData} fundType="Equity" />
            </div>
          </div>

          {/* Second section - Debt */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row-reverse items-start gap-12 md:gap-[95px]">
              <FundTypeSection
                title="Debt Mutual Funds"
                description={
                  <>
                    <span className="text-[#09ffec] font-medium">Debt funds</span> generate returns
                    by lending money to corporates and the government by buying
                    their debt papers. These funds are classified into different
                    categories based on their lending period and credit quality of
                    the papers.
                  </>
                }
                types={debtFundTypes}
                sectionIndex={1}
              />
              <FundCard data={debtFundData} fundType="Debt" />
            </div>
            {/* Decorative line */}
            <div className="absolute bottom-[-14rem] lg:bottom-[-5rem] left-1/2 transform -translate-x-1/2 w-[1px] h-[8rem] bg-gradient-to-b from-[#09ffec]/50 to-transparent"></div>
          </div>

          {/* Third section - Hybrid */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-start gap-12 md:gap-[95px]">
              <FundTypeSection
                title="Hybrid Mutual Funds"
                description={
                  <>
                    Hybrid funds invest in a mix of asset classes, including
                    equity, debt, or gold. There are multiple categories of{" "}
                    <a
                      href="https://www.etmoney.com/mutual-funds/hybrid"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-[#0d0c34] font-medium underline hover:text-[#0d0c34] transition-colors"
                    >
                      hybrid funds
                    </a>{" "}
                    based on how much they allocate across different asset
                    classes.
                  </>
                }
                types={hybridFundTypes}
                sectionIndex={2}
              />
              <FundCard data={hybridFundData} fundType="Hybrid" />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};