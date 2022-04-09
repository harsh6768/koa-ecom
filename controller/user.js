const register = (ctx) => {
  const { name, email, password } = ctx.body;
  console.log("Name >>>", name);
  console.log("Email >>>", email);
  console.log("Password >>>", password);
  ctx.body="success";
};

const login = (ctx) => {};

const resetPassword = (ctx) => {};

module.exports = {
  register,
  login,
  resetPassword,
};
