"use client"
import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import SectionTitle from "../Common/SectionTitle";
import { BarLoader } from 'react-spinners';
import Link from "next/link";
import Modal from "../Modal";

const Contact = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false)

  const texts = [
    { text: 'Processing Request', spinner: <BarLoader className="text-dark dark:text-white" /> },
  ];

  const [displayText, setDisplayText] = useState(texts[0]);

  function RenderContact() {

    setCopied(false)

    let currentIndex = 0;

    function displayNextText() {
      if (currentIndex < texts.length) {
        setLoading(true);
        setDisplayText(texts[currentIndex]);
        currentIndex++;

        setTimeout(() => {
          setLoading(false);
          displayNextText();
        }, 3000);
      }
    };

    displayNextText();
  };

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true)
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const phone = '+254759610553'

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Call Us Today"
          paragraph="We'd love to see you grow"
          center
        />
        <div className="flex flex-col items-center justify-center pb-5 py-5 mb-5 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button
            onClick={() => { RenderContact(); setModalVisible(true) }}
            className="inline-block rounded-sm my-5 bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
          >
            Get Number
          </button>
          <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
            <>
              {loading ? (
                <div className="flex flex-col pt-5 items-center justify-center bg-white dark:bg-black w-full h-full rounded-md">
                  <p>{displayText.text}</p>
                  <div className="mt-2">
                    {displayText.spinner}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col pt-5 items-center justify-center bg-white dark:bg-black w-full h-full rounded-md">
                  <h1 className="absolute right-5 top-5 cursor-pointer text-base p-5"
                    onClick={() => setModalVisible(false)} >X</h1>
                  <h1 className="font-bold text-center text-xl text-black dark:text-white tracking-wide">{phone}</h1>
                  <button className={`${copied ? 'bg-[#136207]' : 'bg-primary'} mt-4 shadow-submit dark:shadow-submit-dark rounded-full px-5 py-4 text-base font-medium text-white duration-300`}
                    onClick={() => copyToClipboard(phone)}>
                    <p>{copied ? "Text Copied" : "Copy to clipboard"}</p>
                  </button>
                </div>
              )}
            </>
          </Modal>
          <Link
            href="/"
            className="rounded-sm bg-primary my-5 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Send Email
          </Link>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Or Send a Quick Message
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you via the contact address you choose.
                Choose either an email address or a phone number
              </p>
              <form action="https://formsubmit.co/a8e59a9c3959435d8a376bc8e85ee915" method="POST">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text" name="Name"
                        placeholder="Enter your name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Contact Address
                      </label>
                      <input
                        type="text" name="Email or Phone"
                        placeholder="Enter email or phone"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Message
                      </label>
                      <textarea
                        name="Quick Message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Submit Quick Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
