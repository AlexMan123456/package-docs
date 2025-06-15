import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <section>
      <h1>Welcome to the documentation for AlexTheMan's packages</h1>
      <p>Click on one of the items below to go to the corresponding page:</p>
      <List>
        <ListItemButton component={Link} to="/components">
          @alextheman/components
        </ListItemButton>
        <ListItemButton>@alextheman/utility</ListItemButton>
        <ListItemButton>Dropcore</ListItemButton>
      </List>
    </section>
  );
}

export default Homepage;
