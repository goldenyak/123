'use client';
import { useRouter } from 'next/navigation';

function Step10() {
  const router = useRouter();
  return (
    <div>
     <h1>Step 10</h1>
     <div>
          <button onClick={() => router.push('/step-11')}>Continue</button>
        </div>
    </div>
  );
}

export default Step10;
