"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
    from?: number;
    to: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

export default function AnimatedCounter({
    from = 0,
    to,
    duration = 2,
    suffix = "",
    prefix = "",
}: AnimatedCounterProps) {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(from, to, {
                duration,
                onUpdate: (value) => setCount(Math.floor(value)),
            });
            return () => controls.stop();
        }
    }, [from, to, duration, isInView]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}
            {count}
            {suffix}
        </span>
    );
}
