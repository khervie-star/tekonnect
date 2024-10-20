/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["SpaceMono"],
        "satoshi-light": ["Satoshi-Light"],
        "satoshi-regular": ["Satoshi-Regular"],
        "satoshi-medium": ["Satoshi-Medium"],
        "satoshi-bold": ["Satoshi-Bold"],
        "satoshi-black": ["Satoshi-Black"],
        "chillax-light": ["Chillax-Light"],
        "chillax-regular": ["Chillax-Regular"],
        "chillax-medium": ["Chillax-Medium"],
        "chillax-semibold": ["Chillax-Semibold"],
        "chillax-bold": ["Chillax-Bold"]
      },
      colors: {
        primary: {
          light: "#FF8343",
          dark: "#FF5C1A"
        },
        secondary: {
          light: "#4158A6",
          dark: "#2C4073"
        },
        accent: {
          light: "#179BAE",
          dark: "#136B7E"
        },
        background: {
          // light: "#F1DEC6",
          light: "#f1efe7",
          dark: "#121212"
        },
        text: {
          light: "#333333",
          dark: "#F1DEC6"
        },
        success: {
          light: "#28A745",
          dark: "#218838"
        },
        error: {
          light: "#DC3545",
          dark: "#C82333"
        },
        warning: {
          light: "#FFC107",
          dark: "#E0A800"
        },
        info: {
          light: "#17A2B8",
          dark: "#138496"
        },
        progress: "#2ECC71"
      }

      // colors: {
      //   primary: {
      //     light: "#3498db",
      //     dark: "#2980b9"
      //   },
      //   secondary: {
      //     light: "#2ecc71",
      //     dark: "#27ae60"
      //   },
      //   accent: {
      //     light: "#e74c3c",
      //     dark: "#c0392b"
      //   },
      //   background: {
      //     light: "#f5f5f5",
      //     dark: "#1a1a1a"
      //   },
      //   text: {
      //     light: "#333333",
      //     dark: "#f5f5f5"
      //   },
      //   success: {
      //     light: "#27ae60",
      //     dark: "#2ecc71"
      //   },
      //   error: {
      //     light: "#e74c3c",
      //     dark: "#c0392b"
      //   },
      //   warning: {
      //     light: "#f39c12",
      //     dark: "#d35400"
      //   },
      //   info: {
      //     light: "#3498db",
      //     dark: "#2980b9"
      //   },
      //   progress: "#2ecc71"
      // }
      // colors: {
      //   primary: {
      //     light: "#ff6f61", // A bright coral color
      //     dark: "#ff4757" // A vibrant red-pink
      //   },
      //   secondary: {
      //     light: "#1abc9c", // A bright teal
      //     dark: "#16a085" // A deeper teal
      //   },
      //   accent: {
      //     light: "#f9ca24", // A bright yellow
      //     dark: "#f39c12" // A golden yellow
      //   },
      //   background: {
      //     light: "#f1f2f6", // A very light gray-blue
      //     dark: "#2f3640" // A deep, almost-black gray
      //   },
      //   text: {
      //     light: "#2f3640", // Dark, easy-to-read gray
      //     dark: "#f1f2f6" // Light gray-blue for dark mode
      //   },
      //   success: {
      //     light: "#2ed573", // Bright green
      //     dark: "#26de81" // A vivid emerald
      //   },
      //   error: {
      //     light: "#ff4757", // Vibrant red-pink
      //     dark: "#ff6f61" // Bright coral
      //   },
      //   warning: {
      //     light: "#ff9f43", // Bright orange
      //     dark: "#e67e22" // Deep orange
      //   },
      //   info: {
      //     light: "#5352ed", // Bright indigo
      //     dark: "#3742fa" // Deep blue
      //   },
      //   progress: "#3742fa" // Deep blue for progress indicators
      // }
      // colors: {
      //   primary: {
      //     light: "#00bcd4", // A bright cyan
      //     dark: "#00796b" // A deep teal
      //   },
      //   secondary: {
      //     light: "#e91e63", // A bold pink
      //     dark: "#c2185b" // A darker pink
      //   },
      //   accent: {
      //     light: "#ffeb3b", // Bright yellow
      //     dark: "#fbc02d" // A deeper yellow
      //   },
      //   background: {
      //     light: "#e0f2f1", // A very light cyan
      //     dark: "#263238" // A dark charcoal gray
      //   },
      //   text: {
      //     light: "#212121", // A near-black gray
      //     dark: "#e0e0e0" // Light gray for dark mode
      //   },
      //   success: {
      //     light: "#4caf50", // Bright green
      //     dark: "#388e3c" // A darker green
      //   },
      //   error: {
      //     light: "#f44336", // Vibrant red
      //     dark: "#c62828" // A darker red
      //   },
      //   warning: {
      //     light: "#ff9800", // Bright orange
      //     dark: "#f57c00" // A deeper orange
      //   },
      //   info: {
      //     light: "#2196f3", // Bright blue
      //     dark: "#1976d2" // A darker blue
      //   },
      //   progress: "#2196f3" // Bright blue for progress indicators
      // }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-gradient-primary": {
          backgroundImage: "linear-gradient(to right, #3498db, #2980b9)"
        },
        ".bg-gradient-secondary": {
          backgroundImage: "linear-gradient(to right, #2ecc71, #27ae60)"
        },
        ".bg-gradient-accent": {
          backgroundImage: "linear-gradient(to right, #e74c3c, #c0392b)"
        },
        ".bg-gradient-dark": {
          backgroundImage: "linear-gradient(to bottom, #2c3e50, #1a1a1a)"
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
