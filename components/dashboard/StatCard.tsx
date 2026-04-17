"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface StatCardProps {
    label: string;
    value: string;
    color: string;
    bg: string;
    href: string;
    delay: number;
    IconComponent: React.ElementType;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, color, bg, href, delay, IconComponent }) => (
    <motion.div
        className={`p-5 md:p-6 rounded-xl shadow-md border border-border cursor-pointer transition-all duration-300 ${bg}`}
    >
        <Link href={href} className='block w-full h-full space-y-3'>
            <div className='flex items-center justify-between'>
                <h3 className={`text-3xl md:text-4xl font-bold ${color}`}>{value}</h3>
                <IconComponent className={`h-8 w-8 ${color} opacity-70`} />
            </div>
            <p className="text-sm md:text-base text-muted-foreground mt-1">{label}</p>
        </Link>
    </motion.div>
);