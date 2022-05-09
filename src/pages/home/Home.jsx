import Featured from '../../components/featured/Featured'
import { Cummunity } from '../../components/featuredCumun/Cummunity'
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertylist/PropertyList'
import './Home.css'


function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeText">
          <h1 className="homeTitle">Conheça o Brasil</h1>
          <p className="homeSubTitle">Estes destinos incríveis têm muito a oferecer</p>
        </div>
        <PropertyList />
        <div className="homeText">
          <h1 className="homeTitle">Casas e apartamentos que os hóspedes amam</h1>
        </div>
        <FeaturedProperties />
        <div className="homeText">
          <h1 className="homeTitle">Conecte-se com outros viajantes</h1>
        </div>
        <Cummunity />
        <MailList />
        <div className="mailAnnunncent">
          <button>Anuncie sua Propriedade</button>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home