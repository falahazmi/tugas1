/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    recalculateSubTtl,
    absoluteQty

} = require('../helpers.js')


test('Qty 1 jika ditambah 1 hasilnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});

test('Qty 1 jika ditambah "1" hasilnya 2', () => {
    expect(incrementQty("1")).toBe(2);
});

test('Subtotla dari 25000 dg qty 2 adalah 50000', () => {
    expect(recalculateSubTtl(25000, 2)).toBe(50000);
});

test('nilai absolute dari -1 adalah 1', () => {
    expect(absoluteQty(-1)).toBe(1);
});