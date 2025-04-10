export const navItems = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  // { name: "Experience", link: "#experience" },
  // { name: "Showcase", link: "#showcase" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Find Property", link: "/properties" },
];

export const locationItems = [
  { label: "Lekki", value: "lekki" },
  { label: "Ikoyi", value: "ikoyi" },
  { label: "Victoria Island", value: "vi" },
  { label: "Ajah", value: "ajah" },
  { label: "Ikeja", value: "ikeja" },
]

export const propertyItems = [
  { label: "Apartment", value: "apartment" },
  { label: "House", value: "house" },
  { label: "Villa", value: "villa" },
  { label: "Commercial", value: "commercial" },
  { label: "Land", value: "land" },
]

export const priceItems = [
  { label: "₦50M", value: "50m" },
  { label: "₦100M", value: "100m" },
  { label: "₦200M", value: "200m" },
  { label: "₦500M", value: "500m" },
  { label: "₦1B+", value: "1b" },
]

export const properties = [
  {
    id: "prop1",
    title: "The Queen Inside",
    location: "Lekki Phase 1, Lagos",
    price: "$1,200,000",
    bedrooms: 3,
    bathrooms: 3,
    area: "250m²",
    imageUrl: "/landing-page/property1.avif",
    isForRent: false,
  },
  {
    id: "prop2",
    title: "The Queen Inside",
    location: "Ikoyi, Lagos",
    price: "$850,000",
    bedrooms: 4,
    bathrooms: 4,
    area: "350m²",
    imageUrl: "/landing-page/property2.avif",
    isForRent: false,
  },
  {
    id: "prop3",
    title: "The Queen Inside",
    location: "Victoria Island, Lagos",
    price: "$25,000/year",
    bedrooms: 2,
    bathrooms: 2,
    area: "120m²",
    imageUrl: "/landing-page/property3.avif",
    isForRent: true,
  },
]