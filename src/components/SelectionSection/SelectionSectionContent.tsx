import React, { useState } from "react";
import Button from "../common/Button";
import { cn } from "../../utils/cn";

interface ElementContent {
  option: string;
  header: string;
  content: string[];
}

interface SelectionSectionProps {
  data: {
    content: ElementContent[];
  };
}

const SelectionSection: React.FC<SelectionSectionProps> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOnClick = (index: number) => () => {
    setSelectedIndex(index);
  };

  return (
    <div className="mt-10 mb-10">
      <div className="flex gap-4 w-full">
        {data.content.map((element, index) => (
          <button
            key={index}
            className={cn(
              "p-4 rounded-lg text-primary-80 transition-all duration-400",
              index === selectedIndex && "bg-primary-20"
            )}
            onClick={handleOnClick(index)}
          >
            {element.option}
          </button>
        ))}
      </div>
      {data.content.map((element, index) => (
        <div
          className={cn(
            "bg-background-primary hidden box",
            index === selectedIndex && "flex"
          )}
          key={index}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-10">
            <div className="flex flex-col items-start slideInRight gap-3 md:gap-4">
              <h3 className="text-typography-80 font-bold text-left text-xl md:text-3xl">
                {element.header}
              </h3>
              <ul className="space-y-2 text-left self-start md:text-xl">
                {element.content.map((value, index) => (
                  <li className="flex gap-2" key={index}>
                    <img src="https://res.cloudinary.com/senpiper/image/upload/v1753788029/senpiper_assets/VikalpOS/icons/check_circle_en544w.svg" />
                    <span className="text-typography-80 text-base">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
              <Button text="Learn more" variant="secondary" />
            </div>
            <img
              src="https://res.cloudinary.com/senpiper/image/upload/v1669290323/senpiper_assets/new_website_assets/5-workflow_z0eyjn.gif"
              alt="enterprise_img"
              className="bg-background-tertiary relative w-full h-full object-contain slideInLeft"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectionSection;
