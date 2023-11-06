'use client'
import { accordionData } from "./AccordionData";
import { useState } from "react";

export interface AccordionItemProps {
    title: string,
    details: string,
    active: boolean
}

export const AccordionItem = ({ title, details, active }: AccordionItemProps) => {
    return (<div style={{
        display: 'flex', flexDirection: 'column', gap: '12px',
        borderRadius: '8px',
        background: '#F4F6FC',
        padding: '12px 8px'
    }}>
        <div style={{
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '1.3',
            textAlign: 'left'
        }}>{title}</div>
        <div style={{ textAlign: 'left' }}>{details}</div>
    </div>)
}

export const Accordion = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (index: number) => {
        if (selectedIndex === index) {
            setSelectedIndex(0);
        } else {
            setSelectedIndex(index);
        }
    };

    return (<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {accordionData.map((data, index) =>
            <AccordionItem title={data.title} details={data.details} key={index} active={index === selectedIndex} />)}
    </div>);
}