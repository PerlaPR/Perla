const yargs=require('yargs');
const axios=require('axios');

const argv=yargs
.options({
	a:{
		demand:true,
		alias: 'address',
		describe:'address to fetch weather for',
		string: true
	}
})
.help()
.alias('help','h')
.argv;

var encodedAddress=encodeURIComponent(argv.address);
var geocodeUrl=`https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBtrdqrIaEAm7BtNtPmsfdJuNEx0zeGFNY`;

axios.get(geocodeUrl).then((response)=>{
	if(response.data.status==='ZERO_RESULTS'){
		throw new Error('Unable to find that address');
	}

	var lat=response.data.results[0].geometry.location.lat;
	var lng=response.data.results[0].geometry.location.lng;

	var weatherUrl=`https://api.darksky.net/forecast/4f9395df1aa4a003d6b590c0181721bf/${lat},${lng}`;
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherUrl);
	}).then((response)=>{
		var temperature=response.data.currently.temperature;
		var apparentTemperature=response.data.currently.apparentTemperature;
		console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
	}).catch((e)=>{
		if(e.code=='ENOTFOUND'){
			console.log('Unable to connect to API servers');
		}else{
			console.log(e.message);
		}
});