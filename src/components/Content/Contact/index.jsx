import React from 'react';
import axios from 'axios';

const urlApi = "https://api.quic.pro";


export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '', email: '', message: '' };
    }

    handleChange = (event) =>{
         this.setState( {[event.target.name]: event.target.value });
    }

    handleClick = () => {
        axios.post(`${urlApi}/site-form`, this.state, {headers: {'Content-Type': 'application/json'}})
        .then(console.log)
        .catch(console.error);
    }


    render() {
        return (
            <section id="Contact" className="bg-companyBlue-100">
                <div className="container py-20">
                    <form method="post" className="bg-white p-10 max-w-lg mx-auto shadow-lg shadow-gray-400/30">
                        <p className="text-companyBlue-600 text-3xl font-medium text-center">Contact us</p>
                        <div className="mt-5 mb-3">
                            <input
                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="mb-3">
                            <input
                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded "
                                type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                            {/* <small className="block mt-1 text-red-600">Please enter a correct email address. border-red-700
                            </small> */}
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="block appearance-none max-h-32 w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                name="message" placeholder="Message" rows={14} value={this.state.message} onChange={this.handleChange}/>
                        </div>
                        <div className="mt-6 mb-3">
                            <button
                                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-3 px-7 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
                                type="button"
                                onClick={this.handleClick}>
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
