import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Carousel } from "antd";
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import { getTopBannerAction } from "../../store/actionCreaters";
import { TopBannerWrapper } from "./style";

function HYTopBanner() {
  const topBanners = useSelector(
    (state) => state.get("recommend").get("topBanners"),
    shallowEqual
  );

  const [bgImg, setBgImg] = useState("");

  const dispatch = useDispatch();
  // console.log(topBanners);
  const carouselRef = useRef();

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const beforeChange = useCallback((from, to) =>
    setBgImg(topBanners[to].imageUrl)
  );

  return (
    <TopBannerWrapper bgImg={bgImg}>
      <div className="banner wrap-v2">
        <Carousel
          effect="fade"
          className="banner-carousel"
          autoplay
          ref={carouselRef}
          beforeChange={beforeChange}
        >
          {topBanners.map((item, index) => (
            <img src={item.imageUrl} key={item.imageUrl}></img>
          ))}
        </Carousel>
        <a href="https://music.163.com/#/download"></a>
        <button
          className="banner-control left"
          onClick={() => carouselRef.current.prev()}
        >
          <LeftOutlined className="control-icon" />
        </button>
        <button
          className="banner-control right"
          onClick={() => carouselRef.current.next()}
        >
          <RightOutlined className="control-icon" />
        </button>
      </div>
    </TopBannerWrapper>
  );
}

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

export default memo(HYTopBanner);
