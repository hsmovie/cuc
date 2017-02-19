import React, { Component } from 'react';
import * as header from 'redux/modules/base/header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// load components
// 로고는 헤더의 멍청한 컴포넌트에서 추출해 온것.
import Header, {SidebarButton, BrandLogo, AuthButton} from 'components/Base/Header/Header';

class App extends Component {
    
   
    render() {
    const {children} = this.props;
        return (
            <div>
                <Header>
                    <SidebarButton />
                    <BrandLogo />
                    <AuthButton />
                </Header> 
                {children}
            </div>
        );
    }
}

export default connect(
    state => ({
        status: {
             
        }
    }),
    dispatch => ({
        HeaderActions: bindActionCreators(header, dispatch)
    })
)(App); 