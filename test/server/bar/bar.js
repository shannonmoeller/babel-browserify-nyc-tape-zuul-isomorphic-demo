import test from 'blue-tape';
import { bar } from '../../../src/server/bar/bar';

test('should subtract', async (t) => {
    t.is(await bar(3, 1.6), 1);
});
