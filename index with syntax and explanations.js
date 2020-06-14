global.fetch = require("node-fetch");
const indicators = require("./indicators.js");
const exchange = require("./exchange.js");

//limit order

/* restClient.newOrder({amount:10,price:100,side:"buy",symbol:"ethusd"})
.then(response => restClient.cancelOrder({order_id:response.order_id}))
.then(response => console.log(response))
.catch(error => console.log(error));


CryptoCompareAPI.price('BTC', ['USD', 'EUR'])
.then(prices => {
  console.log(prices)
})
.catch(error => console.log(error)); */

/*
// we've just done some abstraction and hidden the moving average into a different file we might never look back upon again
// 100 minutes Moving Average
indicators.minutelyMovingAverage("BTC", "USD", 100, function(result){
  console.log("Minutely MA: ", result);
});

// 100 hour Moving Average
indicators.hourlyMovingAverage("BTC", "USD", 100, function(result){
  console.log("Hourly MA: ", result);
});

// 100 day Moving Average
indicators.dailyMovingAverage("BTC", "USD", 100, function(result){
  console.log("Daily MA: ", result);
});
*/
// 4. action in the market - buy, sell, hodl

//market order with abstraction in exchange.js


//market order for buying
/*
exchange.marketBuyBitcoin()
.then(res => console.log(res))
.catch(error => console.log(error))

*/
//market order for selling
exchange.marketSellBitcoin()
.then(res => console.log(res))
.catch(error => console.log(error))
