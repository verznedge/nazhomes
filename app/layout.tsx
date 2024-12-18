import Header from '@/components/layout/header';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: '300',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nazhomesgh.co'),
  title: {
    default: 'Premier Property Developers in Ghana - Naz Homes',
    template: '%s | Naz Homes - Luxury Real Estate in Ghana',
  },
  description:
    'Explore Naz Homes, the leading property developers in Ghana, specializing in crafting exceptional luxury properties that surpass expectations. Discover your dream home with Naz Homes.',
  keywords: [
    'Naz Homes',
    'Ghana homes',
    'property development',
    'luxury living',
    'dream houses',
    'modern homes',
    'real estate',
    'investment',
    'urban design',
    'affordable housing',
    'new construction',
    'luxury apartments',
    'commercial properties',
    'home buying',
    'Ghana property',
    'residential',
    'eco-homes',
    'exclusive listings',
    'realty trends',
    'smart homes',
    'interior design',
    'neighborhoods',
    'rental market',
    'property insights',
    'green building',
    'property financing',
    'modern architecture',
    'homeownership',
    'commercial real estate',
    'property management',
    'luxury condos',
    'investment properties',
    'property showcase',
    'home design',
    'home remodeling',
    'property technology',
    'real estate agents',
    'property market',
    'property value',
    'home decor',
    'home improvement',
    'real estate seminars',
    'property legal',
    'real estate awards',
    'property maintenance',
    'home staging',
    'real estate photography',
    'property inspection',
    'ROI',
    'mortgage rates',
    'energy efficiency',
    'property resale',
    'crowdfunding',
    'homebuilders',
    'architectural innovations',
    'rent-to-own',
    'home insurance',
    'rental management',
    'home mistakes',
    'partnerships',
    'homeownership education',
    'insurance',
    'partnerships',
    'seminars',
    'legal',
    'Ghanaian homes',
    'market trends',
    'checklist',
    'crowdfunding',
    'Ghanaian builders',
    'innovations',
    'avoid mistakes',
    'property market insights',
    'home trends',
    'Ghanaian architecture',
    'property news',
    'buying tips',
    'real estate insights',
    'modern living',
    'property development projects',
    'property investments',
    'property services',
    'luxury homes Ghana',
    'urban development',
    'real estate investment',
    'real estate financing',
    'real estate planning',
    'property buying guide',
    'investment strategies',
    'homeownership benefits',
    'property trends',
    'rental property',
    'property sales',
    'Ghanaian properties',
    'real estate growth',
    'home financing',
    'property financing options',
    'property opportunities',
    'home buying process',
    'real estate market trends',
    'property experts',
    'property investment advice',
    'property developers Ghana',
    'luxury properties',
    'real estate Ghana',
    'Ghana real estate',
    'Naz Homes Ghana',
    'property developers',
    'luxury real estate',
    'Ghana property market',
    'premium homes',
    'real estate investment',
    'dream homes',
    'residential properties',
    'commercial real estate',
    'property development projects',
    'luxury apartments Ghana',
    'modern homes',
    'real estate developers',
    'affordable housing',
    'Ghana housing market',
    'property investment',
    'luxury villas',
    'new construction homes',
    'buying property in Ghana',
    'Ghana real estate developers',
    'investment opportunities',
    'property management',
    'exclusive properties',
    'Ghanaian architecture',
    'premier real estate',
    'modern architecture',
    'home buying tips',
    'Ghana realty',
    'luxury living',
    'urban development',
    'eco-friendly homes',
    'real estate trends',
    'property financing',
    'Ghana real estate news',
    'realtor services',
    'property value appreciation',
    'green building',
    'relocation services',
    'luxury condos',
    'real estate consultancy',
    'smart homes',
    'interior design tips',
    'property marketing',
    'Ghana property developers',
    'commercial properties',
    'investment properties',
    'homeownership benefits',
    'property showcase',
    'exclusive listings',
    'home design inspiration',
    'Ghanaian neighborhoods',
    'real estate seminars',
    'land development projects',
    'real estate market analysis',
    'housing finance',
    'property legal advice',
    'home remodeling ideas',
    'property technology',
    'Ghanaian real estate agents',
    'real estate networking events',
    'homeownership education',
    'luxury living spaces',
    'rental property market',
    'Ghanaian property market insights',
    'neighborhood amenities',
    'real estate investment strategies',
    'mortgage options',
    'property valuation tips',
    'interior decor trends',
    'home improvement ideas',
    'rent-to-own options',
    'Ghana real estate statistics',
    'property tax guidelines',
    'innovative architecture',
    'home buying checklist',
    'rental property management',
    'Ghanaian housing policies',
    'real estate regulatory updates',
    'property insurance',
    'modern landscaping',
    'home security tips',
    'Ghana real estate awards',
    'property maintenance services',
    'real estate partnerships',
    'home staging techniques',
    'real estate photography',
    'property inspection checklist',
    'investment property ROI',
    'Ghanaian mortgage rates',
    'home energy efficiency',
    'property resale tips',
    'real estate crowdfunding',
    'Ghanaian homebuilders',
    'architectural innovations',
    'home buying mistakes to avoid',
    'Naz Homes Ghana',
    'Naz Homes projects',
    'Naz Homes real estate',
    'The Opulent Apartments Ghana',
    'Opulent Apartments Airport Residential',
    'Naz Homes luxury properties',
    'The Opulent Apartments features',
    'Naz Homes developments',
    'The Opulent Apartments amenities',
    'Naz Homes Airport Residential',
    'The Opulent Apartments details',
    'Naz Homes architecture',
    'Opulent Apartments design',
    'Naz Homes property developers',
    'The Opulent Apartments features',
    'Naz Homes investment opportunities',
    'The Opulent Apartments pricing',
    'Naz Homes project portfolio',
    'The Opulent Apartments location',
    'Naz Homes realty in Ghana',
    'Opulent Apartments exclusive living',
    'Naz Homes premier projects',
    'The Opulent Apartments floor plans',
    'Naz Homes luxury living Ghana',
    'Opulent Apartments property tour',
    'Naz Homes Airport Residential development',
    'The Opulent Apartments investment',
    'Naz Homes Opulent Apartments',
    'The Opulent Apartments Naz Homes',
    'Naz Homes modern architecture',
    'Opulent Apartments construction updates',
    'Naz Homes Ghanaian real estate',
    'The Opulent Apartments property values',
    'Naz Homes Opulent Apartments launch',
    'The Opulent Apartments Naz Homes developers',
    'Naz Homes opulent living',
    'The Opulent Apartments high-end living',
    'Naz Homes property investments',
    'The Opulent Apartments investment insights',
    'Naz Homes residential projects',
    'The Opulent Apartments luxury features',
    'Naz Homes Opulent Apartments Airport Residential',
    'The Opulent Apartments Naz Homes premier project',
    'Naz Homes luxury lifestyle',
    'The Opulent Apartments Naz Homes exclusive living',
    'Naz Homes Airport Residential living',
    'The Opulent Apartments Naz Homes construction',
    'Naz Homes property excellence',
    'The Opulent Apartments Naz Homes signature living',
    'Naz Homes luxury developments',
    'The Opulent Apartments Naz Homes opulence',
    'Naz Homes The Opulent Apartments details',
    'The Opulent Apartments Naz Homes property values',
    'Naz Homes Opulent Apartments investment opportunities',
    'The Opulent Apartments Naz Homes real estate',
    'Naz Homes The Opulent Apartments architecture',
    'The Opulent Apartments Naz Homes project portfolio',
    'Naz Homes The Opulent Apartments floor plans',
    'Naz Homes The Opulent Apartments construction updates',
    'The Opulent Apartments Naz Homes launch',
    'Naz Homes The Opulent Apartments developers',
    'Naz Homes The Opulent Apartments investment insights',
    'The Opulent Apartments Naz Homes opulent living',
    'Naz Homes The Opulent Apartments luxury features',
    'Naz Homes The Opulent Apartments Airport Residential',
    'The Opulent Apartments Naz Homes premier project',
    'Naz Homes The Opulent Apartments luxury lifestyle',
    'The Opulent Apartments Naz Homes exclusive living',
    'Naz Homes The Opulent Apartments construction',
    'Naz Homes The Opulent Apartments property excellence',
    'The Opulent Apartments Naz Homes signature living',
    'Naz Homes The Opulent Apartments luxury developments',
    'The Opulent Apartments Naz Homes opulence',
  ],

  openGraph: {
    title: 'Naz Homes - Premier Property Developers in Ghana',
    description:
      'Discover Naz Homes, the premier property developers in Ghana. We specialize in creating stunning and luxurious properties that exceed your expectations.',
    url: 'https://nazhomesgh.co',
    siteName: 'Naz Homes',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Naz Homes - Premier Property Developers in Ghana',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} manrope`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
