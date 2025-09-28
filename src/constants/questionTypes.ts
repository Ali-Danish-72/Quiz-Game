import { LucideIcon, User, MapPin, Calendar, Play } from "lucide-react";

/**
 * Question Type Configuration
 *
 * Centralized configuration for question types including icons, colors, and styling.
 * Replaces duplicated switch statements across components.
 */

export interface QuestionTypeConfig {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  borderColor: string;
  hoverBg?: string;
}

export interface ClueConfig {
  iconBg: string;
  textColor: string;
  borderColor: string;
  hoverBg: string;
}

/**
 * Main question type configurations
 */
export const QUESTION_TYPE_CONFIGS: Record<string, QuestionTypeConfig> = {
  personality: {
    icon: User,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  place: {
    icon: MapPin,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    borderColor: "border-green-200",
  },
  event: {
    icon: Calendar,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    borderColor: "border-orange-200",
  },
  default: {
    icon: Play,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
};

/**
 * Clue configurations for QuizScreen
 */
export const CLUE_CONFIGS: ClueConfig[] = [
  {
    iconBg: "bg-blue-100",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    hoverBg: "hover:bg-blue-50",
  },
  {
    iconBg: "bg-purple-100",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    hoverBg: "hover:bg-purple-50",
  },
  {
    iconBg: "bg-green-100",
    textColor: "text-green-700",
    borderColor: "border-green-200",
    hoverBg: "hover:bg-green-50",
  },
  {
    iconBg: "bg-orange-100",
    textColor: "text-orange-700",
    borderColor: "border-orange-200",
    hoverBg: "hover:bg-orange-50",
  },
];

/**
 * Get question type configuration by type string
 */
export const getQuestionTypeConfig = (type: string): QuestionTypeConfig => {
  const normalizedType = type.toLowerCase();
  return QUESTION_TYPE_CONFIGS[normalizedType] || QUESTION_TYPE_CONFIGS.default;
};

/**
 * Get icon component by type string (for backward compatibility)
 */
export const getQuestionIcon = (type: string): LucideIcon => {
  const config = getQuestionTypeConfig(type);
  return config.icon;
};

/**
 * Get clue configuration by clue number (1-based index)
 */
export const getClueConfig = (clueNumber: number): ClueConfig => {
  const index = Math.max(0, Math.min(clueNumber - 1, CLUE_CONFIGS.length - 1));
  return CLUE_CONFIGS[index];
};
