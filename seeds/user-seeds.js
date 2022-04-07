const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Brian Ha',
    email: 'BrianHa@stratton.com',
    password: 'password123',
    license_number: 'SL0000',
    phone_number: '9735665653',
    mortgage_name: 'Stratton Equities'
  },
  {
    username: 'Caitlin Yancey Moore',
    email: 'Caitlin@TC.com',
    password: 'password123',
    license_number: '1563244',
    phone_number: '8505101169',
    mortgage_name: 'TC Federal Bank'
  },
  {
    username: 'Micheal Forslund',
    email: 'Micheal@FIMC.com',
    password: 'password123',
    license_number: '2289',
    phone_number: '8509804400',
    mortgage_name: 'TC Federal Bank'
  },
{
    username: 'Josh Keller',
    email: 'Josh@GuaranteedRate.com',
    password: 'password123',
    license_number: '1570183',
    phone_number: '8508161838',
    mortgage_name: 'TC Federal Bank'
  },
  {
    username: 'Omar Correa',
    email: 'Omar@mmgloans.com',
    password: 'password123',
    license_number: '420420',
    phone_number: '8501304400',
    mortgage_name: 'MMG Mortgage Corps'
  },
  {
    username: 'Ben Faint',
    email: 'Ben@farmcredit.com',
    password: 'password123',
    license_number: 'NMLS1574721',
    phone_number: '8505574140',
    mortgage_name: 'Farm Credit' 
  }

 
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;