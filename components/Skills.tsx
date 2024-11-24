"use client";
// react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// icons
import { MdOutlineDesignServices, MdLanguage } from "react-icons/md";
import { SiTypescript } from "react-icons/si";

// framer motion
import { motion } from "framer-motion";

// data
import { softwareSkills, servicesSkills, languagesSkills } from "@/data/skills";

export default function Skills() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 justify-center py-[150px] lg:py-[200px]"
    >
      <Tabs>
        <TabList className="flex flex-col xs:flex-row justify-center items-center gap-1 mb-8 xs:mb-3 w-full">
          <Tab className="flex items-center justify-center gap-1 py-2 px-3 outline-none font-medium border min-w-[300px]">
            <SiTypescript size={15} />
            Software
          </Tab>
          <Tab className="flex items-center justify-center gap-1 py-2 px-3 outline-none font-medium border min-w-[300px]">
            <MdOutlineDesignServices size={15} />
            Services
          </Tab>
          <Tab className="flex items-center justify-center gap-1 py-2 px-3 outline-none font-medium border min-w-[300px]">
            <MdLanguage size={15} />
            Languages
          </Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col gap-2">
            {softwareSkills.map((skill) => (
              <div
                className="flex items-center justify-center gap-1 border py-2 px-3"
                key={skill.id}
              >
                <span>{skill.icon}</span>
                <h2 className="text-lg font-medium uppercase tracking-[2px]">
                  {skill.title}
                </h2>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col gap-2">
            {servicesSkills.map((skill) => (
              <div
                className="flex items-center justify-center gap-1 border py-2 px-3"
                key={skill.id}
              >
                <span>{skill.icon}</span>
                <h2 className="text-lg font-medium uppercase tracking-[2px]">
                  {skill.title}
                </h2>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col gap-2">
            {languagesSkills.map((skill) => (
              <div
                className="flex items-center justify-center gap-1 border py-2 px-3"
                key={skill.id}
              >
                <span>{skill.icon}</span>
                <h2 className="text-lg font-medium uppercase tracking-[2px]">
                  {skill.title}
                </h2>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </motion.div>
  );
}
