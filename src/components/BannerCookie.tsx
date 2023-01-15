import React, {useState} from 'react'


export default function BannerCookie() {
    const [isAccept, setIsAccept] = useState(localStorage.getItem('cookiesAccepted') === 'true')

    const onClick = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsAccept(true);
    }

    return isAccept && (
        <div
            className="fixed left-0 bottom-0 right-0 px-4 pt-2 pb-4 md:py-2 bg-companyBlue-700 z-10 border-t border-blue-700 text-center flex flex-col-reverse md:flex-row items-center justify-center text-white"
            id="cookie-consent">
            <div className="flex flex-row flex-wrap content-center"><p>This website uses</p>
                &nbsp;<a className="underline decoration-solid"
                         href="https://quic-pro.github.io/cookie-and-privacy-policy/"> cookies </a> &nbsp;
                <p className="grow-0 text-left"> to ensure you get the best experience on our website.</p>
            </div>
            <div className="flex flex-row">
                <div className="px-6 pt-2 pb-4 md:px-0 md:pt-0 md:pb-0" data-behavior="accept-cookie-consent">
                    <button
                        className="md:mb-0 ml-0 md:ml-4 px-3 py-1 border-companyBlue-600 rounded-lg bg-companyBlue-100 text-companyBlue-700 hover:bg-companyBlue-150 text-xl"
                        onClick={onClick}
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
