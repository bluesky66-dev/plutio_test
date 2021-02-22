import { expect } from 'chai';
import {getTasks} from './get';

// Testing getTasks method
describe('Getting Tasks', () => {
    const tasks = getTasks();
    it('Should return Array', () => {
        expect(tasks).to.be.an('array');
    })
});