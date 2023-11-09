'use client';
import { accordionData } from './AccordionData';
import { useState } from 'react';
import Image from 'next/image';
import icon_arrow from '../../../assets/icons/icon_arrow.svg';
import styles from './Accordion.module.scss';

export interface AccordionItemProps {
  title: string;
  details: string;
  active: boolean;
  onClick: () => void;
}

export const AccordionItem = ({
  title,
  details,
  active,
  onClick,
}: AccordionItemProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        background: '#F4F6FC',
        padding: '12px 8px',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '1.3',
            textAlign: 'left',
          }}
        >
          {title}
        </div>
        <Image
          src={icon_arrow}
          alt=''
          className={
            active ? [styles.arrow, styles.arrow_down].join(' ') : styles.arrow
          }
        />
      </div>

      <div
        className={
          active
            ? [styles.wrapper, styles.wrapper_open].join(' ')
            : styles.wrapper
        }
      >
        <div className={styles.details} style={{ textAlign: 'left' }}>
          {details}
        </div>
      </div>
    </div>
  );
};

export const Accordion = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
      }}
    >
      {accordionData.map((data, index) => (
        <AccordionItem
          title={data.title}
          details={data.details}
          key={index}
          active={index + 1 === selectedIndex}
          onClick={() => {
            handleClick(index + 1);
          }}
        />
      ))}
    </div>
  );
};
