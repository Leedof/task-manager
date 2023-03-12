export const makeUsername = (email) => {
  const atIndex = email.indexOf("@");
  let username = email.slice(0, atIndex);
  if (username.length > 18) {
    username = username.slice(0, 17) + "...";
  }
  return username;
};
