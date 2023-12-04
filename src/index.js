import { titles } from './config.js';

import { makeTitles } from './page_load.js';

const pageInfo = document.getElementById('content');

const panelTitles = makeTitles(titles);

pageInfo.appendChild(panelTitles);