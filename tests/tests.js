Tinytest.add("numeral - correct export", function(test) {
	// Simply check 'numeral' is not undefined...
  test.isNotUndefined(numeral, "numeral doesn't seem to be correctly exported");
});

Tinytest.add("numeral - sample format", function(test) {
  var n = numeral(1000);
	var s = n.format('0,0');

  test.equal(s, '1,000');
});

/*
Tinytest.add("numeral - sample validation", function(test) {
	var s = '1,000';
  var valid = numeral.validate(s);
  test.isTrue(valid);
});
*/

Tinytest.add("numeral - language config", function(test) {
  // load a language
  numeral.language('fr', {
      delimiters: {
          thousands: ' ',
          decimal: ','
      },
      abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't'
      },
      ordinal : function (number) {
          return number === 1 ? 'er' : 'ème';
      },
      currency: {
          symbol: '€'
      }
  });

  // switch to 'fr'
  numeral.language('fr');

	var string = numeral(1230974).format('($ 0.00 a)');
  test.equal(string, '€ 1,23 m');
});
