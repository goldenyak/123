import styled from '@emotion/styled';

export const MainScreenWrapper = styled.div({
  background: '-webkit-linear-gradient(290deg, #50AEF1 0%, #506EF1 100%)',
  height: '100vh',
  width: '100%',
});

export const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: '100%',
  padding: '0px 20px',
  margin: '0 auto',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const LogoWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
  marginBottom: '38px',
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
  // fontWeight: '700',
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
  // maxWidth: '318px',
  textAlign: 'center',
  margin: '0px auto 16px',
  color: 'white',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '18px',
  letterSpacing: '-0.078px',
});

// export const ButtonsWrapper = styled.div({
//   display: 'flex',
//   marginBottom: '20px',
//   gap: '12px',
// });

// export const Button = styled.label({
//   borderRadius: '12px',
//   backgroundColor: 'white',
// });

// export const InnerButton = styled.div({
//   width: '100%',
//   transition: 'all 0.2s ease-out 0s',
//   backgroundColor: 'inherit',
//   borderRadius: '16px',
//   padding: '16px',
//   fontWeight: '700',
//   fontSize: '17px',
//   lineHeight: '20px',
//   webkitBoxAlign: 'center',
//   alignItems: 'center',
//   textAlign: 'center',
//   color: '#5072F1',
//   border: '0px',
//   cursor: 'pointer',
//   height: '100%',
//   display: 'flex',

// });


