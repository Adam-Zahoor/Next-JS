import Image from "next/image"
import MyPic from "@/MyPic.jpg"


export default function Body() {
    return(
    <div className="picAndInfo">

        <div className="Info">

        <p className="para1">Hello, My name is Adam Minhas</p>
        
        <br />
        
        <p className="para2">I am 21 years old and a student of the Governor Sindh IT Initiative. I possess a little bit of experience  in HTML, CSS and JavaScript. Got the knowledge of TypeScript from this Initiative. Alhamdulillah got 90 Percentile in the First Quarter Quiz. I am really looking forward to do more hardwork in the upcoming tests that will come.</p>

        </div>

        <div className="pic">
            <Image src={MyPic} alt=""/>
        </div>
    </div>
    )
}