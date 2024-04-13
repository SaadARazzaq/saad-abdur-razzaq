import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import ContentList from "./ContentList";



/**
 * Props for `ContentIndexCert`.
 */
export type ContentIndexCertProps =
  SliceComponentProps<Content.ContentIndexCertSlice>;

/**
 * Component for "ContentIndexCert" Slices.
 */
const ContentIndexCert = async ({ slice }: ContentIndexCertProps): Promise<JSX.Element> => {  
  const client = createClient()
  const certifications = await client.getAllByType("certifications")
  const researchPapers = await client.getAllByType("papers")

  const contentType = slice.primary.content_type || "Certifications"
  const items = contentType === "Papers" ? researchPapers : certifications
  
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size='xl' className="mb-8">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-xl prose-invert mb-10">
          <PrismicRichText field={slice.primary.description}/>
        </div>
      )}
      <ContentList items={items} contentType = {contentType} viewMoreText={slice.primary.view_more_text} fallbackItemImage = {slice.primary.fallback_item_image}/>
    </Bounded>
  );
};

export default ContentIndexCert;
