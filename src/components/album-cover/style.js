import styled from "styled-components";

export const HYAlbumCoverWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  width: ${(props) => props.width + "px"};
  font-size: 12px;

  img {
    width: ${(props) => props.size + "px"};
    height: ${(props) => props.size + "px"};
  }

  a {
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    background-position: 0 ${(props) => props.bgp};
    text-indent: -9999px;
  }

  .name {
    color: #000;
  }

  .artist {
    color: #666;
  }
`;
