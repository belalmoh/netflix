import "./home.scss";
import Navbar from "../../components/navbar/navbar";
import Featured from "../../components/featured/featured";
import Carousel from "../../components/carousel/carousel";
import { FEATURED_TYPES } from '../../constants'

const Home = () => {
    return (
        <div className="home">
			<Navbar />
            <Featured type={FEATURED_TYPES.MOVIES}/>
            <Carousel />
            <Carousel />
        </div>
    );
};

export default Home;
