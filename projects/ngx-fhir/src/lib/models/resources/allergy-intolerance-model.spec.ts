import { AllergyIntoleranceModel } from './allergy-intolerance-model';

describe('AllergyIntoleranceModel', () => {
  it('should create an instance', () => {
    expect(new AllergyIntoleranceModel({})).toBeTruthy();
  });

  it('should parse r4', () => {
    let fixture = require("../../fixtures/r4/resources/allergyIntolerance/example1.json")
    let expected = new AllergyIntoleranceModel({})
    expected.title = 'Cashew nuts'
    expected.status = 'Confirmed'
    expected.recordedDate = '2014-10-09T14:58:00+11:00'
    expected.substanceCoding = [
      {
        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code": "1160593",
        "display": "cashew nut allergenic extract Injectable Product"
      }
    ]
    expected.asserter = { reference: 'Patient/example' }
    expected.note = [{ text: 'The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract.' }]
    expected.type = 'allergy'
    expected.category = [ 'food' ]
    expected.patient = { reference: 'Patient/example' }

    expect(new AllergyIntoleranceModel(fixture)).toEqual(expected);
  });

  it('should parse r4 example2', () => {
    let fixture = require("../../fixtures/r4/resources/allergyIntolerance/example2.json")
    let expected = new AllergyIntoleranceModel({})
    expected.title = 'Penicillin G'
    expected.status = 'Unconfirmed'
    expected.recordedDate = '2010-03-01'
    expected.substanceCoding = []
    // expected.asserter = { reference: 'Patient/example' }
    // expected.note = [{ text: 'The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract.' }]
    // expected.type = ''
    expected.category = [ 'medication' ]
    expected.patient = { reference: 'Patient/example' }

    expect(new AllergyIntoleranceModel(fixture)).toEqual(expected);
  });

  it('should parse r4 example3', () => {
    let fixture = require("../../fixtures/r4/resources/allergyIntolerance/example3.json")
    let expected = new AllergyIntoleranceModel({})
    expected.title = 'No Known Allergy (situation)'
    expected.status = 'Confirmed'
    expected.recordedDate = '2015-08-06T15:37:31-06:00'
    expected.substanceCoding = []
    // expected.asserter = { reference: 'Patient/example' }
    // expected.note = [{ text: 'The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract.' }]
    // expected.type = 'allergy'
    // expected.category = [ 'food' ]
    expected.patient = { reference: 'Patient/mom' }

    expect(new AllergyIntoleranceModel(fixture)).toEqual(expected);
  });
});
