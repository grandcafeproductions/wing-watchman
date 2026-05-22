const KEY = "chatb_auth_v2";
const USERNAME = import.meta.env.VITE_LOGIN_USERNAME ?? "";
const PASSWORD = import.meta.env.VITE_LOGIN_PASSWORD ?? "";

export function isLoggedIn() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(KEY) === USERNAME && !!USERNAME;
}
export function verifyLogin(username: string, password: string) {
  return username.trim().toLowerCase() === USERNAME && password === PASSWORD;
}
export function login(username: string, password: string) {
  if (!verifyLogin(username, password)) return false;
  localStorage.removeItem("chatb_auth");
  sessionStorage.setItem(KEY, USERNAME);
  return true;
}
export function logout() {
  localStorage.removeItem("chatb_auth");
  sessionStorage.removeItem(KEY);
}
