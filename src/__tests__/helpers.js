/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    Subtotal,
    absoluteQty,
    Diskon,
    grandTotal
} = require('../helpers.js')

test('Qty 1 jika ditambah 1 hasilnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});

test('Qty 1 jika ditambah "1" hasilnya 2', () => {
    expect(incrementQty("1")).toBe(2);
});

test('Qty 2 jika dikurangi 1 hasilnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});

test('jika qty -3, maka keluarnya jadi 1', () => {
    expect(absoluteQty(-3)).toBe(1);
});

test('Subtotal dari 15000 dn qty 2 adalah 30000', () => {
    expect(Subtotal(15000, 2)).toBe(30000);
});

test('Diskon kode 50 dari barang berharga 50k dan qty 2 (total 100k) adalah 50000', () => {
    expect(Diskon(50000, 2, "50")).toBe(50000);
});

test('Grandtotal dari barang dengan harga 50000 qty 2 diskon 50 adalah 50000', () => {
    expect(grandTotal(50000, 2, "50")).toBe(50000);
});