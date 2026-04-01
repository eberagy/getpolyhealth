export const siteConfig = {
  name: "GetPolyHealth",
  siteUrl: "https://www.getpolyhealth.com",
  supportEmail: "team@getpolyhealth.com",
  fallbackBookingUrl:
    "mailto:team@getpolyhealth.com?subject=PolyHealth%20Demo%20Request",
};

export function getBookingUrl() {
  return process.env.NEXT_PUBLIC_DEMO_BOOKING_URL?.trim() || siteConfig.fallbackBookingUrl;
}
