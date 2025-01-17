"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProcessStep from "./ProcessStep";
import ProcessStages from "./ProcessStages";
import { stepGroups } from "@/utils/utils";

export default function ProcessShowcase() {
  const [activeStage, setActiveStage] = useState("enrolment");
  const [activeStep, setActiveStep] = useState("01");

  return (
    <div className="relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-green-50 blur-3xl" />
        <div className="absolute -right-48 -bottom-48 h-96 w-96 rounded-full bg-green-50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-5xl font-bold">
            <span className="text-gray-800">Skillsyard</span>{" "}
            <span className="text-green-500">Process</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Learn on an AI-powered platform with high-quality content, live
            sessions & mentoring from leading industry experts to achieve your
            desired goal.
          </p>
        </motion.div>

        <ProcessStages
          activeStage={activeStage}
          onStageClick={setActiveStage}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="grid gap-6"
          >
            {stepGroups[activeStage as keyof typeof stepGroups].map(
              (step, index, array) => (
                <ProcessStep
                  key={step.number}
                  {...step}
                  isActive={activeStep === step.number}
                  isLast={index === array.length - 1}
                  onClick={() => setActiveStep(step.number)}
                />
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
