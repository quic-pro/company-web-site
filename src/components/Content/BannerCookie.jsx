import React from 'react'



export default class BannerCookie extends React.Component {
  render() {
    return (
      <div className="fixed left-0 bottom-0 right-0 px-4 pt-2 pb-4 md:py-2 bg-companyBlue-500 z-10 border-t border-blue-700 text-center flex flex-col-reverse md:flex-row items-center justify-center text-white" id="cookie-consent">
        Cookies help to deliver this service. By using this site, you agree to this site s use of cookies.
        <div className="cursor-pointer px-6 pt-2 pb-4 md:px-0 md:pt-0 md:pb-0" data-behavior="accept-cookie-consent">
          <button className="md:mb-0 ml-0 md:ml-4 px-3 py-1 border-companyBlue-600 rounded-lg bg-white text-companyBlue-600">Okay</button>
        </div>
      </div>
    );
  }
}