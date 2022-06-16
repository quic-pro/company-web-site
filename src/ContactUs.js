function ContactUs() {
    return (
        <div class="pt-12">
            {/* <main class="page landing-page" style={{ paddingTop: '0rem' }}> */}
            {/* Background Image */}
            <section class="bg-no-repeat bg-[url('img/image1.jpg')] bg-cover bg-mainBlue opacity-80" style={{ minHeight: '386px', color: 'rgba(9, 162, 255, 0.85)' }}>
                <div class="w-1/2 text-center whitespace-normal mx-auto	">
                    <h2 class=" py-7 text-white text-3xl font-medium">
                        We are here to provide communication for people of all nationalities, countries and religions. Only a conversation can lead to agreement.<br />
                    </h2>
                    <button class="ьinline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-gray-100 text-gray-800 hover:bg-gray-200 py-3 px-4 leading-tight text-xl" type="button" data-bs-target="#contactus">
                        <a href="#contactus" style={{ color: '#0d6efd', textDecoration: 'none' }}>
                            Contact Us
                        </a>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default ContactUs;

// color: 'rgba(9, 162, 255, 0.85)',  backgroundImage: 'url("img/image1.jpg")',