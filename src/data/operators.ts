export interface OperatorType {
  operator: string;
  name: string;
  example: string;
  description: string;
  returns: string;
}

export const operators: OperatorType[] = [
  {
    operator: '+',
    name: 'Addition',
    example: '1 + 2',
    description: 'Adds two numbers together.',
    returns: 'number',
  },
  {
    operator: '-',
    name: 'Subtraction',
    example: '2 - 1',
    description: 'Subtracts the right operand from the left operand.',
    returns: 'number',
  },
  {
    operator: '*',
    name: 'Multiplication',
    example: '2 * 3',
    description: 'Multiplies two numbers together.',
    returns: 'number',
  },
  {
    operator: '/',
    name: 'Division',
    example: '4 / 2',
    description: 'Divides the left operand by the right operand.',
    returns: 'number',
  },
  {
    operator: '%',
    name: 'Modulus',
    example: '5 % 2',
    description: 'Returns the division remainder.',
    returns: 'number',
  },
  {
    operator: '++',
    name: 'Increment',
    example: 'let a = 1; a++',
    description: 'Increments a number by one.',
    returns: 'number',
  },
  {
    operator: '--',
    name: 'Decrement',
    example: 'let a = 2; a--',
    description: 'Decrements a number by one.',
    returns: 'number',
  },
  {
    operator: '==',
    name: 'Equality',
    example: '1 == \'1\'',
    description: 'Returns true if the operands are equal.',
    returns: 'boolean',
  },
  {
    operator: '===',
    name: 'Strict Equality',
    example: '1 === 1',
    description: 'Returns true if the operands are equal and of the same type.',
    returns: 'boolean',
  },
  {
    operator: '!=',
    name: 'Inequality',
    example: '1 != \'2\'',
    description: 'Returns true if the operands are not equal.',
    returns: 'boolean',
  },
  {
    operator: '!==',
    name: 'Strict Inequality',
    example: '1 !== \'1\'',
    description: 'Returns true if the operands are of the same type but not equal, or are of different type.',
    returns: 'boolean',
  },
  {
    operator: '>',
    name: 'Greater than',
    example: '2 > 1',
    description: 'Returns true if the left operand is greater than the right operand.',
    returns: 'boolean',
  },
  {
    operator: '<',
    name: 'Less than',
    example: '1 < 2',
    description: 'Returns true if the left operand is less than the right operand.',
    returns: 'boolean',
  },
  {
    operator: '>=',
    name: 'Greater than or equal to',
    example: '2 >= 2',
    description: 'Returns true if the left operand is greater than or equal to the right operand.',
    returns: 'boolean',
  },
  {
    operator: '<=',
    name: 'Less than or equal to',
    example: '2 <= 2',
    description: 'Returns true if the left operand is less than or equal to the right operand.',
    returns: 'boolean',
  },
  {
    operator: '&&',
    name: 'Logical AND',
    example: 'x && y',
    description: 'If x can be converted to true, returns y; else, returns x.',
    returns: 'any',
  },
  {
    operator: '||',
    name: 'Logical OR',
    example: 'x || y',
    description: 'If x can be converted to true, returns x; else, returns y.',
    returns: 'any',
  },
  {
    operator: '!',
    name: 'Logical NOT',
    example: '!x',
    description: 'Returns false if its single operand can be converted to true; otherwise, returns true.',
    returns: 'boolean',
  },
  {
    operator: '?:',
    name: 'Ternary',
    example: 'condition ? true : false',
    description: 'Assigns a value to a variable based on a condition.',
    returns: 'any',
  },
  {
    operator: 'typeof',
    name: 'Typeof',
    example: 'typeof \'a\'',
    description: 'Returns the type of a variable, object, function or expression.',
    returns: 'string',
  },
  {
    operator: '?.',
    name: 'Optional Chaining',
    example: 'user?.address',
    description: 'Permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.',
    returns: 'any',
  },
  {
    operator: '??',
    name: 'Nullish Coalescing',
    example: 'null ?? \'default\'',
    description: 'Returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.',
    returns: 'any',
  },
];
