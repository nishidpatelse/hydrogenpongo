import { Link } from 'react-router';

export function MegaMenuDropdown({ type, isVisible, dynamicItems }) {

  // If dynamicItems is provided, use it; otherwise, fall back to static content
  const items = dynamicItems && dynamicItems.length > 0
    ? dynamicItems
    : (dropdownContent[type]?.items || []);
  if (type === 'about' || !items.length) return null;

  return (
    <div
      className={[
        'block fixed left-0 right-0 w-full  z-[1000] top-[3rem] pt-[1.5rem] max-w-[1280px] mx-auto',
        isVisible
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible -translate-y-2',
        'transition-all duration-300 ease-in-out',
      ].join(' ')}
    >
      <div className="mega-menu-container bg-white rounded-[20px] border border-[rgba(24,24,24,0.07)] shadow-xl">
        <div className="mega-menu-grid">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className={item.image && !item.price ? "category-card" : "content-card"}
            >
              {item.icon && (
                <div className='content-icon'>
                  <img src={item.icon} alt={item.title} loading='lazy' />
                </div>
              )}
              {item.image && item.price && (
                <div className="product-image">
                  <img src={item.image} alt={item.title} loading='lazy' />
                </div>
              )}
                {item.image && !item.price ? (
                    <div className="category-card-inner h-full">
                        <img src={item.image} alt={item.title} loading='lazy' />
                        <div className="content-info category-overlay">
                            <h3 className="content-title">{item.title}</h3>
                            {item.description && (
                                <p className="content-description">{item.description}</p>
                            )}
                            <span className="arrow">
                            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M1.94751 9.0006H19.0475M19.0475 9.0006L11.78 16.597M19.0475 9.0006L11.78 1.40417" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="content-info">
                        <h3 className="content-title">{item.title}</h3>
                        {item.price && (
                            <p className="product-price">{item.price}</p>
                        )}
                        {item.description && (
                            <p className="content-description">{item.description}</p>
                        )}
                        <span className="arrow">
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M1.94751 9.0006H19.0475M19.0475 9.0006L11.78 16.597M19.0475 9.0006L11.78 1.40417" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>
                        </span>
                    </div>
                )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}