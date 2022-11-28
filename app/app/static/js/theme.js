const STORAGE_KEY = "theme";
const THEME_ATTR  = "data-theme";
const QUERY_KEY   = "(prefers-color-scheme: dark)";

const themes = {
  LIGHT: "light",
  DARK: "dark",
};

//initTheme();
//

initThemeLight();

function initThemeLight() {
  setTheme(themes.LIGHT);
  document.getElementById("sunmoon").href = "https://www.imcollectingmoonlight.com/sunlightgallery/";


}


function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme) {
    // Storage theme
    //setTheme(savedTheme);
    if (savedTheme == themes.DARK) {
      setTheme(themes.DARK);
      document.getElementById("sunmoon").href = "https://www.imcollectingmoonlight.com/moonlightgallery/";

    } else {
      setTheme(themes.LIGHT);
      document.getElementById("sunmoon").href = "https://www.imcollectingmoonlight.com/sunlightgallery/";

    }

  //} else if (window.matchMedia && window.matchMedia(QUERY_KEY).matches) {
    // system theme
  //  setTheme(themes.DARK);
  //  document.getElementById("sunmoon").href = "https://www.imcollectingmoonlight.com/moonlightgallery/";
    //document.getElementById("moonsun").className = "fas fa-moon fa-1x";


  //} else {
    // Default theme
    //setTheme(themes.LIGHT);
    //document.getElementById("sunmoon").href = "https://www.imcollectingmoonlight.com/sunlightgallery/";
    //document.getElementById("moonsun").className = "fas fa-sun fa-1x";
  }

  // Watch for system theme changes
  //window.matchMedia(QUERY_KEY).addEventListener("change", (e) => {
  //  const newTheme = e.matches ? themes.DARK : themes.LIGHT;
  //  setTheme(newTheme);
  //});
}

function toggleTheme() {
  const theme = getTheme();
  const newTheme = theme === themes.DARK ? themes.LIGHT : themes.DARK;
  setTheme(newTheme);
  localStorage.setItem(STORAGE_KEY, newTheme);
  //document.getElementById("moonsun").href="https://www.imcollectingmoonlight.com/moonlightgallery/";
  if(document.getElementById("sunmoon").href == "https://www.imcollectingmoonlight.com/sunlightgallery/"){
    document.getElementById("sunmoon").href = "https://www.imcollectingmoonlight.com/moonlightgallery/";
    setTheme(themes.DARK)
  }else{
    document.getElementById("sunmoon").href = "https://www.imcollectingmoonlight.com/sunlightgallery/";
    setTheme(themes.LIGHT)
  }
  //if(document.getElementById("moonsun").className == "fas fa-sun fa-1x"){
  //  document.getElementById("moonsun").className = "fas fa-moon fa-1x";
  //  setTheme(themes.DARK)
  //}else{
  //  document.getElementById("moonsun").className = "fas fa-sun fa-1x";
  //  setTheme(themes.LIGHT)
  //}
}

function getTheme() {
  return document.documentElement.getAttribute(THEME_ATTR);
}

function setTheme(value) {
  document.documentElement.setAttribute(THEME_ATTR, value);
}
