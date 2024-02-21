// Helper function to work with both arrays and objects in a unified way
const collectionToArray = collection => {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  };
  
  // myEach - Iterates over a collection and applies the callback to each element
  function myEach(collection, callback) {
    const newCollection = collectionToArray(collection);
    for (let i = 0; i < newCollection.length; i++) {
      callback(newCollection[i]);
    }
    return collection;
  }
  
  // myMap - Transforms a collection by applying a callback to each element and returning a new array
  function myMap(collection, callback) {
    const newCollection = collectionToArray(collection);
    const newArray = [];
    for (let i = 0; i < newCollection.length; i++) {
      newArray.push(callback(newCollection[i]));
    }
    return newArray;
  }
  
  // myReduce - Reduces a collection to a single value by iteratively combining each element via a callback
  function myReduce(collection, callback, acc) {
    let newCollection = collectionToArray(collection);
    let i = 0;
    if (acc === undefined) {
      acc = newCollection[0];
      i = 1;
    }
    for (; i < newCollection.length; i++) {
      acc = callback(acc, newCollection[i], collection);
    }
    return acc;
  }
  
  // myFind - Finds the first element in a collection that matches the predicate
  function myFind(collection, predicate) {
    const newCollection = collectionToArray(collection);
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) return newCollection[i];
    }
    return undefined;
  }
  
  // myFilter - Filters a collection based on a predicate
  function myFilter(collection, predicate) {
    const newCollection = collectionToArray(collection);
    const newArray = [];
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) {
        newArray.push(newCollection[i]);
      }
    }
    return newArray;
  }
  
  // mySize - Returns the size of the collection
  function mySize(collection) {
    const newCollection = collectionToArray(collection);
    return newCollection.length;
  }
  
  // myFirst - Returns the first element(s) of an array
  function myFirst(array, n) {
    if (n === undefined) return array[0];
    return array.slice(0, n);
  }
  
  // myLast - Returns the last element(s) of an array
  function myLast(array, n) {
    if (n === undefined) return array[array.length - 1];
    return array.slice(-n);
  }
  
  // myKeys - Returns an array of the keys of an object
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues - Returns an array of the values of an object
  function myValues(object) {
    return Object.values(object);
  }