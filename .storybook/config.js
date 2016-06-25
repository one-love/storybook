/* eslint global-require: 0 */
import { configure } from '@kadira/storybook';
import '../stories/sass/reset.scss';


function loadStories() {
  require('../stories/components/atoms');
  require('../stories/components/molecules');
  require('../stories/components/layouts');
  require('../stories/components/pages');
}

configure(loadStories, module);
