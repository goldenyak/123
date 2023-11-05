'use client';
import { useRouter } from 'next/navigation';
import logo from '../../assets/images/logo.png';
import main_image from '../../assets/images/main_image.png';
import {
  Button,
  ButtonsWrapper,
  ContentWrapper,
  Description,
  LogoTitle,
  LogoWrapper,
  MainScreenWrapper,
  PrivacyPolicyDescription,
  // PrivacyPolicyWrapper,
  TextWrapper,
} from './style';
import Image from 'next/image';

function MainScreen() {
  const router = useRouter();
  return (
    <MainScreenWrapper>
      <ContentWrapper>
        <LogoWrapper>
          <Image alt="logotype" src={logo} />
          <LogoTitle>VPN Lumos</LogoTitle>
        </LogoWrapper>

        <TextWrapper>
          <Description>Do you know what is VPN?</Description>
          <ButtonsWrapper>
            <Button onClick={() => router.push('/step-2')}>Yes</Button>
            <Button onClick={() => router.push('/about-vpn')}>
              Not really
            </Button>
          </ButtonsWrapper>
        </TextWrapper>

        <Image
          alt="MainImage"
          src={main_image}
          width={375}
          height={322}
          style={{ marginBottom: '16px' }}
        />

        <PrivacyPolicyDescription>
          By continuing you agree to our Terms of Service and Privacy Policy
        </PrivacyPolicyDescription>
      </ContentWrapper>
    </MainScreenWrapper>
  );
}

export default MainScreen;
