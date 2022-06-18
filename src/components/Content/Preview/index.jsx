import React from 'react';


export default class Preview extends React.Component {
    render() {
        return (
            <section className="bg-no-repeat bg-[url('components/Content/Preview/background.jpg')] bg-cover">
                <div className="pt-28 pb-16 md:w-full lg:w-3/4 xl:w-1/2 text-center whitespace-normal mx-auto">
                    <h2 className="pb-7 text-white md:text-3xl sm:text-3xl font-medium">
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
