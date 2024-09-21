
import { timezonePhoneCodes } from "./timezonePhoneCode";
import { GetPhoneCodeByTimezone } from "./types";

export const getPhoneCodeByTimezone: GetPhoneCodeByTimezone = (timezone: string): string | null => {
  return timezonePhoneCodes[timezone] || null;
};

export * from './types';
