// utils/emailService.js
import emailjs from "@emailjs/browser";

// Initialize EmailJS (call this once in your app, e.g., in layout or main component)
export const initEmailJS = () => {
  // Replace these with your actual EmailJS credentials
  emailjs.init("y_T0ZBSV6anLtUmA6");
};

export const sendContactForm = async (formData) => {
  const templateParams = {
    from_name: formData.fullName,
    from_email: formData.email,
    phone_number: formData.phone,
    message: formData.message,
    to_name: "Phoneix Ghostwritting", // Your business/recipient name
    to_email: "mfs.solutions2025@gmail.com", // Your business email
    reply_to: formData.email,
    date: new Date().toLocaleString(),
  };

  try {
    const response = await emailjs.send(
      "service_tc3dvas", // EmailJS Service ID
      "template_l2c4d0z", // EmailJS Template ID
      templateParams
    );

    return { success: true, data: response };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};
