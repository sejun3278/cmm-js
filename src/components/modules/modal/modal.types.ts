import { MouseEvent, MutableRefObject } from "react";

export interface ModalPropsType {
  children?: React.ReactNode;
  // 렌더될 하위 컴포넌트, 디폴트 값으로 설정되며 Component가 있으면 Component를 렌더한다.
  styles?: {
    width?: string;
    height?: string;
  };
  // 내부 콘텐츠 내용 스타일 지정
  mobileDefaultStyles?: {
    width?: string;
    height?: string;
  };
  // 모바일 환경에서 적용될 스타일 지정 (767px 이하부터 적용)
  show: boolean;
  // ** 모달 실행 스위스 변수, true일 경우 실행되며 false일 경우 종료된다. (default : false)
  onCloseModal: () => void;
  // ** 모달을 종료시키는 함수
  closeMent?: string;
  // 닫기 버튼 앞으로 출력될 문자열
  hideCloseButton?: boolean;
  // 모달 닫기 아이콘 감추기, true일 경우 제거 (default : false)
  closeButtonSize?: string | number;
  // 모달 닫기 아이콘에 대한 width, height 값 지정
  offAutoClose?: boolean;
  // 모달 외의 영역을 클릭했을 때 모달이 종료되지 않게 설정 (default : false)
  showBGAnimation?: boolean;
  // 모달 실행시 배경화면 애니메이션 작동 (default : false)
  showModalOpenAnimation?: boolean;
  // 모달 실행시 모달창 오픈 애니메이션 작동 (default : false)
}

export interface ModalPropsUITypes {
  _ref?: MutableRefObject<HTMLDivElement>;
  _contentsRef?: MutableRefObject<HTMLDivElement>;
  focusContents?: () => void;
}
