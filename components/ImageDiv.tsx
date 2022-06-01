import Image from "next/image";

function ImageDiv() {
    return( 
        <div className="whyworkharddiv">
        <div className="image_div">
            <Image 
            src="/christina.png"
            layout="fill"
            />
        </div>
        <div className="below_image_div">
            <h1>Why work Hard</h1>
            <h2>When ezSlips Can work Smart For you</h2>
            <p>And the setup takes less time than what it would take for you to read this! After all, your time is valuable.</p>
        </div>
        </div>

    )
}

export default ImageDiv;