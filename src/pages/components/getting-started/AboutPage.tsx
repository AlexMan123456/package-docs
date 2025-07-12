import { ExternalLink, InternalLink } from "@alextheman/components";

function AboutPage() {
  return (
    <section>
      <h1>
        About{" "}
        <ExternalLink href={"https://github.com/AlexMan123456/components"}>
          @alextheman/components
        </ExternalLink>
      </h1>
      <p>
        This is a components library created by me,{" "}
        <ExternalLink href="https://github.com/AlexMan123456">
          AlexTheMan
        </ExternalLink>
        . It stores a few general-purpose components that are generally used
        across most of my projects and packages them into a single library that
        can be installed and used across all of them.
      </p>
      <p>
        It can be used in any project that mainly uses React, React Router DOM,
        and Material UI as the tech stack. To get started, visit the{" "}
        <InternalLink to="/components/installation">
          Installation instructions page
        </InternalLink>
        .
      </p>
    </section>
  );
}

export default AboutPage;
