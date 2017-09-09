var express = require('express');
var bodyParser = require('body-parser');
var mainCtrl = require('./controllers/mainCtrl');
var header = require('./controllers/middleware');

var app = express();

app.use(bodyParser.json());
app.use(header.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsName);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.post('/occupations', mainCtrl.addOccupations);
app.post('/hobbies', mainCtrl.addHobbies);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurants);

app.get('/skillz', mainCtrl.getSkillz);
app.get('/skillz/:experience', mainCtrl.getSkillzExperience);

app.post('/skillz', header.generatedID, mainCtrl.postSkillz);

app.get('/secrets/:username/:pin', header.verifyUser, mainCtrl.returnSecrets);

app.listen(3000, function() {
    console.log('app listening on Port 3000') 
});