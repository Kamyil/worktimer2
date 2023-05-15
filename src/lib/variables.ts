export const COLORS = {
  IS_EDITING: "#FFD700",
  SUCCESS: "#28a745",
  DANGER: "#dc3545",
  NORMAL_HOURS: "rgb(129 140 248)",
  ACORD_HOURS: "rgb(45 212 191)",
  HOLIDAY: "rgb(232 121 249)",
  PAY: "#ffd70",
};

export enum ENVIRONMENT {
  LOCAL = "LOCAL",
  PRODUCTION = "PRODUCTION",
}

export const currentEnvironment = ENVIRONMENT.PRODUCTION;

export const serverDomain = "http://localhost:2000";
