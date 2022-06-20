import React from 'react';


export default class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-bottomBlack">
                <div className="container sm:px-4 mx-auto text-center py-10">
                    <div className="flex flex-row flex-wrap text-white content-center place-content-center">
                        <div className="sm:w-1/4 px-4 py-2">
                            <h5 className="font-semibold py-2">Address</h5>
                            <ul>
                                <li><a className="text-sm">651 N Broad St Suite 206<br />Middletown, DE 19709 US<br /></a></li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 pr-4 pl-4 py-2">
                            <h5 className="font-semibold py-2">Phone</h5>
                            <ul>
                                <li><a className="text-sm" href="tel:+13028838305">+1 (302) 883 83-05<br /></a></li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 pr-4 pl-4 py-2">
                            <h5 className="font-semibold py-2">E-mail</h5>
                            <ul>
                                <li><a href="mailto:info@quic.pro">info@quic.pro<br /></a></li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 pr-4 pl-4 py-2">
                            <h5 className="font-semibold py-2">Legal</h5>
                            <ul>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright bg-botBottomBlack py-3">
                    <p className="text-white text-center">© 2022 QUIC-PRO INC.</p>
                </div>
            </footer>
        );
    }
}
