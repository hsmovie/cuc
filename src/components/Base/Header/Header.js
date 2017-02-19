import React from 'react';

// 칠드런 안쪽의 로고 추출
export { default as BrandLogo} from './BrandLogo';
export { default as SidebarButton } from './SidebarButton';
export { default as AuthButton } from './AuthButton';
const Header = ({children}) => {
    
    return (
        <div>
            <div className="header-wrapper">
                <div className="header">
                    {children}
                </div>
            </div>
            <div className="header-spacer">

            </div>
        </div>
    );
};

export default Header;
