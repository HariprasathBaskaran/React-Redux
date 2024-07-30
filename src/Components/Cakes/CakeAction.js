export const BUY_CAKE = "BUY_CAKE";

function BuyCake(number = 1) {
  console.log("actionNumber", number);
  return {
    type: BUY_CAKE,
    payload: number,
  };
}

export default BuyCake;
