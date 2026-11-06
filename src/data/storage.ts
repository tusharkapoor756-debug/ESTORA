import { Project, Enquiry, BrandContent } from '@/types';
import { INITIAL_PROJECTS, INITIAL_ENQUIRIES, INITIAL_BRAND_CONTENT } from './mockData';

const STORAGE_KEYS = {
  PROJECTS: 'estora_projects_v1',
  ENQUIRIES: 'estora_enquiries_v1',
  BRAND_CONTENT: 'estora_brand_content_v1',
};

export const getStoredProjects = (): Project[] => {
  if (typeof window === 'undefined') return INITIAL_PROJECTS;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(INITIAL_PROJECTS));
      return INITIAL_PROJECTS;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading projects from localStorage', err);
    return INITIAL_PROJECTS;
  }
};

export const saveStoredProjects = (projects: Project[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  } catch (err) {
    console.error('Error saving projects to localStorage', err);
  }
};

export const getStoredProjectBySlug = (slug: string): Project | undefined => {
  const projects = getStoredProjects();
  return projects.find((p) => p.slug === slug);
};

export const getStoredEnquiries = (): Enquiry[] => {
  if (typeof window === 'undefined') return INITIAL_ENQUIRIES;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(INITIAL_ENQUIRIES));
      return INITIAL_ENQUIRIES;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading enquiries from localStorage', err);
    return INITIAL_ENQUIRIES;
  }
};

export const addStoredEnquiry = (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>): Enquiry => {
  const current = getStoredEnquiries();
  const newEnquiry: Enquiry = {
    ...enquiryData,
    id: `enq-${Date.now().toString(36)}`,
    createdAt: new Date().toISOString(),
    status: 'New',
  };
  const updated = [newEnquiry, ...current];
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(updated));
    } catch (err) {
      console.error('Error storing new enquiry', err);
    }
  }
  return newEnquiry;
};

export const updateStoredEnquiryStatus = (id: string, status: Enquiry['status'], notes?: string): Enquiry[] => {
  const current = getStoredEnquiries();
  const updated = current.map((e) => (e.id === id ? { ...e, status, notes: notes !== undefined ? notes : e.notes } : e));
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(updated));
    } catch (err) {
      console.error('Error updating enquiry status', err);
    }
  }
  return updated;
};

export const deleteStoredEnquiry = (id: string): Enquiry[] => {
  const current = getStoredEnquiries();
  const updated = current.filter((e) => e.id !== id);
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(updated));
    } catch (err) {
      console.error('Error deleting enquiry', err);
    }
  }
  return updated;
};

export const getStoredBrandContent = (): BrandContent => {
  if (typeof window === 'undefined') return INITIAL_BRAND_CONTENT;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BRAND_CONTENT);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.BRAND_CONTENT, JSON.stringify(INITIAL_BRAND_CONTENT));
      return INITIAL_BRAND_CONTENT;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading brand content', err);
    return INITIAL_BRAND_CONTENT;
  }
};

export const saveStoredBrandContent = (content: BrandContent): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.BRAND_CONTENT, JSON.stringify(content));
  } catch (err) {
    console.error('Error saving brand content', err);
  }
};

export const resetStoredDataToDefault = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(INITIAL_PROJECTS));
  localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(INITIAL_ENQUIRIES));
  localStorage.setItem(STORAGE_KEYS.BRAND_CONTENT, JSON.stringify(INITIAL_BRAND_CONTENT));
};

