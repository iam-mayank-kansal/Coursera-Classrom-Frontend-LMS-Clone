import React from "react";
import { motion } from "framer-motion";
import { BiBookOpen, BiBrain, BiBriefcase, BiCode, BiPlay, BiUser, BiVideo } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { SlideContentProps, SlideFeature, SlideGrid, SlideSplit } from "@/utils/interface";

export default function SlideContent(props: SlideContentProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "play":
        return <BiPlay className="h-5 w-5" />;
      case "users":
        return <BiUser className="h-5 w-5" />;
      case "book":
        return <BiBookOpen className="h-5 w-5" />;
      case "brain":
        return <BiBrain className="h-5 w-5" />;
      case "video":
        return <BiVideo className="h-5 w-5" />;
      case "code":
        return <BiCode className="h-5 w-5" />;
      case "briefcase":
        return <BiBriefcase className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const renderHeroSlide = () => (
    <div className="relative z-10 flex h-full items-center px-side-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={props.isActive ? "visible" : "hidden"}
          variants={variants}
          className="max-w-2xl"
        >
          <h2 className="mb-6 text-4xl sm:text-6xl font-bold text-white leading-tight">
            {props.slide.title}
          </h2>
          <p className="mb-8 text-lg sm:text-xl text-gray-200">
            {props.slide.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition-colors hover:bg-green-600"
            >
              Get Started
              <BsArrowRight className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderSplitSlide = () => {
    const slide = props.slide as SlideSplit;
    return (
      <div className="relative z-10 grid h-full md:max-w-4xl items-center gap-8 sm:gap-12 px-side-padding">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={props.isActive ? "visible" : "hidden"}
            variants={variants}
          >
            <h2 className="mb-6 text-3xl sm:text-5xl font-bold text-white">
              {props.slide.title}
            </h2>
            <p className="mb-8 text-base sm:text-lg text-gray-200">
              {props.slide.description}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 ">
              {slide.stats?.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-gradient-to-l from-white/10 to-white/20 shadow-xl p-3 sm:p-4 backdrop-blur-sm"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-200">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  const renderFeatureSlide = () => {
    const slide = props.slide as SlideFeature;
    return (
      <div className="relative z-10 flex h-full items-center px-side-padding">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={props.isActive ? "visible" : "hidden"}
              variants={variants}
            >
              <h2 className="mb-6 text-3xl sm:text-5xl font-bold text-white">
                {props.slide.title}
              </h2>
              <p className="mb-8 text-base sm:text-lg text-gray-200">
                {props.slide.description}
              </p>
              <div className="grid gap-4">
                {slide.features?.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="flex items-center gap-4 rounded-lg bg-white/10 p-3 sm:p-4 backdrop-blur-sm"
                  >
                    <div className="rounded-full bg-green-500 p-2 text-white">
                      {getIcon(feature.icon)}
                    </div>
                    <p className="text-sm sm:text-base text-white">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent rounded-2xl shadow-2xl" />
              <img
                src={props.slide.image}
                alt={props.slide.title}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  const renderGridSlide = () => {
    const slide = props.slide as SlideGrid;
    return (
      <div className="relative z-10 flex h-full items-center px-side-padding">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={props.isActive ? "visible" : "hidden"}
            variants={variants}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="mb-4 text-3xl sm:text-5xl font-bold text-white">
              {props.slide.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
              {props.slide.description}
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {slide.gridItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6"
              >
                <div className="rounded-full bg-green-500 p-3 w-fit mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-[600px] sm:h-[700px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: props.isActive ? 1 : 1.1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <img
          src={props.slide.image}
          alt={props.slide.title}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {props.slide.type === "hero" && renderHeroSlide()}
      {props.slide.type === "split" && renderSplitSlide()}
      {props.slide.type === "feature" && renderFeatureSlide()}
      {props.slide.type === "grid" && renderGridSlide()}
    </div>
  );
}