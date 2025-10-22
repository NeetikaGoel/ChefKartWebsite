import ContactLower from "./ContactLower"
import FAQ from "./faq"


const Contact = () => {
  return (
    <>
    <div>
      <section
  className="text-gray-600 body-font relative"
  style={{
    backgroundImage: "url('https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FRectangle_60_bfb1e0017f_a37ee78af1.webp&w=1920&q=75')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2919.5008336949372!2d77.08036!3d28.422768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19142e78d47b%3A0xde577a7e821cd90!2sChefKart!5e1!3m2!1sen!2sin!4v1761081896424!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" ></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">B-179, Sector 57, near Rail Vihar, Block B, Sushant Lok III, Sector 57, Gurugram, Haryana 122011</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">+918826607205</p>
        </div>
      </div>
    </div>
    <div className="lg:w-2/5 md:w-1/2 w-full bg-white flex flex-col px-6 py-8 mt-10 md:mt-0 rounded-lg shadow-md">


      <h2 className="text-gray-900 text-lg mb-1 text-center text-large font-medium title-font">Contact Us</h2>
      <p className="leading-relaxed mb-5 text-center text-gray-600">Fill out the form or Call us at +918826607205</p>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="Phone" className="leading-7 text-sm text-gray-600">Phone No.</label>
        <input type="number" id="number" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
        <select
          id="city"
          name="city"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-2 leading-10 transition-colors duration-200 ease-in-out"
        >
          <option value="">Select your city</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Pune">Pune</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Indore">Indore</option>
          <option value="Surat">Surat</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Visakhapatnam">Visakhapatnam</option>
          <option value="Patna">Patna</option>
          <option value="Gurugram">Gurugram</option>
          <option value="Noida">Noida</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Vadodara">Vadodara</option>
          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
          <option value="Goa">Goa</option>
        </select>
      </div>

      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" placeholder="Please write your message in detail.
" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-950 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-500 mt-3 text-center">Thanks for your response! We would love to connect with you!</p>
    </div>
  </div>
</section>
    </div>
    <ContactLower/>
    <FAQ/>
    </>
  )
}

export default Contact
