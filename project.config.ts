import { basename, resolve } from 'node:path';
import process from 'node:process';
import { loadEnv } from 'vite';

const PROJECT_ENV = loadEnv('', process.cwd());
const PROJECT_NAME = PROJECT_ENV.VITE_APP_NAME ?? basename(__dirname);
const PROJECT_TITLE = PROJECT_ENV.VITE_APP_TITLE ?? PROJECT_NAME;

const SOURCE_DIR = resolve(__dirname, '');
const OUTPUT_DIR = resolve(__dirname, '.output');
const VIEWS_DIR = resolve(SOURCE_DIR, 'pages');

const BASE_PORT = 8080;

export { SOURCE_DIR, OUTPUT_DIR, VIEWS_DIR, BASE_PORT, PROJECT_NAME, PROJECT_TITLE };
