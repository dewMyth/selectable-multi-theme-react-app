import React, { useContext, useEffect } from "react";
// import "./Navbar-dark.css";
// import "./Navbar-light.css";
import { ThemeContext } from "../../ThemeContext";

function NavBar() {
  const { theme, changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    // <link rel="stylesheet" href="themes/theme-light.css" id="card-theme-light"></link>
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `themes/theme-${theme}.css`;
    link.id = `card-theme-${theme}`; // Unique ID to prevent duplicates
    document.head.appendChild(link);
    console.log(document);

    return () => {
      document.head.removeChild(link); // Cleanup old theme
    };
  }, [theme]);

  const handleThemeChange = (e) => {
    changeTheme(e.target.value);
  };

  return (
    <>
      {JSON.stringify(`Context saved atm :=> ${theme}`)}
      <div className="bg">NavBar</div>
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        {/* Add more themes as needed */}
      </select>
    </>
  );
}

export default NavBar;
