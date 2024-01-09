export type User = {
  password?: string;
  id: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  isValid?: boolean;
  roles?: string[];
};
