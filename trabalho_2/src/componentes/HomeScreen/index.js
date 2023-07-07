import Footer from "../Footer"
import Header from "../Header"
import NewProducts from "../NewProducts"
import SaleProducts from "../SaleProducts"

const HomeScreen = () => {
    return (
        <div>
            <Header/>
            <NewProducts/>
            <SaleProducts/>
            <Footer/>
        </div>
    )
}

export default HomeScreen