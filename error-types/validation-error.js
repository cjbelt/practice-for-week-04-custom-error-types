// Your code here
class ValidationError extends Error {
  constructor(message = 'Invalid input', ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }

    this.name = 'ValidationError';
    this.message = message;
  }
}

// class Field {
//   constructor(inputName, value) {
//     this.inputName = inputName;
//     this.value = value;
//   }
// }

// // When a message is passed in:
// let passwordInput = new Field('Password', 'pass');
// // Field { inputName: 'Password', value: 'pass' }
// if (passwordInput.value === 'pass') {
//   throw new ValidationError('Insecure password');
// }
// // throws ValidationError: Insecure password

// // When a message is not passed in:
// passwordInput = new Field('Password', 10);
// // Field { inputName: 'Password', value: 10 }
// if (typeof passwordInput.value !== 'string') {
//   throw new ValidationError();
// }
// // throws ValidationError: Invalid input

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
