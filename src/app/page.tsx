'use server';
import MainScreen from '@/components/MainScreen/MainScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default async function HomePage() {
  return <MainScreen />;
}
