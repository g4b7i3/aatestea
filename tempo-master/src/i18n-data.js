import { hoistLastKey } from '$lib/utils/hoist-last-key.js';
import { createClog } from '@gabrielfxfers';
import { ROUTE } from './config.js';

export const i18nData = hoistLastKey({
	header: {
		title: {
			en: 'Calculadora de ritmo de corrida',

		},
		settings: { en: 'Settings' },
		home: { en: 'Back to home' }
	},
	out_of_display_range: {
		en: 'The result is outside the displayable range. Please edit the inputs.',


	},
	distance: {
		title: { en: 'Distance' },
		menu: {
			marathon: { en: 'Marathon' },
			halfmarathon: {en: 'Half marathon' },
			mile: { en: 'Mile',  }
		}
	},
	time: {
		title: {en: 'Time' }
	},
	tempo: {
		title: { en: 'Pace', }
	},
	[ROUTE.main.id]: {
		html_title: {
			en: 'Running pace calculator',

		},
		og: {
			title: {
				en: "Tiny calculator of runner's distance, time and pace.",
			},
			description: {
				en: 'Edit any two, the third will be calculated.',
			}
		}
	},
	[ROUTE.settings.id]: {
		html_title: { en: 'Settings' },
		language: { en: 'Language' },
		header: {
			title: { en: 'Settings' }
		}
	}
});

// createClog('i18n-data')(i18nData);
