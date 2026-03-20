import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '../components/ui';

export default function EnhanceExpedition() {
  return ( <Layout>


<main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">
<div className="flex flex-col lg:flex-row gap-16">

<div className="flex-1 space-y-20">



<section>
<div className="relative group overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_8px_32px_0_rgba(29,28,24,0.04)]">
<div className="flex flex-col md:flex-row">
<div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
<img alt="Savanna Landscape" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" data-alt="Golden savanna landscape with acacia tree at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq5OE4e0zTy9YZsKg_WVuYc3H65w345YA2Gvl-VfURyMt4t4it0-d9BxyRIly3b3hRorTr0tcsV13qf7nVq9IHo5qgWeGOAZQFD_qYG1YuusAwheFfEoKY7UoF4_FFi_XnNhrcg5x4SAOTjzCBETP3XqsJTaU5YnMNHz5Y1BHaNTcMC-LSzvQQsWZGN9wAChLPFZquMYkX1mfvk441uKxcYlPNU0D4xJEPvmzsBL85EonlF82SFLPrBcsh3wV7wVg001KPjK7EdUeP" />
</div>
<div className="md:w-1/2 p-10 flex flex-col justify-center">
<div className="inline-flex items-center space-x-2 text-secondary mb-4">
<span className="material-symbols-outlined material-fill text-sm" data-icon="explore">explore</span>
<span className="text-xs font-bold tracking-widest uppercase">Base Expedition</span>
</div>
<h2 className="text-3xl font-bold text-primary mb-4 leading-tight">14-Day Kenya &amp; Tanzania Safari</h2>
<p className="text-on-surface-variant mb-8 font-body">An extensive traversal across the Maasai Mara and Serengeti plains, focusing on the Great Migration and peak predator sightings.</p>
<div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
<div>
<p className="text-xs text-on-surface-variant uppercase tracking-tighter mb-1">Duration</p>
<p className="font-bold text-primary">14 Days / 13 Nights</p>
</div>
<div className="text-right">
<p className="text-xs text-on-surface-variant uppercase tracking-tighter mb-1">Starting From</p>
<p className="text-2xl font-bold text-primary">$12,450 <span className="text-sm font-normal text-on-surface-variant">pp</span></p>
</div>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-end justify-between mb-8 border-b border-outline-variant/15 pb-4">
<h3 className="text-2xl font-bold text-primary">Premium Enhancements</h3>
<p className="text-sm text-on-surface-variant italic">Select the rituals to complete your journey</p>
</div>
<div className="space-y-6">

<label className="flex items-start p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group relative">
<div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
<div className="w-16 h-16 rounded-full bg-tertiary-fixed-dim/30 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined material-fill text-tertiary text-3xl" data-icon="airballoon">air</span>
</div>
<div className="flex-1">
<h4 className="text-xl font-bold text-primary leading-tight">Hot Air Balloon Safari (Maasai Mara)</h4>
<p className="text-on-surface-variant text-sm mt-1">Includes a champagne breakfast in the wild after your sunrise flight.</p>
</div>
<div className="text-right md:min-w-[120px]">
<p className="text-xl font-bold text-primary">$450 <span className="text-xs font-normal text-on-surface-variant">pp</span></p>
</div>
</div>
<div className="ml-8 flex items-center h-full">
<input checked="" className="w-6 h-6 rounded border-outline-variant text-primary focus:ring-surface-tint" type="checkbox" />
</div>
</label>

<label className="flex items-start p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group relative">
<div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
<div className="w-16 h-16 rounded-full bg-tertiary-fixed-dim/30 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined material-fill text-tertiary text-3xl" data-icon="photo_camera">photo_camera</span>
</div>
<div className="flex-1">
<h4 className="text-xl font-bold text-primary leading-tight">Private Professional Photographer</h4>
<p className="text-on-surface-variant text-sm mt-1">Capture every moment with a dedicated pro and a curated digital album.</p>
</div>
<div className="text-right md:min-w-[120px]">
<p className="text-xl font-bold text-primary">$1,200 <span className="text-xs font-normal text-on-surface-variant">total</span></p>
</div>
</div>
<div className="ml-8 flex items-center h-full">
<input className="w-6 h-6 rounded border-outline-variant text-primary focus:ring-surface-tint" type="checkbox" />
</div>
</label>

<label className="flex items-start p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group relative">
<div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
<div className="w-16 h-16 rounded-full bg-tertiary-fixed-dim/30 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined material-fill text-tertiary text-3xl" data-icon="groups">groups</span>
</div>
<div className="flex-1">
<h4 className="text-xl font-bold text-primary leading-tight">Cultural Maasai Village Visit</h4>
<p className="text-on-surface-variant text-sm mt-1">An immersive community experience learning traditions and artisanal crafts.</p>
</div>
<div className="text-right md:min-w-[120px]">
<p className="text-xl font-bold text-primary">$50 <span className="text-xs font-normal text-on-surface-variant">pp</span></p>
</div>
</div>
<div className="ml-8 flex items-center h-full">
<input checked="" className="w-6 h-6 rounded border-outline-variant text-primary focus:ring-surface-tint" type="checkbox" />
</div>
</label>

<label className="flex items-start p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group relative">
<div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
<div className="w-16 h-16 rounded-full bg-tertiary-fixed-dim/30 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined material-fill text-tertiary text-3xl" data-icon="spa">spa</span>
</div>
<div className="flex-1">
<h4 className="text-xl font-bold text-primary leading-tight">Luxury Hot Springs Detox</h4>
<p className="text-on-surface-variant text-sm mt-1">Afternoon relaxation at Naivasha natural thermal pools with mineral treatment.</p>
</div>
<div className="text-right md:min-w-[120px]">
<p className="text-xl font-bold text-primary">$150 <span className="text-xs font-normal text-on-surface-variant">pp</span></p>
</div>
</div>
<div className="ml-8 flex items-center h-full">
<input className="w-6 h-6 rounded border-outline-variant text-primary focus:ring-surface-tint" type="checkbox" />
</div>
</label>
</div>
</section>
</div>

<aside className="lg:w-[400px]">
<div className="sticky top-32 p-10 rounded-xl bg-primary-container text-on-primary shadow-2xl overflow-hidden">

<div className="absolute inset-0 opacity-5 pointer-events-none">
<svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<pattern height="10" id="pattern-grid" patternUnits="userSpaceOnUse" width="10" x="0" y="0">
<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
<rect fill="url(#pattern-grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-bold font-headline border-b border-on-primary/10 pb-6 mb-8 uppercase tracking-widest text-sm">Expedition Summary</h3>
<div className="space-y-6">
<div className="flex justify-between items-center group">
<span className="text-on-primary-container text-sm font-label uppercase tracking-tighter">Base Investment</span>
<span className="font-bold text-lg">$12,450.00</span>
</div>
<div className="py-6 border-y border-on-primary/10">
<span className="text-on-primary-container text-xs font-bold uppercase tracking-widest mb-4 block">Selected Add-ons</span>
<ul className="space-y-4">
<li className="flex justify-between text-sm items-start">
<span className="max-w-44 text-on-primary/80">Hot Air Balloon Safari</span>
<span className="font-semibold">+$450.00</span>
</li>
<li className="flex justify-between text-sm items-start">
<span className="max-w-44 text-on-primary/80">Cultural Maasai Visit</span>
<span className="font-semibold">+$50.00</span>
</li>
</ul>
</div>
<div className="pt-4 pb-10">
<div className="flex justify-between items-baseline">
<span className="text-lg font-headline italic">Total Investment</span>
<div className="text-right">
<span className="text-4xl font-bold">$12,950.00</span>
<p className="text-xs uppercase tracking-widest text-on-primary-container mt-1">Per Person • USD</p>
</div>
</div>
</div>

<Button variant="secondary" className="w-full bg-surface text-primary py-5 rounded-md font-bold tracking-[0.15em] uppercase hover:bg-surface-container-highest transition-all duration-300 shadow-xl flex items-center justify-center space-x-3 group" >
<span>Proceed to Summary</span>
<span className="material-symbols-outlined material-fill text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</Button>
<p className="text-center text-xs text-on-primary/40 uppercase tracking-widest mt-6">Secure Booking • Aventara Platinum Protection</p>
</div>
</div>
</div>
</aside>
</div>
</main>


</Layout>
  );
}