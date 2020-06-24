global.fetch = require("node-fetch");
const indicators = require("./indicators.js");
const exchange = require("./exchange.js");


/* if BTC price is less than MA then we want to buy (a chance it is oversold)
 - IF we have no position
if BTC price is more than MA then we want to sell (a chance it is overbought)
 - IF we have a position
*/

var hasPosition = false;
var strategy = function(){
  console.log("                   ");
  console.log("===================");
  console.log("Executing strategy");

  indicators.hourlyMovingAverage("BTC","usd",100,function(ma){
    exchange.bitcoinPrice()
    .then(res => {
  var price = res.last;

      console.log("Hourly MA is ", ma);
      console.log("Price ", price);
    if(price < ma && !hasPosition){

        console.log("Buying conditions met!");
        exchange.marketBuyBitcoin()
        .then(res => {

          console.log("Purchase successful");
        hasPosition = true;
          setTimeout(strategy,20000);
      })
    .catch(error => console.error)
    }

    else if(price > ma && hasPosition){

            console.log("Selling conditions met!");
            exchange.marketSellBitcoin()
            .then(res => {

              console.log("Selling successful");
            hasPosition = false;
            setTimeout(strategy,20000);
            //timer is after console.log because it will not execute until MA is written
          })
        .catch(error => console.error)
  }

    else{
      console.log("Hodl!");
      setTimeout(strategy,20000);
    }
  })
});
}

strategy();
