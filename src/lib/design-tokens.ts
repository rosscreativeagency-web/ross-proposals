export const rossColors = {
  black: "#000000",
  white: "#ffffff",
  gray: "#d8d8d6",
  softGray: "#f3f2ef",

  pastelBlue: "#dde9fc",
  pastelGreen: "#b9d0b5",
  pastelMint: "#b3ecd4",
  pastelYellow: "#e0e685",
  pastelGold: "#e1cc69",
  pastelPurple: "#d0b0ce",

  deepGreen: "#506558",
  deepBlue: "#46649a",
  mutedRed: "#be5a5a",
  clayBrown: "#531e17",
  deepPurple: "#5f4359",
} as const;

export const rossRadii = {
  soft: "1.5rem",
  blob: "45% 55% 62% 38% / 42% 48% 52% 58%",
  blobAlt: "58% 42% 46% 54% / 48% 60% 40% 52%",
} as const;

export const rossLayout = {
  pagePadding: "px-6 md:px-12 lg:px-20",
  sectionPadding: "py-24 md:py-32",
  maxWidth: "max-w-7xl",
} as const;

export const rossThemes = {
  light: {
    background: rossColors.white,
    foreground: rossColors.black,
    muted: "#666666",
    surface: rossColors.softGray,
    accent: rossColors.pastelBlue,
  },
  dark: {
    background: rossColors.black,
    foreground: rossColors.white,
    muted: "#a3a3a3",
    surface: "#101010",
    accent: rossColors.pastelGreen,
  },
  premium: {
    background: "#f7f4ef",
    foreground: rossColors.black,
    muted: "#6f6a64",
    surface: "#ffffff",
    accent: rossColors.pastelBlue,
  },
} as const;
