import Footer from "../Footer"
import Header from "../Header"
import NewProducts from "../NewProducts"
import SaleProducts from "../SaleProducts"
import "./HomeScreen.css"

const HomeScreen = () => {
    return (
        <div>
            <Header/>
            <div className="home">
                <NewProducts/>
                <SaleProducts/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomeScreen