import api from "../api/axios";
import { users } from "../data/users";
import type { UserResponse } from "../types/user";

export async function fetchUsers(
  page: number,
  limit: number,
  signal?: AbortSignal,
): Promise<UserResponse> {
  const start = (page - 1) * limit;
  const end = start + limit;
  console.log(start, end, users.slice(start, end));
  return {
    data: users.slice(start, end),
    page,
    limit,
    total: users.length,
    hasMore: end < users.length,
  };
  // const response = await api.get<UserResponse>("/users", {
  //   params: {
  //     page,
  //     limit,
  //   },
  //   signal,
  // });

  // return response.data;
}
