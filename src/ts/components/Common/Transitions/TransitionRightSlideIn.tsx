import { PropsWithChildren } from 'react';
import styles from './TransitionRightSlideIn.module.css';
import TransitionBase from './TransitionBase';
import type { TransitionProps } from './types';

export default function TransitionRightSlideIn(
  props: PropsWithChildren<TransitionProps>,
) {
  return <TransitionBase {...props} classNames={{ ...styles }} />;
}
