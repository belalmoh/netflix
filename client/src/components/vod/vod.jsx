import {
    Add,
    PlayArrow,
    ThumbDownAltOutlined,
    ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./vod.scss";
// listItem.jsx in the tutorial
const Vod = ({ index }) => {
    const [isHovered, setisHovered] = useState(false);
    const trailer = "https://www.w3schools.com/html/mov_bbb.mp4";
    return (
        <div
            className="listItem"
            onMouseEnter={() => {
                setisHovered(true);
            }}
            onMouseLeave={() => {
                setisHovered(false);
            }}
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        >
            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop/>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className={"icon"}/>
                            <Add className={"icon"}/>
                            <ThumbUpAltOutlined className={"icon"}/>
                            <ThumbDownAltOutlined className={"icon"}/>
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 minutes</span>
                            <span className="ageLimit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Vod;
