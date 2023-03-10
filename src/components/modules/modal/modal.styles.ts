import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/breakPoints/responsiveBreakPoints";

interface StyleTypes {
  isOpen?: boolean;
  showBGAnimation?: boolean;
  showModalOpenAnimation?: boolean;
  mobileDefaultStyles?: { width?: string; height?: string };
  onAnimation?: boolean;
  hideCloseButton?: boolean;
}

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  transition: all 0.3s ease-out;

  ${(props) =>
    props.isOpen && {
      backgroundColor: "rgba(0, 0, 0, .6)",
      zIndex: 999,
    }}

  // 배경 애니메이션 설정시 배경에 대한 transition 추가
  transition: ${(props: StyleTypes) => !props.showBGAnimation && "unset"};

  transition: ${(props: StyleTypes) =>
    props.showModalOpenAnimation && "z-index .3s ease-out"};

  transition: ${(props: StyleTypes) =>
    props.showModalOpenAnimation &&
    props.showBGAnimation &&
    "all .3s ease-out"};
`;

export const Items = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;

  @media ${breakPoints.mobile} {
    width: 80% !important;
    height: 70% !important;

    ${(props: StyleTypes) =>
      props.mobileDefaultStyles && {
        width: `${props.mobileDefaultStyles.width} !important`,
        height: `${props.mobileDefaultStyles.height} !important`,
      }}
  }
`;

export const Layout = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .oepn-modal-animation {
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
  }

  @media ${breakPoints.mobile} {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const Content = styled.div`
  border-radius: 10px;
  position: absolute;
  background-color: white;
  width: 0%;
  height: 0%;
  top: 50%;
  left: 50%;
  /* padding: 1rem; */
  opacity: 0;
  overflow: auto;

  ${(props: StyleTypes) =>
    props.isOpen && {
      position: "relative",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      opacity: 1,
      padding: "1rem",
    }}

  // 모달 오픈 이벤트를 설정했을 경우
  ${(props) =>
    props.showModalOpenAnimation && {
      transition: "all .3s ease-out",
    }};
`;

export const CloseButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: -30px;
  right: 0;
  opacity: 0;

  ${(props: StyleTypes) =>
    props.isOpen && {
      opacity: 1,
    }};

  ${(props) =>
    props.onAnimation && {
      transition: "all .3s ease-out",
    }};

  ${(props) =>
    props.hideCloseButton && {
      display: "none",
    }};

  .cmm-modal-close-ment {
    color: white;
    margin-right: 6px;
  }
`;

export const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  :after,
  :before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: white;
    cursor: pointer;
  }

  :after {
    transform: rotate(45deg);
  }

  :before {
    transform: rotate(-45deg);
  }
`;
