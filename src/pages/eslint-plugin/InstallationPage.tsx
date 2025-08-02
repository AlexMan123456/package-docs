import { stripIndent } from "common-tags";
import Markdown from "react-markdown";

function InstallationPage() {
  return (
    <main>
      <h1>Installation</h1>
      <p>
        To install this package locally to your project, run the following command in the root of
        your project:
      </p>
      <Markdown>{"`npm install @alextheman/eslint-plugin`"}</Markdown>
      <p>This will install the package along with any peer dependencies needed.</p>
      <h2>Troubleshooting - Regarding the Deprecated Config Packages</h2>
      <Markdown>
        If you're using an older setup of mine, you may have installed
        `@alextheman/eslint-config-typescript-base` or
        `@alextheman/eslint-config-typescript-react-base`. These packages are deprecated and should
        **not** be used! All ESLint-related tooling are imported from the plugin now.
      </Markdown>
      <Markdown>
        If you did install those packages alongside the ESLint plugin, it may be the case that
        trying to update dependencies may lead to version conflicts. If that is the case, please
        uninstall the config packages along with the plugin with
      </Markdown>
      <Markdown>
        {
          "``npm uninstall @alextheman/eslint-config-typescript-base @alextheman/eslint-config-typescript-react-base @alextheman/eslint-plugin``"
        }
      </Markdown>
      <Markdown>If you need to add the `--legacy-peer-deps` flag, please do so as well.</Markdown>
      <Markdown>After that, update all your dependencies by running</Markdown>
      <Markdown>{"`npx npm-check-updates -u && npm install`"}</Markdown>
      <Markdown>Finally, run</Markdown>
      <Markdown>{"`npm install @alextheman/eslint-plugin`"}</Markdown>
      <Markdown>And that should resolve all the version conflicts.</Markdown>
      <h2>Using my ESLint Config</h2>
      <Markdown>
        If you want to use my TypeScript base config, please add this to your eslint.config.js file:
      </Markdown>
      <Markdown>
        {stripIndent`
                \`\`\`
                import plugin from "@alextheman/eslint-plugin";

                export default plugin.configs.alexTypeScriptBase;
                \`\`\`
                `}
      </Markdown>
      <Markdown>And to use my React base config, add this instead:</Markdown>
      <Markdown>
        {stripIndent`
          \`\`\`
          import plugin from "@alextheman/eslint-plugin";

          export default plugin.configs.alexTypeScriptReactBase;
        `}
      </Markdown>
      <Markdown>
        This package also exports a Prettier config to use for formatting. There is an ESLint rule
        enabled in both configs that automatically apply most of the default Prettier rules on
        --fix, but in case you want to actually use Prettier for formatting alongside the plugin,
        add this to your Prettier config:
      </Markdown>
      <Markdown>
        {stripIndent`
          \`\`\`
          import { prettierRules } from "@alextheman/eslint-plugin";

          export default prettierRules;
        `}
      </Markdown>
    </main>
  );
}

export default InstallationPage;
