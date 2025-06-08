import { PropsWithChildren } from 'react';
import styles from './TransitionSlideIn.module.css';
import TransitionBase from './TransitionBase';
import type { TransitionProps } from './types';

export default function TransitionSlideIn(
  props: PropsWithChildren<TransitionProps>,
) {
  return <TransitionBase {...props} classNames={{ ...styles }} />;
}
