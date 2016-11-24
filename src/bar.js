export async function bar(a, b) {
    const localA = await a;
    const localB = await b;

    return localA - localB;
}
