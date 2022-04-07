const axios = require('axios')


var getFeed = function () {

const options = {
  method: 'GET',
  url: 'https://us-real-estate.p.rapidapi.com/finance/rate-trends',
  params: {is_refinance: 'false'},
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

module.exports = {getFeed}