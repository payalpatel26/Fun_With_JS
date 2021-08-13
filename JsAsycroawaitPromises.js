/*fruit chopped -2
add water and ice -1
start the machine -1
select container-2
add  topping -3
serve ice-cream - 2*/

let stocks = {
  Fruits: ["Apple", "strwaberry", "banana", "avacodo"],
  Liquids: ["water", "ice-cream"],
  Holder: ["cones", "cups", "stricks"],
  Topping: ["chocalated", "peaunts", "cherry"],
};

let Shop_open = false;

let time = (ms) => {
  return new Promise((reslove, reject) => {
    if (Shop_open) {
      setTimeout(reslove, ms);
    } else {
      reject(console.log("the shop is closed"));
    }
  });
};

async function kitchen() {
  try {
    await time(2000);
    console.log(`cut the fruits${stocks.Fruits[0]}`);
    await time(2000);
    console.log(`add ${stocks.Liquids[0]} and ${stocks.Liquids[1]}`);
    await time(2000);
    console.log("start the machine");
    await time(2000);
    console.log(`ice-creame in ${stocks.Holder[0]}`);
    await time(3000);
    console.log(`add ${stocks.Topping[0]}`);
    await time(2000);
    console.log("!!!! serving Ice-Cream!!!");
  } catch (error) {
    console.log("customer is left");
  } finally {
    console.log("at the end of day shop was closed");
  }
}

kitchen();
