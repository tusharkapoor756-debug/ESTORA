'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  getStoredProjects,
  saveStoredProjects,
  getStoredEnquiries,
  updateStoredEnquiryStatus,
  deleteStoredEnquiry,
  getStoredBrandContent,
  saveStoredBrandContent,
  resetStoredDataToDefault,
} from '@/data/storage';
import { Project, Enquiry, BrandContent } from '@/types';
import {
  ShieldAlert,
  LayoutDashboard,
  Building,
  MailQuestion,
  FileText,
  Plus,
  Trash2,
  Edit3,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowUpRight,
  RotateCcw,
  Upload,
  Eye,
  X,
  AlertCircle,
  Layers,
  ChevronRight,
} from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'projects' | 'featured' | 'enquiries' | 'content'>('dashboard');
  const [projects, setProjects] = useState<Project[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [brandContent, setBrandContent] = useState<BrandContent>({
    heroTagline: '',
    heroSubheadline: '',
    brandHeadline: '',
    brandPhilosophy: '',
    consultationHeadline: '',
    consultationSubheadline: '',
  });

  const [notification, setNotification] = useState<string | null>(null);

  // Project Modal State (Add / Edit)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectModalSection, setProjectModalSection] = useState<'essentials' | 'specs' | 'media'>('essentials');
  const [projectForm, setProjectForm] = useState<Partial<Project>>({
    title: '',
    slug: '',
    tagline: '',
    category: 'Urban Residences',
    status: 'Under Construction',
    location: '',
    city: '',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    priceRange: '',
    completionYear: '',
    architect: '',
    shortDescription: '',
    fullOverview: '',
    featured: false,
    amenities: ['Thermal Hydrotherapy Pool', 'Private Screening Room', 'Concierge Butler Service', 'Subterranean Vault'],
    highlights: ['Double height sky lounge', 'Private elevator foyer', 'Acoustic floating floors'],
  });

  // Enquiry View Modal
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [enquiryStatusFilter, setEnquiryStatusFilter] = useState<string>('All');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setProjects(getStoredProjects());
    setEnquiries(getStoredEnquiries());
    setBrandContent(getStoredBrandContent());
  };

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Content Save
  const handleSaveBrandContent = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredBrandContent(brandContent);
    showToast('Brand copy and editorial settings updated successfully!');
  };

  // Reset to Factory Defaults
  const handleResetDefaults = () => {
    if (confirm('Reset all demonstration data to default projects and enquiries?')) {
      resetStoredDataToDefault();
      loadData();
      showToast('System data reset to default demo seed.');
    }
  };

  // Open Project Modal (Add or Edit)
  const openAddProject = () => {
    setEditingProjectId(null);
    setProjectModalSection('essentials');
    setProjectForm({
      title: '',
      slug: '',
      tagline: '',
      category: 'Urban Residences',
      status: 'Under Construction',
      location: '',
      city: '',
      heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      priceRange: '₹5.5 Cr – ₹11.0 Cr',
      completionYear: 'Q4 2027',
      architect: 'ESTORA Atelier',
      shortDescription: '',
      fullOverview: '',
      featured: false,
      amenities: ['Thermal Hydrotherapy Pool', 'Private Screening Room', 'Concierge Butler Service'],
      highlights: ['Acoustic floating floors', 'Private elevator foyer'],
    });
    setIsProjectModalOpen(true);
  };

  const openEditProject = (p: Project) => {
    setEditingProjectId(p.id);
    setProjectModalSection('essentials');
    setProjectForm({ ...p });
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title || !projectForm.shortDescription) {
      alert('Please fill in title and short description');
      return;
    }

    const slug =
      projectForm.slug?.trim() ||
      projectForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    let updatedProjects: Project[];

    if (editingProjectId) {
      updatedProjects = projects.map((p) =>
        p.id === editingProjectId
          ? ({
              ...p,
              ...projectForm,
              slug,
            } as Project)
          : p
      );
      showToast(`Development "${projectForm.title}" updated.`);
    } else {
      const newProj: Project = {
        id: `proj-${Date.now().toString(36)}`,
        slug,
        title: projectForm.title || 'Untitled Residence',
        tagline: projectForm.tagline || 'Modern residential living by ESTORA.',
        category: (projectForm.category as any) || 'Urban Residences',
        status: (projectForm.status as any) || 'Under Construction',
        location: projectForm.location || 'Civic Center, Sector 10',
        city: projectForm.city || 'Metropolis Central',
        heroImage:
          projectForm.heroImage ||
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
        gallery: [
          projectForm.heroImage ||
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
        ],
        priceRange: projectForm.priceRange || '₹4.5 Cr onwards',
        completionYear: projectForm.completionYear || 'Q4 2027',
        architect: projectForm.architect || 'ESTORA Atelier',
        shortDescription: projectForm.shortDescription || '',
        fullOverview:
          projectForm.fullOverview ||
          'A landmark silhouette crafted from monolithic limestone and double-height acoustic glazing.',
        highlights: projectForm.highlights || ['Double-height terraces', 'Private elevator cores'],
        amenities: projectForm.amenities || ['Ozone Pool', 'Concierge Service'],
        specifications: [
          { category: 'Structure', details: 'Post-tensioned seismic zone V concrete frame' },
          { category: 'Finishes', details: 'Italian Botticino marble & smoked oak floors' },
        ],
        floorPlans: [],
        featured: Boolean(projectForm.featured),
      };
      updatedProjects = [newProj, ...projects];
      showToast(`New development "${projectForm.title}" created.`);
    }

    saveStoredProjects(updatedProjects);
    setProjects(updatedProjects);
    setIsProjectModalOpen(false);
  };

  const handleDeleteProject = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      const updated = projects.filter((p) => p.id !== id);
      saveStoredProjects(updated);
      setProjects(updated);
      showToast(`Development "${title}" removed.`);
    }
  };

  const handleToggleFeatured = (id: string) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, featured: !p.featured } : p
    );
    saveStoredProjects(updated);
    setProjects(updated);
    showToast('Featured status updated.');
  };

  // Enquiry status change
  const handleEnquiryStatusChange = (id: string, status: Enquiry['status']) => {
    const updated = updateStoredEnquiryStatus(id, status);
    setEnquiries(updated);
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry({ ...selectedEnquiry, status });
    }
    showToast(`Enquiry status changed to ${status}.`);
  };

  const handleDeleteEnquiry = (id: string) => {
    if (confirm('Delete this enquiry record?')) {
      const updated = deleteStoredEnquiry(id);
      setEnquiries(updated);
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry(null);
      }
      showToast('Enquiry removed.');
    }
  };

  // Filtered Enquiries
  const filteredEnquiries = enquiries.filter((e) =>
    enquiryStatusFilter === 'All' ? true : e.status === enquiryStatusFilter
  );

  // Statistics
  const activeProjectsCount = projects.filter(
    (p) => p.status === 'Under Construction' || p.status === 'Ready for Possession'
  ).length;
  const newEnquiriesCount = enquiries.filter((e) => e.status === 'New').length;

  return (
    <div className="bg-[#161D1B] text-[#F3F0E9] min-h-screen pt-24 pb-28">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#A88B65] text-white px-6 py-3.5 shadow-2xl text-xs uppercase tracking-wider font-medium flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          <span>{notification}</span>
        </div>
      )}

      {/* Admin Top Notification Banner */}
      <div className="bg-[#202A27] border-b border-white/10 px-6 sm:px-8 lg:px-12 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-2 text-[#A88B65]">
          <ShieldAlert className="w-4 h-4" />
          <span className="font-semibold tracking-wider uppercase">
            ESTORA DEMO CMS — SIMULATION MODE ACTIVE
          </span>
          <span className="text-white/40 hidden md:inline">|</span>
          <span className="text-white/60 hidden md:inline font-light">
            Changes persist in your local browser store (LocalStorage).
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleResetDefaults}
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-[11px] uppercase tracking-wider cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#A88B65]" />
            Reset Demo Data
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[#A88B65] hover:underline text-[11px] uppercase tracking-wider"
          >
            Live Public Site <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/10 gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-light text-white">
              Studio Administration Console
            </h1>
            <p className="text-xs text-[#777C77] mt-1 uppercase tracking-[0.2em]">
              Curate Developments, Enquiries, and Editorial Copy
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2.5 text-xs uppercase tracking-[0.18em] transition-all flex items-center gap-2 ${
                activeTab === 'dashboard'
                  ? 'bg-[#A88B65] text-white font-medium'
                  : 'bg-[#202A27] text-white/70 hover:text-white border border-white/5'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2.5 text-xs uppercase tracking-[0.18em] transition-all flex items-center gap-2 ${
                activeTab === 'projects'
                  ? 'bg-[#A88B65] text-white font-medium'
                  : 'bg-[#202A27] text-white/70 hover:text-white border border-white/5'
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>Projects ({projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2.5 text-xs uppercase tracking-[0.18em] transition-all flex items-center gap-2 ${
                activeTab === 'featured'
                  ? 'bg-[#A88B65] text-white font-medium'
                  : 'bg-[#202A27] text-white/70 hover:text-white border border-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Home Showcase ({projects.filter((p) => p.featured).length})</span>
            </button>

            <button
              onClick={() => setActiveTab('enquiries')}
              className={`px-4 py-2.5 text-xs uppercase tracking-[0.18em] transition-all flex items-center gap-2 relative ${
                activeTab === 'enquiries'
                  ? 'bg-[#A88B65] text-white font-medium'
                  : 'bg-[#202A27] text-white/70 hover:text-white border border-white/5'
              }`}
            >
              <MailQuestion className="w-3.5 h-3.5" />
              <span>Enquiries ({enquiries.length})</span>
              {newEnquiriesCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-amber-400 absolute top-2 right-2 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2.5 text-xs uppercase tracking-[0.18em] transition-all flex items-center gap-2 ${
                activeTab === 'content'
                  ? 'bg-[#A88B65] text-white font-medium'
                  : 'bg-[#202A27] text-white/70 hover:text-white border border-white/5'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Homepage Copy</span>
            </button>
          </div>
        </div>

        {/* TAB 1: OVERVIEW DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="pt-10 space-y-12">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#202A27] p-6 border border-white/5 shadow-md">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#777C77] block">
                  Total Developments
                </span>
                <span className="font-serif text-4xl text-white mt-2 block font-light">
                  {projects.length}
                </span>
                <div className="mt-3 text-xs text-[#A88B65]">All architectural typologies</div>
              </div>

              <div className="bg-[#202A27] p-6 border border-white/5 shadow-md">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#777C77] block">
                  Active Real Estate
                </span>
                <span className="font-serif text-4xl text-white mt-2 block font-light">
                  {activeProjectsCount}
                </span>
                <div className="mt-3 text-xs text-white/60">Construction & Ready units</div>
              </div>

              <div className="bg-[#202A27] p-6 border border-white/5 shadow-md">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#777C77] block">
                  Total Client Enquiries
                </span>
                <span className="font-serif text-4xl text-white mt-2 block font-light">
                  {enquiries.length}
                </span>
                <div className="mt-3 text-xs text-white/60">Logged through public site</div>
              </div>

              <div className="bg-[#202A27] p-6 border border-white/5 shadow-md">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#777C77] block">
                  New Unread Inquiries
                </span>
                <span className="font-serif text-4xl text-amber-400 mt-2 block font-light">
                  {newEnquiriesCount}
                </span>
                <div className="mt-3 text-xs text-amber-400/80">Requires curator follow-up</div>
              </div>
            </div>

            {/* Quick Actions & Recent Enquiries Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Recent Enquiries Strip */}
              <div className="lg:col-span-7 bg-[#202A27] p-8 border border-white/10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="font-serif text-2xl text-white font-light">
                    Recent Client Inquiries
                  </h3>
                  <button
                    onClick={() => setActiveTab('enquiries')}
                    className="text-xs uppercase tracking-wider text-[#A88B65] hover:underline"
                  >
                    View All
                  </button>
                </div>

                {enquiries.length === 0 ? (
                  <p className="text-sm text-[#777C77]">No enquiries submitted yet.</p>
                ) : (
                  <div className="space-y-4">
                    {enquiries.slice(0, 4).map((enq) => (
                      <div
                        key={enq.id}
                        onClick={() => {
                          setSelectedEnquiry(enq);
                          setActiveTab('enquiries');
                        }}
                        className="p-4 bg-[#161D1B] border border-white/5 hover:border-[#A88B65]/40 transition-colors cursor-pointer flex items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-white">{enq.name}</span>
                            <span className="text-xs text-[#777C77]">• {enq.projectName}</span>
                          </div>
                          <p className="text-xs text-white/60 line-clamp-1">{enq.message}</p>
                        </div>
                        <span
                          className={`text-[10px] uppercase tracking-wider px-2.5 py-1 border shrink-0 ${
                            enq.status === 'New'
                              ? 'border-amber-400 text-amber-400 bg-amber-400/10'
                              : 'border-white/20 text-white/70'
                          }`}
                        >
                          {enq.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Actions & Featured Developments */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#202A27] p-8 border border-white/10 space-y-6">
                  <h3 className="font-serif text-2xl text-white font-light border-b border-white/10 pb-4">
                    CMS Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={openAddProject}
                      className="w-full flex items-center justify-between p-3.5 bg-[#A88B65] hover:bg-[#8F724E] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
                    >
                      <span>Create New Development</span>
                      <Plus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveTab('content')}
                      className="w-full flex items-center justify-between p-3.5 bg-[#161D1B] hover:bg-black/50 text-white text-xs uppercase tracking-[0.18em] transition-colors border border-white/10"
                    >
                      <span>Update Hero Taglines</span>
                      <Edit3 className="w-4 h-4 text-[#A88B65]" />
                    </button>
                    <Link
                      href="/projects"
                      target="_blank"
                      className="w-full flex items-center justify-between p-3.5 bg-[#161D1B] hover:bg-black/50 text-white text-xs uppercase tracking-[0.18em] transition-colors border border-white/10"
                    >
                      <span>View Public Project Gallery</span>
                      <ArrowUpRight className="w-4 h-4 text-[#A88B65]" />
                    </Link>
                  </div>
                </div>

                <div className="p-6 bg-[#202A27] border border-white/10 text-xs text-[#777C77] space-y-2">
                  <span className="font-semibold text-white block">TUSHAR LABS Concept Project</span>
                  <p>
                    All CRUD operations are fully functional on top of simulated state. You can add new residences, update status, change editorial copy, and review user submissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS MANAGEMENT */}
        {activeTab === 'projects' && (
          <div className="pt-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl text-white font-light">
                  Development Portfolio Directory
                </h2>
                <p className="text-xs text-[#777C77] mt-1">
                  Manage live developments, featured home status, and architectural data.
                </p>
              </div>

              <button
                onClick={openAddProject}
                className="inline-flex items-center gap-2 bg-[#A88B65] hover:bg-[#8F724E] text-white px-5 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-md cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Development</span>
              </button>
            </div>

            <div className="bg-[#202A27] border border-white/10 overflow-x-auto shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#161D1B] text-[#777C77] uppercase tracking-wider text-[10px] border-b border-white/10">
                  <tr>
                    <th className="py-4 px-6">Development</th>
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6">Featured</th>
                    <th className="py-4 px-6">Valuation</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light">
                  {projects.map((proj) => (
                    <tr key={proj.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="relative w-12 h-12 bg-black shrink-0 overflow-hidden">
                            <Image
                              src={proj.heroImage}
                              alt={proj.title}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <span className="font-medium text-white block text-sm">
                              {proj.title}
                            </span>
                            <span className="text-[#777C77] text-[11px]">
                              {proj.location}, {proj.city}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6 text-white/80">{proj.category}</td>

                      <td className="py-4 px-6">
                        <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/10 text-[#A88B65]">
                          {proj.status}
                        </span>
                      </td>

                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleToggleFeatured(proj.id)}
                          className={`text-[10px] uppercase tracking-wider px-2.5 py-1 transition-colors border ${
                            proj.featured
                              ? 'bg-[#A88B65]/20 text-[#A88B65] border-[#A88B65]'
                              : 'text-white/40 border-white/10 hover:text-white'
                          }`}
                        >
                          {proj.featured ? 'Featured on Home' : 'Standard'}
                        </button>
                      </td>

                      <td className="py-4 px-6 text-[#A88B65]">{proj.priceRange}</td>

                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end space-x-3">
                          <Link
                            href={`/projects/${proj.slug}`}
                            target="_blank"
                            title="Preview Public Page"
                            className="p-1.5 text-white/60 hover:text-white transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => openEditProject(proj)}
                            title="Edit Project"
                            className="p-1.5 text-[#A88B65] hover:text-white transition-colors"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(proj.id, proj.title)}
                            title="Delete Project"
                            className="p-1.5 text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB: FEATURED HOME SHOWCASE MANAGER */}
        {activeTab === 'featured' && (
          <div className="pt-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A88B65] font-semibold block">
                  Public Homepage Curation
                </span>
                <h2 className="font-serif text-3xl text-white font-light mt-1">
                  Homepage Project Showcase Manager
                </h2>
                <p className="text-xs text-[#777C77] mt-1 max-w-2xl">
                  Decide exactly which developments appear on the primary ESTORA homepage. Click any project card below to instantly feature or hide it.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Link
                  href="/"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#A88B65] hover:bg-[#8F724E] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  <span>Preview Live Homepage</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => handleToggleFeatured(proj.id)}
                  className={`group relative overflow-hidden border p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    proj.featured
                      ? 'bg-[#202A27] border-[#A88B65] shadow-2xl ring-1 ring-[#A88B65]'
                      : 'bg-[#161D1B] border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                      <Image
                        src={proj.heroImage}
                        alt={proj.title}
                        fill
                        sizes="400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-[#202A27]/90 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#A88B65] border border-white/10">
                        {proj.status}
                      </div>

                      <div className="absolute top-3 right-3">
                        <span
                          className={`text-[10px] uppercase tracking-wider px-2.5 py-1 font-semibold ${
                            proj.featured
                              ? 'bg-[#A88B65] text-white'
                              : 'bg-black/70 text-white/60'
                          }`}
                        >
                          {proj.featured ? 'Featured on Home' : 'Hidden from Home'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#A88B65] block">
                        {proj.category} • {proj.city}
                      </span>
                      <h3 className="font-serif text-2xl text-white font-normal mt-1">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-[#777C77] line-clamp-2 mt-2 font-light">
                        {proj.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-white/60 font-light">{proj.priceRange}</span>
                    <button
                      type="button"
                      className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold transition-colors ${
                        proj.featured
                          ? 'bg-[#A88B65]/20 text-[#A88B65] border border-[#A88B65]'
                          : 'bg-white/5 text-white/50 border border-white/10'
                      }`}
                    >
                      {proj.featured ? 'Click to Hide' : 'Click to Showcase'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ENQUIRIES MANAGEMENT */}
        {activeTab === 'enquiries' && (
          <div className="pt-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl text-white font-light">
                  Client Enquiry Management
                </h2>
                <p className="text-xs text-[#777C77] mt-1">
                  Private dossiers submitted via project detail pages and consultation requests.
                </p>
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase tracking-wider text-[#777C77]">Filter:</span>
                {['All', 'New', 'In Review', 'Contacted', 'Closed'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setEnquiryStatusFilter(st)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-wider transition-colors ${
                      enquiryStatusFilter === st
                        ? 'bg-[#A88B65] text-white font-medium'
                        : 'bg-[#202A27] text-white/70 hover:text-white border border-white/5'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#202A27] border border-white/10 overflow-x-auto shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#161D1B] text-[#777C77] uppercase tracking-wider text-[10px] border-b border-white/10">
                  <tr>
                    <th className="py-4 px-6">Client Name</th>
                    <th className="py-4 px-6">Development</th>
                    <th className="py-4 px-6">Contact Coordinates</th>
                    <th className="py-4 px-6">Site Visit Target</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light">
                  {filteredEnquiries.map((enq) => (
                    <tr
                      key={enq.id}
                      onClick={() => setSelectedEnquiry(enq)}
                      className="hover:bg-white/[0.02] transition-colors cursor-pointer"
                    >
                      <td className="py-4 px-6 font-medium text-white">{enq.name}</td>
                      <td className="py-4 px-6 text-[#A88B65]">{enq.projectName || 'General'}</td>
                      <td className="py-4 px-6 text-white/70">
                        <div>{enq.email}</div>
                        <div className="text-[11px] text-[#777C77]">{enq.phone}</div>
                      </td>
                      <td className="py-4 px-6 text-white/60">{enq.preferredDate || 'Flexible'}</td>
                      <td className="py-4 px-6">
                        <select
                          value={enq.status}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) =>
                            handleEnquiryStatusChange(enq.id, e.target.value as any)
                          }
                          className="px-2.5 py-1 bg-[#161D1B] border border-white/15 text-[11px] uppercase tracking-wider text-[#A88B65] focus:outline-none"
                        >
                          <option value="New">New</option>
                          <option value="In Review">In Review</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteEnquiry(enq.id);
                          }}
                          className="p-1.5 text-red-400 hover:text-red-300 transition-colors"
                          title="Delete Enquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Selected Enquiry Detail Panel */}
            {selectedEnquiry && (
              <div className="mt-8 bg-[#202A27] p-8 border border-[#A88B65] shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#A88B65] block">
                      Enquiry Detail Record
                    </span>
                    <h3 className="font-serif text-2xl text-white font-normal mt-1">
                      {selectedEnquiry.name} — {selectedEnquiry.projectName}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedEnquiry(null)}
                    className="text-white/60 hover:text-white p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                  <div>
                    <span className="text-[#777C77] uppercase tracking-wider block">Email</span>
                    <span className="text-white mt-1 block">{selectedEnquiry.email}</span>
                  </div>
                  <div>
                    <span className="text-[#777C77] uppercase tracking-wider block">Telephone</span>
                    <span className="text-white mt-1 block">{selectedEnquiry.phone}</span>
                  </div>
                  <div>
                    <span className="text-[#777C77] uppercase tracking-wider block">
                      Preferred Date
                    </span>
                    <span className="text-white mt-1 block">
                      {selectedEnquiry.preferredDate || 'Not specified'}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-[#161D1B] border border-white/5 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#A88B65] block">
                    Message / Client Request:
                  </span>
                  <p className="text-sm text-white/90 font-light leading-relaxed">
                    {selectedEnquiry.message}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: HOMEPAGE CONTENT EDITING */}
        {activeTab === 'content' && (
          <div className="pt-10 max-w-4xl space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-white font-light">
                Homepage Editorial Copy
              </h2>
              <p className="text-xs text-[#777C77] mt-1">
                Customize hero headlines, philosophy paragraphs, and advisory CTAs.
              </p>
            </div>

            <form onSubmit={handleSaveBrandContent} className="space-y-6 bg-[#202A27] p-8 sm:p-10 border border-white/10">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#A88B65] mb-2 font-medium">
                  Hero Tagline / Headline
                </label>
                <input
                  type="text"
                  value={brandContent.heroTagline}
                  onChange={(e) =>
                    setBrandContent({ ...brandContent, heroTagline: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white text-sm focus:outline-none focus:border-[#A88B65]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#A88B65] mb-2 font-medium">
                  Hero Subheadline
                </label>
                <textarea
                  rows={2}
                  value={brandContent.heroSubheadline}
                  onChange={(e) =>
                    setBrandContent({ ...brandContent, heroSubheadline: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white text-sm focus:outline-none focus:border-[#A88B65]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#A88B65] mb-2 font-medium">
                  Brand Section Headline
                </label>
                <input
                  type="text"
                  value={brandContent.brandHeadline}
                  onChange={(e) =>
                    setBrandContent({ ...brandContent, brandHeadline: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white text-sm focus:outline-none focus:border-[#A88B65]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#A88B65] mb-2 font-medium">
                  Brand Philosophy Statement
                </label>
                <textarea
                  rows={3}
                  value={brandContent.brandPhilosophy}
                  onChange={(e) =>
                    setBrandContent({ ...brandContent, brandPhilosophy: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white text-sm focus:outline-none focus:border-[#A88B65]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#A88B65] mb-2 font-medium">
                  Consultation Banner Headline
                </label>
                <input
                  type="text"
                  value={brandContent.consultationHeadline}
                  onChange={(e) =>
                    setBrandContent({ ...brandContent, consultationHeadline: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white text-sm focus:outline-none focus:border-[#A88B65]"
                />
              </div>

              {/* Homepage Featured Projects Manager */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#A88B65] font-semibold block">
                    Homepage Showcase Manager
                  </span>
                  <h3 className="font-serif text-xl text-white font-normal mt-1">
                    Select Which Projects Appear on the Public Homepage
                  </h3>
                  <p className="text-xs text-[#777C77]">
                    Toggle below to instantly showcase or hide specific residential developments on the home screen:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => handleToggleFeatured(proj.id)}
                      className={`p-4 border transition-all cursor-pointer flex items-center justify-between ${
                        proj.featured
                          ? 'bg-[#A88B65]/15 border-[#A88B65] text-white'
                          : 'bg-[#161D1B] border-white/10 text-white/60 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative w-12 h-12 bg-black shrink-0 overflow-hidden">
                          <Image
                            src={proj.heroImage}
                            alt={proj.title}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <span className="font-medium text-white block text-sm">
                            {proj.title}
                          </span>
                          <span className="text-[11px] text-[#A88B65]">
                            {proj.category} • {proj.city}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span
                          className={`text-[10px] uppercase tracking-wider px-2.5 py-1 border font-medium ${
                            proj.featured
                              ? 'bg-[#A88B65] text-white border-[#A88B65]'
                              : 'border-white/20 text-white/50'
                          }`}
                        >
                          {proj.featured ? 'Featured' : 'Hidden'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#A88B65] hover:bg-[#8F724E] text-white text-xs uppercase tracking-[0.22em] font-medium transition-colors shadow-lg cursor-pointer"
                >
                  Save Brand Content Changes
                </button>

                <Link
                  href="/"
                  target="_blank"
                  className="text-xs uppercase tracking-[0.18em] text-[#A88B65] hover:underline inline-flex items-center gap-1"
                >
                  View Public Live Homepage <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* FULL-SCREEN RESPONSIVE PROJECT ADD / EDIT DRAWER / MODAL (NEVER CUT OFF) */}
      {isProjectModalOpen && (
        <div className="estora-modal-overlay">
          <div className="estora-modal-card">
            {/* Modal Header */}
            <div className="estora-modal-header">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A88B65] font-semibold block">
                  Project Management Suite
                </span>
                <h3 className="font-serif text-2xl text-white font-light">
                  {editingProjectId ? `Edit: ${projectForm.title}` : 'Create New Luxury Development'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsProjectModalOpen(false)}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-[#A88B65] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Internal Navigation Tabs */}
            <div className="estora-modal-tabs">
              <button
                type="button"
                onClick={() => setProjectModalSection('essentials')}
                className={`estora-modal-tab-btn ${projectModalSection === 'essentials' ? 'active' : ''}`}
              >
                1. Identity & Location
              </button>
              <button
                type="button"
                onClick={() => setProjectModalSection('specs')}
                className={`estora-modal-tab-btn ${projectModalSection === 'specs' ? 'active' : ''}`}
              >
                2. Descriptions & Valuations
              </button>
              <button
                type="button"
                onClick={() => setProjectModalSection('media')}
                className={`estora-modal-tab-btn ${projectModalSection === 'media' ? 'active' : ''}`}
              >
                3. Imagery & Highlights
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <form onSubmit={handleSaveProject} className="estora-modal-form">
              <div className="estora-modal-body space-y-6 text-xs">
                {/* SECTION 1: ESSENTIALS */}
                {projectModalSection === 'essentials' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                          Project Title *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. The Grand Arc"
                          value={projectForm.title}
                          onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                          className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white placeholder-white/20 focus:outline-none focus:border-[#A88B65]"
                        />
                      </div>

                      <div>
                        <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                          URL Slug (Web Identifier)
                        </label>
                        <input
                          type="text"
                          placeholder="auto-generated-if-blank"
                          value={projectForm.slug}
                          onChange={(e) => setProjectForm({ ...projectForm, slug: e.target.value })}
                          className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white placeholder-white/20 focus:outline-none focus:border-[#A88B65]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                          Typology / Category
                        </label>
                        <select
                          value={projectForm.category}
                          onChange={(e) =>
                            setProjectForm({ ...projectForm, category: e.target.value as any })
                          }
                          className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white focus:outline-none focus:border-[#A88B65]"
                        >
                          <option value="Urban Residences">Urban Residences</option>
                          <option value="Sanctuary Villas">Sanctuary Villas</option>
                          <option value="Sky Apartments">Sky Apartments</option>
                          <option value="Waterfront">Waterfront</option>
                        </select>
                      </div>

                      <div>
                        <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                          Development Status
                        </label>
                        <select
                          value={projectForm.status}
                          onChange={(e) =>
                            setProjectForm({ ...projectForm, status: e.target.value as any })
                          }
                          className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white focus:outline-none focus:border-[#A88B65]"
                        >
                          <option value="Under Construction">Under Construction</option>
                          <option value="Ready for Possession">Ready for Possession</option>
                          <option value="Upcoming Launch">Upcoming Launch</option>
                          <option value="Sold Out">Sold Out</option>
                        </select>
                      </div>

                      <div>
                        <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                          Target Completion
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Q4 2027"
                          value={projectForm.completionYear}
                          onChange={(e) =>
                            setProjectForm({ ...projectForm, completionYear: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white focus:outline-none focus:border-[#A88B65]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                          Location Address / Enclave
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Kensington Enclave, Sector 42"
                          value={projectForm.location}
                          onChange={(e) =>
                            setProjectForm({ ...projectForm, location: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white focus:outline-none focus:border-[#A88B65]"
                        />
                      </div>

                      <div>
                        <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Metropolis Central"
                          value={projectForm.city}
                          onChange={(e) => setProjectForm({ ...projectForm, city: e.target.value })}
                          className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white focus:outline-none focus:border-[#A88B65]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                        Concept Tagline
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Contemporary urban residences shaped by monolithic limestone."
                        value={projectForm.tagline}
                        onChange={(e) => setProjectForm({ ...projectForm, tagline: e.target.value })}
                        className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white focus:outline-none focus:border-[#A88B65]"
                      />
                    </div>
                  </div>
                )}

                {/* SECTION 2: SPECS & DESCRIPTIONS */}
                {projectModalSection === 'specs' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                          Estimated Valuation Range
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. ₹4.8 Cr – ₹9.5 Cr (Concept Value)"
                          value={projectForm.priceRange}
                          onChange={(e) =>
                            setProjectForm({ ...projectForm, priceRange: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white focus:outline-none focus:border-[#A88B65]"
                        />
                      </div>

                      <div>
                        <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                          Lead Architect / Atelier
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Studio Aurelius & Partners"
                          value={projectForm.architect}
                          onChange={(e) =>
                            setProjectForm({ ...projectForm, architect: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white focus:outline-none focus:border-[#A88B65]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                        Short Editorial Summary (For Listing Cards) *
                      </label>
                      <textarea
                        rows={2}
                        required
                        placeholder="Concise overview of the architectural form and residence options..."
                        value={projectForm.shortDescription}
                        onChange={(e) =>
                          setProjectForm({ ...projectForm, shortDescription: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white focus:outline-none focus:border-[#A88B65]"
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                        Full Architectural Narrative (Detail Page Overview)
                      </label>
                      <textarea
                        rows={4}
                        placeholder="In-depth narrative covering spatial flow, natural lighting, acoustic privacy, and stone sourcing..."
                        value={projectForm.fullOverview}
                        onChange={(e) =>
                          setProjectForm({ ...projectForm, fullOverview: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white focus:outline-none focus:border-[#A88B65]"
                      />
                    </div>

                    <div className="p-4 bg-[#161D1B] border border-white/10 flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="featured-toggle"
                        checked={projectForm.featured}
                        onChange={(e) =>
                          setProjectForm({ ...projectForm, featured: e.target.checked })
                        }
                        className="w-4 h-4 accent-[#A88B65] cursor-pointer"
                      />
                      <label htmlFor="featured-toggle" className="text-white text-xs cursor-pointer">
                        Feature this development on the homepage showcase reel
                      </label>
                    </div>
                  </div>
                )}

                {/* SECTION 3: MEDIA & HIGHLIGHTS */}
                {projectModalSection === 'media' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block uppercase tracking-wider text-[#A88B65] mb-2 font-medium">
                        Hero Architectural Image URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://images.unsplash.com/..."
                        value={projectForm.heroImage}
                        onChange={(e) =>
                          setProjectForm({ ...projectForm, heroImage: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white focus:outline-none focus:border-[#A88B65]"
                      />
                      {projectForm.heroImage && (
                        <div className="mt-3 relative w-full h-44 bg-black overflow-hidden border border-white/10 shadow-inner">
                          <Image
                            src={projectForm.heroImage}
                            alt="Live Hero Preview"
                            fill
                            sizes="600px"
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-black/80 px-2.5 py-1 text-[9px] uppercase tracking-wider text-[#A88B65]">
                            Live Photography Preview
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-4 bg-[#161D1B] border border-white/10 space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-[#A88B65] font-semibold block">
                        Included Key Highlights & Privileges
                      </span>
                      <p className="text-[#777C77] leading-relaxed">
                        Default architectural highlights configured: Double-height sky lounges, private elevator foyer cores, Schüco triple-glazed envelope, and thermal ozone swimming pavilion.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer with Controls */}
              <div className="estora-modal-footer">
                <div className="flex items-center space-x-2">
                  {projectModalSection !== 'essentials' && (
                    <button
                      type="button"
                      onClick={() =>
                        setProjectModalSection(
                          projectModalSection === 'media' ? 'specs' : 'essentials'
                        )
                      }
                      className="px-4 py-2 border border-white/20 text-white/80 hover:text-white transition-colors text-xs uppercase tracking-wider"
                    >
                      Back
                    </button>
                  )}
                  {projectModalSection !== 'media' && (
                    <button
                      type="button"
                      onClick={() =>
                        setProjectModalSection(
                          projectModalSection === 'essentials' ? 'specs' : 'media'
                        )
                      }
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white transition-colors text-xs uppercase tracking-wider"
                    >
                      Next Step
                    </button>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsProjectModalOpen(false)}
                    className="px-4 py-2 border border-white/20 text-white/70 hover:text-white transition-colors text-xs uppercase tracking-wider"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 sm:px-6 py-2 bg-[#A88B65] hover:bg-[#8F724E] text-white uppercase tracking-wider font-semibold shadow-lg transition-colors cursor-pointer text-xs"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
