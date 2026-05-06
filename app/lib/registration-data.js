// lib/registration-data.js

export const getCountryData = () => {
  // 1. Manually defined Timezones to guarantee the format India (IST) etc.
  const timezones = [
    { value: "Asia/Kolkata", label: "India (IST)" },
    { value: "Australia/Sydney", label: "Australia (AEST)" },
    { value: "Asia/Singapore", label: "East Asia (SGT)" },
    { value: "Europe/London", label: "Europe & UK (GMT)" },
    { value: "Asia/Dubai", label: "Middle East (GST)" },
    { value: "Asia/Qatar", label: "Middle East (AST)" },
    { value: "America/Chicago", label: "USA (CST)" },
    { value: "America/New_York", label: "USA (EST)" },
    { value: "America/Los_Angeles", label: "USA (PST)" }
  ].sort((a, b) => a.label.localeCompare(b.label));

  // 2. Comprehensive Countries
  const countries = [
    { value: "India", label: "India" },
    { value: "United States", label: "United States" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "UAE", label: "United Arab Emirates" },
    { value: "Singapore", label: "Singapore" },
    { value: "Australia", label: "Australia" },
    { value: "Qatar", label: "Qatar" }
  ].sort((a, b) => a.label.localeCompare(b.label));

  // 3. Phone Codes
  const phoneCodes = [
    { value: "+91", label: "+91 (India)" },
    { value: "+1", label: "+1 (USA)" },
    { value: "+44", label: "+44 (UK)" },
    { value: "+971", label: "+971 (UAE)" },
    { value: "+65", label: "+65 (Singapore)" },
    { value: "+61", label: "+61 (Australia)" }
  ];

  return { countries, timezones, phoneCodes };
};