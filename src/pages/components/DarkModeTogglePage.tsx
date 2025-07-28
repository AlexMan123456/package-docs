import { DarkModeToggle, ReactPlayground } from "@alextheman/components";
import Markdown from "react-markdown";

function DarkModeTogglePage() {
  return (
    <main>
      <h1>DarkModeToggle</h1>
      <Markdown>
        The `DarkModeToggle` is just a simple little icon that switches between dark and light mode.
        Provided that you've wrapped your app in a ModeContext, you can use this component to change
        the colour scheme of the page.
      </Markdown>
      <br />
      <ReactPlayground code={"<DarkModeToggle />"} scope={{ DarkModeToggle }} />
      <br />
      <Markdown>
        Please note that in order to use this component, it must be wrapped inside a `ModeProvider`,
        like so:
      </Markdown>
      <br />
      <Markdown>
        {`
          <ModeProvider>
            <DarkModeToggle />
          </ModeProvider>
        `}
      </Markdown>
      <br />
      <Markdown>
        This provides the theme context to the overall app. If you don't include this, this button
        will have no effect on the app.
      </Markdown>
    </main>
  );
}

export default DarkModeTogglePage;
