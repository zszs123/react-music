import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { HYAlbumCoverWrapper } from "./style";

export default memo(function HYAlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props;

  return (
    <HYAlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="img-content">
        <img src={info.picUrl}></img>
        <NavLink to="/" className="cover image_cover">
          {info.name}
        </NavLink>
      </div>
      <div className="name text-nowrap">{info.name}</div>
      <div className="artist text-nowrap">{info.artist.name}</div>
    </HYAlbumCoverWrapper>
  );
});
