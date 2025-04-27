import { User } from './user'; // Import User interface/type
import { Menu } from './menu'; // Import Menu interface/type

export interface OrderDetails {
  orderId: number;
  user: User;
  menu: Menu;   
}
