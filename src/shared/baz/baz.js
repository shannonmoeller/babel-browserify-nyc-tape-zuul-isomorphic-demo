export async function baz(a) {
    const localA = await a;

    return await Math.round(localA);
}
