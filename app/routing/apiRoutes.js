var users = require('../data/friends.js');

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(users);
	});

	app.post('/api/friends', function(req, res){

		var bestFriend = {
      name: "",
      email: "",
			photo: "",
			diff: 1000
		};

		var userData 	= req.body;
		var userScores 	= userData.scores;

	
		var totalDiff = 0;
		for  (var i=0; i< users.length; i++) {

			console.log(users[i].name);
			totalDiff = 0;

			for (var j=0; j< users[i].scores[j]; j++){
				totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(users[i].scores[j]));

				if (totalDiff <= bestFriend.diff){
					bestFriend.name = users[i].name;
					bestFriend.photo = users[i].photo;
					bestFriend.diff = totalDiff;
				}
			}
		}

	  users.push(userData);
		res.json(bestFriend);

	});

};