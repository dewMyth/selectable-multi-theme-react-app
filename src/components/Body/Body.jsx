import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function Body() {
  const { theme, changeTheme } = useContext(ThemeContext);
  // theme == "light" or theme == "dark"
  return (
    <>
      <div className="body">Body</div>
      <div style={{ color: theme === "light" ? "pink" : "red" }}>
        Sample Text
      </div>
    </>
  );
}

export default Body;
