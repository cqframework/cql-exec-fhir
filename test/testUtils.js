const cql = require('cql-execution');
const { expect } = require('chai');

// Helper function to verify decimal results across versions of cql-execution.
// v4.0.0 introduced the Decimal class, before that CQL Decimals were plain JS numbers.
// This function should be removed if/when this library requires cql-execution >=4.0.0.
// NOTE: this function only tests against the version of cql-execution currently installed,
// it does not ensure the logic works for all versions.
function expectDecimal(actual, expected) {
  if (cql.Decimal != null && typeof cql.Decimal.from === 'function') {
    expect(actual).to.be.instanceOf(cql.Decimal);
    expect(actual.equals(expected)).to.be.true;
  } else {
    expect(actual).to.equal(expected);
  }
}

module.exports = { expectDecimal };
