import Coin from "../model/coin.model.js";
import axios from "axios";

async function fetchData(coinName,coinId){
    const coinData = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`,{headers:{'x-cg-demo-api-key':process.env.COINGECKO_API_KEY}});

    const coins = await Coin.find({coin:coinName});

    if(!coins){
        try{

            await Coin.create({
                name:coinName,
                price:coinData.data.market_data.current_price.usd,
                marketCap:coinData.data.market_data.market_cap.usd,
                "24hChange":coinData.data.market_data.price_change_24h_in_currency.usd
            })
        }catch(error){
            console.log("Error in saving data to DB: ",error);
        }
    }

    else{
        try{
            await Coin.findOneAndUpdate({name:coinName},{
                price:coinData.data.market_data.current_price.usd,
                marketCap:coinData.data.market_data.market_cap.usd,
                "24hChange":coinData.data.market_data.price_change_24h_in_currency.usd
            })
        }catch(error){
            console.log("Error in updating data to DB: ",error);
        }
    }   
}

export default fetchData;