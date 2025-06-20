import { lazy } from "react";

export function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(
    navigator.userAgent
  );
}

/**
 *  Creates a React lazy-loaded component with an artificial delay
 *  @param {`./${string}/*.jsx|tsx`} modulePath - Relative path to the module (must start with ./)
 *  @param {number} [delay=200] - Minimum loading delay in milliseconds
 *  @returns {React.LazyExoticComponent<React.ComponentType<any>>} Lazy-loaded component
 *  @throws Will throw an error if the import fails
 *  @example
 *  // Basic usage
 *  const Home = lazyLoad('./Home.jsx');
 *
 *  // With custom delay
 *  const About = lazyLoad('./About.jsx', 2000);
 */
export const lazyLoad = (importFn, modulePath, delay = 200) =>
  lazy(() =>
    Promise.all([
      importFn(),
      new Promise((resolve) => setTimeout(resolve, delay)),
    ])
      .then(([module]) => module)
      .catch((error) => {
        console.error(`Failed to load module at ${modulePath}:`, error);
        throw new Error(`Module load failed: ${error.message}`);
      })
  );
