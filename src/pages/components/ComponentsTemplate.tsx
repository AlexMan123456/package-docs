import { DarkModeToggle, NavigationDrawer } from "@alextheman/components";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link, Outlet, useLocation } from "react-router-dom";

import AboutPage from "src/pages/components/getting-started/AboutPage";

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
              label: "DarkModeToggle",
              to: "/components/dark-mode-toggle",
            },
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
            {
              label: "IconWithPopover",
              to: "/components/icon-with-popover",
            },
            {
              label: "SwitchWithIcons",
              to: "/components/switch-with-icons",
            },
          ],
        },
        {
          category: "Contexts",
          options: [
            {
              label: "ScreenSizeContext",
              to: "/components/contexts/screen-size-context",
            },
          ],
        },
      ]}
      headerElements={
        <>
          <Tooltip title="Return to homepage">
            <IconButton component={Link} to="/" sx={{ display: "flex", justifySelf: "center" }}>
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
