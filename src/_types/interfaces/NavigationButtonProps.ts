export interface NavigationButtonProps {
  name: string;
  action: () => void; // Predefined function
  active: boolean;
  changesBodyStyle?: boolean;
};