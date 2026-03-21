import React from "react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui";

export default function Tanzania() {
  return (
    <Layout>
      <main>
        <section className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center">
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            data-alt="Golden sunlight over the vast Serengeti plains at dusk"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1WK5A2uP0Mj0Oi7W0Ff4hdfYT2ImlloM6sAQTFumewIgBCIOQq0Z5mkP5Sb0s0VtnrkfdcfJ549OI4F_-Gi3WgS5HciPLB9M_fNnrCsYS03kqhMfo3zIm-3JZfEYw-da94T4QxmvUXfkTcMXqKt3SiO3SFylAsVl2HRFsSACCi6fbWLqnMeQCgpR79ea6AC4l2Q0o5Xz0UNM3RU7y9Tmzl8lwZKlHUCECuJzCUexnZYM6tYgc-FAz6HCNbC2P3ivX_vH9ER9OjNLC"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
          <div className="relative z-20 max-w-screen-2xl mx-auto w-full px-8">
            <span className="inline-block py-2 px-4 bg-surface/20 backdrop-blur-md text-surface font-label text-sm uppercase tracking-[0.2em] mb-6">
              Featured Destination
            </span>
            <h1 className="font-headline text-7xl md:text-9xl text-surface font-bold -tracking-[0.03em] leading-tight max-w-4xl">
              Wild Tanzania.
            </h1>
            <p className="text-surface-variant font-body text-xl md:text-2xl mt-6 max-w-2xl leading-relaxed">
              A canvas of endless horizons, where the pulse of the earth meets
              the grandeur of the savanna.
            </p>
          </div>
        </section>

        <section className="py-32 px-8 max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <span className="text-secondary font-label font-bold uppercase tracking-widest text-xs mb-4 block">
                The Soul of the Savanna
              </span>
              <h2 className="font-headline text-5xl md:text-6xl text-primary font-bold mb-8 leading-tight">
                Why Tanzania?
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-body">
                <p>
                  Tanzania is not merely a destination; it is a profound
                  immersion into the rhythms of the natural world. Home to the
                  legendary Serengeti and the snow-capped peaks of Kilimanjaro,
                  it stands as Africa's premier wildlife sanctuary.
                </p>
                <p>
                  With over a third of its land dedicated to conservation, the
                  biodiversity here is unparalleled. From the high-altitude
                  forests to the spice-scented shores of Zanzibar, every mile
                  offers a new chapter in the Modern Explorer's journal.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-high relative overflow-hidden rounded-xl editorial-shadow">
                <img
                  className="w-full h-full object-cover scale-110"
                  data-alt="Majestic Mount Kilimanjaro with acacia trees in foreground"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzF1TuvN70Q1Ot9P2rQkgpRGZtNJRi30V489uNI8xWot7M-rjOe65C8qwH2moSlx7RHUCrZFvyxtj8zYDy5VMZOcQM0PVdKrrw_jXdUDBKH0fORQ1GSfUpxkbRQqNWkqXBzXZAn5gBBnJ1pGMhtU2jzyMzYrBg3aJkain6RAXxhguKJ9UpKpP5pwozhZiK8-j4rVa7-7hD1ioMxXPDvLQde3zq9C8vEgt3k0-bkuwph6sTVYpFU4juSS5f0abq81jtXkTLwJjD3tjv"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tertiary-container flex items-center justify-center p-8 rounded-full border-4 border-surface hidden lg:flex">
                <p className="text-on-tertiary-container text-center font-headline italic text-lg leading-tight">
                  A world within a country.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-5xl text-primary font-bold mb-6">
                Iconic Wildlife
              </h2>
              <p className="text-on-surface-variant font-body">
                The stage is set for nature's most dramatic performances.
                Encounter the Big Five and witness the raw power of the Great
                Migration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
              <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="Thousands of wildebeest crossing a river during migration"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_L1CESzsGgocQnEbFWsqhKZpENST9_BrUC1mARYq44ko_L5aEvhxycWovlpZ3qdl80NggqyTTNHKsvxr7spr5Km6H9kRpJxKggnOlmH7wIlR9LBHgsd6H4tTOo6oc4_6MktEzUMcbBCHLSoZMSlHYGmPuGN7EuS3ws9yaCBk8dIWJe3xNjT4BO9WBnhmAKWKUqbRIK9eYFY8KZe6-St6PKrz-qpMZeLW1T5yN27IpYW8HGNm9Sx00YH2N9qax8ZY3J0jCnCuo2Swd"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="font-headline text-3xl text-surface font-bold mb-2">
                    The Great Migration
                  </h3>
                  <p className="text-surface-variant text-sm max-w-md">
                    Over two million wildebeest, zebras, and gazelles move in a
                    continuous cycle across the Serengeti ecosystem.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Close up of a male lion's face in the tall grass"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIzD9zk6zmz9v_8spu9ctJtY81Wo_JY92a9TiTp9ks8CSma0yu0GnigumrSKzeRlEW6cQ5k_uK8uzK5lirrFzEStxc02iA9fJBrjONLNRlA_cL8DH_zkdOCydBXgjvXEzXMbsAwFDyIzIRfR4HUwxLLHkBbvdPn6_faB5VddHjv5rfmob4gMRqTMNWEZAA6W69ex3zc8zqc104of00MWfcU7IIytSn2ex_sUbdesfc9-6E9_v4cdc-B2HcOur3PPtBYsHRASVeCtSD"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-label text-xs uppercase tracking-widest px-2 py-1 bg-primary/40 backdrop-blur-md">
                    Big Five: Lion
                  </span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Leopard resting on a tree branch in the Serengeti"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ID_u9lp7KBOHPpzaRi6982GNT8VBSRuy8ZnycM0vyr7l9wNVFS7kZtQ1eo06SBkm6zQQeHEX7xeu685iIPdv8ZPQ3M0UqsHMkrahiXcAq1FXZ31f_jQswB_gp_IvM417QzYholQea4USHrQoQEX1F2l01l-CG36rHc6g6EuRDqL_l8_fJMIjL9YSq-C5ddf2kss1lYkQOH09O_cTEZ3KmNcazQTTAnUi1iZNxlmHTwB0JDOIpnr26Smv86lSyq3Mn0-vDyr6cRU1"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-label text-xs uppercase tracking-widest px-2 py-1 bg-primary/40 backdrop-blur-md">
                    Big Five: Leopard
                  </span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="An African elephant walking through the savanna"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7e9hpveZhJvJ-vPYuTfgbzGXMQ2i3GSx3s3wa0bueAOcyel0oVbgVyuybBge-VMY1FqVbCmnH8_P6YkdfLV0YhWgJiSLES_6tdb8ZVBwzhJQttwC_K2x8Ch8UylRuegvKxjkQpQUOOsAwTVL9vHWK3jyLIGoZogRghCghvGuTtuG7789JVMToSEUBkorFd-tB9jzKW-Csg1cxmIHmhCZ71wyORYOPf-BOtH4Qcp_Z-ourbjmqIErTe_-3yWcsULshcv85sF8jD4CY"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-label text-xs uppercase tracking-widest px-2 py-1 bg-primary/40 backdrop-blur-md">
                    Big Five: Elephant
                  </span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Black rhino in the Ngorongoro Crater"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoit7IRXtK9bv0ciKiaXV4z_cWlp-VJUqHfQLDcbUZ0aS0aE8QtiGvUeBQv5MzZ77bYUKpzIQiCQEwoOdqrVuzkPAyKBMWia_BbTx-_lrDXhDG8qFu8UNXzaz7kkypY40tz3q_fqwlj6s7EoXc_i3rtfF5v49YlXSpPbZEWF-o0GlsDmcqMdILYvpvSOhcKO-qM1PRVSrhCZPJ5mBMe9BO7UKbvsJAA6XQi4F5-o9XtjhFE1t8fwALLbV0-PIW6KfC50ukCTb3goLM"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-label text-xs uppercase tracking-widest px-2 py-1 bg-primary/40 backdrop-blur-md">
                    Big Five: Rhino
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 max-w-screen-xl mx-auto">
          <h2 className="font-headline text-5xl text-primary font-bold mb-16 text-center">
            Best Times to Visit
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-outline-variant hidden md:block"></div>
            <div className="space-y-24">
              <div className="relative flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 md:text-right">
                  <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-2 block">
                    June - October
                  </span>
                  <h3 className="font-headline text-3xl text-primary font-bold mb-4">
                    The Long Dry Season
                  </h3>
                  <p className="text-on-surface-variant font-body leading-relaxed">
                    The golden hour for wildlife viewing. As water sources
                    diminish, animals congregate around waterholes, offering
                    clear and dramatic sightings. This period marks the famous
                    Mara River crossings in the North.
                  </p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-primary rounded-full border-4 border-surface flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined material-fill text-white text-lg">
                    wb_sunny
                  </span>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-video bg-surface-container rounded-xl overflow-hidden editorial-shadow">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Dry golden savanna grass under a clear blue sky"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjxbR8FxwO-4x23EH54eaunM9PJKlYiz8eZzzp2OLggQYlvA4oFx8iVVZd4B4NA4BEwcg_dWOYpyGKchRkfofDgOOWhfG4-Uw01_8_o3CptgHUFdR_HBh8oxDWYqfmPGtFDVNbgQbI3xCqxQeCFoXyl4FpBCyUk9mwSQSnMrz70j5Gr_3wRPdY7pyp7d-WrAu-w58nn_aj0jMWQWknvJ1r38wh6xhHIJL7HBMqzYLDvlrdUW06xdG1bSNqPJFNPOMXfDGAjuWelRp7"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2 text-left">
                  <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-2 block">
                    November - May
                  </span>
                  <h3 className="font-headline text-3xl text-primary font-bold mb-4">
                    The Lush Green Season
                  </h3>
                  <p className="text-on-surface-variant font-body leading-relaxed">
                    A landscape transformed into a verdant paradise. This is
                    calving season in the South Serengeti, where hundreds of
                    thousands of foals are born, attracting predators and
                    creating incredible birdwatching opportunities.
                  </p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-primary-container rounded-full border-4 border-surface flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined material-fill text-white text-lg">
                    rainy
                  </span>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-video bg-surface-container rounded-xl overflow-hidden editorial-shadow">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Lush green savanna after rain with grazing zebras"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmlvoB4ZPSMIivCNKfJ5_F8GccQpzDyXflHHYjBGJNpiXp7rJu8PH-h6wJ-ffVzKsxmoA5xvwzirPP6NCUuo6QJ9kSvxQiJ0KBsQFwapEw3W2WiZc4KplFum2qt4N7pGXThttfwTl905E8tmugp3aWNKm6lC9zq0UkFESQKFvL_rVGPWCVoI7IVCZMaOZfj8tEIZQIez09vbnIlK1AmjqE7d0MQatx2sfmpdqzCBd-tNJJ7PQgMQBaAw5O4Y59ii0IQltMCcBZg9bY"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-on-primary py-32 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 w-full aspect-[3/4] rounded-lg overflow-hidden editorial-shadow rotate-3 scale-95 origin-bottom-right">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Maasai warriors in traditional red robes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjg1ca1EFzD2Zz4n4Zu6nNx-NyUuSNli5ckBvmqBKu_xDJCJLlnnDyk29UQbCZ2w0179HTnky1SQcHcdDyT2-6nddZwPHHElCjN1bMmmTyMMcPOIy6Q8LQA0a7WWMIhanXxTwYP7RMOJgxdS8QyywJQiNkjiLKDHtzfRkGODWrRYv7B2gIhSjk7HewCwuzzoCHXUa1ttr-MDMlMa-JjvDNQNwKwyONEt8bv7KFVfTRp6xbOdXBYKRjZSSwSWBaLKj05iPdhXRIN2MF"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-2/3 aspect-square rounded-lg overflow-hidden border-[12px] border-primary-container -rotate-6 z-0">
                <img
                  className="w-full h-full object-cover opacity-60"
                  data-alt="Intricate Swahili architecture on Zanzibar coast"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDuKh5PFegfOZjooex7ShVEvinmQ-cTn7SlE2SMtdSoVdBlQdO9OXw9AhkkRzDeeQZ6j-R5_I4RlqBnuJmclBIDDKHuqud0IrABQZ_NzPjlhLZyX4l-npR_Eut81xeNu9n7q0kXj7HnjRUgGzmvNtz28r6V6akAVLMTn80cXCGrUi_ageqkHcMhLwQlDykfJ-kCo5bgPO7_HYv2RWVaYjbjROAYQp1naTiDs3t1qvFHKZGpuTBdLrUF4QZ8ZJHbDOazh_chSaDdGnm"
                />
              </div>
            </div>
            <div>
              <span className="text-on-primary-container font-label uppercase tracking-widest text-sm mb-6 block">
                Beyond the Wild
              </span>
              <h2 className="font-headline text-5xl font-bold mb-8 leading-tight italic">
                Cultural Tapestry
              </h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-headline text-2xl mb-2 text-surface">
                    The Maasai
                  </h4>
                  <p className="font-body text-surface/80 leading-relaxed">
                    Meet the legendary guardians of the savanna. Their vibrant
                    red Shúkà and deep spiritual connection to the land offer a
                    profound perspective on coexistence.
                  </p>
                </div>
                <div className="h-px bg-white/10 w-full"></div>
                <div>
                  <h4 className="font-headline text-2xl mb-2 text-surface">
                    Swahili Heritage
                  </h4>
                  <p className="font-body text-surface/80 leading-relaxed">
                    From the stone-cobbled alleys of Zanzibar to the coastal
                    spice markets, experience a fusion of African, Arab, and
                    Indian influences that have shaped East Africa for
                    centuries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 px-8 text-center bg-surface relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-headline italic opacity-[0.03] pointer-events-none select-none">
            Tanzania
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline text-6xl text-primary font-bold mb-8 italic">
              Ready for your expedition?
            </h2>
            <p className="text-on-surface-variant text-xl font-body mb-12">
              Join us for a bespoke journey into the heart of the wildebeest
              migration and the heights of Kilimanjaro.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button
                variant="primary"
                className="bg-secondary text-on-secondary px-10 py-5 rounded-md font-bold text-lg hover:bg-on-secondary-container transition-colors shadow-xl"
              >
                View Tanzania Safaris
              </Button>
              <Button
                variant="primary"
                className="bg-transparent border border-primary text-primary px-10 py-5 rounded-md font-bold text-lg hover:bg-primary hover:text-white transition-colors"
              >
                Request a Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
