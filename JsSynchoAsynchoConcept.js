/* //<------example of Synchonous Concept
//where if we have five fuction so it excute one by one. and its dependent by one by one.
// best you can work with one hand.

console.log("---I---");
console.log("---eat--");
console.log("---icecream---");
console.log("---with---");
console.log("---spoon---");

//<------example of ASynchonous Concept
//where if we have five fuction it executes inedepedentalty.

console.log("---I---");
console.log("---eat--");

setTimeout(() => {
  console.log("---icecream---");
}, 3000);

console.log("---with---");
console.log("---spoon---");

 */
//callback is working when functions have connection with each other.

/*place order -2
fruit chopped -2
add water and ice -1
start the machine -1
select container-2
add  topping -3
serve ice-cream - 2 */
/* 
let stocks = {
  Fruits: ["Apple", "strwaberry", "banana", "avacodo"],
  Liquids: ["water", "ice=cream"],
  Holder: ["cones", "cups", "stricks"],
  Topping: ["chocalated", "peaunts", "cherry"],
};

const order = (Fruit_name, call_back) => {
  setTimeout(() => {
    console.log(`place order for${stocks.Fruits[Fruit_name]}`);
    call_back();
  }, 2000);
};

const production = () => {
  setTimeout(() => {
    console.log("we got order pleaser start production.");

    setTimeout(() => {
      console.log("fruits are chopped");

      setTimeout(() => {
        console.log(
          `we add orderer ${stocks.Liquids[0]} and ${stocks.Liquids[1]} `
        );

        setTimeout(() => {
          console.log("we start the machine");

          setTimeout(() => {
            console.log(`customer select ${stocks.Holder[1]}`);

            setTimeout(() => {
              console.log(
                `add toppning ${stocks.Topping[1]} and ${stocks.Topping[0]}`
              );

              setTimeout(() => {
                console.log(`!!!serve the icereme !!!`);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order (0, production);*/

//woking with promises to overcome problem of callback hell.

/* let stocks = {
  Fruits: ["Apple", "strwaberry", "banana", "avacodo"],
  Liquids: ["water", "ice-cream"],
  Holder: ["cones", "cups", "stricks"],
  Topping: ["chocalated", "peaunts", "cherry"],
};

let shop_open = true;

let order = (time, work) => {
  return new Promise((reslove, reject) => {
    if (shop_open === true) {
      setTimeout(() => {
        reslove(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.Fruits[0]} was selected for order`);
})
  .then(() => {
    return order(0000, () => {
      console.log("the production was started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("the fruit was chopped");
    });
  })
  .then(() => {
    order(1000, () => {
      console.log(
        `add ${stocks.Liquids[0]} and ${stocks.Liquids[1]} in process`
      );
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("please start the machine");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`customer select ${stocks.Holder[1]}`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`customer select topping of ${stocks.Topping[0]}`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("!!!!!serve your ice-cream*****");
    });
  })
  .catch(() => {
    console.log("customer is left");
  })
  .finally(() => {
    console.log("end of the day shop is closed");
  });
 */

// another simple demo of promises
/* function mydisplay(value) {
  console.log(`hello my display ${value}`);
}
const x = 0;
let promise1 = new Promise((resolve, reject) => {
  if (x == 0) {
    resolve(mydisplay("ok"));
  } else {
    reject(mydisplay("not ok"));
  }
});

console.log(promise1);
 */
//another demo for spinch pastry process with promises.

const stock1 = {
  cheese: ["recoitaa", "feta", "mozzerela"],
  type: ["pie", "roll"],
  flavour: ["medium", "mild", "spicy"],
};
let spinch_availble = true;
let puff_sheet = true;
let orderpuff = (time, work) => {
  return new Promise((reslove, reject) => {
    if (spinch_availble === true && puff_sheet === true) {
      setTimeout(() => {
        reslove(work());
      }, time);
    } else {
      reject(console.log("sorry we dont have stock of raw material"));
    }
  });
};
orderpuff(2000, () => {
  console.log(`start the production`);
})
  .then(() => {
    return orderpuff(3000, () => {
      console.log("cut the spinch");
    });
  })
  .then(() => {
    return orderpuff(2000, () => {
      console.log(`selected ${stock1.cheese[0]} for puff pasteries`);
    });
  })
  .then(() => {
    return orderpuff(2000, () => {
      console.log(`your puff pastries is ${stock1.flavour[0]}`);
    });
  })
  .then(() => {
    return orderpuff(5000, () => {
      console.log(`your puff pasteries is ${stock1.type[0]}`);
    });
  })
  .then(() => {
    return orderpuff(5000, () => {
      console.log("start to bake in oven");
    });
  })
  .then(() => {
    return orderpuff(0000, () => {
      console.log("!!!your Puff Pastries is ready");
    });
  });
