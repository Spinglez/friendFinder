
const friendData = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function (req,res){
    res.json(friendData);
  });
  app.post("/api/newfriends", function(req, res) {
    friendData.push(req.body);
    res.json(true);
  });
}

// module.exports = function(app){

//   });
// }
