import { bar } from './bar/bar';

async function main() {
    console.log('bar', await bar(1, 2));
}

main();
