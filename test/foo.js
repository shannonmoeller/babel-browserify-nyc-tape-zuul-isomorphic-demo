import test from 'blue-tape';
import { foo } from '../src/foo';

test('should sum', async (t) => {
    const actual = await foo(1, 2);

    t.is(actual, 3);
});
