const VideoSection2 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col items-center px-2 md:px-6">
          {/* Centered Heading */}
          <h1 className="text-4xl md:text-4xl font-bold text-red-950 text-center mb-10">
            Let's hear it from our Customer
          </h1>

          {/* Main Content Section */}
          <div className="flex flex-wrap w-full">
            {/* Left Text Section */}
            <div className="flex flex-wrap mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10 px-4">
              <div className="w-full mb-6">
                <h1 className="text-9xl font-bold text-black mb-4">“</h1>
                <p className="leading-relaxed text-3xl md:text-3xl text-gray-700">
                  This is a much-required service that is convenient and more affordable than ordering online.
                </p>
                <p className="mt-4 text-1xl text-orange-700 font-bold">Rishi</p>
              </div>
            </div>

            {/* Right Video Section */}
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <video
                className="object-cover object-center w-full h-full rounded-lg"
                autoPlay
                loop
                muted
                playsInline
                src="https://storage.googleapis.com/chefkart-strapi-media/testemonial_0f93413c4a.mp4"
              ></video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoSection2;
