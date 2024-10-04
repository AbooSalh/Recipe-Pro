export const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Team", href: "/team", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Calendar", href: "/calendar", current: false },
];
//! needs testing
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
