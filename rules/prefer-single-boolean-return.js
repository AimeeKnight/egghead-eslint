const user = { email: { value: "aimee.example.com", isValid: true } };

function isValidUserBefore(user) {
  if (user.email && user.email.isValid) {
    return true;
  } else {
    return false;
  }
}

function isValidUserAfter(user) {
  return user.email && user.email.isValid;
}

const before = isValidUserBefore(user);
const after = isValidUserAfter(user);

console.log(before);
console.log(after);
