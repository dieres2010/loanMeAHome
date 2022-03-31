const { Post } = require('../models');

const postdata = [
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'house',
    loan_type: 'fha',
    down_payment: 0,
    credit_score: 500,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'This loan is for people for a first time home buyer',
    title: 'maybe title or no title.',
    post_url: 'https://google.com',
    property_type: 'condo',
    loan_type: 'va-loan',
    down_payment: 3,
    credit_score: 590,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'townhouse',
    loan_type: 'conventional',
    down_payment: 3.5,
    credit_score: 600,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'lot-land',
    loan_type: 'rural-usda',
    down_payment: 5,
    credit_score: 620,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'mobile-home',
    loan_type: 'mobile-home',
    down_payment: 20,
    credit_score: 700,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'manufactured',
    loan_type: 'rehab-203k',
    down_payment: 'home-equity',
    credit_score: 750,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'multifamily',
    loan_type: 'land',
    down_payment: 0,
    credit_score: 600,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'distressed',
    loan_type: 'hard-money',
    down_payment: 0,
    credit_score: 600,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'manufactured',
    loan_type: 'new-construction',
    down_payment: 0,
    credit_score: 600,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'manufactured',
    loan_type: 'heloc',
    down_payment: 0,
    credit_score: 600,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'manufactured',
    loan_type: 'dp-assistance',
    down_payment: 0,
    credit_score: 600,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'manufactured',
    loan_type: 'pre-med',
    down_payment: 0,
    credit_score: 600,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'this is loan content',
    title: 'maybe title or no title.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    property_type: 'manufactured',
    loan_type: 'rental-invest',
    down_payment: 0,
    credit_score: 600,
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
