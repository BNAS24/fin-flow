import { DateString } from "@/_types/util/core";
import { z } from "zod";

export const dateStringSchema = z.iso.date();

export function isDateString(value: unknown): value is DateString {
	return dateStringSchema.safeParse(value).success;
}
