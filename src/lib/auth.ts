const KEY = "chatb_auth";
const USERNAME = import.meta.env.VITE_LOGIN_USERNAME ?? "";
const PASSWORD = import.meta.env.VITE_LOGIN_PASSWORD ?? "";

export function isLoggedIn() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(KEY) === "1";
}
export function verifyLogin(username: string, password: string) {
  return username.trim().toLowerCase() === USERNAME && password === PASSWORD;
}
export function login(username: string, password: string) {
  if (!verifyLogin(username, password)) return false;
  localStorage.setItem(KEY, "1");
  return true;
}
export function logout() {
  localStorage.removeItem(KEY);
}
