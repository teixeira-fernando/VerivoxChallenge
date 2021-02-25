import { expect } from 'chai';
import schemaJsonResponse from '../schemas/StreetsSchema';
import streetsResponseExpected from '../data/response/StreetsResponse';

require('dotenv').config();
const request = require('supertest');

const API_PATH = 'cities/';
const requestContainer = request(process.env.API_BASEURL + API_PATH);

describe('Scenario 4: Find the streets for a given postcode', () => {
  describe('Given valid German postal codes and cities', () => {
    const testParameters = [
      { postalCode: 10409, city: 'Berlin', expectedResponse: streetsResponseExpected.Berlin },
      { postalCode: 77716, city: 'Fischerbach', expectedResponse: streetsResponseExpected.Fischerbach },
      { postalCode: 77716, city: 'Haslach', expectedResponse: streetsResponseExpected.Haslach },
      { postalCode: 77716, city: 'Hofstetten', expectedResponse: streetsResponseExpected.Hofstetten },
    ];

    testParameters.forEach((parameter) => {
      it(`Should receive 200 status code and a list of streets. PostalCode: ${parameter.postalCode} and City: ${parameter.city}`, (done) => {
        requestContainer
          .get(`${parameter.postalCode}/${parameter.city}/streets`)
          .set({
            'Content-Type': 'application/json',
          })
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);

            // matches the entire expected response, validating also if the special characters are displayed correctly
            expect(res.body).to.be.eql(parameter.expectedResponse);

            // If the response is valid, then the 'error' object will be undefined
            expect(schemaJsonResponse.validate(res.body).error).to.be.undefined;

            return done();
          });
      });
    });
  });
});
