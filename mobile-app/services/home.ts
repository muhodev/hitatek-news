import { API_BASE_URL } from "../constants";

export async function getHomeDataService() {
  const res = await fetch(`${API_BASE_URL}/v1/home`, {});

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
