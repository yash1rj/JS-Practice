function destroyer(arr, ...args) {
  // Remove all the values
  return arr.filter((i) => {
    return !args.includes(i);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
