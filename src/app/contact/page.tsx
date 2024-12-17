export default function Contact() {
    return (
      <div className="p-4 mx-auto max-w-lg bg-white font-[sans-serif] rounded-lg shadow-md">
        <h1 className="text-3xl text-gray-800 font-extrabold text-center">
          Contact Us
        </h1>
        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent focus:outline-blue-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent focus:outline-blue-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent focus:outline-blue-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent focus:outline-blue-500 text-sm pt-3"
            ></textarea>
          </div>
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
  