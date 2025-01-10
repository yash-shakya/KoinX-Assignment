import Coin from "../model/coin.model.js";


// Task 2: function to get coin data
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


// Task 3: function to get deviation
export async function getDeviation(req,res){
    const {coin} = req.query;

    if(!coin){
        return res.status(400).json({message:"coin is required"});
    }

    try {
        const coinData=await Coin.findOne({name:coin});
        if(!coinData){
            return res.status(404).json({message:"coin not found"});
        }
        const n = coinData.price.length;
        if(n<100){
            const mean = coinData.price.reduce((a,b)=>a+b)/n;
            const deviation = coinData.price.map((price)=>(price-mean)**2).reduce((a,b)=>a+b)/n;
            return res.status(200).json({deviation});
        }
        else{
            const mean = coinData.price.slice(n-100,n).reduce((a,b)=>a+b)/100;
            const deviation = coinData.price.slice(n-100,n).map((price)=>(price-mean)**2).reduce((a,b)=>a+b)/100;
            return res.status(200).json({deviation});
        }
        
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
}