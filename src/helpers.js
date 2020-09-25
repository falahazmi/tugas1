const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function recalculateSubTtl(price, qty) {
    return price * qty;
}

function absoluteQty(qty) {
    return Math.abs(qty);
}

module.exports = {
    incrementQty,
    decrementQty,
    recalculateSubTtl,
    absoluteQty
};