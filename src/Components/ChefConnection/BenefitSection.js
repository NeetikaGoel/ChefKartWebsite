const BenefitSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl md:text-4xl font-bold text-red-950 text-center mb-10">
            ChefKart से क्यूँ जुड़ें?
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FEarn_Money_c09cff227a.webp&w=1920&q=75"
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 className="title-font text-lg font-bold text-gray-900 text-center mb-3">
                    नियमित पैसे
                  </h1>
                  <p className="leading-relaxed  text-center mb-3">
                    अपनी दैनिक कमाई के पैसे नियमित रूप से उसी दिन पाएँ।
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBe_your_own_boss_1_ff6c9822fd.webp&w=1920&q=75"
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">
                    सम्मान से काम
                  </h2> */}
                  <h1 className="title-font text-lg font-bold  text-center text-gray-900 mb-3">
                    सम्मान से काम
                  </h1>
                  <p className="leading-relaxed  text-center mb-3">
                    समाज में एक पेशेवर कुक के रूप में सम्मान और पहचान प्राप्त करें।
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_support_26823bc403.webp&w=1920&q=75"
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">
                    CATEGORY
                  </h2> */}
                  <h1 className="title-font text-lg font-bold  text-center  text-gray-900 mb-3">
                    ट्रेनिंग एवं सहायता
                  </h1>
                  <p className="leading-relaxed  text-center mb-3">
                    हमारे शेफ़ से ट्रेनिंग में नए पकवान बनाना सीखें। किसी भी समस्या में तुरंत सहायता पाएँ।
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BenefitSection
