// import { Metadata } from "next";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";
// import { notFound } from "next/navigation";

// type Params = {uid:string}

// export default async function Page({params}:{params:Params}) {
//     const client = createClient()
//     const page = await client.getByUID("page", params.uid).catch(()=>notFound())

//     return <SliceZone slices={page.data.slices} components={components}/>
// }

// export async function generateMetadata({
//     params, 
//   } : {
//         params: Params
//     }):Promise<Metadata> {
//         const client = createClient()
//         const page = await client.getByUID("page", params.uid).catch(()=>notFound())

//         return {
//             title: page.data.meta_title,
//             description: page.data.meta_description
//         }
//     }

import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  let page;

  try {
    page = await client.getByUID("page", params.uid);
  } catch (error) {
    // Handle not found case manually
    return <div>Page not found</div>;
  }

  if (!page) {
    // Handle not found case manually
    return <div>Page not found</div>;
  }

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  let page;

  try {
    page = await client.getByUID("page", params.uid);
  } catch (error) {
    throw new Error("Page not found!"); // Handle not found case
  }

  if (!page) {
    throw new Error("Page not found!"); // Handle not found case
  }

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
