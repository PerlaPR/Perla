const request=require('request');

var getWeather=(lat,lng,callback)=>{

	request({
		url: `https://api.darksky.net/forecast/4f9395df1aa4a003d6b590c0181721bf/${lat},${lng}`,
		json:true
	}, (error, response,body)=>{
		if(error){
			callback('Unable to connect to forecast servers');
		}else if(response.statusCode===400){
			callback('Unable fetch waether');
		}else if(response.statusCode===200){
			callback(undefined,{
				temperature:body.currently.temperature,
				apparentTemperature:body.currently.apparentTemperature
			});
		}
		
	});
};
module.exports.getWeather=getWeather;