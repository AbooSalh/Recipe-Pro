export const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Recipes", href: "/recipes", current: false },
  { name: "Today's Dish", href: "/today-dish", current: false },
  { name: "Calendar", href: "/calendar", current: false },
];
//! needs testing
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
