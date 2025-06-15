import { Route, Routes } from "react-router-dom";
import Homepage from "src/pages/Homepage";
import ComponentsTemplate from "src/pages/components/ComponentsTemplate";
import DropdownMenuPage from "src/pages/components/DropdownMenuPage";
import InstallationPage from "src/pages/getting-started/InstallationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/components" element={<ComponentsTemplate />}>
          <Route path="dropdown-menu" element={<DropdownMenuPage />} />
          <Route path="install" element={<InstallationPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
