import test from 'ava';
import wrap from './../src/wrap';

test('wrap should output my error by console.error', async (t) => {

  console.error = (...messages) => {
    t.is(messages.join(''), 'async function error: dead');
  };

  wrap(async () => {
    throw 'dead';
  })();
});
