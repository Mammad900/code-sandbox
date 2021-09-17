// https://stackoverflow.com/a/29466744/13561926
// I understand how it works, so no need to worry about copy-pasting
// It will create unique ids with incrementing numbers. It will start at 1, and increment by 1 each time.
// It will never return the same id twice.
// eg. 'id1' will be returned the first time, 'id2' the second time, and so on.

let lastId = 0;

export default function uniqueId(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}
