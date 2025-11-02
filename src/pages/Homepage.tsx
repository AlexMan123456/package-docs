import { ListItemInternalLink } from "@alextheman/components";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

function Homepage() {
  return (
    <section>
      <h1>Welcome to the documentation for AlexTheMan's packages</h1>
      <p>Click on one of the items below to go to the corresponding page:</p>
      <List>
        <ListItemInternalLink to="/components">@alextheman/components</ListItemInternalLink>
        <ListItemButton>@alextheman/utility</ListItemButton>
        <ListItemInternalLink to="/eslint-plugin">@alextheman/eslint-plugin</ListItemInternalLink>
      </List>
    </section>
  );
}

export default Homepage;
