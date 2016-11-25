export async function foo(a, b) {
    const localA = await a;
    const localB = await b;

    return localA + localB;
}
