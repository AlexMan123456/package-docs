import { Route, Routes } from "react-router-dom";
import ESLintPluginMainPage from "src/pages/eslint-plugin/ESLintPluginMainPage";
import Homepage from "src/pages/Homepage";
import Rickroll from "src/pages/Rickroll";
import ComponentsTemplate from "src/pages/components/ComponentsTemplate";
import DarkModeTogglePage from "src/pages/components/DarkModeTogglePage";
import DropdownMenuPage from "src/pages/components/DropdownMenuPage";
import ExternalLinkPage from "src/pages/components/ExternalLinkPage";
import IconWithPopoverPage from "src/pages/components/IconWithPopoverPage";
import InternalLinkPage from "src/pages/components/InternalLinkPage";
import ReactPlaygroundPage from "src/pages/components/ReactPlaygroundPage";
import ScreenSizeContextPage from "src/pages/components/ScreenSizeContextPage";
import InstallationPage from "src/pages/components/getting-started/InstallationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

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
        <Route
          path="contexts/screen-size-context"
          element={<ScreenSizeContextPage />}
        />
      </Route>

      <Route path="/eslint-plugin" element={<ESLintPluginMainPage />}>
        <Route path="no-namespace-imports" />
        <Route path="no-relative-imports" />
      </Route>
    </Routes>
  );
}

export default App;
