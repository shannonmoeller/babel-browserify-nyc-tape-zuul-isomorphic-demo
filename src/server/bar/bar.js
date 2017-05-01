import { baz } from '../../shared/baz/baz';

export async function bar(a, b) {
    const localA = await a;
    const localB = await b;

    return baz(localA - localB);
}
