import Users from "Pages/Users/Users";
import UserInfo from "Pages/UserInfo/UserInfo";

import { PeopleAlt } from "@material-ui/icons";

const users = {
  path: "/users",
  component: Users,
  icon: PeopleAlt,
  name: "Users",
  show: true,
};

const userInfo = {
  path: "/user/:id",
  component: UserInfo,
  icon: PeopleAlt,
  name: "Users Info",
  show: false,
};

const routes = [users, userInfo];

export default routes;
