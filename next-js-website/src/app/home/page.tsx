import Header from "@/components/header";
import HeaderBody from "@/components/header-body";
import Footer from "@/components/footer";

export default function home() {
    return (
        <div className="home-container">
            <div>
                <Header/>
            </div>
            <br />

            <div>
                <HeaderBody/>
            </div>
            <br />

            <div>
                <Footer/>
            </div>
        </div>
    )
}