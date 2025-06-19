import { Suspense, useState, useEffect } from 'react';
import { Await, NavLink, useLocation,useLoaderData } from 'react-router';
import { ArrowRight, Bell, BellRing, Zap, Shield } from "lucide-react";
// import footer_logo from '../assets/footer_logo.png';
// import instagram from '../assets/instagram.png';
// import instagram_hover from '../assets/instagram_hover.png';
// import linkedin from '../assets/linkedin.png';
// import linkedin_hover from '../assets/linkedin_hover.png';
// import facebook from '../assets/facebook.png';
// import facebook_hover from '../assets/facebook_hover.png';
// import youtube from '../assets/youtube.png';
// import youtube_hover from '../assets/youtube_hover.png';


/**
 * @param {FooterProps}
 */
export function Footer({ footer: footerPromise, header, publicStoreDomain }) {
  const data = useLoaderData();

  const metaobjectData = data?.footerData?.footerMetaobjectDatas?.metaobjects?.edges;
  const countryMetaobjectData = data?.footerCountryData?.footerCountryMetaobjectDatas?.metaobjects?.edges;


  const footerLogoMain = metaobjectData[0]?.node;
  const footerLogoImage = footerLogoMain?.fields.find(item => item.key === "footer_top_left_logo");

  const footer_logo = footerLogoImage.reference?.image?.url;
  const topLeftText = metaobjectData[0]?.node?.fields.find(
    field => field.key === "top_left_text"
  )?.value;

  const socialImages = metaobjectData[0]?.node;
  const topLeftGridImagesEntry = socialImages?.fields.find(item => item.key === "top_left_grid_images");

  const footerLinks = metaobjectData[0]?.node;
  const instagramLink = footerLinks?.fields?.find(item => item.key === "instagram_link")?.value;
  const linkedinLink = footerLinks?.fields?.find(item => item.key === "linkedin_link")?.value;
  const facebookLink = footerLinks?.fields?.find(item => item.key === "facebook_link")?.value;
  const youtubeLink = footerLinks?.fields?.find(item => item.key === "youtube_link")?.value;



  const instagram = topLeftGridImagesEntry.references?.nodes[2]?.image?.url;
  const instagram_hover = topLeftGridImagesEntry.references?.nodes[3]?.image?.url;
  const linkedin = topLeftGridImagesEntry.references?.nodes[4]?.image?.url;
  const linkedin_hover = topLeftGridImagesEntry.references?.nodes[5]?.image?.url;
  const facebook = topLeftGridImagesEntry.references?.nodes[0]?.image?.url;
  const facebook_hover = topLeftGridImagesEntry.references?.nodes[1]?.image?.url;
  const youtube = topLeftGridImagesEntry.references?.nodes[6]?.image?.url;
  const youtube_hover = topLeftGridImagesEntry.references?.nodes[7]?.image?.url;

  const topRightText = metaobjectData[0]?.node?.fields.find(
    field => field.key === "top_right_text"
  )?.value;
  const topRightTextBottom = metaobjectData[0]?.node?.fields.find(
    field => field.key === "top_right_text_bottom"
  )?.value;

  const copyrightText = metaobjectData[0]?.node?.fields.find(
    field => field.key === "copywriter_text"
  )?.value;

  
  const cmsPageFooter = metaobjectData[0]?.node?.fields.find(
    field => field.key === "cms_page_footer_bottom"
  )?.value;
  const cmsPageFooterArray = JSON.parse(cmsPageFooter);


  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer flex flex-col">
            {/* Static Logo Above the Footer Menu */}
            <div className="max-w-[1216px] w-full flex justify-between md:my-[80px] mb-[23px] mx-auto flex-col-reverse  md:flex-row p-[20px] gap-[40px] md:gap-[0px]">
              <div className='flex flex-col gap-[10px]'>
                <img src={footer_logo} alt="Waggle Logo" className='w-[204px]' />
                <p className='!text-[#FEFDFDCC] md:text-[16px] text-[14px] !mb-[10px]'>{topLeftText}</p>
                {(footer?.menu || FALLBACK_FOOTER_MENU).items.map((item) => {
                  if (item.title !== 'Contact Us') return null;

                  return (
                    <div key={item.title}>
                      {item.items.map((child, index) => {
                        console.log(child.title);
                        return (
                          <p
                            key={index}
                            className='!text-[#FEFDFDCC] md:text-[16px] text-[14px] !mb-[10px] contactUsHideFromDesktop md:hidden'
                          >
                            {child.title}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
                <div className="flex space-x-4 gap-[13px]">
                  <div className="group m-0">
                    <a href={instagramLink}>
                      <img src={instagram} alt="Instagram" className="block group-hover:hidden" />
                      <img src={instagram_hover} alt="Instagram Hover" className="hidden group-hover:block" />
                    </a>
                  </div>
                  <div className="group m-0">
                    <a href={linkedinLink}>
                      <img src={linkedin} alt="LinkedIn" className="block group-hover:hidden" />
                      <img src={linkedin_hover} alt="LinkedIn Hover" className="hidden group-hover:block" />
                    </a>
                  </div>
                  <div className="group m-0">
                    <a href={facebookLink}>
                      <img src={facebook} alt="Facebook" className="block group-hover:hidden" />
                      <img src={facebook_hover} alt="Facebook Hover" className="hidden group-hover:block" />
                    </a>
                  </div>
                  <div className="group m-0">
                    <a href={youtubeLink}>
                      <img src={youtube} alt="YouTube" className="block group-hover:hidden" />
                      <img src={youtube_hover} alt="YouTube Hover" className="hidden group-hover:block" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-[33%] flex flex-col gap-[4px] md:mr-[27px]">
                <div className='flex flex-col gap-[2px] mb-[10px] w-[75%]'>
                  <span className='!text-[#ffffff] md:text-[23px] text-[23px]'>{topRightText}</span>
                  <p className='!text-[#FEFDFDCC] md:text-[18px] text-[16px] mb-4'>
                    {topRightTextBottom}
                  </p>
                </div>
                <div>
                  <FooterForm />
                </div>
              </div>
            </div>

            {/* Footer Menu Navigation */}
            <nav className="footer-menu max-w-[1216px] w-full mx-auto border-t border-b border-[#80808040] pl-4 mt-2 space-y-1 !grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[17px]" role="navigation">
              {(footer?.menu || FALLBACK_FOOTER_MENU).items.map((item) => {
                if (!item.url) return null;

                const url =
                  item.url.includes('myshopify.com') ||
                    item.url.includes(publicStoreDomain) ||
                    item.url.includes(header.shop.primaryDomain.url)
                    ? new URL(item.url).pathname
                    : item.url;
                const isExternal = !url.startsWith('/');

                const LinkComponent = isExternal ? 'a' : NavLink;
                const linkProps = isExternal
                  ? {
                    href: url,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                  : {
                    to: url,
                    prefetch: 'intent',
                    end: true,
                    style: activeLinkStyle,
                  };

                return (
                  <div key={item.id} className={`footer-link-group flex flex-col gap-[26px] !m-0 w-full !mb-auto ${
                    item.title === 'Contact Us' ? 'hidden md:block' : ''
                  }`}>
                    <LinkComponent {...linkProps} className="md:text-[18px] text-[16px] font-bold">{item.title}</LinkComponent>

                    {item.items && item.items.length > 0 && (
                      <ul className="footer-submenu mt-2 space-y-1 flex flex-col gap-[17px]">
                        {item.items.map((child) => {
                          if (!child.url) return null;

                          const childUrl =
                            child.url.includes('myshopify.com') ||
                              child.url.includes(publicStoreDomain) ||
                              child.url.includes(header.shop.primaryDomain.url)
                              ? new URL(child.url).pathname
                              : child.url;
                          const childIsExternal = !childUrl.startsWith('/');

                          const ChildLinkComponent = childIsExternal ? 'a' : NavLink;
                          const childLinkProps = childIsExternal
                            ? {
                              href: childUrl,
                              target: '_blank',
                              rel: 'noopener noreferrer',
                            }
                            : {
                              to: childUrl,
                              prefetch: 'intent',
                              end: true,
                              style: activeLinkStyle,
                            };

                          return (
                            <li className='!m-0 leading-[18px] tracking-normal' key={child.id}>
                              <ChildLinkComponent {...childLinkProps} className="md:text-[15px] text-[14px] !text-[#FEFDFDCC] !font-normal">
                                {child.title}
                              </ChildLinkComponent>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Static footer content added after the nav */}
            <div className="max-w-[1216px] w-full mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center py-[19.5px] mb-[40px]">
                <div className="text-[16px] !text-[#ffffff] mb-2 md:mb-0">
                  {copyrightText}
                </div>

                <div className="flex justify-center space-x-6 mb-2 md:mb-0">
                  {countryMetaobjectData.map((item, index) => {
                    const fields = item?.node?.fields || [];

                    const label = fields.find(field => field.key === "country_label")?.value;
                    const url = fields.find(field => field.key === "country_url")?.value;
                    const linkType = fields.find(field => field.key === "link_type")?.value;

                    if (!label || !url) return null;
                    if(linkType !== "country") return;

                    return (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[16px] !text-[#ffffff] transition-colors"
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>


                <div className="flex space-x-6">
                {countryMetaobjectData.map((item, index) => {
                    const fields = item?.node?.fields || [];

                    const label = fields.find(field => field.key === "country_label")?.value;
                    const url = fields.find(field => field.key === "country_url")?.value;
                    const linkType = fields.find(field => field.key === "link_type")?.value;

                    if (!label || !url) return null;
                    if(linkType !== "cms page footer") return;

                    return (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[16px] !text-[#ffffff] transition-colors"
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

function activeLinkStyle({ isActive, isPending }) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */

function FooterForm() {
  const [response, setResponse] = useState(null);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    setResponse(null);
    setError('');
    setSubscribeEmail('');
  }, [location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subscribeEmail.trim()) {
      setError('Email address is required');
      setResponse(null);
      return;
    }

    try {
      const res = await fetch('/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subscribeEmail }),
      });

      const data = await res.json();
      setSubscribeEmail('');
      setError('');
      setResponse(data.message);

      if (data?.error?.message) {
        setError(data.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className="flex flex-col gap-6 text-base" onSubmit={handleSubmit}>
      <div className="w-full flex flex-row items-center relative">
        <input
          type="text"
          placeholder="Enter Your Email Address"
          name="email"
          value={subscribeEmail}
          onChange={(e) => setSubscribeEmail(e.target.value)}
          className="border-0 focus:outline-0 w-full bg-[#ffffff] text-[#B9B9B9] !m-0 !rounded-[30px] !px-[28px] !py-[15px] text-[15px]"
        />
        <button type="submit" className="uppercase border-0 cursor-pointer w-fit text-[#ffffff] bg-[#0085FF] px-8 py-3 rounded-[30px] absolute right-[8px] top-[14%]">
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {error && <p className="text-red-500 text-[12px] -mt-3">{error}</p>}
      {response === 'alreadySubscribed' && (
        <p className="text-red-500 text-[12px] -mt-3">Email is already subscribed</p>
      )}
      {(response === 'created' || response === 'updated') && (
        <p className="text-green-600 text-[12px] -mt-3">Email subscribed successfully.</p>
      )}
    </form>
  );
}
