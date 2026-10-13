import { CategoryPage, ContactPage, NotFoundPage, SearchPage, StandardPage } from '@/components/site-shell'

type Props = { params: Promise<{ slug: string[] }> }
type Category = { title: string; text: string; href: string; tag: string }

const categoryRoutes: Record<string, Category> = {
  'pc-laptop': { title: 'PC & Laptop', text: 'Troubleshoot slowdowns, charging issues, overheating, and everyday computer problems.', href: '/pc-laptop', tag: 'Computing' },
  'washing-machine': { title: 'Washing Machine', text: 'Understand leaks, noises, drainage problems, and when a repair is worth it.', href: '/washing-machine', tag: 'Appliances' },
  refrigerator: { title: 'Refrigerator', text: 'Get practical context for cooling, ice, water, and unusual sound issues.', href: '/refrigerator', tag: 'Appliances' },
  'smart-tv-display': { title: 'Smart TV & Display', text: 'Make sense of blank screens, picture quality, sound, and connection problems.', href: '/smart-tv-display', tag: 'Entertainment' },
  'smart-home-wifi': { title: 'Smart Home & WiFi', text: 'Build a more reliable connected home with clear steps and better questions.', href: '/smart-home-wifi', tag: 'Connected home' },
  'gaming-audio': { title: 'Gaming & Audio', text: 'Solve common console, headset, speaker, and controller frustrations.', href: '/gaming-audio', tag: 'Entertainment' },
}

export default async function RoutePage({ params }: Props) {
  const { slug } = await params
  const path = slug.join('/')
  const category = categoryRoutes[path]
  if (category) return <CategoryPage item={category} />
  if (path === 'search') return <SearchPage />
  if (path === 'contact') return <ContactPage />
  const supported = ['about-our-guides', 'repair-guides', 'how-to-choose', 'repair-or-replace', 'quote-checklist', 'safety-tips', 'faq', 'privacy', 'terms', 'disclaimer', 'resources']
  if (supported.includes(path)) return <StandardPage slug={path} />
  return <NotFoundPage />
}
