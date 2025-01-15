import { features } from "../../constants/featurs";

// src/pages/AboutPage.tsx
const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:py-10 py-8">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic mb-3">
          About Shortify
        </h1>
        <p className="text-gray-700 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          Shortify simplifies URL shortening for efficient sharing. Easily
          generate, manage, and track your shortened links. Shortify simplifies
          URL shortening for efficient sharing. Easily generate, manage, and
          track your shortened links. Shortify simplifies URL shortening for
          efficient sharing. Easily generate, manage, and track your shortened
          links. Shortify simplifies URL shortening for efficient sharing.
          Easily generate, manage, and track your shortened links.
        </p>
        <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <feature.icon className={`${feature.iconColor} text-3xl mr-4`} />
              <div>
                <h2 className="sm:text-2xl font-bold text-slate-800">
                  {feature.title}
                </h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
