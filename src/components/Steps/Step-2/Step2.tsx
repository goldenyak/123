'use client';
import { useRouter } from 'next/navigation';
import icon_yes from '../../../assets/icons/icon_yes.png';
import icon_no from '../../../assets/icons/icon_no.png';
import { decrement, increment } from '@/app/redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks/hooks';
import StepHeader from '@/components/StepHeader/StepHeader';
import StepOption from '@/components/StepOption/StepOption';

function Step2() {
  const router = useRouter();
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <StepHeader>Have you ever used any VPN before?</StepHeader>

      <StepOption
        value='Yes'
        icon={icon_yes}
        onClick={() => router.push('/quiz?q=3')}
      />

      <StepOption
        value='No'
        icon={icon_no}
        onClick={() => router.push('/quiz?q=4')}
      />
    </>
  );
}

export default Step2;
