import PetSafetyGrid from '~/components/PetSafetyGrid';
import PotionControl from '~/components/PotionControl';
import SmartPetBowlShowcase from '~/components/SmartPetBowlShowcase';
import FrequentlyBoughtTogether from '~/components/FrequentlyBoughtTogether';
import WaggleSteps from '~/components/WaggleSteps';
import TestimonialsSection from '~/components/TestimonialsSection';
import FAQsection from '~/components/FAQsection';
import {useLoaderData} from 'react-router';
import {FETCH_PRODUCT_USING_HANDLE,METOBJECT_DATA_QUERY} from '~/utils/product-query';

export async function loader({context}) {
  const SHOPIFY_DOMAIN = context.env.PUBLIC_STORE_DOMAIN;
  const STOREFRONT_API_VERSION = context.env.STOREFRONT_API_VERSION;
  const STOREFRONT_ACCESS_TOKEN = context.env.PUBLIC_STOREFRONT_API_TOKEN;

  const product = await fetchProductByHandle(
    SHOPIFY_DOMAIN,
    STOREFRONT_API_VERSION,
    STOREFRONT_ACCESS_TOKEN,
  );

  const instructionMetaobjectData = await getInstructionMetaobjectData({ context })
  const effortlessPetNeed = await geteffortlessPetNeed({ context })  

  return {
    product,
    instructionMetaobjectData,
    effortlessPetNeed,
  };
}
async function geteffortlessPetNeed({ context } = {}) {
  if (!context?.storefront) {
    throw new Error("Missing storefront context.");
  }

  const { storefront } = context;

  const petaneedtData = await storefront.query(
    METOBJECT_DATA_QUERY,
    {
      variables: { type: 'pdp_effortless_pet_needs' },
    },
  );

  return { effortlessPetNeeds: petaneedtData };
}
async function getInstructionMetaobjectData({ context } = {}) {
    if (!context?.storefront) {
      throw new Error("Missing storefront context.");
    }
  
    const { storefront } = context;
  
    const instructionMetaobjectData = await storefront.query(
      METOBJECT_DATA_QUERY,
      {
        variables: { type: 'product_instruction' },
      },
    );
  
    return { instructionMetaobjectDatas: instructionMetaobjectData };
  }
  

async function fetchProductByHandle(
  SHOPIFY_DOMAIN,
  STOREFRONT_API_VERSION,
  STOREFRONT_ACCESS_TOKEN,
) {
  const query = FETCH_PRODUCT_USING_HANDLE;

  const response = await fetch(
    `https://${SHOPIFY_DOMAIN}/api/${STOREFRONT_API_VERSION}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({query}),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Shopify API error: ${response.status} ${errorText}`);
  }

  const product = await response.json();
  return product;
}

export default function CustomPage() {
  const ProductData = useLoaderData();
  const bundleProduct = ProductData?.product?.data?.product?.bundleProduct?.references?.edges;
    // console.log(ProductData);
    
  
  return (
    <div>
      <PotionControl ProductData={ProductData} />
      <SmartPetBowlShowcase ProductData={ProductData} />
      <FrequentlyBoughtTogether bundleProduct={bundleProduct} />
      <WaggleSteps />
      <TestimonialsSection />
      <FAQsection />
      <PetSafetyGrid />
    </div>
  );
}
