import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import { FEATURED_TYPES } from "../../constants";

const Title = ({type}) => {
    const titleText = type === FEATURED_TYPES.MOVIES ? "Movies" : "TV Show";
    if(type) {
        return (
            <div className="category">
                <span>{titleText}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                </select>
            </div>
        );
    }

    return <></>;
};

const Featured = ({type}) => {
    return (
        <div className="featured">
            <Title type={type} />
            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />

            <div className="info">
                <img
                    src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus tempore ducimus tempora, ea aliquid, ipsum
                    cupiditate repellendus voluptatem accusamus ipsam numquam
                    laborum dolore architecto doloremque soluta, facilis dolorem
                    illo quidem?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
