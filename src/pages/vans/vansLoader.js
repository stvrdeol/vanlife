import { defer } from "react-router-dom";

export function loader() {
  async function fetchData() {
    const response = await fetch("/api/vans");
    const data = await response.json();
    return defer({ vans: data.vans });
  }
  return fetchData();
}
