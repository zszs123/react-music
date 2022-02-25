import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Button, Slider, Message, message } from "antd";
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  CaretRightOutlined,
  PlaySquareOutlined,
  PaperClipOutlined,
  PauseOutlined,
  ControlOutlined,
} from "@ant-design/icons";

import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";
import {
  getSongDetailAction,
  changeSequenceAction,
  changePlaySongAction,
  changeCurrentLyricIndexAction,
} from "../store/actionCreators";

import { HYAppPlayBarWrapper } from "./style";
import { set } from "immutable";

message.config({
  // top: 100,
  duration: 0,
  maxCount: 1,
  // rtl: true,
  // prefixCls: 'my-message',
});

export default memo(function HYAppPlayBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHandChange, setisHandChange] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const { currentSong, currentLyricIndex, currentLyrics } = useSelector(
    (state) => ({
      currentSong: state.get("player").get("currentSong"),
      currentLyricIndex: state.get("player").get("currentLyricIndex"),
      currentLyrics: state.get("player").get("currentLyrics"),
    }),
    shallowEqual
  );
  console.log(currentSong)
  let currentLyric = "";
  const showDuration = formatDate(parseInt(currentSong.dt), "mm:ss");
  const showCurrentTime = formatDate(currentTime * 1000, "mm:ss");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(audioRef);
    audioRef.current.src = getPlaySong(currentSong.id);
    // audioRef.current.play()
    // audioRef.current.play().then(res => {
    //   setIsPlaying(true);
    // }).catch(err => {
    //   setIsPlaying(false);
    // });
  }, [currentSong]);

  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(436514312));
  }, [dispatch]);

  const audioPlay = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const prevSong = useCallback((tag) => {
    dispatch(changePlaySongAction(tag));
    setIsPlaying(false);
  }, []);

  const nextSong = useCallback((tag) => {
    dispatch(changePlaySongAction(tag));
    setIsPlaying(false);
  }, []);

  const handleMusicEnded = useCallback((e) => {
    setIsPlaying(false);
    audioRef.current.currentTime = 0;
    console.log(e);
  }, []);

  const sliderChange = (value) => {
    
    setCurrentTime(value);
    setisHandChange(true);
  };

  const sliderAfterChange = useCallback((value) => {
    setisHandChange(false);
    console.log(isHandChange,value)
    audioRef.current.currentTime = value;
  }, []);

  const timeUpdate = useCallback(
    (e) => {
      console.log(isHandChange,e.target.currentTime)
      if (!isHandChange) setCurrentTime(parseInt(e.target.currentTime));

      for (let i in currentLyrics) {
        i = i - 0;
        if (
          e.target.currentTime >= currentLyrics[i].time &&
          (i === currentLyrics.length - 1 ||
            e.target.currentTime < currentLyrics[i + 1].time)
        ) {
          currentLyric = currentLyrics[i].content;
          message.open({
            key: "lyric",
            content: currentLyric,
            className: "lyric-class",
          });
          break;
        }
      }
    },
    [currentTime,isHandChange]
  );

  return (
    <HYAppPlayBarWrapper className="sprite_player">
      <div className="player-bar wrap-v2">
        <div className="play-control">
          <Button
            shape="circle"
            size="small"
            ghost
            danger
            onClick={() => prevSong(-1)}
            icon={<StepBackwardOutlined />}
          />
          <Button
            shape="circle"
            ghost
            danger
            icon={isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
            onClick={() => audioPlay()}
          />
          <Button
            shape="circle"
            size="small"
            ghost
            danger
            onClick={() => nextSong(-1)}
            icon={<StepForwardOutlined />}
          />
        </div>
        <div className="play-progress">
          <img src={currentSong.al.picUrl}></img>
          <div className="progress-info">
            <div className="info-top">
              {currentSong.name}&nbsp;
              <PlaySquareOutlined />
              &nbsp;&nbsp;&nbsp;&nbsp; {currentSong.ar[0].name}
              &nbsp;&nbsp;&nbsp;
              <PaperClipOutlined />
            </div>
            <div className="info-bottom">
              <Slider
                max={parseInt(currentSong.dt / 1000)}
                value={currentTime}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <span className="play-time">
                {showCurrentTime}/{showDuration}
              </span>
            </div>
          </div>
        </div>
        <div className="song-do">222</div>
        <div className="song-list">
          <a>
            <ControlOutlined />
          </a>
          <a className="song-list-count">100</a>
        </div>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={(e) => handleMusicEnded(e)}
      />
    </HYAppPlayBarWrapper>
  );
});
