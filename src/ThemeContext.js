import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme

  useEffect(() => {
    // Fetch saved theme from the database on initial load
    const fetchTheme = async () => {
      const isSaved = window.localStorage.getItem("theme");
      console.log("saved color", isSaved);
      setTheme(
        isSaved ? JSON.parse(isSaved) : "light" // If saved theme is available, use it
      );
    };
    fetchTheme();
  }, []);

  const changeTheme = async (newTheme) => {
    setTheme(newTheme);
    window.localStorage.setItem("theme", JSON.stringify(newTheme)); // Save theme to local storage
    // await axios.post("/api/theme", { theme: newTheme }); // Save theme to the database
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
