import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const roboto: NextFont = localFont({
    src: [
        {
            path: '../_fonts/roboto/Roboto-Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../_fonts/roboto/Roboto-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../_fonts/roboto/Roboto-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../_fonts/roboto/Roboto-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../_fonts/roboto/Roboto-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../_fonts/roboto/Roboto-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../_fonts/roboto/Roboto-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../_fonts/roboto/Roboto-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../_fonts/roboto/Roboto-Thin.ttf',
            weight: '100',
            style: 'normal',
        }
    ]
});

const gelasio: NextFont = localFont({
    src: [
        {
            path: '../_fonts/gelasio/Gelasio-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../_fonts/gelasio/Gelasio-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../_fonts/gelasio/Gelasio-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../_fonts/gelasio/Gelasio-Regular.ttf',
            weight: '400',
            style: 'normal',
        }
    ]
});

export { gelasio, roboto };
