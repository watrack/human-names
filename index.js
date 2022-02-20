'use strict';
const uniqueRandomArray = require('unique-random-array');

const femaleNames = new Map([
  ["ar",  require('./data/female-human-names-ar.json')],
  ["de",  require('./data/female-human-names-de.json')],
  ["en",  require('./data/female-human-names-en.json')],
  ["es",  require('./data/female-human-names-es.json')],
  ["fa",  require('./data/female-human-names-fa.json')],
  ["fr",  require('./data/female-human-names-fr.json')],
  ["id",  require('./data/female-human-names-id.json')],
  ["it",  require('./data/female-human-names-it.json')],
  ["nl",  require('./data/female-human-names-nl.json')],
  ["pt",  require('./data/female-human-names-pt.json')],
  ["ru",  require('./data/female-human-names-ru.json')],
  ["tr",  require('./data/female-human-names-tr.json')],
])

const maleNames = new Map([
  ["ar",  require('./data/male-human-names-ar.json')],
  ["de",  require('./data/male-human-names-de.json')],
  ["en",  require('./data/male-human-names-en.json')],
  ["es",  require('./data/male-human-names-es.json')],
  ["fa",  require('./data/male-human-names-fa.json')],
  ["fr",  require('./data/male-human-names-fr.json')],
  ["id",  require('./data/male-human-names-id.json')],
  ["it",  require('./data/male-human-names-it.json')],
  ["nl",  require('./data/male-human-names-nl.json')],
  ["pt",  require('./data/male-human-names-pt.json')],
  ["ru",  require('./data/male-human-names-ru.json')],
  ["tr",  require('./data/male-human-names-tr.json')],
])

export const getRandom = (locale, gender) => {
  if (gender =='male' && !maleNames.has(locale) || 
      gender == 'female' && !femaleNames.has(locale) ||
      (!maleNames.has(locale) && !femaleNames.has(locale))) {
    return undefined
  }
  
  if (gender == 'male') {
    return uniqueRandomArray(maleNames[locale])
  } else if (gender == 'female') {
    return uniqueRandomArray(femaleNames[locale])
  } else if (Math.random() >= 0.5) {
    return uniqueRandomArray(maleNames[locale])
  } 
  return uniqueRandomArray(femaleNames[locale])
}
