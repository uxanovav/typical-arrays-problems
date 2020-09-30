
exports.min = function min(array) {
  if (typeof array !== 'object' || array.length === 0) {
    return 0;
  } else {
    let min = array[0];
    for (let el of array) {
      if (el < min) {
        min = el;
      }
    }
    return min;
  }
}

exports.max = function max(array) {
  if (typeof array !== 'object' || array.length === 0) {
    return 0;
  } else {
    let max = array[0];
    for (let el of array) {
      if (el > max) {
        max = el;
      }
    }
    return max;
  }
}

exports.avg = function avg(array) {
  if (typeof array !== 'object' || array.length === 0) {
    return 0;
  } else {
    let avg = 0;
    for (let el of array) {
      avg += el;
    }
    avg = avg / array.length;
    return avg;
  }
}