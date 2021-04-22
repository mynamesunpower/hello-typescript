import Person from "./person/Person";
import IPerson from './person/IPerson';
import Chance from 'chance';
import * as R from 'ramda';

const chance = new Chance()
let persons: IPerson[] = R.range(0, 2)
    .map((n: number) => new Person(chance.name(), chance.age()))

console.log(persons)

const name: string = '태양'
const age: number = 32
console.log(`제 이름은 ${name}이고 ${age}세 입니다.`)