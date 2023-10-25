export function authUsers() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    window.location.href = "/login";
    // redirect("/login");
    return null;
  }
  return null;
}
