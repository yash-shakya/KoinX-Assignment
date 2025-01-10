import Coin from "../model/coin.model.js";


// Task 2
export async function getCoinData(req, res) {
    const {coin} = req.query;

    if(!coin){
        return res.status(400).json({message:"coin is required"});
    }

    try {
        const coinData=await Coin.findOne({name:coin});
        if(!coinData){
            return res.status(404).json({message:"coin not found"});
        }
        return res.status(200).json({
            price:coinData.price,
            marketCap:coinData.marketCap,
            "24hChange":coinData["24hChange"]
        });
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
}


