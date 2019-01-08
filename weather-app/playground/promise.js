var asyncAdd=(a,b)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(typeof a==='number' && typeof b==='number'){
				resolve(a+b);
			}else{
				reject('Arguments must be numbers')
			}
		},5000);
	});
};

asyncAdd(5,7).then((res)=>{
	console.log('Results:', res);
	return asyncAdd(res,33);
},(errorMessage)=>{
	console.log(errorMessage);
}).catch((errorMessage)=>{
	console.log(errorMessage);
});

/*.then((res)=>{
	console.log('Should be 45', res);
},(errorMessage)=>{
	console.log(errorMessage);
});

var somePromise= new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Het. It worked!');
		//reject('Unable to fullfill promise')
	},2500);

});

somePromise.then((message)=>{
	console.log('Success:',message);
},(errorMessage)=>{
	console.log('Error:',errorMessage)
});*/