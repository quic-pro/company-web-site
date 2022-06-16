import React from 'react';


export default class Projects extends React.Component {
    render() {
        return (
            <section id="Projects" className="px-2 clean-block features">
                <div className="container mx-auto sm:px-4 py-2">
                    <div className="block-heading">
                        <h2 className="text-textBlue text-3xl font-medium text-center py-9">Projects</h2>
                    </div>
                    <div className="flex flex-wrap  justify-center">
                        <div className="md:w-2/5 pr-4 pl-4 feature-box"><i className="icon-star icon"/>
                            <h4 className="font-bold text-xl py-2 pt-5">Cryptography</h4>
                            <p className="text-sm">Development of technical solutions in the field of
                                cryptography<br/></p>
                        </div>
                        <div className="md:w-2/5 pr-4 pl-4 feature-box"><i className="icon-pencil icon"/>
                            <h4 className="font-bold text-xl py-2 pt-5">Transmission security</h4>
                            <p className="text-sm">Establishment of the defended and channels of communication<br/>
                            </p>
                        </div>
                        <div className="md:w-2/5 pr-4 pl-4 feature-box"><i className="icon-screen-smartphone icon"/>
                            <h4 className="font-bold text-xl py-2 pt-10">Blockchain</h4>
                            <p className="text-sm">Implementation of projects related to blockchain and NFT<br/></p>
                        </div>
                        <div className="md:w-2/5 pr-4 pl-4 feature-box"><i className="icon-refresh icon"/>
                            <h4 className="font-bold text-xl py-2 pt-10">Metaverses</h4>
                            <p className="text-sm"> Combining real world and metaverses through digital
                                technological introduction&nbsp;&nbsp;<br/></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
