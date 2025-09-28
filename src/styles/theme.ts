export const COLORS = {
  // Professional navy-based primary palette
  primary: {
    50: "#f0f4ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1", // Main brand color
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
  },
  // Warm gray for secondary elements
  neutral: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
  },
  // Professional green for success states
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  // Warm red for error states
  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  // Amber for warnings
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  // Teal accent for special elements
  accent: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
  },
  // Semantic colors
  background: "#fafaf9",
  surface: "#ffffff",
  text: {
    primary: "#1c1917",
    secondary: "#57534e",
    tertiary: "#78716c",
    inverse: "#ffffff",
    muted: "#a8a29e",
  },
};

// Professional typography system
export const FONTS = {
  primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'Fira Code', 'Monaco', 'Consolas', monospace",
};

// Legacy support
export const FONT_FAMILY = FONTS.primary;

export const FONT_SIZES = {
  xs: "0.75rem",
  small: "0.875rem",
  medium: "1rem",
  large: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
};

export const FONT_WEIGHTS = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

export const SPACING = {
  xs: "0.25rem",
  small: "0.5rem",
  medium: "1rem",
  large: "1.5rem",
  xl: "2rem",
  "2xl": "2.5rem",
  "3xl": "3rem",
  "4xl": "4rem",
};

export const BORDER_RADIUS = {
  none: "0",
  small: "0.25rem",
  medium: "0.5rem",
  large: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
  "3xl": "1.75rem",
  full: "9999px",
};

export const SHADOWS = {
  small: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  medium: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  large: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  glow: "0 0 20px rgb(59 130 246 / 0.5)",
};

export const ANIMATIONS = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
};
