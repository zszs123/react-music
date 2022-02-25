import React, { memo } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import routers from "@/router";
import store from "./store";

import HYAppHeader from "@/components/app-header";
import HYAppFooter from "@/components/app-footer";
import HYAppPlayBar from "@/pages/player/app-play-bar";
import { HashRouter } from "react-router-dom";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HYAppHeader/>
        {renderRoutes(routers)}
        <HYAppFooter/>
        <HYAppPlayBar/>
      </HashRouter>
    </Provider>
  );
});
