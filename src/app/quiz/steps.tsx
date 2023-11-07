import Step2 from '@/components/Step-2/Step2';
import Step3 from '@/components/Step-3/Step3';
import Step4 from '@/components/Step-4/Step4';
import Step5 from '@/components/Step-5/Step5';
import Step6 from '@/components/Step-6/Step6';
import Step7 from '@/components/Step-7/Step7';
import Step8 from '@/components/Step-8/Step8';
import Step9 from '@/components/Step-9/Step9';
import Step10 from '@/components/Step-10/Step10';

const steps: React.FC[] = [
  () => {
    return <>Something went wrong</>;
  },
  () => {
    return <>Something went wrong</>;
  },
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  Step10,
];

export default steps;
