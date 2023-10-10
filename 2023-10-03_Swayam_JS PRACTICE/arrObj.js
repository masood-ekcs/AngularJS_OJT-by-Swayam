// let p = {
//     name: "Santoor",
//     price: 20,
//     description: "This is soap",
//     quantity: 30
// }

// console.log(p.name);
// console.log(p.price);
// // p.quantity = p.quantity - 4
// p.quantity -= 4
// console.log(p.quantity);

let products = [
  {
    id: 1,
    name: 'Santoor',
    price: 22,
    description: 'This is soap',
    quantity: 30
  },
  {
    id: 2,
    name: 'Lux',
    price: 18,
    description: 'This is soap',
    quantity: 50
  },
  {
    id: 3,
    name: 'Dove',
    price: 48,
    description: 'This is soap',
    quantity: 20
  }
];

// Function to display all the records of an array
function buy1() {
  console.log("Here's the list:");
  for (let i = 0; i < products.length; i++) {
    // if (products[i].id == id) {
    console.log(products[i]);
    // }
  }
}

buy1();

// ******************* Mod 1
// Function to display individual Record matching the ID
function buy2(id) {
  console.log("Here's the Product you're looking for:");
  for (let obj of products) {
    if (obj.id == id) {
      console.log(obj);
    }
  }
}

buy2(2);

// ************ Mod
// Function to display individual Record matching the ID and checking its quantity
function buy3(id, qty) {
  for (let obj of products) {
    if (obj.id == id) {
      //match if the ID is available in the array
      console.log(obj);
      //   if (obj.quantity - qty >= 0) {
      if (qty <= obj.quantity) {
        console.log('Required Quanity is available to Purchase');
      } else {
        console.log('Only ' + obj.quantity + ' qunatity available');
      }
    }
  }
}

//  --- OR
function buyProduct(id, qty) {
  for (let array of products) {
    if (array.id == id && qty <= array.quantity) {
      console.log('Required Quantity is available to purchase');
      array.quantity -= qty;
      console.log('Remaining quantity: ', array.quantity);
    } else {
      console.log('Available only: ', array.quantity);
    }
  }
}

buy3(2); // quantity value is unavailable here, so it will execute the ELSE statement
buy3(2, 31); // check product and quantity
buy3(2, 51);
buyProduct(1, 20);

// Function to DELETE individual Record matching the ID

// function delProduct(id) {
//   for (let obj of products) {
//     if (obj.id == id) {
//       console.log('value matched');
//       obj.splice(obj.id, 1); // this will not work, we need to get the index to splice the array.
//     }
//     return obj;
//   }
// }

function delProduct(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      console.log('Product found and deleted...');
      products.splice(i, 1); // the splice function will remove the required prodduct from the array
    }
  }
  console.log('Here are the remaining products: ', products); // prints the remaining products after deleting.
}

delProduct(2); // the function will delete the product from the array and displays the remaining products.
