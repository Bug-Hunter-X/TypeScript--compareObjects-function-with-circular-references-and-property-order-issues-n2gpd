# TypeScript: compareObjects Function Bug

This repository demonstrates a bug in a TypeScript function designed to compare two objects for deep equality. The function fails when dealing with circular references and objects with different property orders.

## Bug Description
The `compareObjects` function, as initially implemented, suffers from the following problems:

1. **Stack Overflow with Circular References:** When comparing objects with circular references (where an object's property refers back to the object itself, directly or indirectly), the recursive calls to `compareObjects` lead to a stack overflow error.
2. **Incorrect Comparison with Different Property Orders:** The function incorrectly returns `false` if the properties of the objects are the same but have a different order.

## Solution
The solution addresses these issues by:

1. **Handling Circular References:** A `Set` is used to track visited objects, preventing infinite recursion. If a circular reference is detected, the comparison is handled appropriately.
2. **Handling Different Property Orders:** Property order is ignored by sorting the keys before comparison.

## How to Reproduce
1. Clone the repository.
2. Navigate to the repository's directory.
3. Compile and run the `bug.ts` file to see the original bug in action.
4. Compile and run the `bugSolution.ts` file to see the corrected version in action.
