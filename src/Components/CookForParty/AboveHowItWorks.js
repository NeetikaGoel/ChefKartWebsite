const AboveHowItWorks = () => {
  const features = [
    {
      title: "Multi-Cuisine Professionals",
      description: "Professional party chefs to ensure a diverse & exquisite dining experience",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/healthy_hygienic_a9878d9090.svg",
    },
    {
      title: "Prompt Service",
      description: "Swift service to ensure that your party kicks off as planned",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/timely_service_3a6f9d9ebe.svg",
    },
    {
      title: "Customizable menu",
      description:
        "Food from around the world to make your event the talk of the town",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/easy_booking_92fea7ca01.svg",
    },
    {
      title: "Bartenders, Waiters, etc.",
      description: "Expert bartenders & waiters to leave your guests in awe",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/bartenders_48bb601645.svg",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-red-950">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-orange-100 flex-shrink-0">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    {feature.title}
                  </h2>
                  <p className="leading-relaxed text-white text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboveHowItWorks;
