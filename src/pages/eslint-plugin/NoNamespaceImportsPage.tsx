import { stripIndent } from "common-tags";
import Markdown from "react-markdown";

import CodeExample from "src/components/CodeExample";

function NoNamespaceImportsPage() {
  return (
    <main>
      <h1>No Namespace Imports</h1>
      <Markdown>
        This is a rule to forbid the use of `import *` syntax. This rule exists because most of the
        time, it's preferable to explicitly state exactly what things you're importing from each
        package, rather than just importing everything.
      </Markdown>
      <Markdown>To use this in your own projects, add this to your ESLint config:</Markdown>
      <CodeExample
        code={stripIndent`
                    import alexPlugin from "@alextheman/eslint-plugin";

                    export default [
                      {
                        plugins: {
                          "@alextheman": alexPlugin,
                        },
                        rules: {
                          "@alextheman/no-namespace-imports": "error",
                        },
                      },
                    ];
                    `}
        language="typescript"
      />
      <Markdown>Under this rule, the following examples should give an error:</Markdown>
      <CodeExample
        code={stripIndent`
                    // Gives an error because you used import *
                    import * as React from "react"

                    // Gives an error for the same reason (but also actually never do this particular one unless you like big bundle sizes)
                    import * as MUI from "@mui/material"
                    `}
        language="typescript"
      />
      <Markdown>Whereas the following examples are allowed:</Markdown>
      <CodeExample
        code={stripIndent`
                    // Allowed because you're using a barrel export
                    import { useState } from "react"

                    // Allowed because you're using a default export
                    // (for the record, you should also never use a barrel export with Material UI unless you like big bundle sizes)
                    import Button from "@mui/material/Button"
                    `}
        language="typescript"
      />
      <h2>Setting Exceptions</h2>
      <Markdown>
        For some packages, it may be convenient to do a namespace import for them, so you may also
        want to set specific exceptions. If so, you can choose certain packages to allow to be
        imported this way by configuring them in the config:
      </Markdown>
      <CodeExample
        code={stripIndent`
                    import alexPlugin from "@alextheman/eslint-plugin";

                    export default [
                      {
                        plugins: {
                          "@alextheman": alexPlugin,
                        },
                        rules: {
                          "@alextheman/no-namespace-imports": ["error", { allow: ["zod"] }],
                        },
                      },
                    ];
                    `}
        language="typescript"
      />
      <Markdown>And so, under this configuration, the following is also now allowed</Markdown>
      <CodeExample
        code={stripIndent`
                    // Allowed because it's listed as an exception in the config
                    import * as z from "zod"

                    // Still gives an error because we're still not allowing 
                    // Material UI to give us big bundle sizes (but you do you if you're into that...)
                    import * as MUI from "@mui/material"
                    `}
        language="typescript"
      />
    </main>
  );
}

export default NoNamespaceImportsPage;
