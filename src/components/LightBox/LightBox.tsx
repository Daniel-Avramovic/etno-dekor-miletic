import { CloseCircleOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import React, { FC, useState } from "react";
import "./LightBox.scss"

interface Props {
  imgs: any[]
  setIsOpen: Function
}

const LigthBox: FC<Props> = ({ imgs, setIsOpen }): React.ReactElement => {

  const [imgPosition, setImgPostion] = useState(0);

  const onChangeImg = (direction: string): void => {
    if (direction === "next") {
      setImgPostion(imgPosition + 1)
    } if (direction === "prev") {
      setImgPostion(imgPosition - 1)
    }
  }


  return (
    <div className="ligth-box">
      <div className="test">
        <img src={process.env.PUBLIC_URL + imgs[imgPosition]} />
        <button
          onClick={() => setIsOpen(false)}><CloseCircleOutlined/></button>

        <button
          disabled={imgPosition === imgs.length  - 1}
          onClick={() => onChangeImg("next")}><RightCircleOutlined/></button>

        <button
          disabled={imgPosition === 0}
          onClick={() => onChangeImg("prev")}><LeftCircleOutlined/></button>
      </div>
    </div>
  );
};

export default LigthBox;