function orderFood() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("📝 Order placed");
        resolve("Pizza");
      }, 500);
    });
  }
  
  function cookFood(order) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`👨‍🍳 Cooking ${order}`);
        resolve(`${order} (cooked)`);
      }, 500);
    });
  }
  
  function serveFood(cookedFood) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`🍽️ Serving ${cookedFood}`);
        resolve(`${cookedFood} (served)`);
      }, 500);
    });
  }
  
  function eatFood(servedFood) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`😋 Eating ${servedFood}`);
        resolve("Meal finished");
      }, 500);
    });
  }
  
  // Execute with Promises
  orderFood()
    .then(cookFood)
    .then(serveFood)
    .then(eatFood)
    .then(console.log)
    .catch(console.error);
  