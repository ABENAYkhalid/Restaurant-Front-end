import Header from "../components/Header"
import Footer from"../components/Footer";
import SignInModal from "./SignInModal";
function Home(){ 
    return(
    <div class ="container-fuid" className="App">
        <div class="row">
            <SignInModal />
        </div>
        <div class="row ">
            <Footer/>
        </div>
    </div>
    );
}

export default Home 
