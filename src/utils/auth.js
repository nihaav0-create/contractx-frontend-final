export const login = (username, password) => {
  console.log("Login attempt:", username, password);

  if (username === "admin" && password === "1234") {
    localStorage.setItem("user", JSON.stringify({ username }));
    console.log("Login success");
    return true;
  }

  console.log("Login failed");
  return false;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
