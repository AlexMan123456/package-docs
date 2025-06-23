import { DarkModeToggle, ReactPlayground } from "@alextheman/components";
import Markdown from "react-markdown";

function DarkModeTogglePage() {
  return (
    <main>
      <h1>DarkModeToggle</h1>
      <Markdown>
        The `DarkModeToggle` is just a simple little icon that switches between
        dark and light mode. Provided that you've wrapped your app in a
        ModeContext, you can use this component to change the colour scheme of
        the page.
      </Markdown>
      <br />
      <ReactPlayground code={"<DarkModeToggle />"} scope={{ DarkModeToggle }} />
    </main>
  );
}

export default DarkModeTogglePage;
