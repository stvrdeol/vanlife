

export async function authUsers() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    window.location.href = `/login?message=Please login first`;
    return null;
  }
  return null;
}
