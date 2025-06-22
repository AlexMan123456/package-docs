import {
  ExternalLink,
  InternalLink,
  ReactPlayground,
} from "@alextheman/components";
import Markdown from "react-markdown";

function InternalLinkPage() {
  return (
    <main>
      <h1>InternalLink</h1>
      <Markdown>
        {
          "The InternalLink component is a fairly simple one. It just combines the styling of Material UI's Link component with the functionality of React Router DOM's Link component. Usually you'd have to do `<MUILink component={ReactDOMLink} to={to}/>` throughout your app, but this component takes care of that extra step and immediately assumes you're using React Router DOM as the main router for your entire project."
        }
      </Markdown>
      <Markdown>
        The use case is very simple. Just pass in the `to` property and you'll
        be good to go.
      </Markdown>
      <br />
      <ReactPlayground
        code={`
                <InternalLink to="/components/internal-link/test">
                    Pay close attention to the navigation bar in your browser. You should see that it's navigated to the link specified in the to prop.
                </InternalLink>
                `}
        scope={{ InternalLink }}
      />
      <br />
      <Markdown>
        Please note that this is for **Internal Links only**. External href
        links are not supported with this component. You can try, but nothing
        will happen if you click the link.
      </Markdown>
      <br />
      <ReactPlayground
        code={`
            <InternalLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                This link will give you up, let you down, run around and desert you if you try using it as an external link.
            </InternalLink>
            `}
        scope={{ InternalLink, ExternalLink }}
      />
      <br />
      <Markdown
        components={{
          a: ({ href, children }) => {
            return <InternalLink to={href ?? ""}>{children}</InternalLink>;
          },
        }}
      >
        If you do want to use an external link with the same styling, please use
        the [ExternalLink](/components/external-link) component instead
      </Markdown>
    </main>
  );
}

export default InternalLinkPage;
