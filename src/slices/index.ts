import dynamic from 'next/dynamic';
// import Integrations from '../slices/Integrations/index.svelte';

export const components = {
  biography: dynamic(() => import('./Biography')),
  contact_me: dynamic(() => import('./ContactMe')),
  content_index: dynamic(() => import('./ContentIndex')),
  content_index_cert: dynamic(() => import('./ContentIndexCert')),
  experience: dynamic(() => import('./Experience')),
  hero: dynamic(() => import('./Hero')),
  image_block: dynamic(() => import('./ImageBlock')),
  integrations: dynamic(() => import('./Integrations')),
  // integrations: Integrations, // No need for dynamic import for Svelte components
  tech_list: dynamic(() => import('./TechList')),
  text_block: dynamic(() => import('./TextBlock')),
};
