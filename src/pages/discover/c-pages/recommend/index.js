import React, { memo, useEffect } from "react";

import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import HYNewAlbum from "./c-cpns/new-album";
import HYRecommendRanking from "./c-cpns/recommend-ranking";
import { HYRecommendWrapper } from "./style";

function HYRecommend() {
  return (
    <HYRecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="recommend-left">
          <HotRecommend/>
          <HYNewAlbum/>
          <HYRecommendRanking/>
        </div>
        <div className="recommend-right"></div>
      </div>
    </HYRecommendWrapper>
  );
}

export default memo(HYRecommend);
