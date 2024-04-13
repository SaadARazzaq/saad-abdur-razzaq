import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactMe`.
 */
export type ContactMeProps = SliceComponentProps<Content.ContactMeSlice>;

/**
 * Component for "ContactMe" Slices.
 */
const ContactMe = ({ slice }: ContactMeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_me (variation: {slice.variation}) Slices
    </section>
  );
};

export default ContactMe;
