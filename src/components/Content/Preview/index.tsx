import React from 'react';


export default function Preview() {
    return (
        <section className="bg-[url('components/Content/Preview/background.jpg')] bg-no-repeat bg-cover">
            <div className="pt-32 pb-16 md:w-full lg:w-3/4 xl:w-1/2 text-center whitespace-normal mx-auto">
                <p className="pb-7 text-white md:text-3xl sm:text-3xl font-medium">
                    We are here to provide communication for people of all nationalities, countries and
                    religions. Only a conversation can lead to agreement.<br/>
                </p>
                <button
                    className="mb-2 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-companyBlue-100 text-companyBlue-600 hover:bg-companyBlue-150 py-3 px-4 leading-tight text-xl"
                    type="button" data-bs-target="#contact">
                    <a href="#Contact">
                        Contact Us
                    </a>
                </button>
            </div>
        </section>
    );
}

