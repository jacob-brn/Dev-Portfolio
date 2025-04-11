"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { jobs, JobProps } from "@/config/config";
import { cn } from "@/lib/utils";
import Image from "next/image";

const JobAccordionItem = (
  props: JobProps & { toggleOpen: () => void; isOpen: boolean }
) => {
  return (
    <div className="overflow-hidden group">
      <div className="py-2 cursor-pointer" onClick={props.toggleOpen}>
        <div className="flex flex-row items-center gap-x-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={props.companyLogoUrl}
              alt={`${props.companyName} logo`}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-grow">
            <div className="flex flex-col">
              <h4 className="inline-flex text-foreground font-semibold text-base items-center ">
                {props.jobTitle}
                <ChevronRight
                  className={cn(
                    "opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 size-4",
                    props.isOpen ? "rotate-90" : "rotate-0"
                  )}
                />
              </h4>
              <p className="text-sm text-muted-foreground">
                {props.companyName}
              </p>
            </div>
          </div>

          {/* Date Range */}
          <div className="text-right flex-shrink-0">
            <p className="text-muted-foreground text-sm font-medium">
              {props.startDate} - {props.endDate}
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait">
        {props.isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: "easeOut" },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden "
          >
            <div className="py-4 pl-12">
              <p className="text-base tracking-tight">{props.jobDescription}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const containerVariants = {
  hidden: {
    filter: "blur(8px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      filter: { duration: 0.15 },
      opacity: { duration: 0.15 },
      staggerChildren: 0.1,
    },
  },
  exit: {
    filter: "blur(8px)",
    opacity: 0,
    transition: {
      filter: { duration: 0.15 },
      opacity: { duration: 0.15 },
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const JobAccordion = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    setOpenIndex(-1);
  }, []);

  return (
    <div className="w-full mx-auto">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid gap-y-2"
        >
          {jobs.map((job: JobProps, index) => (
            <motion.div
              layout="position"
              key={`job-${index}`}
              variants={itemVariants}
              className="relative"
            >
              <JobAccordionItem
                {...job}
                isOpen={index === openIndex}
                toggleOpen={() => {
                  setTimeout(() => {
                    setOpenIndex(index === openIndex ? -1 : index);
                  }, 1);
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default JobAccordion;
