import { AiOutlineStar } from 'react-icons/ai';
import {BsPencil} from 'react-icons/bs';
import {GiSmartphone} from 'react-icons/gi';
import {FiRefreshCcw} from 'react-icons/fi';

function Projects() {
    return (
        <div class="px-2">
            <section id="projects" class="clean-block features">
                <div class="container mx-auto sm:px-4 py-2">
                    <div class="block-heading">
                        <h2 class="text-textBlue text-3xl font-medium text-center py-9">Projects </h2>
                    </div>
                    <div class="flex flex-wrap  justify-center">
                        <div class="md:w-2/5 pr-4 pl-4 feature-box"><i class="icon-star icon" />
                            <h4 class="font-bold text-xl py-2 pt-5"><AiOutlineStar/>Cryptography</h4>
                            <p class="text-sm">Development of technical solutions in the field of cryptography<br /></p>
                        </div>
                        <div class="md:w-2/5 pr-4 pl-4 feature-box"><i class="icon-pencil icon" />
                            <h4 class="font-bold text-xl py-2 pt-5"><BsPencil/>Transmission security</h4>
                            <p class="text-sm">Establishment of the defended and channels of communication<br /></p>
                        </div>
                        <div class="md:w-2/5 pr-4 pl-4 feature-box"><i class="icon-screen-smartphone icon" />
                            <h4 class="font-bold text-xl py-2 pt-10"><GiSmartphone/>Blockchain</h4>
                            <p class="text-sm">Implementation of projects related to blockchain and NFT<br /></p>
                        </div>
                        <div class="md:w-2/5 pr-4 pl-4 feature-box"><i class="icon-refresh icon" />
                            <h4 class="font-bold text-xl py-2 pt-10"><FiRefreshCcw/>Metaverses</h4>
                            <p class="text-sm"> Combining real world and metaverses through digital technological introduction&nbsp;&nbsp;<br /></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;