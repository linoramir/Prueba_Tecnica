import getCryptoList from "../../service/coinGeckoApi";
import { useState, useEffect } from "react";
import Bubble from "../bubble";
import { BubbleData } from "../../interface/typeCoingecko";



const BubbleContainer = () => {
  const [criptoList, setCriptoList] = useState<BubbleData[]>([]);

  useEffect(() => {
    const criptoData = async () => {
      const data: BubbleData[] = (await getCryptoList()) as BubbleData[];
      console.log("bubble container", { data });
      setCriptoList(data);
    };
    criptoData();
  }, []);
  
  return (
    <div className="w-full h-4/5 bg-moralis-bubble-container">
      <Bubble criptoList={criptoList} />
    </div>
  );
};

export default BubbleContainer;
