import Header_data from "./Header_data"

export default function Header() {

    const data = Header_data[0]

    return(
        <div className="header">
            <img src={data.image} alt="" className="header_img" />
            <div className="header_content">
                <img src={data.title_img} alt="" />
                <p>{data.desc}</p>
                <div className="buttons">
                    <button><i className="fa-solid fa-play"></i>Play</button>
                    <button><i className="fa-solid fa-circle-info"></i>More info</button>
                </div>
            </div>
        </div>
    )

}