import { expect } from 'chai';
import schemaJsonResponse from '../schemas/CitiesSchema';

require('dotenv').config();
const request = require('supertest');

const API_PATH = 'cities/';
const requestContainer = request(process.env.API_BASEURL + API_PATH);

describe('Scenario 3: Find the cities for a given postcode', () => {
  describe('Given valid German postal codes', () => {
    const testParameters = [
      { postalCode: 10409, expected: { Cities: ['Berlin'] } },
      { postalCode: 77716, expected: { Cities: ['Fischerbach', 'Haslach', 'Hofstetten'] } },
    ];

    testParameters.forEach((parameter) => {
      it(`Should receive 200 status code and corresponding cities names. PostalCode ${parameter.postalCode}`, (done) => {
        requestContainer
          .get(`${parameter.postalCode}`)
          .set({
            'Content-Type': 'application/json',
          })
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);

            expect(res.body).to.be.eql(parameter.expected);

            // If the response is valid, then the 'error' object will be undefined
            expect(schemaJsonResponse.validate(res.body).error).to.be.undefined;

            return done();
          });
      });
    });
  });

  describe('Given an invalid German postal code', () => {
    const postalCode = 22333;

    it('Should receive 404 status code and does not return any JSON data', (done) => {
      requestContainer
        .get(`${postalCode}`)
        .set({
          'Content-Type': 'application/json',
        })
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);

          expect(res.body).to.be.empty;

          return done();
        });
    });
  });
});
