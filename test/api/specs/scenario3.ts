import { expect } from 'chai';
import 'chai/register-should';

require('dotenv').config();
const request = require('supertest');

const requestContainer = request(process.env.API_BASEURL);
const API_PATH = 'cities';
const testParameters = [
  { postalCode: 10409, expected: { Cities: ['Berlin'] } },
  { postalCode: 77716, expected: { Cities: ['Fischerbach', 'Haslach', 'Hofstetten'] } },
];

describe('Given valid postal codes', () => {
  testParameters.forEach((parameter) => {
    it(`Should receive 200 status code and corresponding cities names. PostalCode ${parameter.postalCode}`, (done) => {
      requestContainer
        .get(`${API_PATH}/${parameter.postalCode}`)
        .set({
          'Content-Type': 'application/json',
        })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          expect(res.body).to.be.eql(parameter.expected);

          return done();
        });
    });
  });
});
