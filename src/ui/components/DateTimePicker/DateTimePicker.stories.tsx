import * as React from "react";
import { Stack, H1, Input } from "@deskpro/deskpro-ui";
import { DatePicker, DateTimePicker } from "./DateTimePicker";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Core/DateTimePicker",
};

export const DateTimePickers = () => {
    return (
        <Stack gap={20}>

            <Stack vertical gap={5}>
                <H1>Date Pickers</H1>
                <DatePicker
                    render={(_: any, ref: any) => (
                        <Input rightIcon={faCalendarAlt} ref={ref} />
                    )}
                />
            </Stack>

            <Stack vertical gap={5}>
                <H1>Date/Time Pickers</H1>
                <DateTimePicker
                    render={(_: any, ref: any) => (
                        <Input rightIcon={faCalendarAlt} ref={ref} />
                    )}
                />
            </Stack>

        </Stack>
    );
};
