const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe('utils - buildMessage', function () {
     describe('when recives an entity and an action', function () {
          it('should return the respective message', function () {
               const result = buildMessage('movie', 'create')
               const expect = 'movie created';
               assert.strictEqual(result, expect);
          })

     })
     describe('when recives an entity and action and is list', function () {
          it('should return the respective messagge with the entity in plural', function () {
               const result = buildMessage('movie', 'list');
               const expect = 'movies listed';
               assert.strictEqual(result, expect);
          })
     })
})