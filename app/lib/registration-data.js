export const getCountryData = () => {
  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  const countryCodes = [
    "IN", "US", "GB", "AE", "SG", "AU", "CA", "DE", "FR", "JP", "MY", "NZ", "ZA", "CH", "ES", "IT"
  ];

  const countries = countryCodes.map(code => ({
    value: regionNames.of(code),
    label: regionNames.of(code)
  })).sort((a, b) => a.label.localeCompare(b.label));

  const timezones = Intl.supportedValuesOf('timeZone').map(tz => {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      timeZoneName: 'short'
    }).formatToParts(new Date());
    const abbr = parts.find(p => p.type === 'timeZoneName')?.value || "";
    return { value: tz, label: `${tz} (${abbr})` };
  });

  // Explicitly defined phone codes to ensure they are never empty
  const phoneCodes = [
    { value: "+91", label: "+91 (India)" },
    { value: "+1", label: "+1 (USA/Canada)" },
    { value: "+44", label: "+44 (UK)" },
    { value: "+971", label: "+971 (UAE)" },
    { value: "+65", label: "+65 (Singapore)" },
    { value: "+61", label: "+61 (Australia)" },
    { value: "+49", label: "+49 (Germany)" },
    { value: "+33", label: "+33 (France)" },
    { value: "+81", label: "+81 (Japan)" },
    { value: "+60", label: "+60 (Malaysia)" },
    { value: "+64", label: "+64 (NZ)" }
  ].sort((a, b) => a.label.localeCompare(b.label));

  return { countries, timezones, phoneCodes };
};