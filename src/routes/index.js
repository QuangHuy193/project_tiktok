//layout
import { HeaderOnlyLayout } from "~/components/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";

//không đăng nhập vẫn xem được
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/following",
    component: Following,
  },

  {
    path: "/following",
    component: Following,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnlyLayout,
  },
];

//phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
