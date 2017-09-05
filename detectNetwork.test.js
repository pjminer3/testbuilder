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
  let firstPrefix = [];
  for (let i = 622126; i < 622926; i++) {
    firstPrefix.push(i.toString());
  }
  let secondPrefix = ['624', '625', '626'];
  let thirdPrefix = ['6282', '6283', '6284', '6285', '6286', '6287', '6288'];
  let prefix = firstPrefix.concat(secondPrefix, thirdPrefix);

  // Chai test for each prefix (customized by the prefix length)
  prefix.forEach((prefix) => {
    if (prefix.length === 3) {
      let card1 = prefix + '4567890123456'; // 16 length
      let card2 = prefix + '45678901234567'; // 17 length
      let card3 = prefix + '456789012345678'; // 18 length
      let card4 = prefix + '4567890123456789'; // 19 length

      // Test card prefix at length 16
      it(`[${card1}] has a prefix of ${prefix} and a length of ${card1.length}`, function() {
        expect(detectNetwork(card1)).to.equal('China UnionPay');
      });

      // Test card prefix at length 17
      it(`[${card2}] has a prefix of ${prefix} and a length of ${card2.length}`, function() {
        expect(detectNetwork(card2)).to.equal('China UnionPay');
      });

      // Test card prefix at length 16
      it(`[${card3}] has a prefix of ${prefix} and a length of ${card3.length}`, function() {
        expect(detectNetwork(card3)).to.equal('China UnionPay');
      });

      // Test card prefix at length 19
      it(`[${card4}] has a prefix of ${prefix} and a length of ${card4.length}`, function() {
        expect(detectNetwork(card4)).to.equal('China UnionPay');
      });
    } else if (prefix.length === 4) {
      let card1 = prefix + '567890123456'; // 16 length
      let card2 = prefix + '5678901234567'; // 17 length
      let card3 = prefix + '56789012345678'; // 18 length
      let card4 = prefix + '567890123456789'; // 19 length

      // Test card prefix at length 16
      it(`[${card1}] has a prefix of ${prefix} and a length of ${card1.length}`, function() {
        expect(detectNetwork(card1)).to.equal('China UnionPay');
      });

      // Test card prefix at length 17
      it(`[${card2}] has a prefix of ${prefix} and a length of ${card2.length}`, function() {
        expect(detectNetwork(card2)).to.equal('China UnionPay');
      });

      // Test card prefix at length 16
      it(`[${card3}] has a prefix of ${prefix} and a length of ${card3.length}`, function() {
        expect(detectNetwork(card3)).to.equal('China UnionPay');
      });

      // Test card prefix at length 19
      it(`[${card4}] has a prefix of ${prefix} and a length of ${card4.length}`, function() {
        expect(detectNetwork(card4)).to.equal('China UnionPay');
      });
    } else if (prefix.length === 6) {
      let card1 = prefix + '7890123456'; // 16 length
      let card2 = prefix + '78901234567'; // 17 length
      let card3 = prefix + '789012345678'; // 18 length
      let card4 = prefix + '7890123456789'; // 19 length

      // Test card prefix at length 16
      it(`[${card1}] has a prefix of ${prefix} and a length of ${card1.length}`, function() {
        expect(detectNetwork(card1)).to.equal('China UnionPay');
      });

      // Test card prefix at length 17
      it(`[${card2}] has a prefix of ${prefix} and a length of ${card2.length}`, function() {
        expect(detectNetwork(card2)).to.equal('China UnionPay');
      });

      // Test card prefix at length 16
      it(`[${card3}] has a prefix of ${prefix} and a length of ${card3.length}`, function() {
        expect(detectNetwork(card3)).to.equal('China UnionPay');
      });

      // Test card prefix at length 19
      it(`[${card4}] has a prefix of ${prefix} and a length of ${card4.length}`, function() {
        expect(detectNetwork(card4)).to.equal('China UnionPay');
      });
    }

    // // Test card prefix at length 16
    // it(`[${card1}] has a prefix of ${prefix} and a length of ${card1.length}`, function() {
    //   expect(detectNetwork(card1)).to.equal('China UnionPay');
    // });

    // // Test card prefix at length 19
    // it(`[${card2}] has a prefix of ${prefix} and a length of ${card2.length}`, function() {
    //   expect(detectNetwork(card2)).to.equal('China UnionPay');
    // });
  });
});
describe('should support Switch')
