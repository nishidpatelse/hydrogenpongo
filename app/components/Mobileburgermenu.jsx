import {Suspense} from 'react';
import {Await, NavLink, useAsyncValue} from 'react-router';
import {useAnalytics, useOptimisticCart} from '@shopify/hydrogen';
import {useAside} from '~/components/Aside';
import React, { useState } from 'react';
import { MegaMenuDropdown } from './MegaMenuDropdown';
import '../styles/mega-menu.css';

/**
 * @param {HeaderProps}
 */
export function Mobileburgermenu({header, isLoggedIn, cart, publicStoreDomain}) {
  const {shop, menu, metaobjects} = header;
  return (
    <header className="header border-b-[0.5px] border-b-[rgba(223,223,223,1)]">
      <div className="max-w-[1280px] mx-auto w-full flex h-[inherit] items-center">
        <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
          <strong></strong>
          <img src={shop.brand.logo.image.url} alt="" width="112" height="28" />
        </NavLink>
        <HeaderMenu
          menu={menu}
          metaMap={metaobjects?.nodes}
          viewport="desktop"
          primaryDomainUrl={header.shop.primaryDomain.url}
          publicStoreDomain={publicStoreDomain}
        />
        <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
      </div>
    </header>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 *   publicStoreDomain: HeaderProps['publicStoreDomain'];
 * }}
 */
export function HeaderMenu({
  menu,
  metaMap,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();
  const metaobject = mapMetaobjects(metaMap);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  function buildDropdownContent(item) {
    if (item.items && item.items.length > 0) {
      return item.items.map((subItem) => {
        const meta = metaobject && subItem.title && metaobject[subItem.title] ? metaobject[subItem.title] : {};
        return {
          title: subItem.title,
          description: meta.short_text || '',
          image: meta.image || '',
          icon: meta.icon || '',
          price: meta.price || '',
          link: subItem.url,
        };
      });
    }
    return [];
  }

  function renderMenuItems(items, isSublist = false) {
    return (
      <ul className={isSublist ? "" : "flex flex-row items-center justify-center list-none p-0 m-0 w-full gap-[20px] h-[inherit]"}>
        {items.map((item) => {
          if (!item.url) return null;
          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            item.url.includes(primaryDomainUrl)
              ? new URL(item.url).pathname
              : item.url;
          const hasDropdown = item.items && item.items.length > 0;
          return (
            <li
              key={item.id}
              className="relative inline-flex items-center group h-[inherit] hover-effect-main"
              onMouseEnter={() => setHoveredMenu(item.title)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <NavLink
                className="no-underline text-neutral-800 px-4 py-2 flex items-center h-[inherit]"
                end
                onClick={close}
                prefetch="intent"
                style={activeLinkStyle}
                to={url}
              >
                <span className="flex items-center gap-2 text-[1.1rem] font-medium !text-[#18212D] hover-effect">
                  {item.title}
                  {hasDropdown && (
                    <svg
                      className={`inline-flex items-center transition-transform duration-300 ease-in-out text-[1.2rem] ml-1 w-3 h-3 text-neutral-400 !text-[#18212D] ${hoveredMenu === item.title ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </NavLink>
              {hasDropdown && (
                <MegaMenuDropdown
                  type={item.title}
                  isVisible={hoveredMenu === item.title}
                  dynamicItems={buildDropdownContent(item)}
                />
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <nav className="relative z-50 w-full h-[inherit]" role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {renderMenuItems((menu || FALLBACK_HEADER_MENU).items)}
     </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      {/* <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink> */}
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1_6872" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <rect width="32" height="32" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_1_6872)">
        <path d="M28.2591 30.0333L17.6538 19.4281C16.8474 20.127 15.907 20.6714 14.8328 21.0612C13.7585 21.451 12.6155 21.6459 11.4036 21.6459C8.49598 21.6459 6.03513 20.6378 4.02108 18.6216C2.00703 16.6054 1 14.1725 1 11.323C1 8.47339 2.0081 6.04051 4.0243 4.0243C6.04051 2.0081 8.48011 1 11.3431 1C14.2061 1 16.639 2.0081 18.6418 4.0243C20.6445 6.04051 21.6459 8.47541 21.6459 11.329C21.6459 12.4809 21.4577 13.5945 21.0814 14.6699C20.705 15.7452 20.1405 16.7533 19.3878 17.6942L30.0333 28.2591L28.2591 30.0333ZM11.3633 19.2265C13.5475 19.2265 15.4042 18.4536 16.9332 16.9078C18.4621 15.3621 19.2265 13.5005 19.2265 11.323C19.2265 9.14546 18.4621 7.28383 16.9332 5.73808C15.4042 4.19232 13.5475 3.41944 11.3633 3.41944C9.15675 3.41944 7.28115 4.19232 5.73646 5.73808C4.19178 7.28383 3.41944 9.14546 3.41944 11.323C3.41944 13.5005 4.19178 15.3621 5.73646 16.9078C7.28115 18.4536 9.15675 19.2265 11.3633 19.2265Z" fill="#2E3138"/>
        </g>
      </svg>

    </button>
  );
}

/**
 * @param {{count: number | null}}
 */
function CartBadge({count}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
      className='relative'
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.35 20.73L30.97 6.25C31.04 5.95 30.97 5.63 30.79 5.39C30.61 5.15 30.31 5.01 30 5.01H28.48C27.93 5.01 27.48 5.46 27.48 6.01C27.48 6.56 27.93 7.01 28.48 7.01H28.72L25.41 20.25C25.3 20.7 24.9 21.01 24.44 21.01H8.59L7.42 7.01H9.85C10.4 7.01 10.85 6.56 10.85 6.01C10.85 5.46 10.4 5.01 9.85 5.01H7.25L7.15 3.76C7.02 2.22 5.71 1.01 4.16 1.01H2C1.45 1.01 1 1.46 1 2.01C1 2.56 1.45 3.01 2 3.01H4.16C4.68 3.01 5.11 3.41 5.16 3.93L6.85 24.26C6.98 25.8 8.29 27.01 9.84 27.01H10V27.51C10 29.44 11.57 31.01 13.5 31.01C15.43 31.01 17 29.44 17 27.51V27.01H20V27.51C20 29.44 21.57 31.01 23.5 31.01C25.43 31.01 27 29.44 27 27.51V27.01H28C28.55 27.01 29 26.56 29 26.01C29 25.46 28.55 25.01 28 25.01H9.84C9.32 25.01 8.89 24.61 8.84 24.09L8.75 23.01H24.43C25.81 23.01 27.01 22.08 27.34 20.74L27.35 20.73ZM15 27.5C15 28.33 14.33 29 13.5 29C12.67 29 12 28.33 12 27.5V27H15V27.5ZM25 27.5C25 28.33 24.33 29 23.5 29C22.67 29 22 28.33 22 27.5V27H25V27.5Z" fill="#2E3138"/>
        <path d="M19.1719 15C23.0319 15 26.1719 11.86 26.1719 8C26.1719 4.14 23.0319 1 19.1719 1C15.3119 1 12.1719 4.14 12.1719 8C12.1719 11.86 15.3119 15 19.1719 15ZM17.002 8.5L18.7379 7.2C19.1279 6.81 20.112 7.61 20.502 8L22.3719 8.62469C22.7619 9.01469 22.7619 7.43801 22.3719 7.82801C22.1719 8.02801 21.9219 7.49 21.6619 7.49C21.4019 7.49 21.1519 7.39 20.9519 7.2L19.502 6L20.1619 12C20.1619 12.55 19.7219 2.74002 19.1719 2.74002C18.6219 2.74002 18.1619 12.55 18.1619 12L19.002 5L17.3719 7.2C16.9819 7.59 16.3519 7.59 15.9619 7.2C15.5719 6.81 16.612 8.89 17.002 8.5Z" fill="#0085FF"/>
      </svg>
      <span className='absolute text-[10px] text-white font-bold top-[1px] right-[10px]'>
        {count === null ? <span>&nbsp;</span> : count}
      </span>
    </a>
  );
}

/**
 * @param {any[]} nodes
 * @returns {Record<string, any>}
 */
function mapMetaobjects(nodes) {
  if (!Array.isArray(nodes)) return {};
  const map = {};
  nodes.forEach((node) => {
    const entry = {};
    let title = '';
    node.fields.forEach((field) => {
      if (field.key === 'matching_menu_title') title = field.value;
      else if (field.key === 'image' || field.key === 'icon') {
        entry[field.key] = field.reference?.image?.url || '';
      } else entry[field.key] = field.value;
    });
    if (title) map[title] = entry;
  });
  return map;
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}

/** @typedef {'desktop' | 'mobile'} Viewport */
/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('@shopify/hydrogen').CartViewPayload} CartViewPayload */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
