// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
  // DINER'S CLUB
  let dinersClubArr = cardNumber.match(/^3[89]\d{12}$/);
  if (dinersClubArr) { return 'Diner\'s Club'; }

  // AMERICAN EXPRESS
  let americanExpressArr = cardNumber.match(/^3[47]\d{13}$/);
  if (americanExpressArr) { return 'American Express'; }

  // VISA
  let visaArr = cardNumber.match(/^4\d{12}$/) || cardNumber.match(/^4\d{15}$/) || cardNumber.match(/^4\d{18}$/);
  if (visaArr) { return 'Visa'; }

  // MASTERCARD
  let masterCardArr = cardNumber.match(/^5[12345]\d{14}$/);
  if (masterCardArr) { return 'MasterCard'; }

  // DISCOVER
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19
  let discoverArr = cardNumber.match(/^6011\d{12}$/) || cardNumber.match(/^6011\d{15}$/) || cardNumber.match(/^64[4-9]\d{13}$/) || cardNumber.match(/^64[4-9]\d{16}$/) || cardNumber.match(/^65\d{14}$/) || cardNumber.match(/^65\d{17}$/);
  if (discoverArr) { return 'Discover'; }

  // MAESTRO
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
  let maestroArr = cardNumber.match(/^5018\d{8,15}$/) || cardNumber.match(/^5020\d{8,15}$/) || cardNumber.match(/^5038\d{8,15}$/) || cardNumber.match(/^6304\d{8,15}$/);
  if (maestroArr) { return 'Maestro'; }
};


