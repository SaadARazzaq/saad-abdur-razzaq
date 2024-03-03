import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Avatar from "./Avatar";
import { PrismicNextImage } from "@prismicio/next";

export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h2" size="lg">
        {slice.primary.heading}
      </Heading>
      {slice.items.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row md:items-start md:space-x-8 ml-6 mt-8 md:ml-12 md:mt-16">
          <div className="max-w-prose">
            <Heading as="h3" size="sm">
              {item.title}
            </Heading>
            <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
              <span>{item.time_period}</span>{" "}
              <span className="text-3xl font-extralight">/</span>{" "}
              <span>{item.institution}</span>
            </div>
            <div className="prose prose-lg prose-invert mt-4">
              <PrismicRichText field={item.description} />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Avatar image={item.avatar} className="max-w- mr-4" />
          </div>
        </div>
      ))}
    </Bounded>
  );
};

export default Experience;
