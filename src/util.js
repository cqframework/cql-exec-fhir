/**
 * Takes in a choice type name and returns the name that should be used when serializing a
 * choice element to FHIR JSON. This is usually the same as the original choice type name, but
 * for choice types that are profiles of a datatype, the original datatype name should be used
 * instead. Currently, the only use case for this is SimpleQuantity --> Quantity. See:
 * https://build.fhir.org/datatypes-profiles.html
 * @param {string} choiceName the name of a choice type element as specified in the model info
 * @returns the choice name used for the purposes of serializing a choice element to FHIR JSON
 */
function normalizeChoiceName(choiceName) {
  return choiceName === 'SimpleQuantity' ? 'Quantity' : choiceName;
}

module.exports = { normalizeChoiceName };
