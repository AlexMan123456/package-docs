import { DarkModeToggle, NavigationDrawer } from "@alextheman/components";
import IconButton from "@mui/material/IconButton";
import { Link, Outlet, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AboutPage from "src/pages/components/getting-started/AboutPage";
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
              to: "/components/installation",
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
            {
              label: "ReactPlayground",
              to: "/components/react-playground",
            },
            {
              label: "InternalLink",
              to: "/components/internal-link",
            },
            {
              label: "ExternalLink",
              to: "/components/external-link",
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
