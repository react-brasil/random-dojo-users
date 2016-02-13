import fsp from 'fs-promise';
import _ from 'lodash';

console.log('# React Native Dojo');
(async () => {
  const data = await fsp.readFile('users.txt', 'utf-8');
  const users = data.trim().split('\n');
  const n = process.argv[2] || 1;
  console.log('selected users: ', _.sampleSize(users, n));
})();