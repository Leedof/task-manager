export const handleErrorMsg = (message) => {
  const errStartIndex = message.indexOf("auth/") + 5;
  const errEndIndex = message.indexOf(").");

  const error = message.slice(errStartIndex, errEndIndex);

  switch (error) {
    case "too-many-requests":
      return "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
    case "email-already-in-use":
      return "User with this email already exists";

    default:
      return "Server error, try again later";
  }
};

// Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).

// Firebase: Error (auth/wrong-password).

// Firebase: Error (auth/user-not-found).

// registration
// Firebase: Error (auth/email-already-in-use).
