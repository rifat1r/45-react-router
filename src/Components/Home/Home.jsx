import Header from "../Header/Header";
import {Outlet, useLocation, useNavigation} from "react-router-dom"
import Footer from "../Footer/Footer";
const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
              navigation.state === 'loading'? 
              <h1>Loading...</h1> :
              <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;