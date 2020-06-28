const GeminiAPI = require("gemini-api").default;
const secret = "2C9k4sFf3Q74j31pko4khv4FLPnY";
const key = "account-dDTmiJwO10R1v4Wwx7O3";
const restClient = new GeminiAPI({key, secret, sandbox:true});

module.exports = {

  marketBuyBitcoin: function (){

  return restClient.newOrder({amount:1,
                      price:30000,
                      side:"buy",
                      symbol:"btcusd",
                      options:["immediate-or-cancel"]})
                    },

marketSellBitcoin: function (){

  return restClient.newOrder({amount:1,
                      price:1,
                      side:"sell",
                      symbol:"btcusd",
                      options:["immediate-or-cancel"]})
                    },

bitcoinPrice: function(){
  return restClient.getTicker("btcusd");
}
}
