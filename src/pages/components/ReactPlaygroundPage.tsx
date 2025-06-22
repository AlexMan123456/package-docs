import { ExternalLink, ReactPlayground } from "@alextheman/components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function PlaygroundPage() {
  function sayHello(name: string): string {
    return `Hello, ${name}`;
  }
  const myName = "Alex";
  return (
    <main>
      <h1>ReactPlayground</h1>
      <Markdown>
        The ReactPlayground component is useful for live code examples. In fact,
        this is the very component that I'm using to showcase all the examples
        throughout this site!
      </Markdown>
      <Markdown
        components={{
          a: ({ href, children }) => {
            return <ExternalLink href={href ?? ""}>{children}</ExternalLink>;
          },
        }}
      >
        This component uses [React
        Live](https://nearform.com/open-source/react-live/)'s live provider
        components, but packages them together into a single component for ease
        of use. To use it, pass in a valid JSX or TSX string into the code
        property.
      </Markdown>
      <br />
      <ReactPlayground
        code={`<ReactPlayground code={"<p>Hello World</p>"} />`}
        scope={{ ReactPlayground }}
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
      <ReactPlayground
        code={`
                    <ReactPlayground
                        code={"<p>{sayHello(myName)}</p>"}
                        scope={{
                            sayHello: (name: string): string => {return \`Hello, \${name}!\`},
                            myName: "Alex"
                        }}
                    />
                    `}
        scope={{ ReactPlayground }}
      />
      <br />
      <Markdown>
        {"In general, you probably wouldn't always pass the scope properties in like that. It's more common to instead have the functions and varables declared elsewhere in your code:\n" +
          "```\n" +
          `${sayHello.toString()}\n` +
          'const myName = "Alex"\n' +
          "```\n" +
          "and then pass them directly into scope, like so:"}
      </Markdown>
      <br />
      <ReactPlayground
        code={`
                    <ReactPlayground
                        code={"<p>{sayHello(myName)}</p>"}
                        scope={{ sayHello, myName }}
                    />
                    `}
        scope={{ ReactPlayground, sayHello, myName }}
      />
      <br />
      <Markdown>
        If you want to pass in more than just JSX or TSX, you can use the
        noInline prop, and then from the playground itself, call the `render()`
        function to decide which component to render. For example, if you
        actually want to include that external function in the example itself,
        or even if you want to use a hook like useState.
      </Markdown>
      <br />
      <ReactPlayground
        code={`
          <ReactPlayground
            code={
            \`
              function addNumbers(first: number, second: number): number {
                return first + second;
              }
              
              function Adder() {
                const [firstNumber, setFirstNumber] = useState<number>(0);
                const [secondNumber, setSecondNumber] = useState<number>(0);
                const [result, setResult] = useState<number>(0);
                const [buttonClicked, setButtonClicked] = useState<boolean>(false)

                useEffect(() => {
                  setResult(addNumbers(parseInt(firstNumber), parseInt(secondNumber)))
                }, [buttonClicked])

                return (
                  <>
                    <br/>
                    <TextField
                      label="First number"
                      value={firstNumber}
                      type="number"
                      onChange={(event) => {setFirstNumber(event.target.value)}}
                    />
                    +
                    <TextField
                      label="Second number"
                      value={secondNumber}
                      type="number"
                      onChange={(event) => {setSecondNumber(event.target.value)}}
                    />
                    <Typography>
                      = {result}
                    </Typography>
                    <Button onClick={() => {
                      setButtonClicked((previous) => {return !previous})
                    }}>
                      Calculate
                    </Button>
                  </>
                )
              }
              render(<Adder/>)
            \`
          }
          noInline
          scope={{useState, useEffect, TextField, Typography, Button}}
          />
          `}
        scope={{
          ReactPlayground,
          useState,
          useEffect,
          TextField,
          Typography,
          Button,
        }}
      />
      <br />
      <Markdown>
        You can customise the display of the live preview should you want to:
      </Markdown>
      <br />
      <ReactPlayground
        code={`
        <ReactPlayground
            code={"<p>Hello World</p>"}
            previewStyles={{
              color: "green"
            }}
        />
        `}
        scope={{ ReactPlayground }}
      />
      <br />
      <Markdown>
        Making all these examples was absolutely nuts, by the way, because as
        you can see, I had to put a Playground inside of a Playground. Just to
        give you a taste, here's what a Playground nested inside a Playground
        really looks like, but also bear in mind I had to triply-nest this
        Playground just to let you see how cursed it really goes!
      </Markdown>
      <br />
      <ReactPlayground
        code={`
                    <ReactPlayground
                        code={"<ReactPlayground code={\\"<p>Hello World</p>\\"} />"}
                        scope={{ ReactPlayground }}
                    />
                    `}
        scope={{ ReactPlayground }}
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
