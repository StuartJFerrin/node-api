var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {
    getName: function(req, res, next) {
        res.json(user.name);
    },
    getLocation: function(req, res, next) {
        res.json(user.location);
    },
  
    getOccupations: function(req, res, next) {
        if (req.query.order) {
            if (req.query.order === 'desc') {
                res.json(user.occupations.sort())
            }
            if (req.query.order === 'asc') {
                res.json(user.occupations.reverse())
            }
        }
        res.json(user.occupations);
    },
    getLatestOccupation: function(req, res, next) {
        res.json(user.occupations.slice(-1));
    },
    getHobbies: function(req, res, next) {
        res.json(user.hobbies);
    },
    getHobbiesType: function(req, res, next) {
        res.json(user.hobbies.filter(function(hobby) {
            if (hobby.type === req.params.type) {
                return hobby;
            }
        }));
    },
    getFamily: function(req, res, next) {
        if (req.query.relation) {
            res.json(user.family.filter(function(member) {
                if(member.relation === req.query.relation) {
                return member;
            }
            }
        ))}
        
        res.json(user.family);
    },
    getFamilyGender: function(req, res, next) {
        res.json(user.family.filter(function(member) {
            if(member.gender === req.params.gender) {
                return member;
            }
        }));
    },
    getRestaurants: function(req, res, next) {
        res.json(user.restaurants);
    },
    getRestaurantsName: function(req, res, next) {
        res.json(user.restaurants.filter(function(restaurant) {
            if(restaurant.name === req.params.name) {
                return restaurant;
            }
        }));
    },

    changeName: function(req, res, next) {
        console.log(user.name);
        user.name = req.body.name;
        res.json('Name updated to ' + user.name);
    },
    changeLocation: function(req, res, next) {
        req.body.location = user.location;
        res.json('Location Updated');
    },
    addOccupations: function(req, res, next) {
        user.occupations.push(req.body.occupations);
        res.json('Occupation Added');
    },
    addHobbies: function(req, res, next) {``
        user.hobbies.push(req.body.hobbies);
        res.json('Hobby Added');
    },
    addFamily: function(req, res, next) {
        user.family.push(req.body.family);
        res.json('Member Added');
    },
    addRestaurants: function(req, res, next) {
        user.restaurants.push(req.body.restaurants);
        res.json('Restaurant Added');
    },
   getSkillz: function(req, res, next) {
    res.json(skillz)
   },
    getSkillzExperience: function(req, res, next) {
        res.json(skillz.filter(function(skill) {
            if(skill.experience === req.params.experience) {
                return skill;
            }
        }));
    },
    postSkillz: function(req, res, next) {
        skillz.push(req.body.skillz);
        res.json('Skillz Added');
    },
    returnSecrets: function(req, res, next) {
        res.json(secrets);
    }
}

