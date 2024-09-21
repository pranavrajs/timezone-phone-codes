import { describe, it, expect } from 'vitest';
import { getPhoneCodeByTimezone } from './index';

describe('getPhoneCodeByTimezone', () => {
  it('returns the correct phone code for known timezones', () => {
    expect(getPhoneCodeByTimezone('America/New_York')).toBe('+1');
    expect(getPhoneCodeByTimezone('Europe/London')).toBe('+44');
    expect(getPhoneCodeByTimezone('Asia/Kolkata')).toBe('+91');
    expect(getPhoneCodeByTimezone('Asia/Calcutta')).toBe('+91');
  });

  it('returns null for unknown timezones', () => {
    expect(getPhoneCodeByTimezone('Unknown/Timezone')).toBeNull();
  });

  it('handles case sensitivity correctly', () => {
    expect(getPhoneCodeByTimezone('america/new_york')).toBeNull();
    expect(getPhoneCodeByTimezone('EUROPE/LONDON')).toBeNull();
  });
});
