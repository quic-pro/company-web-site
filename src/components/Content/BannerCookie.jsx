import React from 'react'



export default class BannerCookie extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isAccept: false };
  }

  render() {
    return (
      <div>
      {!this.state.isAccept?
          <div className="fixed left-0 bottom-0 right-0 px-4 pt-2 pb-4 md:py-2 bg-companyBlue-500 z-10 border-t border-blue-700 text-center flex flex-col-reverse md:flex-row items-center justify-center text-white" id="cookie-consent">
            This website uses &nbsp; <a className="underline decoration-solid" href="https://quic-pro.github.io/cookie-and-privacy-policy/"> cookies </a> &nbsp; to ensure you get the best experience on our website.
            <div className="flex flex-row">
              <div className="cursor-pointer px-6 pt-2 pb-4 md:px-0 md:pt-0 md:pb-0" data-behavior="decline-cookie-consent">
                <button className="md:mb-0 ml-0 md:ml-4 px-3 py-1 border-companyBlue-600 rounded-lg bg-white text-companyBlue-600 text-xl">
                  <a href="https://www.google.com/"> Decline </a>
                </button>
              </div>
              <div className="cursor-pointer px-6 pt-2 pb-4 md:px-0 md:pt-0 md:pb-0" data-behavior="accept-cookie-consent">
                <button className="md:mb-0 ml-0 md:ml-4 px-3 py-1 border-companyBlue-600 rounded-lg bg-white text-companyBlue-600 text-xl"
                  onClick={() => this.setState({isAccept:true})}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
      :''
      }
      </div>
    );
  }
}
