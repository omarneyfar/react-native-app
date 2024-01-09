import { Product } from "../product/Product";
import { Notification } from "../notification/Notification";
import { User } from "../user/User";

export type RootState = {
  product: {
    products: Product[];
  };
  notification: {
    notifications: Notification[];
  };
  user: {
    userData: User;
  }
};
