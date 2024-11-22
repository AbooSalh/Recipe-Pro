export const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Recipes", href: "/recipes", current: false },
  { name: "Find us", href: "/contact", current: false },
];
//! needs testing
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
