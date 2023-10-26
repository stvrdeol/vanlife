// import { redirect } from "react-router-dom";

export function authUsers() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    console.log("not logged in");
    window.location.href = "/login?message=Please login first";
    // redirect("/login");
    return null;
  }
  console.log("logged in");
  return null;
}
