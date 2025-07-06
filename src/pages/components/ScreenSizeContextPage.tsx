import {
  ReactPlayground,
  ScreenSizeContext,
  ScreenSizeProvider,
} from "@alextheman/components";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import Markdown from "react-markdown";

function ScreenSizeContextPage() {
  return (
    <main>
      <h1>ScreenSizeContext</h1>
      <Markdown>
        `ScreenSizeContext` provides information about the current screen size
        of the window. I know it may feel redundant if you already know about
        the `window` object, but the problem with that in a React context is
        that it's managed by the DOM, and so trying to use it to keep track of
        state updates in something like a `useEffect` will not work. The
        properties provided by this context will give you access to certain
        properties that **can** be used in a stateful way with React.
      </Markdown>
      <Markdown>
        To use this in your code, you will need to wrap the `ScreenSizeProvider`
        component around the part you need it (although you'll often wrap it
        around the entire app). From there, you can use the `ScreenSizeContext`
        context, which gives you access to properties such as: - `windowWidth`:
        Gives you the width of the window in pixels. - `windowHeight`: Gives you
        the height of the window in pixels. - `isLargeScreen`: Gives you a
        boolean that returns true if the `windowWidth` is bigger than 669 pixels
        and `windowHeight`
      </Markdown>
      <ReactPlayground
        code={`
                    function ScreenSizeTest(){
                        const { windowWidth, windowHeight, isLargeScreen } = useContext(ScreenSizeContext)
                        return (
                            <List>
                                <ListItemText primary={\`windowWidth: \${windowWidth}px\`}/>
                                <ListItemText primary={\`windowHeight: \${windowHeight}px\`}/>
                                <ListItemText primary={\`isLargeScreen: \${isLargeScreen}\`}/>
                            </List>
                        )
                    }
                    render(
                        <ScreenSizeProvider>
                            <ScreenSizeTest />
                        </ScreenSizeProvider>
                    )
                    `}
        scope={{
          useContext,
          ScreenSizeContext,
          ScreenSizeProvider,
          List,
          ListItemText,
        }}
        noInline
      />
      <Markdown>
        You could also do something like this, using `window` directly:
      </Markdown>
      <ReactPlayground
        code={`
                    function ScreenSizeTest(){
                        const { windowWidth, windowHeight, isLargeScreen } = useContext(ScreenSizeContext)
                        return (
                            <List>
                                <ListItemText primary={\`windowWidth: \${window.innerWidth}px\`}/>
                                <ListItemText primary={\`windowHeight: \${window.innerHeight}px\`}/>
                                <ListItemText primary={\`isLargeScreen: \${window.innerWidth > 669 && window.innerHeight > 650}\`}/>
                            </List>
                        )
                    }
                    render(
                        <ScreenSizeProvider>
                            <ScreenSizeTest />
                        </ScreenSizeProvider>
                    )
                    `}
        scope={{
          useContext,
          ScreenSizeContext,
          ScreenSizeProvider,
          List,
          ListItemText,
        }}
        noInline
      />
      <Markdown>
        However, if you try resizing the window, you'll notice that the
        information on-screen does not update in the second example. It only
        does in the first example because my `windowWidth` and `windowHeight`
        variables rely on React state. React gets the information from the
        window by means of an event listener, and sets the `windowWidth` and
        `windowHeight` variables when the event listener is triggered. Try
        changing the code above back to windowWidth and windowHeight and see how
        that makes the page react to the screen resizing again.
      </Markdown>
      <Markdown>
        Should you need to set your own conditions for when `isLargeScreen` is
        true or false, you can pass `largeScreenWidth` and `largeScreenHeight`
        to `ScreenSizeProvider`, like so:
      </Markdown>
      <ReactPlayground
        code={`
                    function ScreenSizeTest(){
                        const { windowWidth, windowHeight, isLargeScreen } = useContext(ScreenSizeContext)
                        return (
                            <List>
                                <ListItemText primary={\`windowWidth: \${window.innerWidth}px\`}/>
                                <ListItemText primary={\`windowHeight: \${window.innerHeight}px\`}/>
                                <ListItemText primary={\`isLargeScreen: \${window.innerWidth > 669 && window.innerHeight > 650}\`}/>
                            </List>
                        )
                    }
                    render(
                        <ScreenSizeProvider largeScreenWidth={1710} largeScreenHeight={929}>
                            <ScreenSizeTest />
                        </ScreenSizeProvider>
                    )
                    `}
        scope={{
          useContext,
          ScreenSizeContext,
          ScreenSizeProvider,
          List,
          ListItemText,
        }}
        noInline
      />
    </main>
  );
}

export default ScreenSizeContextPage;
