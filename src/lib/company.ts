export const company = {
  brand: "Master Roller",
  legal: "Master Printing Plate Industry L.L.C",
  group: "Master Roller Group",
  parent: "Master Roller (Thailand) Co., Ltd.",
  parentSite: "https://master-roller.com/",
  phone: "+971547307258",
  phoneDisplay: "+971 54 730 7258",
  phoneAlt: "+971507413688",
  phoneAltDisplay: "+971 50 741 3688",
  whatsapp: "https://wa.me/971547307258",
  address: [
    "Plot No. 950, Al Itehaad Street",
    "Block 5, Umm Deara, Al Raafah",
    "Umm Al Quwain, United Arab Emirates",
  ],
  plusCode: "HP36+G73",
  lat: 25.55396,
  lng: 55.710635,
  mapLink: "https://www.google.com/maps/search/?api=1&query=25.55396,55.710635",
  mapEmbed:
    "https://maps.google.com/maps?q=25.55396,55.710635&z=15&hl=en&output=embed",
};

export function whatsappHref(message: string) {
  return `https://wa.me/971547307258?text=${encodeURIComponent(message)}`;
}
