type Arr = number[] | string[] | boolean[];
// let arr: Arr = "loading";

function getFirstElement(arr: Arr) {
  return arr[0];
}

getFirstElement([1, 2, 3]); // 1
getFirstElement(["a", "b", "c"]); // "a"
getFirstElement([true, false, true]); // true
