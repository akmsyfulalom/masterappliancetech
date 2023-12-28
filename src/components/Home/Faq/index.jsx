import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
const FaqSection = () => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
        <div className='py-20'>


            <h2 className="mb-6 pl-6 text-3xl font-bold">Frequently asked questions</h2>
            <Accordion variant="splitted">
                <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                    {defaultContent}
                </AccordionItem>
            </Accordion>

        </div>
    );
};

export default FaqSection;
