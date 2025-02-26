import * as React from "react";
import {
  H0,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  H8,
  H9,
  H10,
  H11,
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P8,
  P9,
  P10,
  P11,
} from "@deskpro/deskpro-ui";
import { Title } from "./Title";
import { ComponentStory } from "@storybook/react";

const GitLabLogo = () => (
  <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m24.507 9.5-.034-.09L21.082.562a.896.896.0 00-1.694.091l-2.29 7.01H7.825L5.535.653A.898.898.0 003.841.563L.451 9.411.416 9.5a6.297 6.297.0 002.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051.0 001.268.0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297.0 0024.507 9.5z"
      fill="#e24329"
    />
    <path
      d="m24.507 9.5-.034-.09a11.44 11.44.0 00-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297.0 0024.507 9.5z"
      fill="#fc6d26"
    />
    <path
      d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051.0 001.268.0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584z"
      fill="#fca326"
    />
    <path
      d="M5.01 11.461A11.43 11.43.0 00.45 9.411L.416 9.5a6.297 6.297.0 002.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632z"
      fill="#fc6d26"
    />
  </svg>
);

const customAsComponent = () => {
  return (
    <a href="http://some.link" target="_blank">
      link to somewhere
    </a>
  );
};

const typographyMap = {
  H0,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  H8,
  H9,
  H10,
  H11,
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P8,
  P9,
  P10,
  P11,
};

export default {
  title: "Core/Title",
  component: Title,
  argTypes: {
    title: { control: "text" },
    as: {
      control: { type: "select" },
      mapping: { ...typographyMap, custom: customAsComponent },
      options: [...Object.keys(typographyMap), "custom"],
    },
    marginBottom: { control: "number" },
    link: { control: "text" },
    withOnClick: { control: "boolean" },
    onClick: { table: { disable: true } },
    icon: { table: { disable: true } },
  },
};

export const Default: ComponentStory<typeof Object> = ({
  onClick,
  withOnClick,
  ...props
}) => {
  return <Title {...props} {...(withOnClick ? { onClick } : {})} />;
};

Default.args = {
  title: "from args",
  as: "H1",
  marginBottom: 10,
  link: "",
  withOnClick: false,
  icon: <GitLabLogo />,
};
