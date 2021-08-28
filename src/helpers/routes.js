import Users from "Pages/Users/Users";
import { PeopleAlt, PhotoAlbum } from "@material-ui/icons";

const users = {
  path: "/users",
  component: Users,
  icon: PeopleAlt,
  name: "Users",
};

const photos = {
  path: "/photos",
  component: null,
  icon: PhotoAlbum,
  name: "Photos",
};

const routes = [users, photos];

export default routes;
