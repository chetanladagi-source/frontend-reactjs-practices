import api from "../api/axios";
import type { UserResponse } from "../types/user";

export async function fetchUsers(
  page: number,
  limit: number,
  signal?: AbortSignal,
): Promise<UserResponse> {
  const response = await api.get<UserResponse>("/users", {
    params: {
      page,
      limit,
    },
    signal,
  });

  return response.data;
}
