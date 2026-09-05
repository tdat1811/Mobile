
import { fetchUser, User } from "./utils";

async function fetchUsers(ids: number[]): Promise<User[]> {
  // Dùng Promise.all để gọi song song, nhanh hơn vòng lặp await tuần tự
  const users = await Promise.all(ids.map((id) => fetchUser(id)));
  return users;
}

async function bai19(): Promise<void> {
  const users = await fetchUsers([1, 2, 3]);
  console.log("Danh sách users:", users);
}


bai19();
