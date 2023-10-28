// import { redirect } from "react-router-dom";

export async function authUsers() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    window.location.href = `/login?message=Please login first`;
    // return redirect("/login");
    return null;
  }
  console.log("logged in");
  return null;
}
