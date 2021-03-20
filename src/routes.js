/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import LiveStreaming from "views/LiveStreaming.js";
import UserProfile from "views/UserProfile.js";
import StreamerProfile from "views/StreamerProfile";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/streamer-profile",
    name: "Streamer Profile",
    icon: "tim-icons icon-laptop",
    component: StreamerProfile,
    layout: "/admin",
  },
  {
    path: "/streaming",
    name: "Live Streaming",
    icon: "tim-icons icon-triangle-right-17",
    component: LiveStreaming,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "stuff for development",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
  },
];
export default routes;
