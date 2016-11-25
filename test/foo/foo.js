import test from 'blue-tape';
import { foo } from '../../src/foo/foo';

test('should add', async (t) => {
    t.is(await foo(1, 2), 3);
});
