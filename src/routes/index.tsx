import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, MapPin, Clock, UtensilsCrossed, Leaf, Bike, ShoppingBag, Dog, ChefHat } from "lucide-react";
import heroPasta from "@/assets/hero-pasta.png.asset.json";
import dishLasagna from "@/assets/dish-lasagna.jpg";
import dishTiramisu from "@/assets/dish-tiramisu.jpg";
import dishAntipasti from "@/assets/dish-antipasti.jpg";
import tripadvisorIcon from "@/assets/tripadvisor-icon.png.asset.json";
import manicarettiLogo from "@/assets/manicaretti-logo.jpg.asset.json";
import atelier1 from "@/assets/atelier-1.jpg.asset.json";
import atelier2 from "@/assets/atelier-2.jpg.asset.json";
import atelier3 from "@/assets/atelier-3.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manicaretti — Restaurant italien sans gluten · Paris 10e" },
      { name: "description", content: "Cuisine italienne 100% sans gluten et bio au 60 Rue de Paradis, Paris 10e. Sur place, à emporter ou en livraison." },
    ],
  }),
  component: Home,
});

const FB = "https://www.facebook.com/manicaretti.paris/?locale=fr_FR";
const IG = "https://www.instagram.com/manicarettibio/";
const TA = "https://www.tripadvisor.fr/Restaurant_Review-g187147-d12433951-Reviews-Manicaretti-Paris_Ile_de_France.html";
const TEL = "+33951775730";
const MAPS = "https://maps.google.com/?q=60+Rue+de+Paradis,+75010+Paris";
const DELICITY = "https://delicity.com/maincaretti-paris?rwg_token=AE37R_giMAzqt9zraeVXT2EFEHEzMibaDKHbPi321ya-vLVnOMZmCBJzJaRQgAAAUHuLh8RpWSbKxWe2OGDMn4HbM6pJsKJHJw%3D%3D";
const WECANDOO = "https://wecandoo.fr/artisan/paris-artisan-cuisinier-vittoria?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnZ7KgE8AFwms9d6XsDmdpy4Pz8XL-wlVFBYqNyJDBNXM7HAn_O4q1OaUAzxs_aem_lTYdVSdAUZFXA9eEkgLHyw&utm_id=97760_v0_s00_e0_tv3";
const FUNBOOKER = "https://www.funbooker.com/fr/annonce/atelier-de-cuisine-italienne-a-paris-10eme/voir?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnMQPxQFN4_FBfhs4zV2VxsEcx-yGlzAtBDIgUdz9GNLFGOZLHHmaASYLVS0o_aem_zYtXHAOJSuDUyk7mkN7BBA";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Tricolore stripe */}
      <div className="h-1 w-full" style={{ background: "var(--gradient-tricolore)" }} />

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={manicarettiLogo.url} alt="Logo Manicaretti" className="h-10 w-10 rounded-full object-cover border border-border bg-white" />
            <span className="font-display text-2xl font-bold tracking-tight">Manicaretti</span>
            <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-muted-foreground">cucina e ateliers</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#histoire" className="hover:text-primary transition">L'histoire</a>
            <a href="#carte" className="hover:text-primary transition">La carte</a>
            <a href="#ateliers" className="hover:text-primary transition">Ateliers</a>
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href={`tel:${TEL}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">
            <Phone className="h-4 w-4" /> Tel
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Leaf className="h-3.5 w-3.5 text-primary" /> 100% sans gluten · Bio
            </span>
            <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold leading-tight">
              La <em className="text-[color:var(--italian-red)] not-italic">cucina italiana</em>,
              <br />sans compromis.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Au cœur du 10e arrondissement, Manicaretti vous accueille pour une cuisine italienne authentique, entièrement sans gluten et issue de produits biologiques.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={DELICITY} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--italian-red)] px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
                <Bike className="h-4 w-4" /> Commander en livraison
              </a>
              <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted transition">
                <MapPin className="h-4 w-4" /> Itinéraire
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <span>★ 4,6 · 179 avis Google</span>
              <span className="hidden sm:inline">10–20 €</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl" style={{ background: "var(--gradient-tricolore)", opacity: 0.15 }} />
            <img
              src={heroPasta.url}
              alt="Assiette italienne sans gluten gourmande avec légumes, charcuterie, pois chiches et pain frais"
              width={1536}
              height={1024}
              className="rounded-2xl shadow-[var(--shadow-warm)] object-cover aspect-[4/3] w-full"
            />
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section id="histoire" className="border-y border-border bg-[color:var(--italian-cream)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Buon appetito</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Manicaretti, prodotti biologici</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Manicaretti — littéralement « petits délices » en italien — c'est l'envie de faire redécouvrir la cuisine italienne à toutes celles et ceux qui doivent vivre sans gluten. Pâtes fraîches, lasagnes, focaccia, antipasti, tiramisu : tout est préparé maison, chaque jour, avec des produits biologiques rigoureusement sélectionnés.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Un lieu chaleureux et coloré, qui est aussi un atelier de cuisine et une boutique de produits italiens sans gluten.
          </p>
        </div>
      </section>

      {/* Carte */}
      <section id="carte" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--italian-red)]">La carte</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Quelques specialità</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">Une carte qui évolue au rythme des saisons et des arrivages bio.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { img: dishAntipasti, name: "Antipasti", desc: "Planche de charcuterie italienne, olives, légumes grillés et pain sans gluten.", price: "12 €" },
            { img: dishLasagna, name: "Lasagne al forno", desc: "Lasagnes maison à la bolognaise, mozzarella fondante, basilic frais.", price: "16 €" },
            { img: dishTiramisu, name: "Tiramisù", desc: "Le classique revisité, mascarpone onctueux et biscuit sans gluten.", price: "7 €" },
          ].map((d) => (
            <article key={d.name} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[var(--shadow-warm)]">
              <div className="overflow-hidden">
                <img src={d.img} alt={d.name} width={800} height={800} loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold">{d.name}</h3>
                  <span className="font-medium text-[color:var(--italian-red)]">{d.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Ateliers */}
      <section id="ateliers" className="border-y border-border bg-[color:var(--italian-cream)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Ateliers</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Mettez la main à la pâte</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Découvrez les secrets de la cuisine italienne sans gluten lors d'un atelier convivial avec Vittoria.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[atelier1, atelier2, atelier3].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-warm)]">
                <img src={img.url} alt={`Atelier de cuisine italienne Manicaretti ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={WECANDOO} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--italian-red)] px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
              <ChefHat className="h-4 w-4" /> Ateliers Wecandoo
            </a>
            <a href={FUNBOOKER} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted transition">
              <ChefHat className="h-4 w-4" /> Ateliers Funbooker
            </a>
          </div>
        </div>
      </section>


      {/* Services */}
      <section id="services" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] opacity-70">Services</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Sur place, à emporter, livré chez vous</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { icon: UtensilsCrossed, title: "Sur place", desc: "Salle chaleureuse, accueil convivial." },
              { icon: ShoppingBag, title: "À emporter", desc: "Commandez par téléphone, c'est prêt à l'heure." },
              { icon: Bike, title: "Livraison", desc: "Disponible en livraison à domicile." },
              { icon: Dog, title: "Dog friendly", desc: "Vos compagnons à 4 pattes sont bienvenus." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur">
                <Icon className="h-6 w-6" />
                <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm opacity-80">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={DELICITY} target="_blank" rel="noreferrer" className="rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary hover:opacity-90 transition">
              Commander
            </a>
            <a href={`tel:${TEL}`} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition">
              <Phone className="h-4 w-4" /> 09 51 77 57 30
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--italian-red)]">Nous trouver</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Venez nous voir</h2>
            <ul className="mt-8 space-y-5 text-base">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">60 Rue de Paradis</div>
                  <div className="text-muted-foreground">75010 Paris · Métro Poissonnière / Gare de l'Est</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <a href={`tel:${TEL}`} className="hover:text-primary transition">+33 9 51 77 57 30</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary" />
                <div className="w-full">
                  <div className="font-medium">Horaires d'ouverture</div>
                  <table className="mt-2 w-full max-w-sm text-sm text-muted-foreground">
                    <tbody>
                      {[
                        ["Lundi", "11h30 – 15h00"],
                        ["Mardi", "11h30 – 15h00"],
                        ["Mercredi", "11h30 – 15h00"],
                        ["Jeudi", "11h30 – 15h00"],
                        ["Vendredi", "11h30 – 15h00"],
                        ["Samedi", "Fermé"],
                        ["Dimanche", "Fermé"],
                      ].map(([d, h]) => (
                        <tr key={d} className="border-b border-border/60 last:border-0">
                          <td className="py-1.5">{d}</td>
                          <td className="py-1.5 text-right">{h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href={FB} target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-muted transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={IG} target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-muted transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={TA} target="_blank" rel="noreferrer" aria-label="TripAdvisor" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-muted transition text-muted-foreground hover:text-foreground p-2">
                <img src={tripadvisorIcon.url} alt="TripAdvisor" className="h-5 w-5 object-contain" />
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-warm)]">
            <iframe
              title="Manicaretti — 60 Rue de Paradis, 75010 Paris"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.34544%2C48.87381%2C2.35144%2C48.87781&amp;layer=mapnik&amp;marker=48.87581%2C2.34844"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-[color:var(--italian-cream)]">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground text-center">
          <div className="flex items-center justify-center gap-3">
            <img src={manicarettiLogo.url} alt="Logo Manicaretti" className="h-10 w-10 rounded-full object-cover border border-border bg-white" />
            <span className="font-display text-lg font-semibold text-foreground">Manicaretti</span>
            <span>· cucina e ateliers · prodotti biologici</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={FB} target="_blank" rel="noreferrer" className="hover:text-primary">Facebook</a>
            <a href={IG} target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
            <a href={TA} target="_blank" rel="noreferrer" className="hover:text-primary">TripAdvisor</a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
        <div className="h-1 w-full" style={{ background: "var(--gradient-tricolore)" }} />
      </footer>
    </div>
  );
}
