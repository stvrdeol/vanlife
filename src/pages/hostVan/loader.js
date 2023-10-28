import { defer } from "react-router-dom";
import { authUsers } from "../../utils/authUsers";

export async function hostVan({ params }) {
  await authUsers();
  const response = await fetch(`/api/host/vans/${params.hostVanId}`);
  const data = await response.json();
  return data.vans;
}

export async function hostVans() {
  await authUsers();
  const response = await fetch("/api/host/vans");
  const data = await response.json();
  return defer({ vans: data.vans });
}

export async function van({ params }) {
  const response = await fetch(`/api/vans/${params.id}`);
  const data = await response.json();
  return data.vans;
}
