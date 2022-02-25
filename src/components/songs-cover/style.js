import styled from "styled-components";

export const HYSongsCoverWrapper = styled.div`
  width: 140px;
  margin: 20px 0;
  position: relative;

  img {
    width: 140px;
  }

  .cover {
    position: absolute;
    top: 0;
    width: 140px;
    height: 140px;
    background-position: 0 0;

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 0;
      color: #ccc;
      padding: 0 10px;
      height: 27px;
      width: 140px;
      background-position: 0 -537px;
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }
`;
