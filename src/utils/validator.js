export const isEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}