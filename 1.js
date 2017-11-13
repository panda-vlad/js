const sqrt = function(n) { // об ява функції яка отримує аргумент = 1/4
  return function(x) { // повернення функції й передання їй аргументу 16
    return Math.pow(x, n); // що повинна робити це
  };
};
const sqrt4 = sqrt(1 / 4); // запигання значеня
console.log(sqrt4(16)); // вивід на екран + запихання значеня