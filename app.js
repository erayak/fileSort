#!/usr/bin/env node

// Library
const prompt = require('prompt');
const fs = require('fs');
const fse = require('fs-extra');

// 
// Start Console App 
// 
prompt.start();

console.log("What number do you start with ?");

prompt.get(['number'], (err, result) => {

	fse.remove('output',()=>{

		fs.mkdir('output',(e)=>{

			fse.copy('AddSortedFiles', 'output')
				
				.then(() => {

					fs.readdir("output", (ex, files) => {
		
						if ( !ex )
						{
							
							for( var i = 1; i < files.length; i++ )
							{

								fs.rename(`output/${files[i]}`, `output/${result.number++}`, (err) => {
									if ( err )
										console.log('ERROR: ' + err);
								});

							}

							console.log(" SUCCESSFUL => In the outputs file ");

						}
						else
							console.log(ex);
					
					});

				})
				.catch((err) => {
					console.error(err);
				});
		});
	});

});