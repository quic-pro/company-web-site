import React from 'react';


export default class Index extends React.Component {
    render() {
        return (
            <section id="Contact" className="contact-clean bg-companyBlue-100">
                <div className="container py-20">
                    <form method="post" className="bg-white p-10 max-w-lg mx-auto">
                        <h2 className="text-companyBlue text-3xl font-medium text-center py-9">Contact us</h2>
                        <div className="mb-3">
                            <input
                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                type="text" name="name" placeholder="Name"/>
                        </div>
                        <div className="mb-3">
                            <input
                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded bg-red-700"
                                type="email" name="email" placeholder="Email"/>
                            <small className="block mt-1 text-red-600">Please enter a correct email address.
                            </small>
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="block appearance-none max-h-32 w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                name="message" placeholder="Message" rows={14} defaultValue={""}/>
                        </div>
                        <div className="mb-3">
                            <button
                                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-3 px-7 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
                                type="submit">
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
