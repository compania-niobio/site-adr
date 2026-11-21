/**
 * Talentos do casting ADR com foto disponível localmente.
 * Dados copiados de src/assets/adragencia.com.br/index.html (não inventar números).
 * Compartilhado pela 2ª dobra (Casting.astro) e pela 3ª dobra (Spotlight.astro).
 */
import type { ImageMetadata } from 'astro';
import fRezende from '../assets/adragencia.com.br/assets/41efdafd857ad3eb_rezende-casting.webp';
import fLucco from '../assets/adragencia.com.br/assets/f362b69ba4a4593d_lucas-lucco.webp';
import fEmily from '../assets/adragencia.com.br/assets/315d81ee2ecf1406_emily-garcia-casting.webp';
import fAna from '../assets/adragencia.com.br/assets/0a77e235c9c71ff3_ana-mosconi-casting.webp';
import fTaspio from '../assets/adragencia.com.br/assets/46d4af9448db0e91_taspio.webp';
import fYasmin from '../assets/adragencia.com.br/assets/a9a2651e7ab2b821_yasmin-galvao-casting.webp';
import { talentStories, type TalentStory } from './talent-stories';

export type Metric = { network: string; value: string; url?: string; n: number };

export type Talent = {
	slug: string;
	name: string;
	handle: string;
	location: string;
	img: ImageMetadata;
	pos: string;
	tagline: string;
	niches: string[];
	socials: Record<string, string>;
	metrics: Metric[];
	total: number;
	totalLabel: string;
	bars: number[];
	story: TalentStory;
};

const raw = [
	{
		slug: 'rezende', name: 'Rezende', handle: '@rezende', location: 'Londrina / PR', img: fRezende, pos: '50% 22%',
		tagline: 'Um dos maiores criadores de conteúdo do Brasil.',
		niches: ['Estilo de vida', 'Entretenimento', 'Humor', 'Jogos'],
		socials: { Instagram: 'https://www.instagram.com/rezende/', TikTok: 'https://www.tiktok.com/@rezende', YouTube: 'https://www.youtube.com/@rezendeevil', Threads: 'https://www.threads.com/@rezende' },
		metrics: [['Instagram', '12,7 mi'], ['TikTok', '8 mi'], ['YouTube', '34,4 mi'], ['Threads', '1,2 mi']],
	},
	{
		slug: 'lucas-lucco', name: 'Lucas Lucco', handle: '@lucaslucco', location: 'São Paulo / SP', img: fLucco, pos: '50% 18%',
		tagline: 'Música, negócios e estilo de vida em uma presença multiplataforma.',
		niches: ['Música', 'Estilo de vida', 'Condicionamento físico', 'Empreendedorismo'],
		socials: { Instagram: 'https://www.instagram.com/lucaslucco/', TikTok: 'https://www.tiktok.com/@lucaslucco', YouTube: 'https://www.youtube.com/@lucaslucco', X: 'https://x.com/lucaslucco' },
		metrics: [['Instagram', '16,8 mi'], ['TikTok', '4,5 mi'], ['YouTube', '6,87 mi'], ['X', '4,1 mi']],
	},
	{
		slug: 'emily-garcia', name: 'Emily Garcia', handle: '@e_milygarcia', location: 'São Paulo / SP', img: fEmily, pos: '50% 14%',
		tagline: 'Presença que vira conversa. Alcance que vira cultura.',
		niches: ['Beleza & Moda', 'Maternidade & Família', 'Humor & Vida Real'],
		socials: { Instagram: 'https://www.instagram.com/e_milygarcia/', TikTok: 'https://www.tiktok.com/@e_milygarcia' },
		metrics: [['Instagram', '20,4 mi'], ['TikTok', '560,8 mil']],
	},
	{
		slug: 'ana-mosconi', name: 'Ana Mosconi', handle: '@anamosconi', location: 'Londrina / PR', img: fAna, pos: '50% 16%',
		tagline: 'Entre estilo de vida, beleza e condicionamento físico, uma comunidade fiel.',
		niches: ['Estilo de vida', 'Entretenimento', 'Beleza', 'Condicionamento físico'],
		socials: { Instagram: 'https://www.instagram.com/anamosconi/', TikTok: 'https://www.tiktok.com/@anamosconi', YouTube: 'https://www.youtube.com/@anamosconi', Threads: 'https://www.threads.com/@anamosconi' },
		metrics: [['Instagram', '7,4 mi'], ['TikTok', '5,6 mi'], ['YouTube', '2,98 mi'], ['Threads', '739 mil']],
	},
	{
		slug: 'taspio', name: 'Taspio', handle: '@taspio', location: 'Londrina / PR', img: fTaspio, pos: '50% 18%',
		tagline: 'Jogos, humor e entretenimento com comunidade própria.',
		niches: ['Jogos', 'Humor', 'Entretenimento', 'Estilo de vida'],
		socials: { Instagram: 'https://www.instagram.com/taspio/', TikTok: 'https://www.tiktok.com/@taspio', YouTube: 'https://www.youtube.com/@taspio' },
		metrics: [['Instagram', '3 mi'], ['TikTok', '4,4 mi'], ['YouTube', '8,26 mi']],
	},
	{
		slug: 'yasmin-galvao', name: 'Yasmin Galvão', handle: '@yasmingalvao_oficial', location: 'Rio de Janeiro / RJ', img: fYasmin, pos: '50% 30%',
		tagline: 'Beleza, moda e lifestyle para uma audiência jovem.',
		niches: ['Moda', 'Lifestyle', 'Viagem', 'Beleza'],
		socials: { Instagram: 'https://www.instagram.com/yasmingalvao_oficial/', TikTok: 'https://www.tiktok.com/@euyasmingalvaoo', YouTube: 'https://www.youtube.com/channel/UCOQ_KwPhg3IZbigiK7NCnfQ' },
		metrics: [['Instagram', '3,1 mi'], ['TikTok', '4,8 mi'], ['YouTube', '1,87 mi']],
	},
] as const;

// "12,7 mi" -> 12_700_000 ; "560,8 mil" -> 560_800
export const toNumber = (v: string) => {
	const [n, unit] = v.split(' ');
	const num = parseFloat(n.replace(',', '.'));
	return unit === 'mi' ? num * 1e6 : num * 1e3;
};

export const fmtFollowers = (n: number) => {
	if (n >= 1e6) return `${(n / 1e6).toFixed(1).replace('.', ',').replace(',0', '')} mi`;
	return `${Math.round(n / 1e3)} mil`;
};

export const talents: Talent[] = raw.map((t) => {
	const socials = t.socials as Record<string, string>;
	const metrics: Metric[] = t.metrics.map(([network, value]) => ({ network, value, url: socials[network], n: toNumber(value) }));
	const total = metrics.reduce((a, m) => a + m.n, 0);
	const max = Math.max(...metrics.map((m) => m.n));
	return {
		slug: t.slug,
		name: t.name,
		handle: t.handle,
		location: t.location,
		img: t.img,
		pos: t.pos,
		tagline: t.tagline,
		niches: [...t.niches],
		socials,
		metrics,
		total,
		totalLabel: fmtFollowers(total),
		bars: metrics.map((m) => Math.max(6, Math.round((m.n / max) * 100))),
		story: talentStories[t.slug],
	};
});

export const socialIcons: Record<string, string> = {
	Instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
	TikTok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z"/></svg>',
	YouTube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z"/></svg>',
	Threads: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16.8 8.6C16 6.4 14.2 5 11.7 5 8.2 5 6 7.8 6 12s2.2 7 5.9 7c3 0 5-1.7 5-4.1 0-2.6-2.4-3.7-5.3-3.5-2 .1-3.1 1.1-3.1 2.3 0 1.3 1.2 2.1 2.6 2.1 2.6 0 3.7-2.2 3.7-5.5"/></svg>',
	X: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2Z"/></svg>',
	Facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h2.5V4.5H14c-2.8 0-4.2 1.7-4.2 4.3V11H7.5v3.4h2.3V21h3.4v-6.6h2.6l.5-3.4h-3.1V9.2c0-.7.3-1.2.8-1.2Z"/></svg>',
};
