function Bottom() {
    return (
        <div>
            <footer class="page-footer dark bg-bottomBlack">
                <div class="container mx-auto sm:px-4 mx-auto text-center py-5">
                    <div class="flex flex-wrap text-white">
                        <div class="sm:w-1/4 px-4 py-2">
                            <h5 class="font-semibold py-2">Address</h5>
                            <ul>
                                <li><a class="text-sm">651 N Broad St Suite 206<br />Middletown, DE 19709 US<br /></a></li>
                            </ul>
                        </div>
                        <div class="sm:w-1/4 pr-4 pl-4 py-2">
                            <h5 class="font-semibold py-2">Phone</h5>
                            <ul>
                                <li><a class="text-sm" href="tel:+13028838305">+1 (302) 883 83-05<br /></a></li>
                            </ul>
                        </div>
                        <div class="sm:w-1/4 pr-4 pl-4 py-2">
                            <h5 class="font-semibold py-2">E-mail</h5>
                            <ul>
                                <li><a href="mailto:info@quic.pro">info@quic.pro<br /></a></li>
                            </ul>
                        </div>
                        <div class="sm:w-1/4 pr-4 pl-4 py-2">
                            <h5 class="font-semibold py-2">Legal</h5>
                            <ul>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright bg-botBottomBlack">
                    <p class="text-white">© 2022 QUIC-PRO INC.</p>
                </div>
            </footer>
        </div>
    )
}

export default Bottom;