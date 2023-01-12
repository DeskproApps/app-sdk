import React, { useState, FC } from "react";
import styled from "styled-components";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { RoundedLabelTag, lightTheme } from "@deskpro/deskpro-ui";
import { Icon } from "../Icon";
import { Stack } from "../Layout";
import { AnyIcon } from "@deskpro/deskpro-ui";

type Props = {
    href: string,
    icon?: AnyIcon,
};

const Container = styled(Stack)`
    align-items: center;
    padding: 2px;
`;

const Link = styled.a`
    display: inline-block;
    border-radius: 10px;
    border: 1px solid transparent;
    color: ${({ theme }) => (theme.colors.brandShade60)}
`;

const BrandIcon = styled(Icon)`
    display: inline-block !important;
    padding: 0 6px 0 0;
    cursor: pointer;
  
    > svg {
        width: 12px;
        height: 12px;
        margin-top: -2px;
    }
`;

const ExternalIconLink: FC<Props> = ({ href, icon }) => {
    const [isHover, setIsHover] = useState(false);
    const theme = lightTheme;

    return (
        <Link
            target="_blank"
            href={href}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <RoundedLabelTag
                size="small"
                withClose={false}
                backgroundColor={theme.colors.brandShade20}
                textColor={theme.colors.grey100}
                borderColor={isHover
                    ? theme.colors.brandShade60
                    : theme.colors.brandShade20
                }
                closeIcon={faArrowUpRightFromSquare}
                label={(
                    <Container>
                        {icon && <BrandIcon icon={icon} />}
                        <Stack>
                            <Icon icon={faArrowUpRightFromSquare} />
                        </Stack>
                    </Container>
                )}
            />
        </Link>
    );
};

export { ExternalIconLink }
