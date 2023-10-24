export function authUsers() {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    window.location.assign("/login");
    return null;
  }
  return null;
}
