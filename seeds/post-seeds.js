const { Post } = require('../models');

const postdata = [
  {
    content: 'Stratton Equities',
    title: 'Stratton - Hard Money Loan',
    post_url: 'https://www.strattonequities.com/loan-pre-qualification',
    property_type: 'House',
    loan_type: 'hard-money',
    down_payment: "20-down",
    credit_score: "credit-620",
    employment: '2-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'TC Federal Bank',
    title: 'TC Fed Conventional Loan',
    post_url: 'https://hosting.bytesoftware.com/apps/BCP_57134?',
    property_type: 'House',
    loan_type: 'Conventional',
    down_payment: "5-down",
    credit_score: "credit-700",
    employment: '1-year',
    condition: 'strict',
    user_id: 2
  },
  {
    content: 'Fairway Independent Mortgage Corp',
    title: 'Fairway Independent Mortgage Corp',
    post_url: 'https://www.fairwayindependentmc.com/loans-options/fha',
    property_type: 'House',
    loan_type: 'FHA',
    down_payment: "0-down",
    credit_score: "credit-600",
    employment: '2-year',
    condition: 'strict',
    user_id: 3
  },
{
    content: 'MMG Loans',
    title: 'FHA Loan with MMG Corp',
    post_url: 'https://mmgcapitalgroup.com/our-products/term-loan/',
    property_type: 'condo',
    loan_type: 'pre-med',
    down_payment: "5-down",
    credit_score: "credit-580",
    employment: '1-year',
    condition: 'strict',
    user_id: 5
  },
  {
    content: 'Stratton Equities',
    title: 'Stratton Equities - Investment Loans',
    post_url: 'https://www.strattonequities.com/loan-pre-qualification',
    property_type: 'House',
    loan_type: 'rental-invest',
    down_payment: "3.5-down",
    credit_score: "credit-700",
    employment: '1-year',
    condition: 'strict',
    user_id: 1
  },
  {
    content: 'Farm Credit',
    title: 'FHA Loan with Farm Credit',
    post_url: 'https://farmcredit.com/',
    property_type: 'House',
    loan_type: 'FHA',
    down_payment: '0-down',
    credit_score: "credit-750",
    employment: '1-year',
    condition: 'strict',
    user_id: 6
  }

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;