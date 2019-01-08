console.log('Starting app');

setTimeout(()=>{
	console.log('Inside of callback');
}, 2000);//tiempo de espera

setTimeout(()=>{
	console.log('Second setTimeout');
},0);

console.log('Finishing up');