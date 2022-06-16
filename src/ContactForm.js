function ContactForm() {
    return (
        <div class="px-10">
            <section id="contactus" Name="contact-clean">
                <form method="post">
                    <h2 class="text-textBlue text-3xl font-medium text-center py-9">Contact us</h2>
                    <div class="mb-3">
                        <input class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" type="text" name="name" placeholder="Name" />
                    </div>
                    <div class="mb-3">
                        <input class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded bg-red-700" type="email" name="email" placeholder="Email" />
                        <small className="block mt-1 text-red-600">Please enter a correct email address.
                        </small>
                    </div>
                    <div class="mb-3">
                        <textarea class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" name="message" placeholder="Message" rows={14} defaultValue={""} />
                    </div>
                    <div class="mb-3">
                        <button class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600" type="submit">
                            SEND
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ContactForm;