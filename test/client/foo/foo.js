import test from 'blue-tape';
import { foo } from '../../../src/client/foo/foo';

test('should add', async (t) => {
    t.is(await foo(1, 1.6), 3);
});
