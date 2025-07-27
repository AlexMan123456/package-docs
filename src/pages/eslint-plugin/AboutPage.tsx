import { ExternalLink, InternalLink } from "@alextheman/components";

function AboutPage() {
  return (
    <section>
      <h1>
        About{" "}
        <ExternalLink href={"https://github.com/AlexMan123456/eslint-plugin"}>
          @alextheman/eslint-plugin
        </ExternalLink>
      </h1>
      <p>
        This is an ESLint plugin library created by me,{" "}
        <ExternalLink href="https://github.com/AlexMan123456">
          AlexTheMan
        </ExternalLink>
        . It contains a few of my own custom rules that I use to enforce certain
        conventions for consistency across my projects. It also contains a few
        base ESLint configs that I can just drop in to all of my projects,
        again, for consistency. Any projects that then might need their own
        rules enabled/disabled for whatever reason can do so by extending the
        base configs.
      </p>
      <p>
        To get started, visit the{" "}
        <InternalLink to="/eslint-plugin/installation">
          Installation instructions page
        </InternalLink>
        .
      </p>
    </section>
  );
}

export default AboutPage;
