import Navbar from "./lib/component/ThemeNav";
import { ThemeProvider } from "./lib/component/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="py-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-red-600 mb-4">
              Welcome to Theme Switcher
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              This is a Next.js application with theme switching functionality.
              Try switching between light and dark modes using the toggle in the
              navbar!
            </p>
          </div>

          {/* Example Card */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Sample Card
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              This card demonstrates the theme switching in action. Notice how
              the background, text, and border colors all change smoothly.
            </p>
          </div>

          {/* Example Button */}
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors duration-200">
            Sample Button
          </button>
        </main>
      </div>
    </ThemeProvider>
  );
}
