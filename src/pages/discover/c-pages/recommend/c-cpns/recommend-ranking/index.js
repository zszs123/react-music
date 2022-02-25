import React, { memo, useEffect } from "react";

import ThemeHeaderRcm from "@/components/theme-header-rcm";
import HYTopRanking from "@/components/top-ranking";
import { getRankingAction } from "../../store/actionCreaters";
import { HYRecommendRankingWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export default memo(function HYRecommendRanking() {
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRankingAction(0));
    dispatch(getRankingAction(2));
    dispatch(getRankingAction(3));
  }, [dispatch]);

  return (
    <HYRecommendRankingWrapper>
      <ThemeHeaderRcm title="榜单" />
      <div className="ranking-content">
        <HYTopRanking info={upRanking}/>
        <HYTopRanking info={newRanking}/>
        <HYTopRanking info={originRanking}/>
      </div>
    </HYRecommendRankingWrapper>
  );
});
