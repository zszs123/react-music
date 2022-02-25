import React, { memo, useEffect } from "react";

import ThemeHeaderRcm from "@/components/theme-header-rcm";
import SongsCover from "@/components/songs-cover";
import { HYHotRecommendWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getHotRecommendsAction } from "../../store/actionCreaters";

export default memo(function HYHotRecommend() {
  const hotRecommends = useSelector(
    (state) => state.get("recommend").get("hotRecommends"),
    shallowEqual
  );

  const dispatch = useDispatch();
  // console.log(hotRecommends);

  useEffect(() => dispatch(getHotRecommendsAction(10)), [dispatch]);

  return (
    <HYHotRecommendWrapper>
      <ThemeHeaderRcm
        title="热门推荐"
        keyWords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      ></ThemeHeaderRcm>
      <div className="img-list">
        {hotRecommends.map((item, index) => (
          <SongsCover info={item} key={item.picUrl} />
        ))}
      </div>
    </HYHotRecommendWrapper>
  );
});
