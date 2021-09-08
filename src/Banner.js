import React from 'react'
import "./Banner.css"

function Banner() {

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }


    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            // backgroundImage: `url(https://i.imgur.com/e1hLQ2m.png)`,
            backgroundImage: `url(https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg)`,
            backgroundPosition: "center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                     <button className="banner_button">Play</button>
                     <button className="banner_button"> My List</button>
                </div>
                <h1 className="banner_discription">
                    {truncate(`
                    This is a test description sdlfkslkvn;sknv;sklnvksndvksvlksldkvlskvksnvlksnvlknsvknslvknslkvnslknvsnvklsvkns;lkvn;skjnv;js;jdf.v svj;svsknvknv'wknf/wkv;snvsknvksjvb;bvdjv.jbv;bv;ajd .jbd;vk
                    `,150)}                   
                 </h1>
            </div>

            <div className="banner--fadeButton"/>
        </header>
    )
}

export default Banner
