const CryptoCompareAPI = require ("cryptocompare");
const CCAPIKey = "d2f8b560cb20ecd571110a98f038c28ece3e64dd3692daa5b746b9bc537e027c";
CryptoCompareAPI.setApiKey(CCAPIKey);


      module.exports = {

        minutelyMovingAverage:function(cryptoAsset, fiatCurrency, minutes, callback){
          if (minutes>1441) {
            console.error("Only up to 1441 minutes allowed!");
            return
          }
          CryptoCompareAPI.histoMinute(cryptoAsset, fiatCurrency)
          .then(data => {
            data = data.reverse();
            var sum = 0;
            for (var i=0; i<minutes; i++){
              sum += data[i].close;
            }
            var movingAverage = sum / minutes;
            callback(movingAverage);
          })
          .catch(console.error)
        },

        hourlyMovingAverage:function(cryptoAsset, fiatCurrency, hours, callback){
          if (hours>169) {
            console.error("Only up to 169 hours allowed!");
            return
          }
          CryptoCompareAPI.histoHour(cryptoAsset, fiatCurrency)
          .then(data => {
            data = data.reverse();
            var sum = 0;
            for (var i=0; i<hours; i++){
              sum += data[i].close;
            }
            var movingAverage = Math.floor(sum / hours);
            callback(movingAverage);
          })
          .catch(console.error)
        },

        dailyMovingAverage:function(cryptoAsset, fiatCurrency, days, callback){
          if (days>169) {
            console.error("Only up to 169 days allowed!");
            return
          }
          CryptoCompareAPI.histoHour(cryptoAsset, fiatCurrency)
          .then(data => {
            data = data.reverse();
            var sum = 0;
            for (var i=0; i<days; i++){
              sum += data[i].close;
            }
            var movingAverage = sum / days;
            callback(movingAverage);
          })
          .catch(console.error)
        }

      }
/*  // 1. get data from cryptocompare
  CryptoCompareAPI.histoMinute(cryptoAsset, fiatCurrency)
  .then(data => {
    data = data.reverse();
    var sum = 0;
    for(var i = 0;i<minutes;i++){
    sum+=data[i].close;
    }

  // 2. calculate MA from 100 past hours
    var movingAverage = sum/minutes;
    callback(movingAverage);
    })
  .catch(console.error)
  }
},

module.exports = {
  hourlymovingAverage:
  // 100 hour MA - moving average function to make the code more general
  function hourlymovingAverage(cryptoAsset,fiatCurrency,hours,callback){
    if(hours>169){
      console.error("Only up to 169 hours allowed!")
      return
      }
 */
