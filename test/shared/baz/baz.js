import test from 'blue-tape';
import { baz } from '../../../src/shared/baz/baz';

test('should round', async (t) => {
    t.is(await baz(0.5), 1);
});
