export const BUY_ICECREAM = "BUY_ICECREAM";

function buyIceCream(cakeQty = 1) {
  return {
    type: BUY_ICECREAM,
    payload: cakeQty,
  };
}

export default buyIceCream;
