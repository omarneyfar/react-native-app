
export function getHeaderTitle(route:string) {

  switch (route) {
    case 'home':
      return 'Home';
    case 'profile':
      return 'Profile';
    case 'cart':
      return 'Cart';
    case 'search':
      return 'Search';
    case 'wishlist':
      return 'Wishlist';
    case 'all':
      return 'All';
    case 'orders':
      return 'Orders';
    case 'promotions':
      return 'Promotions';
    case 'info':
      return 'Info';
    case 'relevance':
      return 'Relevance';
    case 'latest':
      return 'Latest';
    case 'topSales':
      return 'Top Sales';
    case 'price':
      return 'Price';
    default : 
      return 'Home';
  }
}