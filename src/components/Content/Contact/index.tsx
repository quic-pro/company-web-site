import axios from 'axios';
import {ChangeEvent, useState} from 'react';
import {BsInfoCircle} from 'react-icons/bs';

export default function Contact() {

    const urlApi = 'https://api.quic.pro';
    const emailRegExp = /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isValidationCheck, setIsValidationCheck] = useState<boolean | null>(null);

    const handlerChangePostData = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: (newValue: string) => void) => {
        setState(event.target.value);
    };

    const handlerPostForm = () => {
        if (!validationCheck()) {
            setIsValidationCheck(false);
            return;
        }
        axios.post(`${urlApi}/site-form`, {name, email, message}, {headers: {'Content-Type': 'application/json'}})
            .then(console.log)
            .catch(console.error);
    };

    const validationCheck = () => {
        if (name.length < 3) {
            return false;
        }
        if (!emailRegExp.test(email)) {
            return false;
        }

        setIsValidationCheck(true);
        return true;
    };
    return (
        <section id="Contact" className="bg-companyBlue-100">
            <div className="container py-20">
                <div className="bg-white p-10 max-w-lg mx-auto shadow-lg shadow-gray-400/30">
                    <p className="text-companyBlue-600 text-3xl font-medium text-center">Contact us</p>
                    {isValidationCheck !== true
                        ? <div>
                            <div className="">
                                {isValidationCheck === false
                                    ? <div
                                        className="bg-errorRed-100 border-l-4 border-errorRed-200 text-errorRed-200 p-4 my-4"
                                        role="alert">
                                        <p className="font-bold">ERROR</p>
                                        <p>Please fill the correct name and email fields.</p>
                                    </div>
                                    : ''
                                }
                            </div>
                            <div className="mt-5 mb-3">
                                <input
                                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                    name="name" placeholder="Name" value={name}
                                    onChange={(event) => handlerChangePostData(event, setName)}/>
                            </div>
                            <div className="mb-3">
                                <input
                                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded "
                                    name="email" placeholder="Email" value={email}
                                    onChange={(event) => handlerChangePostData(event, setEmail)}/>
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="block appearance-none max-h-32 w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                    name="message" placeholder="Message" rows={14} value={message}
                                    onChange={(event) => handlerChangePostData(event, setMessage)}/>
                            </div>
                            <div className="mt-6 mb-3">
                                <button
                                    className="mb-2 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-companyBlue-100 text-companyBlue-600 hover:bg-companyBlue-150 py-3 px-4 leading-tight text-xl"
                                    type="button"
                                    onClick={handlerPostForm}>
                                    Send
                                </button>
                            </div>
                        </div>
                        : <div
                            className="flex flex-row items-center bg-companyBlue-600 text-white text-sm font-bold px-4 py-3 my-4"
                            role="alert">
                            <BsInfoCircle className=" w-10 mx-2"/>
                            <p className="grow">Message sent.</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
