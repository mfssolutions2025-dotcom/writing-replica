// modals/ContactModal.jsx
"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useModal } from "@/context/ModalContext";
import { ChevronRightIcon, X } from "lucide-react";
import { NonShadowButton } from "./ShadowButton";
import { capitalizeAll } from "@/lib/helpers";
import { initEmailJS, sendContactForm } from "@/lib/emailService";

export default function ContactModal() {
  useEffect(() => {
    initEmailJS();
  }, []);
  const { isOpen, closeModal, modalType } = useModal();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  // Only render if this modal type is active
  if (modalType !== "contact") return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      const result = await sendContactForm(formData);

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form on success
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
        // Auto-close modal after 3 seconds on success
        setTimeout(() => {
          closeModal();
          setSubmitStatus({ success: false, message: "" });
        }, 3000);
      } else {
        setSubmitStatus({
          success: false,
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="fixed inset-0 bg-black/50" />
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
              <Dialog.Panel className="w-full max-w-2xl transform rounded-2xl relative bg-white shadow-xl transition-all">
                <div className="flex items-center justify-between p-6 pb-0">
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

                {/* Success/Error Message */}
                {submitStatus.message && (
                  <div
                    className={`px-6 py-3 mx-6 mt-2 rounded-lg ${
                      submitStatus.success
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="p-6">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name*"
                      className="w-full p-3 border rounded-lg"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      className="w-full p-3 border rounded-lg"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      className="w-full p-3 border rounded-lg"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Message*"
                      className="w-full p-3 border rounded-lg"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="flex justify-center items-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`flex items-center rounded-lg border transition-all duration-200 ease-in-out font-cabin gap-x-1 font-bold w-full justify-center py-[15px] text-2xl ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                        style={{
                          boxShadow: isSubmitting
                            ? "none"
                            : `4px 4px 0px 0px black`,
                          color: "white",
                          backgroundColor: isSubmitting ? "#173f73" : "#f5441b",
                          borderColor: "#142f53",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.target.style.boxShadow = "none";
                            e.target.style.backgroundColor = "#173f73";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.target.style.boxShadow = `4px 4px 0px 0px black`;
                            e.target.style.backgroundColor = "#f5441b";
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          capitalizeAll("submit")
                        )}
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
