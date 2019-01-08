console.log('Starting app.js');

//cargar modulos
const fs= require('fs');//modulo FileSystem
//const os= require('os');//modulo sistema operativo
const _=require('lodash');
const yargs=require('yargs');

const notes= require('./notes.js');

const titleOptions={
	describe: 'Title of note',
	demand: true,
	alias: 't'
};
const bodyOptions={
	describe: 'Body of note',
	demand: true,
	alias :'b'
};

const argv=yargs
.command('add','Add a new note',{
	title: titleOptions,
	body: bodyOptions
})
.command('list','List all notes')
.command('read','Read a note',{
	title: titleOptions
})
.command('remove','Remove a note',{
	title: titleOptions
})
.help()
.argv;
var command=process.argv[2];
console.log('Command: ',command);
//console.log('Process', process.argv);
console.log('Yargs',argv);

if(command==='add'){

	//console.log('Adding new note');
	var note=notes.addNote(argv.title, argv.body);
	if(note){
		console.log('Note created');
		notes.logNote(note);
	}else{
		console.log('Note title taken');
	}
}else if(command==='list'){

	//console.log('Listen all notes');
	var allNotes=notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note)=>notes.logNote(note));

}else if(command==='read'){

	//console.log('Reading...');
	var note=notes.getNote(argv.title);
	if(note){
		console.log('Note found');
		notes.logNote(note);
	}else{
		console.log('Note not found')
	}
}else if(command==='remove'){

	//console.log('Removing...');
	var noteRemoved=notes.removeNote(argv.title);
	var	message=noteRemoved ? 'Note was removed':'Note not found';
	console.log(message);

}else{
	console.log('Command not recognized');
}













//const desafio=require('./desafio.js');

//console.log(_.inString(true));
//console.log(_.inString('Perla'));

//var filteredArray=_.uniq(['Perla',1, 'Perla', 1,2,3,4]);
//console.log(filteredArray);

//var res=notes.agregar(1,7);
//	console.log(res);


//var res= notes.addNote();
//	console.log(res);


//var user=os.userInfo();//obtener la informacion de usuario actual del sistema operativo

//console.log(user);

/*creamos el archivo greetings.txt que contendrá hello *usuario*
fs.appendFile('greetings.txt', `Hello ${user.username} you are ${notes.age}.`, function(err){
	if(err){
		console.log('Unable to write to file');
	}
});*/

