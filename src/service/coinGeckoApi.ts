import axios from "axios";
// const BASE_URL = import.meta.env.BASE_URL;
// const Apikey = import.meta.env.COINGECKO_APIKEY;

const getCryptoList = async () => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    const data = response.data;
    console.log({ "data de la api": data });
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export default getCryptoList;
// ${BASE_URL}
