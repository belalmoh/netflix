import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video className="video" autoPlay progress="true" controls src={"https://vod-progressive.akamaized.net/exp=1655371770~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1386%2F7%2F181930123%2F596558977.mp4~hmac=1a59dd2e72d02d06896fd33033e1c4f60ad332bb987fb915db46dd7c98bc796f/vimeo-prod-skyfire-std-us/01/1386/7/181930123/596558977.mp4"}/>
    </div>
  )
}

export default Watch