export function authUsers() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    window.location.href = "/login?message=Please login first";
    // redirect("/login");
    return null;
  }
  return null;
}
