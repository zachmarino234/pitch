import { ArrowDown, ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SectionLayout = ({
    sectionName,
    children
}: {
    sectionName: string;
    children: React.ReactNode;
}) => {
    const [isCardOpen, setIsCardOpen] = useState(false);

    const toggleCard = () => {
        setIsCardOpen(!isCardOpen);
    };

    return (
        <div className='flex flex-col p-4 my-2 rounded-xl border-2'>
            <div className='flex items-center cursor-pointer' onClick={toggleCard}>
                {isCardOpen ? <ArrowUp /> : <ArrowDown />}
                <h1 className='text-3xl ml-2'>{sectionName}</h1>
            </div>
            <AnimatePresence>
                {isCardOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='overflow-hidden mt-2'
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};