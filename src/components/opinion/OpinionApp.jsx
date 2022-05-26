import React, {Component} from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import withNavigation from './WithNavigation.jsx'	
import withParams from './WithParams.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import SignUpComponent from './SignUpComponent.jsx'
import HomeComponent from './HomeComponent.jsx'


class OpinionApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const SignUpComponentWithNavigation = withNavigation(SignUpComponent);
        const HomeComponentWithParams = withParams(HomeComponent);

        return (
            <div classNme="OpinioApp">
                <Router>
                    <HeaderComponentWithNavigation/>
            		<Routes>
		            	<Route path="/" element={<LoginComponentWithNavigation />} />
		            	<Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/signup" element={<SignUpComponentWithNavigation />} />
                        <Route path="*" element={<ErrorComponent />} />
                        <Route path="/home/:name" element={
		            		<AuthenticatedRoute>
		            			<HomeComponentWithParams />
		            		</AuthenticatedRoute>
		            	} />
                        <Route path="/logout" element={
		            		<AuthenticatedRoute>
		            			<LogoutComponent />
		            		</AuthenticatedRoute>
		            	} />
                        </Routes>
                </Router>
            </div>
        )
    }

    
}

export default OpinionApp