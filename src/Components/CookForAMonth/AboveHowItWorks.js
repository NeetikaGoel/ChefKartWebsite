const AboveHowItWorks = () => {
  const features = [
    {
      title: "Healthy & Hygienic Food",
      description: "Healthy food cooked in your kitchen with utmost hygiene.",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/healthy_hygienic_a9878d9090.svg",
    },
    {
      title: "Tailored to Your Taste",
      description: "Food prepared according to your taste and preferences.",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/tailored_to_taste_33cb681b66.svg",
    },
    {
      title: "Trained & Verified Cooks",
      description:
        "Professionally trained & background verified cooks for quality service.",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/professional_cooks_ec13508556.svg",
    },
    {
      title: "Quick Service",
      description: "Assured cook arrival within 60 minutes of booking.",
      icon: "https://storage.googleapis.com/chefkart-strapi-media/timely_service_3a6f9d9ebe.svg",
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