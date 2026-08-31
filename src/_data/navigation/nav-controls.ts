import { NavigationButtonProps } from "@/_types/interfaces/NavigationButtonProps";

const handleConsole = () => {
  return;
};

export const mainNavigation: NavigationButtonProps[] = [
  {
    name: "mobile-sidemenu",
    active: false,
    action: handleConsole,
    changesBodyStyle: true,
  },
];

export const dashboardNavigation = [
  {
    name: "dashboard-sidemenu",
    active: false,
    action: handleConsole,
    changesBodyStyle: true,
  },
];

export const navigationChangesBodyStyle = mainNavigation.filter(
  (obj) => obj.changesBodyStyle === true,
);

export const dashboardNavigationChangesBodyStyle = dashboardNavigation.filter(
  (obj) => obj.changesBodyStyle === true,
);
