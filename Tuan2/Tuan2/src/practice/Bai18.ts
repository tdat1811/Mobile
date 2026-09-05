

import { fetchUser } from "./utils";

async function bai18(): Promise<void> {
  const user = await fetchUser(1);
  console.log("User:", user);
}


bai18();
