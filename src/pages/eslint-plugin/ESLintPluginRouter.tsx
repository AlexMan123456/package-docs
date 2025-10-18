import { Route } from "react-router-dom";

import ESLintPluginMainPage from "src/pages/eslint-plugin/ESLintPluginMainPage";
import InstallationPage from "src/pages/eslint-plugin/InstallationPage";
import NoNamespaceImportsPage from "src/pages/eslint-plugin/NoNamespaceImportsPage";

function ESLintPluginRouter() {
  return (
    <Route path="/eslint-plugin" element={<ESLintPluginMainPage />}>
      <Route path="installation" element={<InstallationPage />} />
      <Route path="no-namespace-imports" element={<NoNamespaceImportsPage />} />
      <Route path="no-relative-imports" />
    </Route>
  );
}

export default ESLintPluginRouter;
