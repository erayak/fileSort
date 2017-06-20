#!/usr/bin/env node

// Library
const fs = require('fs');

// 
// Start Console App 
// 
fs.readdir("AddSortedFiles", (ex, files) => {
 
    if ( !ex )
	{
		for( var i = 1; i < files.length; i++ )
		{
			console.log("File => " + files[i] + " New Name => " + i );
			
			fs.rename(`AddSortedFiles/${files[i]}`, `AddSortedFiles/${i}`, (err) => {
				if ( err )
					console.log('ERROR: ' + err);
			});
		}
    }
	else
		console.log(ex);

});