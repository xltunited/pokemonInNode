var inquirer = require('inquirer');

var teams = require('./pokemonTeam.js');

function gameStart(){

	console.log();

	console.log();

	console.log('--------------------------------------------------------------------------------------------------------------------------------');
	console.log('--------------------------------------------------------------------------------------------------------------------------------');

	console.log('	8888888               888 d8b                       8888888b.  888          888                              ');
	console.log('	  888                 888 Y8P                       888   Y88b 888          888                              ');
	console.log('	  888                 888                           888    888 888          888                              ');
	console.log('	  888   88888b.   .d88888 888  .d88b.   .d88b.      888   d88P 888  8888b.  888888  .d88b.   8888b.  888  888');
	console.log('	  888   888 "88b d88" 888 888 d88P"88b d88""88b     8888888P"  888     "88b 888    d8P  Y8b     "88b 888  888');
	console.log('	  888   888  888 888  888 888 888  888 888  888     888        888 .d888888 888    88888888 .d888888 888  888');
	console.log('	  888   888  888 Y88b 888 888 Y88b 888 Y88..88P     888        888 888  888 Y88b.  Y8b.     888  888 Y88b 888');
	console.log('	8888888 888  888  "Y88888 888  "Y88888  "Y88P"      888        888 "Y888888  "Y888  "Y8888  "Y888888  "Y88888');
	console.log('	                                   888                                                                       ');
	console.log('	                              Y8b d88P                                                                       ');
	console.log('	                               "Y88P"                                                                        ');

	console.log('--------------------------------------------------------------------------------------------------------------------------------');
	console.log('--------------------------------------------------------------------------------------------------------------------------------');


	console.log("Welcome to the end of Victory Road!");

	console.log();

	console.log("You're about to take the final step in to becoming a Pokemon Master. Here, you'll have to defeat the Elite Four and the current Pokemon Champion");

	console.log();


	console.log("First up is Lorelei (Ice), she is known for her logical, calculated, and cool style of battling.");
	console.log("Second is Bruno (Fighting), pure raw power");
	console.log("Third is Agatha (Ghost), the oldest Elite Four ever. As such, she serves as an inspiration for senior Pokémon Trainers all around the region.");
	console.log("Fourth is Lance (Dragon), known as a cool and heroic Trainer, Lance has a large fan-following.");

	console.log();

	console.log('Good Luck Red!');

	console.log();

	optionsBeforeBattle()

}

function seePokemon(){

	inquirer.prompt([

	{

		type: 'list',

		name: "chosenPokemon",

		message: "Which pokemon would you like to see?",

		choices: [teams.allTeams.redTeam[0].name, teams.allTeams.redTeam[1].name, teams.allTeams.redTeam[2].name, teams.allTeams.redTeam[3].name, teams.allTeams.redTeam[4].name, teams.allTeams.redTeam[5].name, 'Go Back']

	}


	]).then(function(selection){

		if(selection.chosenPokemon != 'Go Back'){

			for(var i = 0; i < teams.allTeams.redTeam.length; i++){

				if (teams.allTeams.redTeam[i].name == selection.chosenPokemon){

					console.log('=======================================================================================================================');
					console.log('=======================================================================================================================');

					console.log('|| Pokemon: ' + teams.allTeams.redTeam[i].name);

					console.log('|| Type: ' + teams.allTeams.redTeam[i].type);

					if(teams.allTeams.redTeam[i].secondType != 'none'){

						console.log('|| Secondary Type: ' + teams.allTeams.redTeam[i].secondType);

					}

					console.log('|| About: ' + teams.allTeams.redTeam[i].info);

					console.log('|| Gender: ' + teams.allTeams.redTeam[i].gender);

					console.log('|| Hit Points: ' + teams.allTeams.redTeam[i].hp);

					console.log('|| Attack: ' + teams.allTeams.redTeam[i].attack);

					console.log('|| Defense: ' + teams.allTeams.redTeam[i].defense);

					console.log('|| Special Attack: ' + teams.allTeams.redTeam[i].specialAttack);

					console.log('|| Special Defense: ' + teams.allTeams.redTeam[i].specialDefense);

					console.log('|| Speed: ' + teams.allTeams.redTeam[i].speed);

					console.log('=======================================================================================================================');
					console.log('=======================================================================================================================');

				}

			}

		} else {

			optionsBeforeBattle();

		}

	});

}

function changeTo(reference){

	inquirer.prompt([

	{

		type: 'list',

		name: "positionTo",

		message: "To What position would you like to change that pokemon to?",

		choices: [teams.allTeams.redTeam[0].name, teams.allTeams.redTeam[1].name, teams.allTeams.redTeam[2].name, teams.allTeams.redTeam[3].name, teams.allTeams.redTeam[4].name, teams.allTeams.redTeam[5].name, 'Never Mind']

	}


	]).then(function(final){

		if(final.positionTo != 'Never Mind'){

			for(var i = 0; i < teams.allTeams.redTeam.length; i++){

				if(teams.allTeams.redTeam[i].name == reference){

					for(var j = 0; j < teams.allTeams.redTeam.length; j++ ){

						if(teams.allTeams.redTeam[j].name == final.positionTo){

							var temp = teams.allTeams.redTeam[i];

							teams.allTeams.redTeam[i] = teams.allTeams.redTeam[j];

							teams.allTeams.redTeam[j] = temp;

							break;

						}

					}

					changeOrder();

					break;

				}

			}

		} else {

			optionsBeforeBattle();

		}

	});	

}

function changeOrder(){

	inquirer.prompt([

	{

		type: 'list',

		name: "chosenPokemonPosition",

		message: "Which pokemon's positon would you like to change?",

		choices: [teams.allTeams.redTeam[0].name, teams.allTeams.redTeam[1].name, teams.allTeams.redTeam[2].name, teams.allTeams.redTeam[3].name, teams.allTeams.redTeam[4].name, teams.allTeams.redTeam[5].name, 'Go Back']

	}


	]).then(function(change){

		if(change.chosenPokemonPosition != 'Go Back'){

			
			changeTo(change.chosenPokemonPosition);
			

		} else {

			optionsBeforeBattle();

		}

	});

}

function optionsBeforeBattle(){

	inquirer.prompt([

	{

		type: 'list',

		name: "userInput",

		message: "What would you like to do?",

		choices: ['See my Team', 'Change Team Order', "Enough, Lets Battle!"]

	}


	]).then(function(answer){

		if(answer.userInput == 'See my Team'){

			seePokemon();

		} else if (answer.userInput == 'Change Team Order') {

			changeOrder();

			

		} else if( answer.userInput == "Enough, Lets Battle!"){

			chooseOpponent();

		}

	});

}

function chooseOpponent(){

	inquirer.prompt([

	{

		type: 'list',

		name: "opponentSelection",

		message: "Whom would you like to battle?",

		choices: ['Lorelei', 'Bruno', 'Agatha', 'Lance']

	}


	]).then(function(decision){

		if(decision.opponentSelection == 'Lorelei'){

			var myTeam = [teams.allTeams.redTeam[0].forUse(), teams.allTeams.redTeam[1].forUse(), teams.allTeams.redTeam[2].forUse(), teams.allTeams.redTeam[3].forUse(), teams.allTeams.redTeam[4].forUse(), teams.allTeams.redTeam[5].forUse()];

			battleDecision(myTeam, createTeams('Lorelei'));

		} else if(decision.opponentSelection == 'Bruno'){



		} else if(decision.opponentSelection == 'Agatha'){



		} else if(decision.opponentSelection == 'Lance'){



		}

	});

}

function battleDecision(teamOne, teamTwo){

	console.log(teamOne + teamTwo);

}

function createTeams(opponentName){

	var opponentTeam;

	if(opponentName == 'Lorelei'){

		opponentTeam = [teams.allTeams.loreleiTeam[0].forUse(), teams.allTeams.loreleiTeam[1].forUse(), teams.allTeams.loreleiTeam[2].forUse(), teams.allTeams.loreleiTeam[3].forUse(), teams.allTeams.loreleiTeam[4].forUse()];

		return opponentTeam;

	}

}

gameStart();