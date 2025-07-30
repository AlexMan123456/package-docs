import { DarkModeToggle, InternalLink, NavigationDrawer } from "@alextheman/components";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import AboutPage from "src/pages/eslint-plugin/AboutPage";
import { Outlet, useLocation } from "react-router-dom";

function ESLintPluginMainPage() {
  const location = useLocation();

  return (
    <NavigationDrawer
      title="@alextheman/eslint-plugin"
      navItems={[
        {
          category: "Getting Started",
          options: [
            {
              label: "About",
              to: "/eslint-plugin",
            },
            {
              label: "Installation",
              to: "/eslint-plugin/installation",
            },
          ],
        },
        {
          category: "Rules",
          options: [
            {
              label: "no-namespace-imports",
              to: "/eslint-plugin/no-namespace-imports",
            },
          ],
        },
      ]}
      headerElements={
        <>
          <Tooltip title="Return to homepage">
            <IconButton
              component={InternalLink}
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
      {location.pathname === "/eslint-plugin" ? <AboutPage /> : <Outlet />}
    </NavigationDrawer>
  );
}

export default ESLintPluginMainPage;
