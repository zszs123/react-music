import styled from "styled-components";

export const HYNewAlbumWrapper = styled.div`
  .content {
    height: 186px;
    background-color: #f0f0f0;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;

    .ant-carousel {
      width: 640px;
      height: 186px;
    }

    .page {
      height: 186px;
      display: flex !important;
      justify-content: space-between;
      align-items: center;
    }

    .arrow {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
    }

    .arrow-right {
      background-position: -300px -75px;
    }
  }
`;
