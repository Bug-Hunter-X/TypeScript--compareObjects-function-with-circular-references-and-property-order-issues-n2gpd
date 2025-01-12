function compareObjects(obj1: any, obj2: any): boolean {
  // Check if both objects are null or undefined
  if (obj1 === null && obj2 === null) return true;
  if (obj1 === null || obj2 === null) return false; 

  // Check if both objects are of the same type
  if (typeof obj1 !== typeof obj2) return false;

  // Check if both objects are of primitive type
  if (typeof obj1 !== 'object') return obj1 === obj2;

  // Check if both objects have the same keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  if (!keys1.every(key => keys2.includes(key))) return false;

  // Compare values recursively
  for (let key of keys1) {
    if (!compareObjects(obj1[key], obj2[key])) return false;
  }

  return true;
}