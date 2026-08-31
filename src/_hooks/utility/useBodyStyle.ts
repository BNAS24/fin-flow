import { theme } from "@/_mui/theme";
import { useState, useMemo } from "react";
import {
  dashboardNavigationChangesBodyStyle,
  navigationChangesBodyStyle,
} from "@/_data/navigation/nav-controls";
import { NavigationButtonProps } from "@/_types/interfaces/NavigationButtonProps";

/**
 * Custom hook for managing and updating the body style of a page based on navigation button states.
 *
 * This hook maintains a list of navigation button states and derives the body style dynamically
 * depending on which button is active. It also provides utility functions to toggle button states
 * and check if a specific button is active.
 *
 * `bodyStyle` is computed during render (derived state) rather than synchronized via an Effect,
 * since it depends only on values React already owns (`childStates`, `defaultBodyStyle`,
 * `isScreenMediumOrLarger`). This avoids the "cascading renders" issue that occurs when calling
 * setState synchronously inside a useEffect.
 *
 * @returns An object containing:
 * - `bodyStyle`: The current body style as a `React.CSSProperties` object.
 * - `handleBodyStyle`: Function to toggle a button's active state or reset all buttons.
 * - `childStates`: Array of navigation button states.
 * - `isChildActive`: Helper function to check if a button is currently active by name.
 *
 * @example
 * const { bodyStyle, handleBodyStyle, childStates, isChildActive } = useBodyStyleLogic();
 */
export default function useBodyStyleLogic() {
  const [childStates, setChildStates] = useState<NavigationButtonProps[]>([
    ...navigationChangesBodyStyle,
    ...dashboardNavigationChangesBodyStyle,
  ]);

  const defaultBodyStyle: React.CSSProperties = useMemo(
    () => ({
      minHeight: "100vh",
      backgroundColor: theme.palette.background.default,
      overflowX: "hidden",
    }),
    [],
  );

  // Derived boolean: is any nav button currently active?
  const buttonActive = useMemo(
    () => childStates.some((child) => child.active === true),
    [childStates],
  );

  // Derived body style — computed during render instead of via useEffect + setState.
  // If `isScreenMediumOrLarger` should influence the style, fold that logic in here
  // rather than leaving it as an unused dependency.
  const bodyStyle: React.CSSProperties = useMemo(() => {
    if (buttonActive) {
      return {
        ...defaultBodyStyle,
        position: "fixed",
        inset: 0,
        overflowY: "hidden",
      };
    }
    return defaultBodyStyle;
  }, [buttonActive, defaultBodyStyle]);

  // Function to toggle a child's active state and run its predefined function
  const handleBodyStyle = (name: string) => {
    if (name === "close-all") {
      // Reset all child states to inactive
      setChildStates((prevStates) =>
        prevStates.map((child) => ({ ...child, active: false })),
      );
      return;
    }

    // Update child state conditionally
    setChildStates((prevStates) =>
      prevStates.map((child) => {
        // Check if the name passed through the parameters matches the current name
        if (child.name === name) {
          // If the name matches and its not already active - run the function associated with the specified element
          if (!child.active) {
            child.action();
          }
          return { ...child, active: !child.active };
        }
        return { ...child, active: false }; // Ensure only one is active
      }),
    );
  };

  // Helper function for conditional states
  const isChildActive = (name: string): boolean => {
    return childStates.find((child) => child.name === name)?.active || false; // Return the active state
  };

  return {
    bodyStyle,
    handleBodyStyle,
    childStates,
    isChildActive,
  };
}
