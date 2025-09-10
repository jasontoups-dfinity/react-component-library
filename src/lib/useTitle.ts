import { useEffect } from 'react';

/**
 * A custom hook to update the document title
 * @param title The title to set for the current page
 * @param suffix An optional suffix to append to the title (default: "React Component Library | DFINITY")
 */
export function useTitle(title: string, suffix: string = 'React Component Library | DFINITY') {
  useEffect(() => {
    // Save the previous title
    const previousTitle = document.title;

    // Set the new title
    document.title = title ? `${title} | ${suffix}` : suffix;

    // Restore the previous title when the component unmounts
    return () => {
      document.title = previousTitle;
    };
  }, [title, suffix]);
}
