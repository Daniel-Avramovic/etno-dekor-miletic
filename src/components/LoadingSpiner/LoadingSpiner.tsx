import React, {FC} from "react";
import "./LoadingSpiner.scss"

const LoadingSpiner: FC = (): React.ReactElement => {

    return (<div className="loading-spiner-container"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>)
}

export default LoadingSpiner