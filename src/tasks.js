// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

console.log(`CampusEats has ${tasks.length} open tasks`);

// BEFORE — problems: hardcoded secret, magic number,
// unclear names, var, loose ==, no validation
// function calc(a, b, t) {
//   var x = a * b;
//   if (t == "vip") { x = x - x * 0.1 }
//   console.log("API_KEY=sk_live_9f8a7b6c5d");
//   return x
// }

// AFTER — clear names, no magic numbers, no secrets
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }
  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// the API key comes from an environment variable,
// e.g. process.env.API_KEY — never hard-coded