function verifyPassword(password) {
  var res;
  if (
    password.match(/[a-z]/g) &&
    password.match(/[A-Z]/g) &&
    password.match(/[0-9]/g) &&
    password.match(/[^a-zA-Z\d]/g) &&
    password.length < 9 &&
    password !== undefined
  )
    res = true;
  else res = false;
  return res;
}

module.exports = { verifyPassword };
