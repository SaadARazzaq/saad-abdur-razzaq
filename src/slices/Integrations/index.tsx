// import Bounded from "@/components/Bounded123";
// import { Content } from "@prismicio/client";
// import {
//   PrismicRichText,
//   PrismicText,
//   SliceComponentProps,
// } from "@prismicio/react";
// import StarBackground from "./StarBackground";
// import Image from "next/image";

// import background from "./background.jpg";
// import React from "react";
// import AnimatedContent from "./AnimatedContent";

// /**
//  * Props for `Integrations`.
//  */
// export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

// /**
//  * Component for "Integrations" Slices.
//  */
// const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {
//   return (
//     <Bounded
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//       className="relative overflow-hidden"
//     >
//       <Image
//         src={background}
//         alt=""
//         fill
//         className="object-cover"
//         quality={90}
//       />
//       <StarBackground />

//       <div className="relative">
//         <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
//           <PrismicText field={slice.primary.heading} />
//         </h2>

//         <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
//           <PrismicRichText field={slice.primary.body} />
//         </div>

//         <AnimatedContent slice={slice} />
//       </div>
//     </Bounded>
//   );
// };

// export default Integrations;

import Bounded from "@/components/Bounded123";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import StarBackground from "./StarBackground";
import Image from "next/image";

import background from "./background.jpg";
import React from "react";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {
  return (
    <Bounded outerClassName="my-10"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      // className="relative overflow-hidden bg-white rounded-lg shadow-lg p-6 md:p-12"
    >
      {/* <Image
        src={background}
        alt=""
        fill
        className="object-cover rounded-lg"
        quality={90}
      /> */}
      {/* <StarBackground /> */}

      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h2>

        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <AnimatedContent slice={slice} />
      </div>
    </Bounded>
  );
};

export default Integrations;
