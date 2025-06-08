import { PropsWithChildren } from 'react';
import styles from './TransitionFade.module.css';
import type { TransitionProps } from './types';
import TransitionBase from './TransitionBase';

export default function TransitionFade(
  props: PropsWithChildren<TransitionProps>,
) {
  return <TransitionBase {...props} classNames={{ ...styles }} />;
}
