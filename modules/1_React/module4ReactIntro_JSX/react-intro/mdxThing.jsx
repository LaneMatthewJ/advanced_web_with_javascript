/* @jsx mdx */
const makeShortcode = name =>
  function MDXDefaultShortcode(props) {
    console.warn(
      "Component " +
        name +
        " was not imported, exported, or provided by MDXProvider as global scope"
    );
    return <div {...props} />;
  };
const Button = makeShortcode("Button");
const layoutProps = {};
const MDXLayout = "wrapper";

function MDXContent({ components, ...props }) {
  return (
    <MDXLayout
      {...layoutProps}
      {...props}
      components={components}
      mdxType="MDXLayout"
    >
      <h1>{`Hello, world!`}</h1>
      <Button mdxType="Button">Here is a button</Button>
      jfjfjfjfjjjfjfjfj
    </MDXLayout>
  );
}
MDXContent.isMDXComponent = true;
