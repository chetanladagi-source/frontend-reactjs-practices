export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserResponse {
  data: User[];
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}
