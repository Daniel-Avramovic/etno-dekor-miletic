import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import "./Footer.scss"

const Footer: FC = (): React.ReactElement => {
    return (
        <footer>
            <span>&#169; Etno Dekor Miletic</span>
            <span>
                <a href="https://www.facebook.com/etnodekormiletic"
                    target="_blank"
                    data-toggle="tooltip" 
                    title="Posetite nas na Facebook-u"
                    ><FacebookOutlined />
                </a>
                <a href="https://instagram.com/etno_dekor_miletic?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    data-toggle="tooltip" 
                    title="Posetite nas na Instagramu"
                    > <InstagramOutlined />
                </a>
            </span>
        </footer>)
}

export default Footer