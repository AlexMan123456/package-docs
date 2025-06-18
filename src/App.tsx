import { Route, Routes } from "react-router-dom";
import Homepage from "src/pages/Homepage";
import ComponentsTemplate from "src/pages/components/ComponentsTemplate";
import DropdownMenuPage from "src/pages/components/DropdownMenuPage";
import PlaygroundPage from "src/pages/components/PlaygroundPage";
import InstallationPage from "src/pages/components/getting-started/InstallationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/components" element={<ComponentsTemplate />}>
          <Route path="dropdown-menu" element={<DropdownMenuPage />} />
          <Route path="installation" element={<InstallationPage />} />
          <Route path="playground" element={<PlaygroundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
