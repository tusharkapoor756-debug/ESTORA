export interface ProjectSpecification {
  category: string;
  details: string;
}

export interface FloorPlan {
  id: string;
  name: string;
  type: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  image: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Urban Residences' | 'Sanctuary Villas' | 'Sky Apartments' | 'Waterfront';
  status: 'Under Construction' | 'Ready for Possession' | 'Upcoming Launch' | 'Sold Out';
  location: string;
  city: string;
  heroImage: string;
  gallery: string[];
  priceRange: string;
  completionYear: string;
  architect: string;
  shortDescription: string;
  fullOverview: string;
  highlights: string[];
  amenities: string[];
  specifications: ProjectSpecification[];
  floorPlans: FloorPlan[];
  featured: boolean;
}

export interface Enquiry {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  projectSlug?: string;
  projectName?: string;
  preferredDate?: string;
  message: string;
  status: 'New' | 'In Review' | 'Contacted' | 'Closed';
  notes?: string;
}

export interface BrandContent {
  heroTagline: string;
  heroSubheadline: string;
  brandHeadline: string;
  brandPhilosophy: string;
  consultationHeadline: string;
  consultationSubheadline: string;
}

