import HYDiscover from "@/pages/discover";
import Recommend from "../pages/discover/c-pages/recommend";
import Ranking from "../pages/discover/c-pages/ranking";
import Songs from "../pages/discover/c-pages/songs";
import Djradio from "../pages/discover/c-pages/djradio";
import Artist from "../pages/discover/c-pages/artist";
import HYAlbum from "../pages/discover/c-pages/album";

import HYFriend from "@/pages/friend";
import HYMine from "@/pages/mine";
import React from "react";
import { Redirect } from "react-router-dom";

// const HYDiscover = React.lazy(() => import("@/pages/discover"));
// const HYRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
// const HYRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
// const HYSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
// const HYDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
// const HYArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
// const HYAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
// const HYPlayer = React.lazy(_ => import("../pages/player"));

// const HYFriend = React.lazy(_ => import("../pages/friend"));
// const HYMine = React.lazy(_ => import("../pages/mine"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    // exact: true,  若有子路由则不能使用完全匹配
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path: "/discover/ranking",
        component: Ranking,
      },
      {
        path: "/discover/songs",
        component: Songs,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: Djradio,
      },
      {
        path: "/discover/artist",
        component: Artist,
      },
      {
        path: "/discover/album",
        component: HYAlbum,
      },
      // {
      //   path: "/discover/player",
      //   component: HYPlayer,
      // },
    ],
  },
  {
    path: "/mine",
    component: HYMine,
  },
  {
    path: "/friend",
    component: HYFriend,
  },

];

export default routes;
