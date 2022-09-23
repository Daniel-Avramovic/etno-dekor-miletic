import { CloseCircleOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import React, { FC, useState } from "react";
import "./LightBox.scss"

interface Props {
  imgs: string[]
  setIsOpen: Function
}

enum Direction {
  NEXT = "next",
  PREV = "prev"
}

const LigthBox: FC<Props> = ({ imgs, setIsOpen }): React.ReactElement => {

  const [imgPosition, setImgPostion] = useState(0);

  const onChangeImg = (direction: string): void => {
    if (direction === Direction.NEXT) {
      setImgPostion(imgPosition + 1)
    } if (direction === Direction.PREV) {
      setImgPostion(imgPosition - 1)
    }
  }


  return (
    <div className="ligth-box-container">
      <div className="light-box-content">
        <img src={process.env.PUBLIC_URL + imgs[imgPosition]}/>
        <button
          onClick={() => setIsOpen(false)}><CloseCircleOutlined/></button>

        <button
          disabled={imgPosition === imgs.length  - 1}
          onClick={() => onChangeImg(Direction.NEXT)}><RightCircleOutlined/></button>

        <button
          disabled={imgPosition === 0}
          onClick={() => onChangeImg(Direction.NEXT)}><LeftCircleOutlined/></button>
      </div>
    </div>
  );
};

export default LigthBox;