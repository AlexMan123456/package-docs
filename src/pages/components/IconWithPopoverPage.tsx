import { IconWithPopover, PopoverText, ReactPlayground } from "@alextheman/components";
import Visibility from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";
import Markdown from "react-markdown";

function IconWithPopoverPage() {
  return (
    <main>
      <h1>IconWithPopover</h1>
      <Markdown>
        This component gives you an icon which, when you hover your mouse over it, renders a
        Popover. This can be useful to display quick tips to the user without being too intrusive.
        You use it in the following way:
      </Markdown>
      <ReactPlayground
        code={`
                    <IconWithPopover icon={Visibility}>
                        <Typography>Hello World!</Typography>
                    </IconWithPopover>
                    `}
        scope={{ IconWithPopover, Typography, Visibility }}
      />
      <Markdown>
        This component is often used with the `PopoverText` prop, which contains some extra margin
        settings to give the text some more space.
      </Markdown>
      <ReactPlayground
        code={`
                    <IconWithPopover icon={Visibility}>
                        <PopoverText text="Hello World!" />
                    </IconWithPopover>
                    `}
        scope={{ IconWithPopover, PopoverText, Visibility }}
      />
      <Markdown>To pass your own props into the icon, use the `iconProps` prop.</Markdown>
      <ReactPlayground
        code={`
                    <IconWithPopover
                        icon={Visibility}
                        iconProps={{
                            sx: {
                                marginLeft: 2
                            }
                        }}
                    >
                        <PopoverText text="Hello World!" />
                    </IconWithPopover>
                    `}
        scope={{ IconWithPopover, PopoverText, Visibility }}
      />
    </main>
  );
}

export default IconWithPopoverPage;
