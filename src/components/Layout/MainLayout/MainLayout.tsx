import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as S from './MainLayout.Elements';
import { GlobalStyles } from '../../../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { variables } from '../../../styles/variables';

const MainLayout: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={variables}>
			<GlobalStyles />
			<Header />
			<S.Container>
				<S.Wrapper>
					{children}
					<Footer />
				</S.Wrapper>
			</S.Container>
		</ThemeProvider>
	);
};

export default MainLayout;
