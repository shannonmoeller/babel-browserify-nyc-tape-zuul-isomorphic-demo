import test from 'blue-tape';
import { baz, bat } from '../../../src/shared/baz/baz';

test('should round', async (t) => {
    t.is(await baz(0.5), 1);
    t.is(await bat(1.5), 2);
});
