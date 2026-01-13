export interface FetchUsersOptions {
  page?: number;
  limit?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalUsers: number;
    usersPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}