import '../App.css';
import loaderImg from "../Assets/Loader.gif";


const Loader =()=>{
    return(
        <img className="loading" width="300" height ="240" src={loaderImg} alt ="Loading images" />
    )
};
    export default Loader;