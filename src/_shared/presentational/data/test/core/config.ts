// Domain: Application-wide configuration (persisted)
export type HorizonDays = 30 | 60 | 90;

export interface AppConfig {
  startingBalance: number; // User's current cash balance
  safetyBuffer: number; // Minimum acceptable balance floor
  horizonDays: HorizonDays; // Forecast window length
}

export interface DisplayPreferences {
  systemTheme: "light" | "dark";
}

