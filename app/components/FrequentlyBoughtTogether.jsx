import React from 'react';
import CameraImage from '../assets/waggle-camera.webp';
import SmartBowlImage from '../assets/waggle-smart.webp';
import PlusIcon from '../assets/plus-icon.webp';
import { useAside } from './Aside';
import { CustomAddToCartButton } from './CustomAddToCartButton';

function transformBundleProductsWithTotals(bundleProduct) {
  let totalPrice = 0;
  let totalComparePrice = 0;

  const products = bundleProduct?.bundleProduct.map(({ node }) => {
    const title = node.title;
    const image = node.images.edges[0]?.node?.url || null;

    const firstVariant = node.variants.edges[0]?.node;
    const price = firstVariant?.price?.amount
      ? parseFloat(firstVariant.price.amount)
      : 0;
    const variantId = firstVariant?.id || null;
    const comparePrice = firstVariant?.compareAtPrice?.amount
      ? parseFloat(firstVariant.compareAtPrice.amount)
      : 0;

    totalPrice += price;
    totalComparePrice += comparePrice;

    return {
      alt: title,
      title,
      variantId,
      originalPrice: comparePrice ? `$${comparePrice.toFixed(2)}` : null,
      discountedPrice: price ? `$${price.toFixed(2)}` : null,
      image,
    };
  });

  return {
    products,
    totalPrice: `$${totalPrice.toFixed(2)}`,
    totalComparePrice: `$${totalComparePrice.toFixed(2)}`,
  };
}

export default function FrequentlyBoughtTogether(bundleProduct) {
  const { open } = useAside();
  const formattedBundles = transformBundleProductsWithTotals(bundleProduct);

  const texts = {
    sectionTitle: 'Frequently Bought Together',
    products: formattedBundles.products,
    totalPriceText: 'Total price:',
    totalOriginalPrice: formattedBundles.totalComparePrice,
    totalDiscountedPrice: formattedBundles.totalPrice,
    buttonText: 'Grab this now',
  };

  return (
    <div className="dark-slate-bg px-4 py-8 md:px-[187px] md:py-[55px] extra-padding max-w-[1440px] w-full mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <h2 className="white-text-element lexend font-medium text-[24px] md:text-[36px] leading-[100%] tracking-[-0.24px] md:tracking-[-0.36px] text-center md:text-left">
          {texts.sectionTitle}
        </h2>
        <div className="flex justify-center md:justify-start gap-[23px] md:gap-15">
          <div className="flex flex-col items-center">
            <img
              src={texts.products[0].image || CameraImage}
              alt={texts.products[0].alt}
              className="mb-[14px] object-contain rounded-[7px] md:h-[150px] md:w-[150px] h-[106px] w-[106px]"
              loading="lazy"
            />
            <h3 className="white-text-element lexend font-medium text-[14px] md:text-[20px] leading-[17px] md:leading-[23.2px] tracking-[-0.05px] md:tracking-[-0.07px] text-center mb-2">
              {texts.products[0].title}
            </h3>
            <div className="flex items-center gap-1 md:gap-2">
              <span className="gray-400 line-through text-xs md:text-sm">
                {texts.products[0].originalPrice}
              </span>
              <span className="white-text-element lexend font-medium text-[16px] md:text-[20px] leading-[20px] md:leading-[28px] tracking-[0]">
                {texts.products[0].discountedPrice}
              </span>
            </div>
          </div>
          <div className="flex items-center md:max-h-[150px] max-h-[106px]">
            <img src={PlusIcon} alt="plus" loading="lazy" className="w-[22px] md:w-[30px]" />
          </div>
          <div className="flex flex-col items-center w-1/2">
            <img
              src={texts.products[1].image || SmartBowlImage}
              alt={texts.products[1].alt}
              className="rounded-[7px] mb-[14px] object-contain md:h-[150px] md:w-[150px] h-[106px] w-[106px] max-w-none"
              loading="lazy"
            />
            <h3 className="white-text-element lexend font-medium text-[14px] md:text-[20px] leading-[17px] md:leading-[23.2px] tracking-[-0.05px] md:tracking-[-0.07px] text-center mb-2">
              {texts.products[1].title}
            </h3>
            <div className="flex items-center gap-1 md:gap-2">
              <span className="gray-400 line-through text-xs md:text-sm">
                {texts.products[1].originalPrice}
              </span>
              <span className="white-text-element lexend font-medium text-[16px] md:text-[20px] leading-[20px] md:leading-[28px] tracking-[0]">
                {texts.products[1].discountedPrice}
              </span>
            </div>
          </div>
        </div>
        <div className="text-center md:text-right">
          <div className="mt-6 md:mt-[49px]">
            <div className="md:text-left white-text-element lato font-medium text-[16px] md:text-[20px] leading-[19px] md:leading-[23.2px] tracking-[0] mb-2">
              {texts.totalPriceText}
            </div>
            <div className="flex items-center justify-center md:justify-end gap-2 mb-4">
              <span className="gray-400 line-through text-base md:text-lg">
                {texts.totalOriginalPrice}
              </span>
              <span className="white-text-element lexend font-medium text-[28px] md:text-[36px] leading-[22px] md:leading-[28px] tracking-[0]">
                {texts.totalDiscountedPrice}
              </span>
            </div>
          </div>
          <CustomAddToCartButton
            disabled={false}
            onClick={() => open('cart')}
            lines={formattedBundles.products.map((product) => ({
              merchandiseId: product.variantId,
              quantity: 1,
            }))}
            className="button2 button-hover2 px-6 md:px-8 py-[14px] md:py-[18px] lato rounded-[100px] white-text-element font-bold text-[16px] md:text-[18px] leading-[100%] cursor-pointer tracking-[0] w-full max-w-[280px] md:max-w-none"
          >
            {texts.buttonText}
          </CustomAddToCartButton>
        </div>
      </div>
    </div>
  );
}
