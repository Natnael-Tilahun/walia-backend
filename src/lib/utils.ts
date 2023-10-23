import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateExcerpt(content: any, maxLength: number) {
  if (content.length <= maxLength) {
    return content;
  }
  const trimmedContent = content.substring(0, maxLength);
  const lastSpaceIndex = trimmedContent.lastIndexOf(" ");
  const excerpt = trimmedContent.substring(0, lastSpaceIndex) + " .....";
  return excerpt;
}
