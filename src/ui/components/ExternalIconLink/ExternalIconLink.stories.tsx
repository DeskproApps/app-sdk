import React from "react";
import { faPhp, faReact, faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { ExternalIconLink } from "./ExternalIconLink";
import type { StoryObj } from "@storybook/react";
import type { AnyIcon } from "@deskpro/deskpro-ui";

const HubSpotLogo = () => (
    <svg viewBox="0 0 27 28" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g fill="#f95c35"><path d="M19.614233,20.1771162 C17.5228041,20.1771162 15.8274241,18.4993457 15.8274241,16.4299995 C15.8274241,14.3602937 17.5228041,12.6825232 19.614233,12.6825232 C21.7056619,12.6825232 23.4010418,14.3602937 23.4010418,16.4299995 C23.4010418,18.4993457 21.7056619,20.1771162 19.614233,20.1771162 M20.7478775,9.21551429 L20.7478775,5.88190722 C21.6271788,5.47091457 22.243053,4.59067833 22.243053,3.56912967 L22.243053,3.49218091 C22.243053,2.08229273 21.0774338,0.928780545 19.6527478,0.928780545 L19.5753548,0.928780545 C18.1506688,0.928780545 16.9850496,2.08229273 16.9850496,3.49218091 L16.9850496,3.56912967 C16.9850496,4.59067833 17.6009238,5.47127414 18.4802251,5.88226679 L18.4802251,9.21551429 C17.1710836,9.4157968 15.9749432,9.95012321 14.9884545,10.7365107 L5.73944086,3.61659339 C5.80048326,3.3846684 5.84335828,3.14591151 5.84372163,2.89492912 C5.84517502,1.29842223 4.53930368,0.00215931486 2.92531356,1.87311107e-06 C1.31205014,-0.00179599501 0.00181863138,1.29087118 1.8932965e-06,2.88773765 C-0.00181484479,4.48460412 1.30405649,5.78086703 2.91804661,5.7826649 C3.44381061,5.78338405 3.93069642,5.63559929 4.35726652,5.39540411 L13.4551275,12.3995387 C12.6815604,13.5552084 12.2281026,14.9395668 12.2281026,16.4299995 C12.2281026,17.9901894 12.7262522,19.433518 13.5677653,20.6204705 L10.8012365,23.3586237 C10.5825013,23.2935408 10.3557723,23.2482346 10.1152362,23.2482346 C8.78938076,23.2482346 7.71423516,24.3118533 7.71423516,25.6239375 C7.71423516,26.9363812 8.78938076,28 10.1152362,28 C11.441455,28 12.5162373,26.9363812 12.5162373,25.6239375 C12.5162373,25.3866189 12.4704555,25.1618854 12.4046896,24.9454221 L15.1414238,22.2371135 C16.3837093,23.1752411 17.9308435,23.7390526 19.614233,23.7390526 C23.6935367,23.7390526 27,20.466573 27,16.4299995 C27,12.7756527 24.2872467,9.7566726 20.7478775,9.21551429"/></g></g></svg>
);

const GithubLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
);

const GitLabLogo = () => (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24.507 9.5-.034-.09L21.082.562a.896.896.0 00-1.694.091l-2.29 7.01H7.825L5.535.653A.898.898.0 003.841.563L.451 9.411.416 9.5a6.297 6.297.0 002.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051.0 001.268.0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297.0 0024.507 9.5z" fill="#e24329"/><path d="m24.507 9.5-.034-.09a11.44 11.44.0 00-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297.0 0024.507 9.5z" fill="#fc6d26"/><path d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051.0 001.268.0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584z" fill="#fca326"/><path d="M5.01 11.461A11.43 11.43.0 00.45 9.411L.416 9.5a6.297 6.297.0 002.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632z" fill="#fc6d26"/></svg>
);

export default {
    title: "Core/ExternalIconLink",
    component: ExternalIconLink,
    argTypes: {
        href: { control: "text" },
        icon: {
            control: { type: "select" },
            options: ["none", "faPhp", "faReact", "faApple", "faAndroid", "svgHubSpot", "svgGithub", "svgGitLab"],
            mapping: {
                none: undefined,
                faPhp,
                faReact,
                faApple,
                faAndroid,
                svgHubSpot: <HubSpotLogo/>,
                svgGithub: <GithubLogo/>,
                svgGitLab: <GitLabLogo/>,
            },

        }
    },
};

export const Default: StoryObj<typeof ExternalIconLink> = {
  args: {
    href: "https://some.url",
    icon: "svgGitLab" as AnyIcon
  }
};
