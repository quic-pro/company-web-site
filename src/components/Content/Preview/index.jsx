import React from 'react';


export default class Preview extends React.Component {
    render() {
        return (
            <section
                id="Preview" className="pt-12 bg-no-repeat bg-[url('assets/img/Preview/background.jpg')] bg-cover bg-mainBlue opacity-80"
                style={{minHeight: '386px', color: 'rgba(9, 162, 255, 0.85)'}}>
                <div className="ph:w-full lg:w-1/2 text-center whitespace-normal mx-auto">
                    <h2 className="py-7 text-white text-3xl ph:text-xl font-medium">
                        We are here to provide communication for people of all nationalities, countries and
                        religions. Only a conversation can lead to agreement.<br/>
                    </h2>
                    <button
                        className="mb-2 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-gray-100 text-gray-800 hover:bg-gray-200 py-3 px-4 leading-tight text-xl"
                        type="button" data-bs-target="#contact">
                        <a href="#Contact" style={{color: '#0d6efd', textDecoration: 'none'}}>
                            Contact Us
                        </a>
                    </button>
                </div>
            </section>
        );
    }
}
