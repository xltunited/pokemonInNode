function pokemon(name, type, secondType, info, gender, hp, attack, defense, specialAttack, specialDefense, speed, move1, move2, move3, move4){

	this.name = name;

	this.type = type;

	this.secondType = secondType;

	this.info = info;

	this.hp = hp;

	this.attack = attack;

	this.specialAttack = specialAttack;

	this.defense = defense;

	this.specialDefense = specialDefense;

	this.speed = speed;

	this.gender = gender;

	this.move1 = move1;

	this.move2 = move2;

	this.move3 = move3;

	this.move4 = move4;

	this.status = 'none';

	this.forUse = function(){

		return new pokemon(name, type, secondType, info, gender, hp, attack, defense, specialAttack, specialDefense, speed, move1, move2, move3, move4);

	}

}

var Poliwrath = new pokemon('Poliwrath', 'Water', 'Fighting' , 'An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers.', 'Male', 321, 289, 226, 176, 216, 239, 'Water Gun', 'Ice Beam' , 'Double Team', 'Seismic Toss');

var Venusaur = new pokemon('Venusaur', 'Grass', 'Poison', 'The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.', 'Male', 364, 200, 202, 299, 236, 196, 'Poison Powder', 'Razor Leaf', 'Cut', 'Solar beam');

var Pikachu = new pokemon('Pikachu', 'Electric', 'none', 'When several of these Pokémon gather, their electricity could build and cause lightning storms.', 'Male', 211, 209, 116, 136, 136, 279, 'Thunder Shock', 'Toxic', 'Surf', 'Iron Tail');

var Snorlax = new pokemon('Snorlax', 'Normal', 'none', 'Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.', 'Male', 461, 319, 166, 166, 319, 96, 'Mega Punch', 'Earthquake', 'Harden', 'Headbutt');

var Gyarados = new pokemon('Gyarados', 'Water', 'Flying', 'Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.', 'Male', 331, 349, 194, 156, 236, 261, 'Hydro Pump', 'Bite', 'Body Slam', 'Surf');

var Aerodactyl = new pokemon('Aerodactyl', 'Rock', 'Flying', "A ferocious, prehistoric Pokémon that goes for the enemy's throat with its serrated saw-like fangs.", 'Male', 364, 309, 166, 156, 186, 296, 'Dragon Claw', 'Take Down', 'Crunch', 'Ancient Power');

var Dewgong = new pokemon('Dewgong', 'Water', 'Ice', "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.", 'Female', 384, 176, 196, 176, 289, 176, '')

exports.allTeams = {

	redTeam : [Poliwrath, Venusaur, Pikachu, Snorlax, Gyarados, Aerodactyl],

	loreleiTeam : []
	

}


