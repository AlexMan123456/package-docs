import { DarkModeToggle, NavigationDrawer } from "@alextheman/components";
import { Route, Routes } from "react-router-dom";
import AboutPage from "src/pages/AboutPage";

function App() {
  return (
    <NavigationDrawer
      title="Alex's Components Library"
      navItems={[
        {
          category: "Home",
          options: [
            {
              label: "Homepage",
              to: "/",
            },
          ],
        },
        {
          category: "Components",
          options: [
            {
              label: "DropdownMenu",
              to: "/components/dropdown-menu",
            },
          ],
        },
      ]}
      headerElements={<DarkModeToggle />}
    >
      <Routes>
        <Route path="/" element={<AboutPage />} />
      </Routes>
    </NavigationDrawer>
  );
}

export default App;
