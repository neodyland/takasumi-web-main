import React from "react";

import { type IconType } from "react-icons";
import { tv } from "tailwind-variants";

export const footerVariants = tv({
    base: "w-full bg-footer-background",
});

export interface FooterProps {
    social: {
        name: string;
        href: string;
        icon: IconType;
    }[];
    links: {
        name: string;
        children: {
            name: string;
            href: string;
        }[];
    }[];
    copylight?: string;
    className?: string;
    children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({
                                                  social,
                                                  links,
                                                  children,
                                                  className,
                                                  copylight = " 2021- Neody. All rights reserved.",
                                              }) => {
    const maxWidth = links.length < 4 ? "max-w-4xl" : "max-w-5xl";

    return (
        <footer className={footerVariants({ className })}>
            <div
                className={`mx-auto flex w-full ${maxWidth} flex-col justify-between`}
            >
                <div
                    style={{
                        gridTemplateColumns: `repeat(${links.length + 1}, minmax(0, 1fr))`,
                    }}
                    className="flex flex-col gap-4 px-4 pb-4 pt-7 lg:grid lg:gap-0 lg:px-0 lg:pb-7 lg:pt-9"
                >
                    {links.map((item) => (
                        <div key={item.name}>
                            <h3 className="text-sm font-semibold tracking-wider text-footer-text">
                                {item.name}
                            </h3>
                            <ul className="mt-2 space-y-1">
                                {item.children.map((child) => (
                                    <li key={child.name}>
                                        <a
                                            href={child.href}
                                            className="text-sm tracking-wide text-steel transition-colors hover:text-footer-text"
                                        >
                                            {child.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {children}
                </div>
                <div>
                    <div className="mx-4 border-t border-footer-border py-2 lg:mx-0">
                        <div className="mb-4 mt-1 flex w-full flex-col-reverse items-start justify-between gap-1 lg:m-0 lg:flex-row lg:items-center lg:gap-0">
                            <p className="text-xs tracking-wider text-gray-400">
                                &copy; {copylight}
                            </p>
                            <div className="flex flex-row justify-start gap-1 lg:items-center">
                                {social.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="rounded-full p-2 text-steel transition-colors hover:text-footer-text"
                                    >
                                        <item.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
Footer.displayName = "Footer";