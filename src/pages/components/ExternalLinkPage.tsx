import { ExternalLink, InternalLink, ReactPlayground } from "@alextheman/components";
import Markdown from "react-markdown";

function ExternalLinkPage() {
  return (
    <main>
      <h1>ExternalLink</h1>
      <Markdown>
        The `ExternalLink` component combines the styling of the Material UI Link component with the
        functionality of a regular anchor tag. Similarly to `InternalLink`, it saves you from
        constantly having to keep passing in the component every time, but the difference here is
        that this is to be used for **External links only**. That is, links that navigate away from
        the main page.
      </Markdown>
      <br />
      <ReactPlayground
        code={`
                    <ExternalLink href="https://github.com/AlexMan123456/components">
                        This link navigates to the GitHub repository for the components package.
                    </ExternalLink>
                    `}
        scope={{ ExternalLink }}
      />
      <br />
      <Markdown>
        Please note that internal links are not supported with this component. You can try, but
        nothing will happen if you click the link.
      </Markdown>
      <br />
      <ReactPlayground
        code={`
                    <ExternalLink to="/components/you-may-not-enter">
                        This link will give you up, let you down, run around and desert you if you try using it as an internal link.
                    </ExternalLink>
                    `}
        scope={{ ExternalLink, InternalLink }}
      />
      <br />
      <Markdown
        components={{
          a: ({ href, children }) => {
            return <InternalLink to={href ?? ""}>{children}</InternalLink>;
          },
        }}
      >
        If you do want to use an external link with the same styling, please use the
        [InternalLink](/components/internal-link) component instead
      </Markdown>
    </main>
  );
}

export default ExternalLinkPage;
