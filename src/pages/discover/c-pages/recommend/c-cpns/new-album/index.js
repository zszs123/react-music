import React, { memo, useEffect, useRef } from "react";

import { Carousel } from "antd";

import ThemeHeaderRcm from "@/components/theme-header-rcm";
import AlbumCover from "@/components/album-cover";
import { getNewAlbumsAction } from "../../store/actionCreaters";
import { HYNewAlbumWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export default memo(function HYNewAlbum() {
  const newAblums = useSelector(
    (state) => state.get("recommend").get("newAlbums"),
    shallowEqual
  );

  // console.log(newAblums);

  const pageRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => dispatch(getNewAlbumsAction()), [dispatch]);

  return (
    <HYNewAlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <Carousel dots={false} ref={pageRef}>
          {[0, 1].map((item) => {
            return (
              <div key={item} className="page">
                {newAblums
                  .slice(item * 5, (item + 1) * 5)
                  .map((iten, index) => {
                    return (
                      <AlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    );
                  })}
              </div>
            );
          })}
        </Carousel>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </HYNewAlbumWrapper>
  );
});
