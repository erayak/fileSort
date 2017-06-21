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

							console.log("Delete the contents of the AddSortedFiles folder ( yes/no )");

							prompt.get(['delete'], (err, result) => {

								if( !ex )
								{

									if( result.delete === 'yes' )
									{

										fs.readdir('AddSortedFiles',( ex, files )=>{

											if( !ex )
											{

												for(var i = 1; i < files.length; i++ )
												{

													fs.unlink(`AddSortedFiles/${files[i]}`, (err) => {
														if ( err )
															console.log('ERROR: ' + err);													
													});

												}

												console.log("SUCCESSFUL = Good By");

											}
											else
												console.log(ex);

										});

									}
									else
										console.log("Good By");
								}
								else
									console.log(ex);

							});

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