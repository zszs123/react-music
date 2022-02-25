import styled from "styled-components";

export const TopBannerWrapper = styled.div`
  background: url(${(props) => props.bgImg + "?imageView&blur=40x20"}) center
    center/6000px;

  .banner {
    display: flex;
    position: relative;
    height: 270px;

    .banner-carousel {
      height: 270px;
      width: 730px;

      .imgs {
        height: 100%;
        color: #fff;
        textalign: center;
        background: #364d79;
      }
    }

    a {
      flex: 1;
      background: url(${require("@/assets/img/download.png")});
    }

    .banner-control {
      position: absolute;
      align-self: center;
      padding: 0;
      height: 63px;
      background-color: transparent;

      :hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .control-icon {
        color: white;
        font-size: 35px;
      }

      &.left {
        left: -68px;
      }
  
      &.right {
        right: -68px;
      }
    }
  }
`;
