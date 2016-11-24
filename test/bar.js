import test from 'blue-tape';
import { bar } from '../src/bar';

test('should subtract', async (t) => {
    t.is(await bar(3, 2), 1);
});
