import React from 'react';
import { GlobalStyles } from '../../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import Header from '../Header/Header';
import styled from 'styled-components';
import { variables } from '../../styles/variables';
import Footer from '../Footer/Footer';

const Container = styled.div`
	width: 100%;
	background-color: #f9f9f9;
	display: flex;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: ${({ theme }) => theme.appWidth};
`;

const Layout: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={variables}>
			<GlobalStyles />
			<Header />
			<Container>
				<Wrapper>{children}</Wrapper>
				<Footer />
			</Container>
		</ThemeProvider>
	);
};

export default Layout;
