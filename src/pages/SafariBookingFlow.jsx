import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '../components/ui';

export default function SafariBookingFlow() {
  return ( <Layout>


<main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">

<section className="mb-16">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<span className="text-secondary font-label font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Curated Journeys</span>
<h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tight leading-tight">
                        Discover the <span className="italic font-normal">Wild</span>
</h1>
</div>
<div className="flex items-center gap-4 text-on-surface-variant font-body text-sm">
<span className="font-bold">24</span> Expeditions found in East Africa
                </div>
</div>
</section>
<div className="flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-72 flex-shrink-0">
<div className="sticky top-[80px] space-y-10">
<div>
<h3 className="font-headline text-xl font-bold mb-6 text-primary">Refine Expedition</h3>

<div className="mb-8">
<label className="block font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Destination</label>
<div className="space-y-3">
<label className="flex items-center group cursor-pointer">
<input checked="" className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" />
<span className="ml-3 font-body text-sm text-on-surface group-hover:text-primary transition-colors">Kenya</span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" />
<span className="ml-3 font-body text-sm text-on-surface group-hover:text-primary transition-colors">Tanzania</span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" />
<span className="ml-3 font-body text-sm text-on-surface group-hover:text-primary transition-colors">Rwanda</span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" />
<span className="ml-3 font-body text-sm text-on-surface group-hover:text-primary transition-colors">Botswana</span>
</label>
</div>
</div>

<div className="mb-8">
<label className="block font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Duration</label>
<select className="w-full bg-surface-container-high border-none rounded-lg font-body text-sm py-3 px-4 focus:ring-2 focus:ring-surface-tint">
<option>All Durations</option>
<option>1-4 Days (Quick Trips)</option>
<option>5-10 Days (Classic)</option>
<option>11+ Days (Grand Safaris)</option>
</select>
</div>

<div className="mb-8">
<label className="block font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Price Range (USD)</label>
<div className="mt-4 px-2">
<input className="w-full h-1 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
<div className="flex justify-between mt-4 font-body text-sm text-outline font-medium">
<span>$1,200</span>
<span>$15,000+</span>
</div>
</div>
</div>
<Button variant="primary" className="w-full py-4 text-xs font-bold uppercase tracking-widest border border-outline-variant hover:bg-primary hover:text-on-primary transition-all duration-300" >
                            Clear All Filters
                        </Button>
</div>

<div className="bg-tertiary-container rounded-xl p-6 text-on-tertiary-container relative overflow-hidden">
<div className="relative z-10">
<h4 className="font-headline text-lg font-bold mb-2">Need a Private Guide?</h4>
<p className="font-body text-xs opacity-80 leading-relaxed mb-4">Tailor your expedition with our expert conservationists.</p>
<a className="text-xs font-bold underline underline-offset-4 decoration-secondary" href="#">Inquire Now</a>
</div>
<div className="absolute -bottom-4 -right-4 opacity-10">
<span className="material-symbols-outlined material-fill text-8xl" data-icon="explore">explore</span>
</div>
</div>
</div>
</aside>

<div className="flex-1">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(29,28,24,0.04)] hover:shadow-xl transition-all duration-500">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Golden savanna landscape with a single acacia tree" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkgrelt96OOVigHmbWlZRK3b_voGzdAsz6rGb0hoWoN63E1g2dBOh8jGOsc9MBC5_Je3raAsVcKVPRIW-Y52QjlkG-FCUK0fiFFuyC3wNaM4GDa5IM4bBhY3Q627BiDvv7-G4ATjOwQXzo_31YixS-eYl0_iYlMHPn97braiE1kI-F_-NHF0w4Q_B8PcDEjK5FcE5DmnJnhSjw0r5OfltZ-PB9Vw8hLYbf9oiLyEBWeFA2Ru3dCtN15C8CrLkn_cgKGWhlYtBIMSn5" />
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-surface/80 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-tighter text-primary rounded-full">Top Rated</span>
<span className="bg-secondary/80 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-tighter text-white rounded-full">14 Days</span>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="mb-4">
<div className="flex items-center gap-1 text-secondary-container mb-2">
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="text-xs font-bold text-outline ml-2">(48 Reviews)</span>
</div>
<h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">14-Day Kenya &amp; Tanzania Safari</h3>
<p className="text-on-surface-variant font-body text-sm mt-3 line-clamp-2">A comprehensive journey through the Great Migration corridor, from Amboseli's elephants to the Ngorongoro Crater.</p>
</div>
<div className="mt-auto space-y-4">
<div className="flex flex-wrap gap-x-4 gap-y-2 py-4 border-t border-outline-variant/20">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined material-fill text-outline text-lg" data-icon="bed">bed</span>
<span className="text-xs font-medium text-on-surface-variant">Luxury Lodges</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined material-fill text-outline text-lg" data-icon="group">group</span>
<span className="text-xs font-medium text-on-surface-variant">Max 6 People</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-xs uppercase font-bold text-outline tracking-wider block">From</span>
<span className="text-xl font-headline font-bold text-primary">$8,450 <span className="text-xs font-body font-normal text-outline">pp</span></span>
</div>
<Button variant="primary" className="h-12 px-6 rounded-md font-body text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all" >
                                        View Details
                                    </Button>
</div>
</div>
</div>
</div>

<div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(29,28,24,0.04)] hover:shadow-xl transition-all duration-500">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close up of a majestic lion in tall grass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHJDtcu0Y_R_Lbh69VaYth7gKVlFVHoPzooAZ8kg6iE7qPowzBMha4UJnRCPp4Qap2uzDXKsI3mRorZiCFiEahYvKdGmgBRBkhniKIfXC0SDUFX9u2tV-8XXq3KG7v5XUfMhXuVWLCWJzzQ4NwSXcj4E2iQeVVWrZK6eSSVIu7e4Wdom2VLHsNjsdNp7a5hBnvpAaYuOytLqa_tlvQZR5RKitglu_euuDRT0NjeN6JC61OCquZuGHy6w5EcyPM6-yJnckQqOcuABi0" />
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-surface/80 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-tighter text-primary rounded-full">New Arrival</span>
<span className="bg-secondary/80 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-tighter text-white rounded-full">3 Days</span>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="mb-4">
<div className="flex items-center gap-1 text-secondary-container mb-2">
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm text-outline-variant" data-icon="star">star</span>
<span className="text-xs font-bold text-outline ml-2">(12 Reviews)</span>
</div>
<h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">3-Day Masai Mara Quick Trip</h3>
<p className="text-on-surface-variant font-body text-sm mt-3 line-clamp-2">Perfect for travelers short on time. Experience the legendary Masai Mara including sunrise balloon flight.</p>
</div>
<div className="mt-auto space-y-4">
<div className="flex flex-wrap gap-x-4 gap-y-2 py-4 border-t border-outline-variant/20">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined material-fill text-outline text-lg" data-icon="helicopter">helicopter</span>
<span className="text-xs font-medium text-on-surface-variant">Air Transfer</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined material-fill text-outline text-lg" data-icon="camera">camera</span>
<span className="text-xs font-medium text-on-surface-variant">Photo Pro Guide</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-xs uppercase font-bold text-outline tracking-wider block">From</span>
<span className="text-xl font-headline font-bold text-primary">$2,800 <span className="text-xs font-body font-normal text-outline">pp</span></span>
</div>
<Button variant="primary" className="h-12 px-6 rounded-md font-body text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all" >
                                        View Details
                                    </Button>
</div>
</div>
</div>
</div>

<div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(29,28,24,0.04)] hover:shadow-xl transition-all duration-500">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Herd of elephants crossing a dusty road at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWCE1_EuqCKeoqslYZogv-E4KEGe37agTmSBzzMD81sDzbEbhyKkZbvy5LrmvtXjGYCY58FEKfBGHPSp8_So9MgbEBVnFL2NsfkPFrcn5fds1ir2rGI8t8Xb3RQcNt36gNFIJb8Q7iZxqb5k0YnTQ4wz8AKmAminxzvKySFmYy2sV6CkSGojZG-TH_KHuKosZBmtViycdjzigcSUZ3WYGBhVk8of-85iIRStO2fx5MQ2UQe7e8yAJvas5pH4oCGYhDEp3Ak2OsutCK" />
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-surface/80 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-tighter text-primary rounded-full">Classic</span>
<span className="bg-secondary/80 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-tighter text-white rounded-full">8 Days</span>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="mb-4">
<div className="flex items-center gap-1 text-secondary-container mb-2">
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="text-xs font-bold text-outline ml-2">(156 Reviews)</span>
</div>
<h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">The Serengeti Spirit Expedition</h3>
<p className="text-on-surface-variant font-body text-sm mt-3 line-clamp-2">Immerse yourself in the heart of Tanzania's wild plains. Featuring private mobile camps that follow the herds.</p>
</div>
<div className="mt-auto space-y-4">
<div className="flex flex-wrap gap-x-4 gap-y-2 py-4 border-t border-outline-variant/20">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined material-fill text-outline text-lg" data-icon="tent">camping</span>
<span className="text-xs font-medium text-on-surface-variant">Eco Tented Camp</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined material-fill text-outline text-lg" data-icon="restaurant">restaurant</span>
<span className="text-xs font-medium text-on-surface-variant">Full Board</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-xs uppercase font-bold text-outline tracking-wider block">From</span>
<span className="text-xl font-headline font-bold text-primary">$4,900 <span className="text-xs font-body font-normal text-outline">pp</span></span>
</div>
<Button variant="primary" className="h-12 px-6 rounded-md font-body text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all" >
                                        View Details
                                    </Button>
</div>
</div>
</div>
</div>

<div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(29,28,24,0.04)] hover:shadow-xl transition-all duration-500">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Two cheetahs on a rock overlooking the savanna" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdcQggnpLfPrOjn6WSBXk7qyEXRE0idZNEuEfQWBsdBcVsXDjFT6jLqB0sDkLnBDWjnZt5oEvsTRCVTH3DjiWPCye8iKkal0wapoj9U_bi6MVBeWiYRLoUvHsgFEypvhiprpuREzt2ZiQ5LPwYnfdG5PQdYpfS1VJhAJNZE--4P_1iGwKoMlTx6t33G06ivjR8GmPg631YQIiSJIHzd7DbFXWaJ8Y8WF1Y_0Wc69iXjZML_yAdA0tybx5DxZUIKZxMgsSPcngDBWGk" />
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-surface/80 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-tighter text-primary rounded-full">Ultimate Luxury</span>
<span className="bg-secondary/80 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-tighter text-white rounded-full">10 Days</span>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="mb-4">
<div className="flex items-center gap-1 text-secondary-container mb-2">
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined material-fill text-sm" data-icon="star" data-weight="fill">star</span>
<span className="text-xs font-bold text-outline ml-2">(32 Reviews)</span>
</div>
<h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">Private Samburu &amp; Lewa Retreat</h3>
<p className="text-on-surface-variant font-body text-sm mt-3 line-clamp-2">Exclusive access to private conservancies. Search for the 'Samburu Special Five' in complete seclusion.</p>
</div>
<div className="mt-auto space-y-4">
<div className="flex flex-wrap gap-x-4 gap-y-2 py-4 border-t border-outline-variant/20">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined material-fill text-outline text-lg" data-icon="shield">shield</span>
<span className="text-xs font-medium text-on-surface-variant">Private Conservancy</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined material-fill text-outline text-lg" data-icon="wine_bar">wine_bar</span>
<span className="text-xs font-medium text-on-surface-variant">All Inclusive</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-xs uppercase font-bold text-outline tracking-wider block">From</span>
<span className="text-xl font-headline font-bold text-primary">$12,200 <span className="text-xs font-body font-normal text-outline">pp</span></span>
</div>
<Button variant="primary" className="h-12 px-6 rounded-md font-body text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all" >
                                        View Details
                                    </Button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 flex justify-center items-center gap-4">
<Button variant="secondary" className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:bg-surface-container-high transition-colors" >
<span className="material-symbols-outlined material-fill">chevron_left</span>
</Button>
<span className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-on-primary font-bold text-sm">1</span>
<Button variant="secondary" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant font-bold text-sm hover:bg-surface-container-high transition-colors" >2</Button>
<Button variant="secondary" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant font-bold text-sm hover:bg-surface-container-high transition-colors" >3</Button>
<Button variant="secondary" className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:bg-surface-container-high transition-colors" >
<span className="material-symbols-outlined material-fill">chevron_right</span>
</Button>
</div>
</div>
</div>
</main>


</Layout>
  );
}