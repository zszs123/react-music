import React, { memo } from "react";

import { PlayCircleOutlined, CustomerServiceOutlined } from "@ant-design/icons";

import { HYSongsCoverWrapper } from "./style";

export default memo(function HYSongsCover(props) {
  const { picUrl, name, playCount } = props.info;
  return (
    <HYSongsCoverWrapper>
      <img src={picUrl}></img>
      <div className="cover sprite_covor">
        <div className="info sprite_covor">
          <div>
            <CustomerServiceOutlined />
            &nbsp;
            {playCount}
          </div>
          <PlayCircleOutlined />
        </div>
      </div>
      <div className="cover-bottom">{name}</div>
    </HYSongsCoverWrapper>
  );
});
