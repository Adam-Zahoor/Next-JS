import Header from "@/components/header";
import Footer from "@/components/footer";

export default function contact() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <br />
            <div>
            <p className="email"><b>Email:  </b>adamzahoor18@gmail.com</p> 
            <br />
            <p className="githubProfile"><b>Github Profile:   </b><a href="https://github.com/Adam-Zahoor"><u>Click here</u></a></p>
            </div>
            <br />
            <div>
                <Footer/>
            </div>
        </div>
    )
}