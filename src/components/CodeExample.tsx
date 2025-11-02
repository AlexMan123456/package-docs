import type { ReactNode } from "react";
import type { CodeBlockProps } from "react-code-block";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CodeBlock } from "react-code-block";

export interface CodeExampleProps extends Omit<CodeBlockProps, "children"> {
  children?: ReactNode;
}

function CodeExample({ children, ...props }: CodeExampleProps) {
  return (
    <Card>
      <CardContent>
        <CodeBlock {...props}>
          <CodeBlock.Code>
            <CodeBlock.LineContent>
              <CodeBlock.LineNumber style={{ paddingRight: "1.5rem" }} />
              <CodeBlock.Token />
              {children}
            </CodeBlock.LineContent>
          </CodeBlock.Code>
        </CodeBlock>
      </CardContent>
    </Card>
  );
}

export default CodeExample;
