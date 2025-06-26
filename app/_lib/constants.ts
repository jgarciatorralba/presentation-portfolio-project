import { Experiences } from "experiences";
import path from "path";
import { SocialNetworks } from "socialNetworks";
import { Technologies } from "technologies";
import { Navigation } from "userInterface";
import experiencesData from "../_assets/texts/experiences.json";
import navigationData from "../_assets/texts/navigation.json";
import aboutData from "../_assets/texts/sections/about.json";
import contactData from "../_assets/texts/sections/contact.json";
import experienceData from "../_assets/texts/sections/experience.json";
import introData from "../_assets/texts/sections/intro.json";
import projectsData from "../_assets/texts/sections/projects.json";
import socialNetworksData from "../_assets/texts/socialNetworks.json";
import technologiesData from "../_assets/texts/technologies.json";

const aboutParagraphs: string[] = aboutData.paragraphs || [];
const apiUrl: string = process.env.API_URL || '';
const cacheLifetimeSeconds: number = parseInt(process.env.CACHE_LIFETIME_SECONDS || '0');
const clientApiUrl: string = process.env.NEXT_PUBLIC_API_URL || '';
const contactParagraphs: string[] = contactData.paragraphs || [];
const email: string = "jgarciatorralba@gmail.com";
const experienceParagraphs: string[] = experienceData.paragraphs || [];
const experiences: Experiences = experiencesData;
const introSubheading: { highlighted: string; normal: string } = introData.subheading || { highlighted: '', normal: '' };
const introParagraphs: string[] = introData.paragraphs || [];
const logFilePath: string = process.env.LOG_FILE_PATH || path.join(process.cwd(), 'logs', 'error.log');
const navigation: Navigation = navigationData;
const projectsParagraphs: string[] = projectsData.paragraphs || [];
const siteUrl: string = process.env.SITE_URL || '';
const socialNetworks: SocialNetworks = socialNetworksData;
const technologies: Technologies = technologiesData;
const year: number = new Date().getFullYear();

export {
    aboutParagraphs,
    apiUrl,
    cacheLifetimeSeconds,
    clientApiUrl,
    contactParagraphs,
    email,
    experienceParagraphs,
    experiences,
    introParagraphs,
    introSubheading,
    logFilePath,
    navigation,
    projectsParagraphs,
    siteUrl,
    socialNetworks,
    technologies,
    year
};
