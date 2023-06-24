export const sendToken = (res, user, message, statusCode) => {
  const token = user.getJWTToken();

  const options = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15),
    httpOnly: true, // Can only be accessed from the backend
    // secure: true, // Transmitted cookie is encrypted when sent over a secure HTTPS connection
    // sameSite: "none", // Cookie is made sure to be sent only from the site that the server is connected to
  };

  res.status(statusCode).cookie("token", token, options).json({
    message,
    token,
    user,
  });
};
