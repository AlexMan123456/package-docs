import Markdown from "react-markdown";

function InstallationPage() {
  return (
    <section>
      <h1>Installation</h1>
      <p>
        To install this package locally to your project, run the following command in the root of
        your project:
      </p>
      <Markdown>
        {`
        npm install @alextheman/components
        `}
      </Markdown>
      <p>This entire package also relies on you having the following peer dependencies:</p>
      <Markdown>
        {"- @emotion/react: v11.14.0\n" +
          "- @emotion/styled: v11.14.0\n" +
          "- @mui/icons-material: v7.1.1\n" +
          "- @mui/material: v7.1.1\n" +
          "- react: v19.1.0\n" +
          "- react-router-dom: v7.6.2"}
      </Markdown>
      <Markdown>You can also install these into your project using `npm install`.</Markdown>
    </section>
  );
}

export default InstallationPage;
