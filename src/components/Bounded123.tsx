// import clsx from "clsx";

// type BoundedProps = {
//   as?: React.ElementType;
//   className?: string;
//   children: React.ReactNode;
// };

// export default function Bounded({
//   as: Comp = "section",
//   className,
//   children,
//   ...restProps
// }: BoundedProps) {
//   return (
//     <Comp
//       className={clsx(
//         "px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24",
//         className,
//       )}
//       {...restProps}
//     >
//       <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
//         {children}
//       </div>
//     </Comp>
//   );
// }

// import clsx from "clsx";

// type BoundedProps = {
//   as?: React.ElementType;
//   className?: string;
//   children: React.ReactNode;
//   outerClassName?: string; // New prop for outer container's class
// };

// export default function Bounded({
//   as: Comp = "section",
//   className,
//   children,
//   outerClassName,
//   ...restProps
// }: BoundedProps) {
//   return (
//     <Comp
//       className={clsx(
//         "px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24 mx-auto max-w-7xl",
//         outerClassName, // Apply outer spacing classes directly to the container
//         className,
//       )}
//       {...restProps}
//     >
//       <div className="flex w-full flex-col items-center">
//         {children}
//       </div>
//     </Comp>
//   );
// }

import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  outerClassName?: string; // New prop for outer container's class
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  outerClassName,
  ...restProps
}: BoundedProps) {
  const borderStyle = {
    border: "1px solid #fff", // Thin white border
    borderRadius: "8px", // Rounded corners to match the box
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Shadow for depth
  };

  return (
    <Comp
      style={borderStyle} // Apply the border style
      className={clsx(
        "px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24 mx-auto max-w-7xl",
        outerClassName, // Apply outer spacing classes directly to the container
        className,
      )}
      {...restProps}
    >
      <div className="flex w-full flex-col items-center">
        {children}
      </div>
    </Comp>
  );
}
