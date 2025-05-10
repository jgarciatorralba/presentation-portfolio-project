import { Experiences } from "experiences";
import path from "path";
import { SocialNetworks } from 'socialNetworks';
import { Technologies } from 'technologies';
import { Navigation } from "userInterface";
import experiencesData from "../_assets/texts/experiences.json";
import navigationData from "../_assets/texts/navigation.json";
import socialNetworksData from "../_assets/texts/socialNetworks.json";
import technologiesData from "../_assets/texts/technologies.json";

const apiUrl: string = process.env.API_URL || '';
const cacheLifetimeSeconds: number = parseInt(process.env.CACHE_LIFETIME_SECONDS || '0');
const clientApiUrl: string = process.env.NEXT_PUBLIC_API_URL || '';
const email = "jgarciatorralba@gmail.com";
const experiences = experiencesData as Experiences;
const logFilePath: string = process.env.LOG_FILE_PATH || path.join(process.cwd(), 'logs', 'error.log');
const navigation = navigationData as Navigation;
const referredUrl: string = "https://brittanychiang.com";
const socialNetworks = socialNetworksData as SocialNetworks;
const technologies = technologiesData as Technologies;
const year: Number = new Date().getFullYear();

export {
    apiUrl,
    cacheLifetimeSeconds,
    clientApiUrl,
    email,
    experiences,
    logFilePath,
    navigation,
    referredUrl,
    socialNetworks,
    technologies,
    year
};
