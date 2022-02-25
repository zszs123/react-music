import styled from "styled-components";

export const HYTopRankingWrapper = styled.div`
  margin-left: 3px;
  width: 228px;

  .ranking-top {
    display: flex;
    height: 120px;
    padding-top: 20px;
    padding-left: 18px;

    .img-content {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 80px;
      }
    }

    .top-info {
      padding-top: 6px;
      padding-left: 10px;

      h3 {
        font-weight: 800;
        margin-bottom: 10px;
      }

      span {
        font-size: 22px;
        color: gray;
        margin-right: 10px;

        :hover {
          color: black;
        }
      }
    }
  }

  .ranking-list {
    display: flex;
    height: 32px;
    line-height: 32px;

    &:nth-child(-n + 4) list-span {
      color: #c10d0c;
    }

    .list-span {
      width: 35px;
      text-align: center;
      margin-left: 10px;
      font-size: 16px;
    }

    .list-a {
      color: #000;
      width: 180px;
      display: flex;
      justify-content: space-between;

      :hover {
        div {
          display: block;
        }
      }

      .span-name {
        flex: 1;
      }

      div {
        display: none;
        width: 78px;
        font-weight: 800;
        font-size: 16px;
        color: gray;
        span {
          margin-right: 10px;
          :hover {
            color: black;
          }
        }
      }
    }
  }

  .ranking-bottom {
    height: 32px;
    margin-left: 150px;
    line-height: 32px;
  }
`;
