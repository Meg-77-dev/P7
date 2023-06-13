import Imagebanner from '../assets/banniere.jpg'
import HomeBanner from '../components/Banner'
import LocationGrid from '../components/LocationGrid'

function Home() {
  return (
    <>
    <HomeBanner sourceImage={Imagebanner} textImage="Chez vous, partout et ailleurs"/>
    <LocationGrid/>
    </>
  );
}

export default Home;
