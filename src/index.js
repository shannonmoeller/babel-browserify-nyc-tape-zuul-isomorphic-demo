import { foo } from './foo/foo';
import { bar } from './bar/bar';

async function main() {
    console.log('foo', await foo(1, 2));
    console.log('bar', await bar(1, 2));
}

main();
