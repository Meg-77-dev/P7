import '../styles/HomeBanner.css'


function HomeBanner(props) {
    return (
    <div className="Banner">
        <h1 className="title-banner">{props.textImage ? props.textImage : ""}</h1>
        <img className='Kasa-banner' src={props.sourceImage} alt="banner-kasa"/>
        </div>
    )
}

export default HomeBanner