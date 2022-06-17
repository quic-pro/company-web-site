import { AiOutlineStar } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { GiSmartphone } from 'react-icons/gi';
import { FiRefreshCcw } from 'react-icons/fi';

function Projects() {
    return (
        <div class="px-2">
            <section id="projects" class="clean-block features">
                <div class="container mx-auto sm:px-4 py-2">
                    <div class="block-heading">
                        <h2 class="text-textBlue text-3xl font-medium text-center py-9">Projects </h2>
                    </div>
                    <div class="flex flex-wrap  justify-center">
                        <div class="flex flex-row md:w-2/5 px-4 pt-5 feature-box">
                            <AiOutlineStar class="fill-textBlue box-border h-20 w-20 pr-4" />
                            <div class="grow">
                                <h4 class="font-bold text-xl py-2">Cryptography</h4>
                                <p class="text-sm text-botBottomBlack">Development of technical solutions in the field of cryptography<br /></p>
                            </div>
                        </div>
                        <div class="flex flex-row md:w-2/5 px-4 pt-5 feature-box">
                            <BsPencil class="fill-textBlue box-border h-20 w-20 pr-5" />
                            <div class="grow">
                                <h4 class="font-bold text-xl py-2">Transmission security</h4>
                                <p class="text-sm text-botBottomBlack">Establishment of the defended and channels of communication<br /></p>
                            </div>
                        </div>
                        <div class="flex flex-row md:w-2/5 px-4 pt-5 feature-box">
                            <GiSmartphone class="fill-textBlue box-border h-20 w-20 pr-5" />
                            <div class="grow">
                                <h4 class="font-bold text-xl py-2">Blockchain</h4>
                                <p class="text-sm text-botBottomBlack">Implementation of projects related to blockchain and NFT<br /></p>
                            </div>
                        </div>
                        <div class="flex flex-row md:w-2/5 px-4 pt-5 feature-box">
                            <FiRefreshCcw class="stroke-textBlue box-border h-20 w-20 pr-4" />
                            <div class="grow pl-3">
                                <h4 class="font-bold text-xl py-2">Metaverses</h4>
                                <p class="text-sm text-botBottomBlack"> Combining real world and metaverses through digital technological introduction&nbsp;&nbsp;<br /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;