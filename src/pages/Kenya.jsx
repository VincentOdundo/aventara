import React from "react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui";

export default function Kenya() {
  return (
    <Layout>
      <main className="pt-24 lg:pt-0">
        <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover scale-105"
              data-alt="Mount Kilimanjaro peak rising above Amboseli plains at sunset"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBC_VtMNZzr5GOOa7VKZP47yKMIvLvs3O6V_22RZbB6McSwK0V21OtkbwMHA0JfhxDbhtbEq7g6LG474X3PkE2wCAbB3A2h7XKH5CKp7OsWhHyYRdSqZM56KUveCmG5mO8viUKSSYg-KPrN2FdzZsJAOsGKLi5F3vrTMvwuryn-OV-3s1SThK9rsEJWY_3BkGq60omlhZqY9PyEkCJKbj4gXwz2Woy_wK0xydQziFhZ229VA6YPo0qhH_6DYhrECeU6WMphPG1ENyc"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl">
            <span className="font-label uppercase tracking-[0.4em] text-xs mb-6 block text-on-surface/80">
              Destination Spotlight
            </span>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-primary leading-none tracking-tighter mb-8 italic">
              Discover the Wild
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Kenya remains the soul of safari. From the snow-capped peak of
              Kilimanjaro to the golden savannahs teeming with the Great
              Migration.
            </p>
          </div>
        </section>

        <section className="px-8 md:px-16 lg:px-24 py-24 bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
                Curated Journeys
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-12">
                Iconic National Parks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container mb-4">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      data-alt="Vast golden savannah of Maasai Mara under dramatic sky"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkvtZ-P9Hzv_EuNVJqjpEp-HTZH9wHorZJcWX_nSM5lN1vKH5IQl70sWfo-QDwxK7NeYlhDPcZ0HkDf31ZRuTUyLksf7dF5k2sis0YuRUTAXezaPNjbIe_mLszK78Xxtlsn6CK4nXes-6dxxPxwRNgjUGgvpgL9mosFE4mpfm6B_lbjFoUkwiPOBn-wKLyYzDXsvXEKRoyWwgEvnSe2CrDoS150NMV6AE1eLtrLjidCvVqgLi-ZNKgZOj6BEpxubn3pyjlS_GV_h_B"
                    />
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-2">
                    Maasai Mara
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    The stage for nature’s greatest show, where millions of
                    wildebeest brave crocodile-infested waters.
                  </p>
                </div>

                <div className="group cursor-pointer pt-12">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container mb-4">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      data-alt="Elephant herd in front of Mount Kilimanjaro in Amboseli"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVmfXr50WmiW7p8v8IOFu25IUR-aT6KY89ynjlf2dtGDHVFeJeVwhfhlYAPxpJQDAyynreiRsgg2DZoCU9bEd3uefPXxnG5ArF0EwFd619HlytXE20eckU2RFWGv-lVq8aj7QGenKqW8UOsod4zMq6cfZ7jD_HM7SGXMOUzdaKSUu6QDQ-qIEp9B-zpQ-JApu76dzhzgHINSJzjU5kQaWZkW9UdlbR_WTpyQfaqBUq1pa23_DljY1858-Kkr_tniEr8ei080UiDE-e"
                    />
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-2">
                    Amboseli
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Home to the continent's largest 'tuskers' walking in the
                    shadow of the world's highest free-standing mountain.
                  </p>
                </div>

                <div className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container mb-4">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      data-alt="Red volcanic earth and baobab trees in Tsavo East"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAItMl9VQV7olECgTZvthAEP5HSghltd0BNvsJk3kPxRfVLOkqofvkcJsw_b4fkM00TIyy1dWJhKDMWbJGKS-rLey0qVhHxlEcMIUk6uSxKyssnhQE0cc8AI9YbEdPNva3Z3lY1-K0nvjbfmPnwtW8k7CV9N7LvyGjGp90uyD_J39eL-qvQU5tw29OMqEKHPZnYW0iZnmPJcQCjDGq36YfXKsvXp6rwV1b8FXKfl5bM6ZtNb8lqzc05fmxSIQK4cenAf8WxbCz7ZJYP"
                    />
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-2">
                    Tsavo
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    A vast, wild landscape of red-dusted elephants, ancient lava
                    flows, and endless horizons.
                  </p>
                </div>

                <div className="group cursor-pointer pt-12">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container mb-4">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      data-alt="Rare Grevy's zebra in the arid Samburu landscape"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLixEUVNcWwXYNwrWHAo9tu7GWw3cEixd7L6vrdNC9yko1K5U60kJ5a8nbXMYIv14GXfCNk_90tt6vUXJidoBBTYtcQfK6rxg_hbP9AUM_LjfWmYyUjitg67CslHmwi9GfJSg1OiF4B2eNDlZ6UIlPl68PkyZsw3YvGEc8OZKjlxjTAor40brThgjTkj3bwwRVg3o5CnPPGSP6CEZHkAwXiwNCKx0NnYparzcFRHF_g16QaffyLs0I77561FD5kQpPW3siZLLcXpza"
                    />
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-2">
                    Samburu
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    An arid paradise hosting the 'Special Five' unique to
                    northern Kenya's rugged terrain.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 sticky top-32 space-y-16">
              <div className="bg-surface-container-low p-10 rounded-xl editorial-shadow">
                <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
                  Curated Journeys
                </span>
                <h2 className="font-headline text-3xl text-primary mb-6">
                  Unique Wildlife Experiences
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined material-fill text-primary">
                      landscape
                    </span>
                    <div>
                      <p className="font-semibold text-primary">
                        The Great Migration
                      </p>
                      <p className="text-sm text-on-surface-variant">
                        Witness the dramatic Mara River crossings between July
                        and September.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined material-fill text-primary">
                      pets
                    </span>
                    <div>
                      <p className="font-semibold text-primary">
                        Elephant Herds of Amboseli
                      </p>
                      <p className="text-sm text-on-surface-variant">
                        Up-close encounters with legendary elephant families in
                        their marshland habitat.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined material-fill text-primary">
                      verified_user
                    </span>
                    <div>
                      <p className="font-semibold text-primary">
                        Rhino Sanctuaries
                      </p>
                      <p className="text-sm text-on-surface-variant">
                        Intimate visits to Ol Pejeta or Lewa to see the world's
                        last northern white rhinos.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
                  Curated Journeys
                </span>
                <h2 className="font-headline text-3xl text-primary mb-6">
                  Cultural Heritage
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Journey into the heart of the Maasai and Samburu territories.
                  Engage with proud guardians of the savanna, learning ancient
                  tracking skills and the wisdom of living in harmony with the
                  wild.
                </p>
                <div className="flex -space-x-4 overflow-hidden">
                  <img
                    className="inline-block h-16 w-16 rounded-full ring-4 ring-background"
                    data-alt="Maasai warrior portrait"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn06WoCvSqVxWl_T96Lud7745yQ1cHpH33Da_FLQkBew28glrFGB-7r9-4mGvtGkl_0EuLlgWLSH60n6NmSGJibdikUppScS5-G2sSI-pkeXanY6tdYVxo_TP52kXKzhqLLnrxo0gSjsW40_9FdOwZuUDHZAKcvcoVHoiA0KxdyugE5KtSFUzNveSWAcTghgz-a9sk-OhtB6SKAyTjHXbf7EeNetnAOJzyfPAxSWanv5tjdR6E4DQ3Q9gzZ7opd4ae8ScIOn1wxHl9"
                  />
                  <img
                    className="inline-block h-16 w-16 rounded-full ring-4 ring-background"
                    data-alt="Samburu cultural celebration"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrO_H_u4To80VSsaSVw4zW5slOC2TGCOUqmv0Qemr4k2M3yjOYC_OKP_Whzd5NXdOZEoGWoZ0U7Nl6owxtmStnPg3hLbWvkRxGo6F90FeBFGsaA1LaRSr4ODS_hDjZpHIpg7ZrIEilR8Bop9v7-0O5eCZ9Zs1FY02dkPcAkmIFT9D2fmkr59o3vv12H0_mQXG6E00VVBLddgOi4TmBM819DFUSl5rvAKRC1kjizd3FcOFB2G-yJjbqsaPOvdkcK_QaWGACtcSmUlku"
                  />
                  <img
                    className="inline-block h-16 w-16 rounded-full ring-4 ring-background"
                    data-alt="Traditional Kenyan craftsmanship"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8LSJDxwWyz9kdQNold-h5Fz0z7yzNo7CNB9n16vjkHzwPpIulKbpDUpTTrykk1PXB2ZrKAEJWibDH3ZohLmlKA1EVB1EWWlkFzpH3dJEHyhXZ3G57y2hApaOykSvWxHx3UuWKYENDYdRE6aBJo3lCv9HdkQGoewk_MLBWK38gDSrGdkVJywMy9cL7jdaOt48g51HKb250xNkcBdEuDlCLvQXdwOZvKrlXYYZKfz_9Qyge2_v7kW8swIsF0_9E2W7tgXzk7LNYnZGD"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container py-24 px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
                  Timing your Adventure
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-primary">
                  Best Times to Visit
                </h2>
              </div>
              <div className="h-px flex-1 bg-outline-variant/30 hidden md:block mb-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-surface p-10 rounded-xl editorial-shadow border border-outline-variant/10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline text-2xl text-primary">
                    Peak Season
                  </h3>
                  <span className="font-label text-xs px-3 py-1 bg-primary-container text-on-primary-container rounded-full uppercase tracking-tighter">
                    June — October
                  </span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  The cooler dry season coincides with the Great Migration in
                  the Maasai Mara. Wildlife viewing is at its easiest as animals
                  congregate around permanent water sources.
                </p>
              </div>
              <div className="bg-surface p-10 rounded-xl editorial-shadow border border-outline-variant/10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline text-2xl text-primary">
                    The Green Season
                  </h3>
                  <span className="font-label text-xs px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full uppercase tracking-tighter">
                    January — March
                  </span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  A photographer’s dream with lush green landscapes and dramatic
                  afternoon skies. Perfect for birdwatching and witnessing the
                  calving season in many parks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-32 px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              data-alt="Wide panoramic view of an expedition vehicle in the Kenyan savanna"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHbt_tH2Zw_gC9IuWSX2X6GSukSscQMrmiFvIg9D1QwVXua4H1pGKgBVOgcXQAGcsKLLn4-2tQZI1XqMfLqiYTDeZQnZvlbQpb6qDeaClTaXaXWgO0jmTmgrVJlVOc0UrfOnbv-nBLmAgCMAS0ggwnK-PXRFu3PKQp4MITYjmLtHIriuu410zaahb11yH-RwJB_o9NZ_PqeNYUOFu4PUnRNWF4iEGYIH-AcZRV1JzWf9C6ubJvg1_m3gjl5ozoKQBOZnTvLbD-cm3N"
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative z-10 text-center text-on-primary max-w-3xl mx-auto">
            <h2 className="font-headline text-5xl md:text-6xl mb-12 leading-tight">
              Your story in the savannah begins here.
            </h2>
            <Button
              variant="primary"
              className="bg-secondary text-on-secondary px-10 py-5 rounded-md font-label uppercase tracking-widest text-sm hover:bg-secondary-container transition-colors duration-300 shadow-xl active:scale-95"
            >
              View Expeditions in Kenya
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
