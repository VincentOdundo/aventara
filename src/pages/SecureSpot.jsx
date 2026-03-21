import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '../components/ui';

export default function SecureSpot() {
  return ( <Layout>


<main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">


<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-7 space-y-12">
<section>
<h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 -tracking-tight">Guest Information</h1>
<p className="text-on-surface-variant text-lg max-w-xl">Please ensure traveler details match your official passport to ensure seamless entry into the Serengeti reserves.</p>
</section>
<form className="space-y-10">

<div className="p-8 rounded-xl bg-surface-container-lowest shadow-[0_8px_32px_0_rgba(29,28,24,0.04)]">
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined material-fill text-tertiary-container" data-icon="person">person</span>
<h3 className="text-xl font-bold">Lead Explorer</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-bold tracking-wide uppercase text-on-surface-variant/70">First Name</label>
<input className="bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-surface-tint" placeholder="e.g. Julian" type="text" />
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold tracking-wide uppercase text-on-surface-variant/70">Last Name</label>
<input className="bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-surface-tint" placeholder="e.g. Thorne" type="text" />
</div>
<div className="flex flex-col gap-2 md:col-span-2">
<label className="text-xs font-bold tracking-wide uppercase text-on-surface-variant/70">Email Address</label>
<input className="bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-surface-tint" placeholder="julian.thorne@luxurytravel.com" type="email" />
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold tracking-wide uppercase text-on-surface-variant/70">Passport Number</label>
<input className="bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-surface-tint" placeholder="XXXX-XXXX" type="text" />
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold tracking-wide uppercase text-on-surface-variant/70">Nationality</label>
<select className="bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-surface-tint appearance-none">
<option>United Kingdom</option>
<option>United States</option>
<option>Germany</option>
<option>France</option>
</select>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-2xl font-bold">Expedition Preferences</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<Button variant="secondary" className="p-4 rounded-xl border-2 border-primary bg-surface-container-lowest text-left transition-all"  type="button">
<span className="material-symbols-outlined material-fill block mb-2" data-icon="restaurant">restaurant</span>
<span className="font-bold text-sm">Fine Dining</span>
<p className="text-xs text-on-surface-variant">Gourmet bush meals</p>
</Button>
<Button variant="primary" className="p-4 rounded-xl border border-outline-variant bg-surface hover:border-primary transition-all text-left"  type="button">
<span className="material-symbols-outlined material-fill block mb-2" data-icon="spa">spa</span>
<span className="font-bold text-sm">Wellness Focus</span>
<p className="text-xs text-on-surface-variant">Morning yoga &amp; spa</p>
</Button>
<Button variant="primary" className="p-4 rounded-xl border border-outline-variant bg-surface hover:border-primary transition-all text-left"  type="button">
<span className="material-symbols-outlined material-fill block mb-2" data-icon="camera">camera</span>
<span className="font-bold text-sm">Photography</span>
<p className="text-xs text-on-surface-variant">Professional gear rentals</p>
</Button>
</div>
</div>

<div className="flex items-center justify-between pt-8">
<Button variant="primary" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"  type="button">
<span className="material-symbols-outlined material-fill" data-icon="arrow_back">arrow_back</span>
                            Back to Safari Details
                        </Button>
<Button variant="primary" className="px-10 py-4 rounded-md font-bold text-lg hover:bg-primary-container transition-all duration-300 shadow-xl"  type="submit">
                            Proceed to Payment
                        </Button>
</div>
</form>
</div>

<aside className="lg:col-span-5 lg:sticky lg:top-[80px]">
<div className="bg-surface-container rounded-xl overflow-hidden">

<div className="relative h-48 w-full">
<img alt="Serengeti Sunset" className="w-full h-full object-cover" data-alt="Majestic sunset over the African savanna" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlwz3-X8AKMh_GZoNPaynDPHLN9uXsrjC3z9zmfkkwUXfKT2vWMwVw8FxCqrmMlBiYtMS18W-qdbIfR_JhQ-DkQMRFvkZUt_hRAouy0-979XOqvbvWopOdWfSr90CT-VabYl_mFP8onGEwTDSgxth3b4f7dMu5Wlrz_PO1AL5D9gzL1f3ut6TVsG1Ri7r1kyFalIcDTzd5mzQUD3UP145DSEUkMUs2LBcps_OKRJ-KaEqTgN01JLPhHWvszz1Zsy5zWbvULwfUH3zA" />
<div className="absolute bottom-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded text-xs font-bold tracking-widest uppercase">14 Day Expedition</div>
</div>
<div className="p-8 space-y-8">
<div>
<h2 className="text-3xl font-bold mb-2">The Serengeti Majesty</h2>
<p className="text-on-surface-variant italic">From Amboseli to the Ngorongoro Crater</p>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center py-3 border-b border-outline-variant/30">
<span className="text-on-surface-variant">Departure</span>
<span className="font-bold">Oct 14, 2024</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-outline-variant/30">
<span className="text-on-surface-variant">Explorers</span>
<span className="font-bold">2 Adults</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-outline-variant/30">
<span className="text-on-surface-variant">Accommodation</span>
<span className="font-bold">Lusso Tented Suite</span>
</div>
</div>
<div className="bg-surface-container-highest p-6 rounded-xl space-y-4">
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Base Rate</span>
<span className="font-medium">$12,400.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Conservation Fees</span>
<span className="font-medium">$850.00</span>
</div>
<div className="pt-4 border-t border-outline-variant flex justify-between items-end">
<div>
<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Total Investment</span>
<div className="text-3xl font-bold text-primary">$13,250.00</div>
</div>
<span className="text-xs font-medium text-on-surface-variant mb-1">USD</span>
</div>
</div>

<div className="flex items-center gap-6 opacity-60 grayscale">
<span className="material-symbols-outlined material-fill" data-icon="verified_user">verified_user</span>
<span className="material-symbols-outlined material-fill" data-icon="credit_card">credit_card</span>
<span className="material-symbols-outlined material-fill" data-icon="eco">eco</span>
<span className="material-symbols-outlined material-fill" data-icon="support_agent">support_agent</span>
</div>
</div>
</div>

<div className="mt-8 p-6 bg-tertiary-fixed text-on-tertiary-fixed rounded-xl flex items-center gap-4">
<div className="p-3 bg-on-tertiary-fixed text-tertiary-fixed rounded-full">
<span className="material-symbols-outlined material-fill" data-icon="headset_mic">headset_mic</span>
</div>
<div>
<div className="font-bold">Need assistance?</div>
<p className="text-sm opacity-80">Our expedition coordinators are available 24/7.</p>
</div>
</div>
</aside>
</div>
</main>


</Layout>
  );
}