import { Route, Routes } from "react-router-dom";

import ComponentsRouter from "src/pages/components/ComponentsRouter";
import ESLintPluginRouter from "src/pages/eslint-plugin/ESLintPluginRouter";
import Homepage from "src/pages/Homepage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {ComponentsRouter()}
      {ESLintPluginRouter()}
    </Routes>
  );
}

export default Router;
