import { DropdownMenu, ReactPlayground } from "@alextheman/components";
import MenuItem from "@mui/material/MenuItem";
import ReactMarkdown from "react-markdown";

function DropdownMenuPage() {
  return (
    <main style={{ marginBottom: "2px" }}>
      <h1>DropdownMenu</h1>
      <ReactMarkdown>
        The `DropdownMenu` component provides a simple dropdown that you can use
        in place of Material UI's `Menu` component. To use it, call the
        component and pass in some `MenuItem` components from Material UI as
        children, as follows:
      </ReactMarkdown>
      <ReactPlayground
        code={`
                    <DropdownMenu>
                        <MenuItem>Item 1</MenuItem>
                        <MenuItem>Item 2</MenuItem>
                    </DropdownMenu>
                    `}
        scope={{ DropdownMenu, MenuItem }}
      />
      <ReactMarkdown>
        Should you need one of the `MenuItem` components to close the menu, you
        can pass in a function as the children, which has an argument
        `closeMenu`, which you can call to close the menu.
      </ReactMarkdown>
      <ReactPlayground
        code={`
                <DropdownMenu>
                {(closeMenu) => {
                    return [
                        <MenuItem key="Item 1">Item 1</MenuItem>,
                        <MenuItem key="Item 2" onClick={() => {closeMenu()}}>Item 2</MenuItem>
                    ]
                }}
                </DropdownMenu>
                `}
        scope={{ DropdownMenu, MenuItem }}
      />
    </main>
  );
}

export default DropdownMenuPage;
