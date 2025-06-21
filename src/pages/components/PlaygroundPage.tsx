import { Playground } from "@alextheman/components";
import Markdown from "react-markdown";

function PlaygroundPage() {
  return (
    <main>
      <h1>Playground</h1>
      <Markdown>
        The Playground component is useful for live code examples. In fact, this
        is the very component that I'm using to showcase all the examples
        throughout this site!
      </Markdown>
      <Markdown>
        This component uses React Live's live provider components, but packages
        them together into a single component for ease of use. To use it, pass
        in a valid JSX or TSX string into the code property.
      </Markdown>
      <br />
      <Playground
        code={`<Playground code={"<p>Hello World</p>"} />`}
        scope={{ Playground }}
      />
      <br />
      <Markdown>
        This will provide you with an interactive textbox where you can input
        any valid piece of JSX or TSX code, and see the results of it get
        rendered as you go. The code you pass in is the initial value.
      </Markdown>
      <Markdown>
        Please note that in order for this to work, the code property must be
        *JSX* or *TSX*, rather than pure JavaScript/TypeScript. Anything that
        you can do in the return of a React component is allowed, but regular
        JavaScript will not work.
      </Markdown>
      <Markdown>
        To use this with your own functions and variables, pass them into the
        scope prop, like so:
      </Markdown>
      <br />
      <Playground
        code={`
                    <Playground
                        code={\`<p>{sayHello(myName)}</p>\`}
                        scope={{
                            sayHello: (name: string): string => {return \`Hello, \${name}!\`},
                            myName: "Alex"
                        }}
                    />
                    `}
        scope={{ Playground }}
      />
      <Markdown>
        Making all these examples was absolutely nuts, by the way, because as
        you can see, I had to put a Playground inside of a Playground. Just to
        give you a taste, here's what a Playground nested inside a Playground
        really looks like, but also bear in mind I had to triply-nest this
        Playground just to let you see how cursed it really goes!
      </Markdown>
      <br />
      <Playground
        code={`
                    <Playground
                        code={"<Playground code={\\"<p>Hello World</p>\\"} />"}
                        scope={{ Playground }}
                    />
                    `}
        scope={{ Playground }}
      />
      <br />
      <Markdown>
        I know, triply nesting a playground component like that is VERY cursed
        and it's not what you'd usually do in practice, but you get the idea.
      </Markdown>
    </main>
  );
}

export default PlaygroundPage;
