import test from 'blue-tape';
import { bar } from '../src/bar';

test('should sub', async (t) => {
    const actual = await bar(3, 2);

    t.is(actual, 1);
});
