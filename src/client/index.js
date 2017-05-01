import { foo } from './foo/foo';

async function main() {
    console.log('foo', await foo(1, 2));
}

main();
