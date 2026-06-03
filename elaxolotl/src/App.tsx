import logo from './assets/logo.png'
import './App.css'
import locationImg from './assets/location.png'
import menuPicture from './assets/menupicture.jpg'
import elaxolotlfood1 from './assets/elaxolotlfood1.jpg'
import elaxolotlfood2 from './assets/elaxolotlfood2.jpg'

function App() {


  return (
    <>
      <section className="landing">
        <img src={logo} className="main-logo" alt="El Axolotl Logo" />

        <h1>El Axolotl</h1>

        <h2 className="subtitle">Mexican - Latin Cuisine</h2>
        <h2 className="address">1597 NY-112 Port Jefferson Station, NY 11776 </h2>
        <div>
        <a href="tel:6315090667" className="phone">
          <h2>Phone: (631) 509-0667</h2>
        </a>

        <a className='instagram-link'
          href="https://www.instagram.com/elaxolotl_resturant"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Instagram: elaxolotl_resturant</h2>
        </a>
      </div>


         <div className="button-container">

          <a
          href="https://maps.google.com/?q=1597+NY-112+Port+Jefferson+Station+NY+11776"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-box"
          style={{
            backgroundImage: `url(${locationImg})`,
            backgroundSize: '112%',
            backgroundPosition: 'center'
          }}
        >
          Location</a>

          <a
          href="/menu"
          className="menu-box"
          style={{
            backgroundImage: `url(${menuPicture})`,
            backgroundSize: '115%',
            backgroundPosition: 'center',
          }}
        >
          Menu
        </a>

          <div className="menu-box order-box">
            Order Online
            <br />
            (Coming Soon!)
          </div>

        </div>
         <div className="homepage-images">
          <img
            src={elaxolotlfood1}
            alt="El Axolotl Food"
            className="homepage-image"
          />

          <img
            src={elaxolotlfood2}
            alt="El Axolotl Food"
            className="homepage-image"
          />
        </div>
        
        <div className="about">
          <p>
            El Axolotl is a family owned restaurant located in Port Jefferson Station, New York that serves authentic Mexican and Latin cuisine with homemade taste.
          </p>
        </div>

      </section>

    </>
  )
}

export default App