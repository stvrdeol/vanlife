export function loader() {
  async function fetchData() {
    const response = await fetch("/api/vans");
    const data = await response.json();
    return data.vans;
  }
  return fetchData();
}
