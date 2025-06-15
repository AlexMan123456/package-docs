import { DarkModeToggle, NavigationDrawer } from "@alextheman/components";
import IconButton from "@mui/material/IconButton";
import { Link, Outlet, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AboutPage from "src/pages/getting-started/AboutPage";
import Tooltip from "@mui/material/Tooltip";

function ComponentsTemplate() {
  const location = useLocation();
  return (
    <NavigationDrawer
      title="Alex's Components Library"
      navItems={[
        {
          category: "Getting Started",
          options: [
            {
              label: "About",
              to: "/components",
            },
            {
              label: "Installation",
              to: "/components/install",
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
      headerElements={
        <>
          <Tooltip title="Return to homepage">
            <IconButton
              component={Link}
              to="/"
              sx={{ display: "flex", justifySelf: "center" }}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <DarkModeToggle />
        </>
      }
    >
      {location.pathname === "/components" ? <AboutPage /> : <Outlet />}
    </NavigationDrawer>
  );
}

export default ComponentsTemplate;
