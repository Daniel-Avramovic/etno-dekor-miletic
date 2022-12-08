import { CloseCircleOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import React, { FC, useEffect, useState } from "react";
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner";
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

  const [imgPosition, setImgPostion] = useState<number>(0);
  const [imgLoading, setImgLoading] = useState<boolean>(true)

  const onChangeImg = (direction: string): void => {
    if (direction === Direction.NEXT && imgPosition !== imgs.length - 1) {
      setImgLoading(true)
      setImgPostion(imgPosition + 1)
    } if (direction === Direction.PREV && imgPosition) {
      setImgLoading(true)
      setImgPostion(imgPosition - 1)
    }
  }


  return (
    <div className="ligth-box-container">
      {!!imgs.length && <div className="light-box-content">
        {imgLoading && <LoadingSpiner/>}
        <img src={process.env.PUBLIC_URL + imgs[imgPosition]} onLoad={() => setImgLoading(false)}/>
        <strong>{name}</strong>
        <CloseCircleOutlined 
          role="button"
          onClick={() => {setIsOpen(false); setImgLoading(false)}}
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