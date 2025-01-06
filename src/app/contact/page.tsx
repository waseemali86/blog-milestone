import React from 'react';

const ContactSection = () => {
 

  return (
    <>
      {/* Contact Section */}
      <section className="max-w-[1450px] mx-auto bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Heading and Paragraph */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-black">Contact With Us</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              For More Information, please check our About page and Services, Any Question or problem please feel free send an Email. 
              Do Not Hesitate! We shall always help you Be stable with us. 
            </p>
          </div>

          {/* Two Columns */}
            <div className="bg-[#7c4ee4] p-8 rounded-lg shadow-md">
              <form className="space-y-6" >
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium ">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@example.com"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium ">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject (optional)"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
      </section>

    </>
  );
};

export default ContactSection;
