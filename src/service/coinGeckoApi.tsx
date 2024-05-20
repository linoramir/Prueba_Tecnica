import axios from "axios";
import { Coingecko } from "../interface/typeCoingecko";
const getCryptoList = async () => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false?COINGECKO_APIKEY=CG-Y5VpK3kweteczYbdXJrmUtzL`
    );
    const data: Coingecko[] = response.data;
    const dataFormat = data.map((cripto, index) => {
      return {
        index,
        key: cripto.id,
        image: cripto.image,
        value: Math.abs(cripto.market_cap_change_percentage_24h),
        tendencia:
          cripto.market_cap_change_percentage_24h > 0 ? "positivo" : "negativo",
      };
    });
    return dataFormat;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export default getCryptoList;
