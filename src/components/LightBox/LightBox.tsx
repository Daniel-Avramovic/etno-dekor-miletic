import { CloseCircleOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import React, { FC, useState } from "react";
import "./LightBox.scss"

interface Props {
  imgs: string[]
  setIsOpen: Function
  name: string
}

enum Direction {
  NEXT = "next",
  PREV = "prev"
}

const LigthBox: FC<Props> = ({ imgs, setIsOpen, name }): React.ReactElement => {

  const [imgPosition, setImgPostion] = useState(0);

  const onChangeImg = (direction: string): void => {
    if (direction === Direction.NEXT && imgPosition !== imgs.length - 1) {
      setImgPostion(imgPosition + 1)
    } if (direction === Direction.PREV && imgPosition) {
      setImgPostion(imgPosition - 1)
    }
  }


  return (
    <div className="ligth-box-container">
      {!!imgs.length && <div className="light-box-content">
        <img src={process.env.PUBLIC_URL + imgs[imgPosition]} />
        <strong>{name}</strong>
        <CloseCircleOutlined
          role="button"
          onClick={() => setIsOpen(false)}
        />
        <RightCircleOutlined
        className={imgPosition === imgs.length - 1 ? "disabled-arow" : ""}
          role="button"
          onClick={() => onChangeImg(Direction.NEXT)}
        />
        <LeftCircleOutlined
         className={imgPosition === 0 ? "disabled-arow" : ""}
          role="button"
          onClick={() => onChangeImg(Direction.PREV)}
        />
      </div>}
    </div>
  );
};

export default LigthBox;