import React from 'react';
import axios from 'axios';

export default class Contact extends React.Component {

  urlApi = "https://api.quic.pro";
  emailRegExp = /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/;

  constructor(props) {
    super(props);
    this.state = { postData: { name: '', email: '', message: '', }, isValidationCheck: null, };
  }

  handlerChangePostData = (event) => {
    this.setState(
      (prevState) => {
        prevState.postData[event.target.name] = event.target.value;
        return { prevState };
      }
    )
  };

  handlerPostForm = () => {
    if (!this.validationCheck()) {
      this.setState({ isValidationCheck: false });
      return;
    }
    axios.post(`${this.urlApi}/site-form`, this.state.postData, { headers: { 'Content-Type': 'application/json' } })
      .then(console.log)
      .catch(console.error);
  }

  validationCheck() {
    if (this.state.postData.name?.length < 3) return false;
    if (!this.emailRegExp.test(this.state.postData.email)) return false;

    this.setState({ isValidationCheck: true });
    console.log(this.state);
    return true;
  }

  render() {
    return (
      <section id="Contact" className="bg-companyBlue-100">
        <div className="container py-20">
          <div className="bg-white p-10 max-w-lg mx-auto shadow-lg shadow-gray-400/30">
            <p className="text-companyBlue-600 text-3xl font-medium text-center">Contact us</p>
            {this.state.isValidationCheck !== true ?
              <div>
                <div className="">
                  {this.state.isValidationCheck === false ?
                    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                      <p className="font-bold">Be Warned</p>
                      <p>Something not ideal might be happening.</p>
                    </div>
                    : ''
                  }
                </div>
                <div className="mt-5 mb-3">
                  <input
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    name="name" placeholder="Name" value={this.state.postData.name} onChange={this.handlerChangePostData} />
                </div>
                <div className="mb-3">
                  <input
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded "
                    name="email" placeholder="Email" value={this.state.postData.email} onChange={this.handlerChangePostData} />
                </div>
                <div className="mb-3">
                  <textarea
                    className="block appearance-none max-h-32 w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    name="message" placeholder="Message" rows={14} value={this.state.postData.message} onChange={this.handlerChangePostData} />
                </div>
                <div className="mt-6 mb-3">
                  <button
                    className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-3 px-7 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
                    type="button"
                    onClick={this.handlerPostForm}>
                    SEND
                  </button>
                </div>
              </div>
              :
              "SUCCES!!!!!!!!"
            }
          </div>
        </div>
      </section>
    );
  }
}
