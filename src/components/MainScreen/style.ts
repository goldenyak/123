import styled from '@emotion/styled';

export const MainScreenWrapper = styled.div({
  background: '-webkit-linear-gradient(290deg, #50AEF1 0%, #506EF1 100%)',
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px',
});

export const LogoWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px',
  marginBottom: '35px',
});

export const LogoTitle = styled.h1({
  color: 'white',
  textAlign: 'center',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
});

export const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Description = styled.h1({
  color: 'white',
  textAlign: 'center',
  fontSize: '24px',
  fontStyle: 'normal',
  lineHeight: '28px',
  letterSpacing: '0.41px',
  marginBottom: '20px',
});

export const ButtonsWrapper = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  gap: '15px',
  marginBottom: '20px',
});

export const Button = styled.button({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '16px 16px',
  border: 'none',
  cursor: 'pointer',
  width: '160px',
  transition: 'background-color 0.3s ease',

  color: '#5072F1',
  fontSize: '17px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '22px',

  '&:hover': {
    backgroundColor: 'lightgrey',
  },
});

export const PrivacyPolicyDescription = styled.p({
  textAlign: 'center',
  color: 'white',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '18px',
  letterSpacing: '-0.078px',
  whiteSpace: 'pre-line',
});


