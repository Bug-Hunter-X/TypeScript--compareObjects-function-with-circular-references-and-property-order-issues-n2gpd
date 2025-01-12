function compareObjects(obj1: any, obj2: any, visited: Set<any> = new Set()): boolean {
  // Check for null or undefined
  if (obj1 === null && obj2 === null) return true;
  if (obj1 === null || obj2 === null) return false;

  // Check for circular references
  if (visited.has(obj1) || visited.has(obj2)) return true; //consider same if circular
  visited.add(obj1); 
  visited.add(obj2);

  // Check for primitive types or different types
  if (typeof obj1 !== typeof obj2) return false;
  if (typeof obj1 !== 'object') return obj1 === obj2;

  // Sort keys before comparison
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  // Check for same number of keys
  if (keys1.length !== keys2.length) return false; 

  // Compare properties recursively
  for (let key of keys1) {
    if (!compareObjects(obj1[key], obj2[key], visited)) return false;
  }

  return true;
}