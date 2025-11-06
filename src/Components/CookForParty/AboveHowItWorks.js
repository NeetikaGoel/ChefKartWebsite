const AboveHowItWorks = () => {
  const features = [
    {
      title: "Multi-Cuisine Professionals",
      description: "Professional party chefs to ensure a diverse & exquisite dining experience!",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/healthy_hygienic_a9878d9090.svg",
    },
    {
      title: "Prompt Service",
      description: "Swift Service to ensure that your party kicks off as planned!",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/timely_service_3a6f9d9ebe.svg",
    },
    {
      title: "Customizable Menu",
      description:
        "Food from around the world to make your event the talk of the town!",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/easy_booking_92fea7ca01.svg",
    },
    {
      title: "Bartenders, Waiters, etc.",
      description: "Expert Bartenders & Waiters to leave your guests in Awe!",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/bartenders_48bb601645.svg",
    },
  ];

  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-6 border border-gray-300">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-300 md:border-none md:border-r md:border-b last:border-none
              flex gap-4 p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-orange-700">
                  {feature.title}
                </h3>
                <p classnName="text-gray-700 text-sm mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboveHowItWorks;
