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
  if (lastSpaceIndex !== -1) {
    // If a space is found within the first maxLength characters, create the excerpt
    const excerpt = trimmedContent.substring(0, lastSpaceIndex) + " ...";
    return excerpt;
  } else {
    // If no space is found, simply truncate the content
    return trimmedContent + " ...";
  }
  // const excerpt = trimmedContent.substring(0, lastSpaceIndex) + " .....";
  // return excerpt;
}
