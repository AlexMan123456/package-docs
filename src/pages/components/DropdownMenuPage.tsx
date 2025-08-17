import { DropdownMenu, ReactPlayground } from "@alextheman/components";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function DropdownMenuPage() {
  return (
    <main style={{ marginBottom: "2px" }}>
      <h1>DropdownMenu</h1>
      <Markdown>
        The `DropdownMenu` component provides a simple dropdown that you can use in place of
        Material UI's `Menu` component. To use it, call the component and pass in some `MenuItem`
        components from Material UI as children, as follows:
      </Markdown>
      <ReactPlayground
        code={`
                    <DropdownMenu>
                        <MenuItem>Item 1</MenuItem>
                        <MenuItem>Item 2</MenuItem>
                    </DropdownMenu>
                    `}
        scope={{ DropdownMenu, MenuItem }}
      />
      <Markdown>
        Should you need one of the `MenuItem` components to close the menu, you can pass in a
        function as the children, which has an argument `closeMenu`, which you can call to close the
        menu.
      </Markdown>
      <ReactPlayground
        code={`
                <DropdownMenu>
                {(closeMenu) => {
                    return (
                      <>
                        <MenuItem key="Item 1">Item 1</MenuItem>,
                        <MenuItem key="Item 2" onClick={() => {closeMenu()}}>Item 2</MenuItem>
                      </>
                    )
                }}
                </DropdownMenu>
                `}
        scope={{ DropdownMenu, MenuItem }}
      />
      <Markdown>
        You can also pass in `onOpen` and `onClose` props that run the given function when the menu
        is opened/closed.
      </Markdown>
      <ReactPlayground
        code={`
        function Example() {
          const [isOpen, setIsOpen] = useState<boolean>(false);
          const [message, setMessage] = useState<string>("");

          useEffect(() => {
            setMessage(\`DropdownMenu is currently \${isOpen ? "open" : "closed"}.\`);
          }, [isOpen]);

          return (
            <>
              <DropdownMenu
                onOpen={() => {
                  setIsOpen(true);
                }}
                onClose={() => {
                  setIsOpen(false);
                }}
              >
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
              </DropdownMenu>
              <Typography>{message}</Typography>
            </>
          );
        }
        render(<Example/>)
        `}
        scope={{ DropdownMenu, MenuItem, Typography, useState, useEffect }}
        noInline
      />
    </main>
  );
}

export default DropdownMenuPage;
