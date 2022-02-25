import React, { memo, useCallback } from "react";

import { useDispatch } from "react-redux";

import {
  PlayCircleOutlined,
  PlusOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";

import { HYTopRankingWrapper } from "./style";
import { getSongDetailAction } from "../../pages/player/store/actionCreators";

export default memo(function HYTopRanking(props) {
  // console.log(props);
  const { coverImgUrl, tracks = [], name } = props.info;

  const dispatch = useDispatch();

  const playMusic = useCallback((id) => {
    dispatch(getSongDetailAction(id));
  }, []);

  return (
    <HYTopRankingWrapper>
      <div className="ranking-top">
        <div className="img-content">
          <img src={coverImgUrl}></img>
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="top-info">
          <a href="/todo">
            <h3>{name}</h3>
          </a>
          <div>
            <PlayCircleOutlined />
            <FolderAddOutlined />
          </div>
        </div>
      </div>
      {tracks.slice(0, 10).map((item, index) => {
        // console.log(item);
        return (
          <div className="ranking-list" key={item.name}>
            <span className="list-span">{index + 1}</span>
            <a className="list-a">
              <span className="text-nowrap span-name">{item.name}</span>
              <div>
                <PlayCircleOutlined
                  onClick={() => {
                    playMusic(item.id);
                  }}
                />
                <PlusOutlined />
                <FolderAddOutlined />
              </div>
            </a>
          </div>
        );
      })}
      <a className="ranking-bottom">{"查看全部>"}</a>
    </HYTopRankingWrapper>
  );
});
