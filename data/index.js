export { wikipedia as dataWikipedia } from 'wmf-sitematrix';

export { dataAddressFormats } from './address-formats.json';
export { dataDeprecated } from './deprecated.json';
export { dataDiscarded } from './discarded.json';
export { dataLanguages } from './languages.json';
export { dataLocales } from './locales.json';
export { dataPhoneFormats } from './phone-formats.json';
export { dataShortcuts } from './shortcuts.json';
export { dataTerritoryLanguages } from './territory-languages.json';

export { en as dataEn } from '../dist/locales/en.json';

import { dataImagery } from './imagery.json';
import { presets } from './presets/presets.json';
import { defaults } from './presets/defaults.json';
import { categories } from './presets/categories.json';
import { fields } from './presets/fields.json';

import LocationConflation from '@ideditor/location-conflation';
import whichPolygon from 'which-polygon';


export let data = {
  imagery: dataImagery,  //legacy
  presets: {
    presets: presets,
    defaults: defaults,
    categories: categories,
    fields: fields
  }
};
