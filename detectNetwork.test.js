function cardTest(bank) {
  // Need to set a chai test environment
  var expect = chai.expect;

  return function(prefix) {
    return function(card) {
      it(`[${card}] has a prefix of ${prefix} and a length of ${card.length}`, function() {
        expect(detectNetwork(card)).to.equal(bank);
      });
    }
  }
}

// Create China UnionPay test template
let CUPtest = cardTest('China UnionPay');
// Create Switch test template
let switchTest = cardTest('Switch');


/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
   // throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901233') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has prefix of 51 and length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has prefix of 52 and length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has prefix of 53 and length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 

  //var should = chai.should();
  var expect = chai.expect;
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234'))./* should */to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234'))./* should */to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect; 

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789012')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789012345')).to.equal('Discover');
  });

  // Discover always has a prefix of 644-649, or 65, and a length of 16 or 19
  // HOME MADE TESTS (PREFIX 644 THROUGH 649)
  for (let i = 644; i < 650; i++) {
    // Test for length of 16
    it(`has a prefix of ${i} and a length of 16`, function() {
      expect(detectNetwork(i + '1234567890123')).to.equal('Discover');
    })
    // Test for length of 19
    it(`has a prefix of ${i} and a length of 19`, function() {
      expect(detectNetwork(i + '1234567890123456')).to.equal('Discover');
    })
  }

  // HOME MADE TESTS (PREFIX 65)
  // Test for length of 16
  it(`has a prefix of 65 and a length of 16`, function() {
    expect(detectNetwork('6512345678901234')).to.equal('Discover');
  });

  // Test for length of 19
  it(`has a prefix of 65 and a length of 19`, function() {
    expect(detectNetwork('6512345678901234567')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
  var expect = chai.expect;

  let prefixArr = ['5018', '5020', '5038', '6304'];
  let suffixArr = ['12345678', '123456789', '1234567890', '12345678901', '123456789012', '1234567890123', '12345678901234', '123456789012345']

  prefixArr.forEach((prefix) => {
    suffixArr.forEach((suffix) => {
      let creditCard = prefix + suffix
      it(`[${creditCard}] has a prefix of ${prefix} and a length of ${creditCard.length}`, function() {
        expect(detectNetwork(creditCard)).to.equal('Maestro');
      });
    });
  });
});

describe('should support China UnionPay', function() {
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  var expect = chai.expect;

  // Create an array of all the possible prefixes
  let prefix = ['624', '625', '626', '6282', '6283', '6284', '6285', '6286', '6287', '6288'];
  for (let i = 622126; i < 622926; i++) {
    prefix.push(i.toString());
  }

  // Chai test for each prefix (customized by the prefix length)
  for(let i = 0; i < prefix.length; i++) {

    // Create a new test for each new prefix
    let test = CUPtest(prefix[i]);

    if (prefix[i].length === 3) { // Tests if prefix was only length 3
      let card1 = prefix[i] + '4567890123456'; // 16 length
      let card2 = prefix[i] + '45678901234567'; // 17 length
      let card3 = prefix[i] + '456789012345678'; // 18 length
      let card4 = prefix[i] + '4567890123456789'; // 19 length
      
      // Test all 4 cards (lengths 16-19) with the same 3 digit prefix
      test(card1);
      test(card2);
      test(card3);
      test(card4);

    } else if (prefix[i].length === 4) {  // Test if prefix was only length 4
      let card1 = prefix[i] + '567890123456'; // 16 length
      let card2 = prefix[i] + '5678901234567'; // 17 length
      let card3 = prefix[i] + '56789012345678'; // 18 length
      let card4 = prefix[i] + '567890123456789'; // 19 length

      // Test all 4 cards (lengths 16-19) with the same 4 digit prefix
      test(card1);
      test(card2);
      test(card3);
      test(card4);

    } else if (prefix[i].length === 6) { // Test if prefix was length 6
      let card1 = prefix[i] + '7890123456'; // 16 length
      let card2 = prefix[i] + '78901234567'; // 17 length
      let card3 = prefix[i] + '789012345678'; // 18 length
      let card4 = prefix[i] + '7890123456789'; // 19 length

      // Test all 4 cards (lengths 16-19) with the same 6 digit prefix
      test(card1);
      test(card2);
      test(card3);
      test(card4);
    }
  }
});

describe('should support Switch', function() {
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19."
  var expect = chai.expect;

  // Create a list of all possible prefixes
  let switchPrefix = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];

  switchPrefix.forEach((prefix) => {

    // Create new test for each new prefix
    let test = switchTest(prefix);

    if (prefix.length === 4) { // Tests for prefix length of 4
      let card16 = prefix + '567890123456';
      let card18 = prefix + '56789012345678';
      let card19 = prefix + '567890123456789';

      // Test all 3 lengths of card with the same 4 digit prefix
      test(card16);
      test(card18);
      test(card19);

    } else if (prefix.length === 6) {
      let card16 = prefix + '7890123456';
      let card18 = prefix + '789012345678';
      let card19 = prefix + '7890123456789';

      // Test all 3 lenghts of card with the same 6 digit prefix
      test(card16);
      test(card18);
      test(card19);
    }
  });
});
