import React, { memo } from "react";
import { renderRoutes } from "react-router-config";

import { discoverMenu } from "@/common/local-data";

import { NavLink } from "react-router-dom";

import { DiscoverWrapper } from "./style";

export default memo(function HYDiscover(props) {
  // console.log(props)
  const routes = props.route.routes
  return (
    <DiscoverWrapper>
      <div className="top">
        <div className="wrap-v1 top-menu">
          {discoverMenu.map((item, index) => (
            <NavLink to={item.link} key={item.title} className="item">
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      {renderRoutes(routes)}
    </DiscoverWrapper>
    
  );
});
