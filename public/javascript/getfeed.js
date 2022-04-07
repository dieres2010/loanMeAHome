



var getFeed = function () {

    const axios = require("axios");
  
  const options = {
    method: 'GET',
    url: 'https://us-real-estate.p.rapidapi.com/finance/average-rate',
    params: {postal_code: '32312'},
    headers: {
      'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
      'X-RapidAPI-Key': 'ace563b49cmshf51f6b2f277eccfp1bc75djsn9f362115f89a'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
    
  }).catch(function (error) {
      console.error(error);
  });
    };
    
    getFeed()
  






var createFeed = function (response) {
    console.log(response.data)
    for (var i =0; i < 5; i++) {

      var rateDiv = document.createElement('div')
      rateDiv.classList = "rate-div"

      var rateFix = document.createElement('h3')
      rateFix.textContent = response.data.average_rent_price;
     rateDiv.append(rateFix)


     rates.append(rateDiv)
    }
  }

