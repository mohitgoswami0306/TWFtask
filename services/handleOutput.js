const centers = {
  c1: { A: 3, B: 2, C: 8 },
  c2: { D: 12, E: 25, F: 15 },
  c3: { G: 0.5, H: 1, I: 2 }
};

const distances = {
  c1: 3,
  c2: 2.5,
  c3: 2
};

function costPerUnitDist(w) {
  if (w == 0) {
    return 0;
  }
  if (w > 0 && w <= 5) {
    return 10;
  } else {
    let x = w - 5;
    x = Math.ceil(x / 5);
    return 10 + 8 * x;
  }
}

function costOfProduct(input, center) {
  let val = 0.0;
  for (const key in center) {
    val += input[key] * center[key];
  }
  return val;
}

const calculateCost = function calculateCost(input) {
  let c1weight = costOfProduct(input, centers.c1);
  let c2weight = costOfProduct(input, centers.c2);
  let c3weight = costOfProduct(input, centers.c3);

  // console.log("weight of c1", c1weight);
  // console.log("weight of c2", c2weight);
  // console.log("weight of c3", c3weight);

  let x = costPerUnitDist(c1weight) * distances.c1;
  let y = costPerUnitDist(c2weight) * distances.c2;
  let z = costPerUnitDist(c3weight) * distances.c3;

  // console.log(" x ", x);
  // console.log(" y ", y);
  // console.log(" z ", z);

  let sum = 0;
  if (c1weight == 0 && c2weight != 0 && c3weight != 0) sum += 20;
  else if (c2weight == 0 && c3weight != 0) sum += 20;
  else if (c2weight != 0 && c3weight == 0) sum += 25;
  else if (c2weight != 0 && c3weight != 0) sum += 45;

  return x + y + z + sum;
};

module.exports = calculateCost;
