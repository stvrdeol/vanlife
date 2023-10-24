import { authUsers } from "../../utils/utils";

export async function hostVan({ params }) {
  authUsers();
  const response = await fetch(`/api/host/vans/${params.hostVanId}`);
  const data = await response.json();
  return data.vans;
}

export async function hostVans() {
  authUsers();
  const response = await fetch("/api/host/vans");
  const data = await response.json();
  return data.vans;
}

export async function van({ params }) {
  const response = await fetch(`/api/vans/${params.id}`);
  const data = await response.json();
  return data.vans;
}
