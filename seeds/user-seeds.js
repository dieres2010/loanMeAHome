const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    license_number: '1234567',
    phone_number: '8504441212',
    mortgage_name: 'Tally Loans'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123',
    license_number: '0987654',
    phone_number: '8505551245',
    mortgage_name: 'Noles Mortgage'
  }
 
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
