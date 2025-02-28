export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.length < 12 || cleaned.length > 13) {
    return '';
  }

  const countryCode = cleaned.slice(0, 2); 
  const ddd = cleaned.slice(2, 4);         

  const isNineDigit = cleaned.length === 13;
  const firstPart = cleaned.slice(4, isNineDigit ? 9 : 8);
  const secondPart = cleaned.slice(isNineDigit ? 9 : 8);

  return `+${countryCode} (${ddd}) ${firstPart}-${secondPart}`;
}