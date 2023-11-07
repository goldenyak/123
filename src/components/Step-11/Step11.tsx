'use client';
import { useRouter } from 'next/navigation';

function Step11() {
  const router = useRouter();
  return (
    <div>
      <h1>Step 11</h1>
      <div>
        <button onClick={() => router.push('/quiz?q=12')}>Continue</button>
      </div>
    </div>
  );
}

export default Step11;
