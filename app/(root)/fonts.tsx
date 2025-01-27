import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const roboto: NextFontWithVariable = localFont({
    src: [
        {
            path: '../_fonts/Roboto-Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../_fonts/Roboto-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../_fonts/Roboto-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../_fonts/Roboto-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../_fonts/Roboto-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../_fonts/Roboto-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../_fonts/Roboto-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../_fonts/Roboto-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../_fonts/Roboto-Thin.ttf',
            weight: '100',
            style: 'normal',
        }
    ],
    variable: "--font-roboto",
});

export { roboto };
