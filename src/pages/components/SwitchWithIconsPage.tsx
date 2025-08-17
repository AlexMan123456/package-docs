import { ReactPlayground, SwitchWithIcons } from "@alextheman/components";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Switch from "@mui/material/Switch";
import Markdown from "react-markdown";

function SwitchWithIconsPage() {
  return (
    <main>
      <h1>SwitchWithIcons</h1>
      <Markdown>
        The `SwitchWithIcons` component builds upon the Material UI switch by allowing you to pass
        in your own icons to show when it's checked and unchecked. Although in theory, Material UI
        already allows this... it's not really that good! I mean, just look at this garbage!
      </Markdown>
      <ReactPlayground
        code="<Switch checkedIcon={<ArrowLeft />} icon={<ArrowRight />}/>"
        scope={{ Switch, ArrowLeft, ArrowRight }}
      />
      <Markdown>
        Like, what on Earth is this?! Where's the nice little circle thing that a switch should just
        have by default?! Why is the switch body so small?! Why is the icon positioning just wrong?!
        What is this trash?!
      </Markdown>
      <Markdown>
        With the `SwitchWithIcons` component, on the other hand, the icon naturally appears in a
        circle for you already, so it's a lot nicer to use out-of-the-box. It works more or less the
        same as the Material UI implementation, but a few important details to note.
      </Markdown>
      <Markdown>
        First of all, the props are named differently to be clearer. The `icon` prop is renamed to
        `uncheckedIcon` since it's the icon that appears when the icon is unchecked. Second of all,
        you pass the icons in without the surrounding brackets. That is, you pass in the component
        directly rather than the resolved element.
      </Markdown>
      <ReactPlayground
        code="<SwitchWithIcons checkedIcon={ArrowLeft} uncheckedIcon={ArrowRight} />"
        scope={{ SwitchWithIcons, ArrowLeft, ArrowRight }}
      />
      <Markdown>
        If you want to pass your own style props to the icons, use the `checkedIconStyles` and
        `uncheckedIconStyles` props, like so:
      </Markdown>
      <ReactPlayground
        code={`
          <SwitchWithIcons
            checkedIcon={ArrowLeft}
            checkedIconStyles={{ color: "red" }}
            uncheckedIcon={ArrowRight}
            uncheckedIconStyles={{ color: "royalblue" }}
          />
          `}
        scope={{ SwitchWithIcons, ArrowLeft, ArrowRight }}
      />
      <Markdown>
        Aside from that, it behaves exactly the same as a Material UI switch (but better). You can
        pass any other valid Material UI `Switch` props to `SwitchWithIcons` should you need to
        customise the switch more yourself.
      </Markdown>
      <ReactPlayground
        code={`
          <SwitchWithIcons
            checkedIcon={ArrowLeft}
            checkedIconStyles={{ color: "red" }}
            uncheckedIcon={ArrowRight}
            uncheckedIconStyles={{ color: "royalblue" }}
            color="success" // Renders a green colour for the switch when checked (color on a Material UI Switch component is theme-dependent)
          />
          `}
        scope={{ SwitchWithIcons, ArrowLeft, ArrowRight }}
      />
    </main>
  );
}

export default SwitchWithIconsPage;
