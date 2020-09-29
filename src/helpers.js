const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function Subtotal(price, qty) {
    return price * qty;
}

function absoluteQty(qty) {
    return (parseInt(qty) < 1) ? 1 : qty;
}

function Diskon(price, qty, kode) {
    const subTotal = Subtotal(price, qty);
    switch (kode) {
        case "AKHIRTAHUN":
            hasilDiskon = subTotal * 0.90;
            break;
        case "50":
            hasilDiskon = subTotal * 0.50;
            break;
        case "25":
            hasilDiskon = subTotal * 0.25;
            break;
        case "10":
            hasilDiskon = subTotal * 0.10;
            break;
        default:
            hasilDiskon = 0;
            break;
    }
    return hasilDiskon;
}

function grandTotal(price, qty, kode) {
    return Subtotal(price, qty) - Diskon(price, qty, kode);
}

module.exports = {
    incrementQty,
    decrementQty,
    Subtotal,
    absoluteQty,
    Diskon,
    grandTotal
};