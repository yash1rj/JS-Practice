function chunkArrayInGroups(arr, size) {
      if (arr.length <= size){
        return [arr];
      }
      else {
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
      }
}


chunkArrayInGroups(["a", "b", "c", "d"], 2);

/*
Array smaller than size is returned nested.
For any array larger than size, it’s splited in two. 
First segment is nested and concatnated with second second segment which makes a recursive call.
*/
