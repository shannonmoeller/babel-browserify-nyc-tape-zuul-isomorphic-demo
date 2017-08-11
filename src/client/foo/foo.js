import { baz, bat } from '../../shared/baz/baz';

export async function foo(a, b) {
    const localA = await a;
    const localB = await b;

    return baz(localA + localB);
}
