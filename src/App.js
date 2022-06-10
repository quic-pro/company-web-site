// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <nav class="relative flex flex-wrap items-center content-between py-3 px-4 text-black  top-0 bg-white bg-gradient clean-navbar" style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem', }}>
        <div class="container mx-auto sm:px-4">
          <a class="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap logo" href="/">
            QUIC-PRO
          </a>
          <button data-bs-toggle="collapse" class="py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded" data-bs-target="#navcol-1">
            <span class="visually-hidden">Toggle navigation</span>
            <span class="px-5 py-1 border border-gray-600 rounded"></span>
          </button>
          <div class="hidden flex-grow items-center" id="navcol-1">
            <ul class="flex flex-wrap list-reset pl-0 mb-0 ms-auto">
              <li class=""><a class="inline-block py-2 px-4 no-underline" href="#aboutus">ABOUT US</a></li>
              <li class=""><a class="inline-block py-2 px-4 no-underline" href="#projects">Projects</a></li>
              <li class=""><a class="inline-block py-2 px-4 no-underline" href="#team">TEAM</a></li>
              <li class=""><a class="inline-block py-2 px-4 no-underline" href="#contactus">CONTACT US</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main class="page landing-page" style={{ paddingTop: '0rem' }}>

        <section class="clean-block clean-hero" style={{ backgroundImage: 'url("assets/img/scenery/image1.jpg?h=8a8726e3975bbd81b495745e96e6982a")', color: 'rgba(9, 162, 255, 0.85)', minHeight: '386px' }}>
          <div class="text">
            <h2>We are here to provide communication for people of all nationalities, countries and religions. Only a conversation can lead to agreement.<br /></h2><button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-gray-100 text-gray-800 hover:bg-gray-200 py-3 px-4 leading-tight text-xl" type="button" data-bs-target="#contactus"><a href="#contactus" style={{ color: '#0d6efd', textDecoration: 'none' }}>Contact Us</a></button>
          </div>
        </section>
        <section id="aboutus" class="clean-block clean-info dark">
          <div class="container mx-auto sm:px-4">
            <div class="block-heading">
              <h2 class="text-teal-500">About Us</h2>
            </div>
            <div class="flex flex-wrap  items-center">
              <div class="md:w-1/2 pr-4 pl-4">
                <img class="max-w-full h-auto border-1 border-gray-200 rounded p-1" alt="img1" src="assets/img/scenery/image2.jpg?h=afe298d199161174001b25940703b51a" />
              </div>
              <div class="md:w-1/2 pr-4 pl-4">
                <div class="getting-started-info">
                  <p>IT - startup, dealing with the projects in blockchain, telecommunications, cryptography and at the intersections of these fields.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" class="clean-block features">
          <div class="container mx-auto sm:px-4">
            <div class="block-heading">
              <h2 class="text-teal-500">Projects</h2>
            </div>
            <div class="flex flex-wrap  justify-center">
              <div class="md:w-2/5 pr-4 pl-4 feature-box"><i class="icon-star icon" />
                <h4>Cryptography</h4>
                <p>Development of technical solutions in the field of cryptography<br /></p>
              </div>
              <div class="md:w-2/5 pr-4 pl-4 feature-box"><i class="icon-pencil icon" />
                <h4>Transmission security</h4>
                <p>Establishment of the defended and channels of communication<br /></p>
              </div>
              <div class="md:w-2/5 pr-4 pl-4 feature-box"><i class="icon-screen-smartphone icon" />
                <h4>Blockchain</h4>
                <p>Implementation of projects related to blockchain and NFT<br /></p>
              </div>
              <div class="md:w-2/5 pr-4 pl-4 feature-box"><i class="icon-refresh icon" />
                <h4>Metaverses</h4>
                <p>Combining real world and metaverses through digital technological introduction&nbsp;&nbsp;<br /></p>
              </div>
            </div>
          </div>
        </section>

        <section id="team" class="clean-block about-us">
          <div class="container mx-auto sm:px-4">
            <div class="block-heading">
              <h2 class="text-teal-500">Team</h2>
              <p>The team of professionals in their fields&nbsp;<br /></p>
            </div>
            <div class="flex flex-wrap  justify-center">
              <div class="sm:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
                <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 text-center clean-card">
                  <img Name="w-full rounded rounded-t w-full block" alt="img2" src="assets/img/avatars/avatar1.jpg?h=47cd51e5675e894d54a96ebec190c800" />
                  <div class="flex-auto p-6 info">
                    <h4 class="mb-3">Egor Zudin</h4>
                    <p class="mb-0">СЕО, blockchain entrepreneur&nbsp;</p>
                    <div class="icons">
                      <a href="https://www.facebook.com/egzudin/">
                        <i class="icon-social-facebook" />
                      </a>
                      <a href="https://www.linkedin.com/in/egor-zuidn/">
                        <i class="icon-social-linkedin" />
                      </a>
                      <a href="https://github.com/verificatorrus">
                        <i class="icon-social-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sm:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
                <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 text-center clean-card"><img className="w-full rounded rounded-t w-full block" src="assets/img/avatars/avatar2.jpg?h=77c2aa40e00337f131a8732a1496eac6" />
                  <div class="flex-auto p-6 info">
                    <h4 class="mb-3">Aleksandr Rakhlenko</h4>
                    <p class="mb-0">Project - manager, planning and monitoring of the objectives specialist&nbsp;&nbsp;<br /></p>
                    <div class="icons">
                      <a href="https://www.facebook.com/aleksandr.rakhlenko/">
                        <i Name="icon-social-facebook" />
                      </a>
                      <a href="https://www.linkedin.com/in/aleksandr-rakhlenko-1b3479233/">
                        <i Name="icon-social-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="contactus" Name="contact-clean">
        <form method="post">
          <h2 class="text-center text-teal-500">Contact us</h2>
          <div class="mb-3">
            <input class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" type="text" name="name" placeholder="Name" />
            </div>
          <div class="mb-3">
            <input class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded bg-red-700" type="email" name="email" placeholder="Email" />
            <small className="block mt-1 text-red-600">Please enter a correct email address.
            </small>
            </div>
          <div class="mb-3">
            <textarea class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" name="message" placeholder="Message" rows={14} defaultValue={""} />
            </div>
          <div class="mb-3">
            <button class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600" type="submit">
              send 
              </button>
              </div>
        </form>
      </section>
      
      <footer class="page-footer dark">
        <div class="container mx-auto sm:px-4">
          <div class="flex flex-wrap ">
            <div class="sm:w-1/4 pr-4 pl-4">
              <h5>Address</h5>
              <ul>
                <li><a>651 N Broad St Suite 206<br />Middletown, DE 19709 US<br /></a></li>
              </ul>
            </div>
            <div class="sm:w-1/4 pr-4 pl-4">
              <h5>Phone</h5>
              <ul>
                <li><a href="tel:+13028838305">+1 (302) 883 83-05<br /></a></li>
              </ul>
            </div>
            <div class="sm:w-1/4 pr-4 pl-4">
              <h5>E-mail</h5>
              <ul>
                <li><a href="mailto:info@quic.pro">info@quic.pro<br /></a></li>
              </ul>
            </div>
            <div class="sm:w-1/4 pr-4 pl-4">
              <h5>Legal</h5>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <p>© 2022 QUIC-PRO INC.</p>
        </div>
      </footer>
    </div>
  );



}

export default App;