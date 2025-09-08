import { siteUrl } from "@lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jorge García",
    description: "Jorge is a software engineer who enjoys building stuff for the web.",
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: '/',
    }
};
