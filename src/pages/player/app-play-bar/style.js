import styled from "styled-components";

export const HYAppPlayBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .player-bar {
    height: 100%;
    display: flex;
    align-items: center;

    .play-control {
      width: 137px;
      padding-top: 5px;
      vertical-align: middle;

      Button {
        margin-right: 12px;
      }
    }

    .play-progress {
      width: 630px;
      padding-top: 3px;
      display: flex;
      align-items: center;

      img {
        width: 33px;
        height: 33px;
        border-radius: 5px;
        background-color: gray;
      }

      .progress-info {
        color: #cccccc;
        flex: 1;
        font-size: 12px;

        .info-top {
          padding-left: 20px;
        }

        .info-bottom {
          padding-left: 15px;
          display: flex;
          justify-content: space-between;

          .ant-slider {
            width: 493px;
            margin: 0;
    
            .ant-slider-rail {
              height: 9px;
              background: url(${require("@/assets/img/progress_bar.png")}) right 0;
            }
    
            .ant-slider-track {
              height: 9px;
              background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
            }

            .ant-slider-handle {
              width: 22px;
              height: 24px;
              border: none;
              margin-top: -7px;
              background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
            }
        }
      }
    }
  }

  .song-do {
    width: 87px;
  }

  .song-list {
    display: flex;
    align-items: center;
    margin-top: 6px;
    width: 126px;
    font-size: 22px;

    :hover a {
      color: #cccccc;
    }

    .song-list-count {
      text-align: center;
      line-height: 16px;
      color: gray;
      font-size: 12px;
      height: 16px;
      width: 35px;
      border-radius: 0 8px 8px 0;
      background-color: black;
    }
  }
`;
