// modals/ContactModal.jsx
"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useModal } from "@/context/ModalContext";
import { ChevronRightIcon, X } from "lucide-react";
import { NonShadowButton } from "./ShadowButton";
import { capitalizeAll } from "@/lib/helpers";

export default function ContactModal() {
  const { isOpen, closeModal, modalType } = useModal();

  // Only render if this modal type is active
  if (modalType !== "contact") return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform  rounded-2xl relative bg-white shadow-xl transition-all ">
                <div className="flex items-center justify-between p-6 pb-0  ">
                  <button
                    type="button"
                    className="shadow-xl border-[3] border-accent-primary text-gray-400 hover:text-gray-500 focus:outline-none absolute -top-2 -right-5 bg-white rounded-full w-14 h-14 z-60"
                    onClick={closeModal}
                  >
                    <div className="translate-x-[25%]">
                      <X size={20} />
                    </div>
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-[28px] font-semibold leading-6 text-gray-900 uppercase border-l-8 border-l-accent-primary py-2 px-5"
                  >
                    We Are Here To Help!
                  </Dialog.Title>
                </div>
                <p className="px-10 font-poppins text-[14px] py-2">
                  Providing you the perfect solution for your book writing and
                  publishing needs. Let's work together and unlock doors to
                  success.
                </p>
                <div className="p-6">
                  {/* Fixed contact form content */}
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name*"
                      className="w-full p-3 border rounded-lg"
                    />
                    <input
                      type="email"
                      placeholder="Email Address*"
                      className="w-full p-3 border rounded-lg"
                    />
                    <input
                      type="number"
                      placeholder="Phone Number*"
                      className="w-full p-3 border rounded-lg"
                    />
                    <textarea
                      placeholder="Message*"
                      className="w-full p-3 border rounded-lg"
                      rows="4"
                    />
                    <div className="flex justify-center items-center">
                      <button
                        className={`flex items-center rounded-lg  border transition-all duration-200 ease-in-out font-cabin gap-x-1 font-bold w-full justify-center py-[15px] text-2xl`}
                        style={{
                          boxShadow: `4px 4px 0px 0px black`,
                          color: "white",
                          backgroundColor: "#f5441b",
                          borderColor: "#142f53",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.boxShadow = "none";

                          e.target.style.backgroundColor = "#173f73";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.boxShadow = `4px 4px 0px 0px black`;
                          e.target.style.color = "#fff";
                          e.target.style.backgroundColor = "#f5441b";
                        }}
                      >
                        {capitalizeAll("submit")}
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
