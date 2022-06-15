import photo1 from './img/image5.jpg';



function Team() {
    return (
        <div>
            <section id="team" class="clean-block about-us">
                <div class="container mx-auto sm:px-4">
                    <div class="block-heading">
                        <h2 class="text-teal-500">Team</h2>
                        <p>The team of professionals in their fields&nbsp;<br /></p>
                    </div>
                    <div class="flex flex-wrap  justify-center">
                        <div class="sm:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
                            <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 text-center clean-card">
                                <img Name="w-full rounded rounded-t w-full block" alt="team1" src={photo1} />
                                <div class="flex-auto p-6 info">
                                    <h4 class="mb-3">Egor Zudin</h4>
                                    <p class="mb-0">СЕО, blockchain entrepreneur&nbsp;</p>
                                    <div class="icons">
                                        <a href="https://www.facebook.com/egzudin/">
                                            <i class="icon-social-facebook" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/egor-zuidn/">
                                            <i class="icon-social-linkedin" />
                                        </a>
                                        <a href="https://github.com/verificatorrus">
                                            <i class="icon-social-github" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sm:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
                            <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 text-center clean-card">
                                <img class="w-full rounded rounded-t w-full block" alt="team2" src={photo1} />
                                <div class="flex-auto p-6 info">
                                    <h4 class="mb-3">Aleksandr Rakhlenko</h4>
                                    <p class="mb-0">Project - manager, planning and monitoring of the objectives specialist&nbsp;&nbsp;<br /></p>
                                    <div class="icons">
                                        <a href="https://www.facebook.com/aleksandr.rakhlenko/">
                                            <i Name="icon-social-facebook" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/aleksandr-rakhlenko-1b3479233/">
                                            <i Name="icon-social-linkedin" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team;