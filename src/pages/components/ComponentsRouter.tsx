import { Route } from "react-router-dom";

import ComponentsTemplate from "src/pages/components/ComponentsTemplate";
import DarkModeTogglePage from "src/pages/components/DarkModeTogglePage";
import DropdownMenuPage from "src/pages/components/DropdownMenuPage";
import ExternalLinkPage from "src/pages/components/ExternalLinkPage";
import InstallationPage from "src/pages/components/getting-started/InstallationPage";
import IconWithPopoverPage from "src/pages/components/IconWithPopoverPage";
import InternalLinkPage from "src/pages/components/InternalLinkPage";
import ReactPlaygroundPage from "src/pages/components/ReactPlaygroundPage";
import ScreenSizeContextPage from "src/pages/components/ScreenSizeContextPage";
import SwitchWithIconsPage from "src/pages/components/SwitchWithIconsPage";
import Rickroll from "src/pages/Rickroll";

function ComponentsRouter() {
  return (
    <Route path="/components" element={<ComponentsTemplate />}>
      <Route path="dropdown-menu" element={<DropdownMenuPage />} />
      <Route path="installation" element={<InstallationPage />} />
      <Route path="react-playground" element={<ReactPlaygroundPage />} />
      <Route path="internal-link" element={<InternalLinkPage />} />
      <Route path="internal-link/test" element={<InternalLinkPage />} />
      <Route path="external-link" element={<ExternalLinkPage />} />
      <Route path="you-may-not-enter" element={<Rickroll />} />
      <Route path="dark-mode-toggle" element={<DarkModeTogglePage />} />
      <Route path="icon-with-popover" element={<IconWithPopoverPage />} />
      <Route path="contexts/screen-size-context" element={<ScreenSizeContextPage />} />
      <Route path="switch-with-icons" element={<SwitchWithIconsPage />} />
    </Route>
  );
}

export default ComponentsRouter;
