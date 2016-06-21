import { configure } from '@kadira/storybook';
import style from '../stories/sass/screen.scss';

function loadStories() {
  require('../stories/components/atoms');
  require('../stories/components/molecules');
  require('../stories/components/layouts');
  require('../stories/components/pages');
}

configure(loadStories, module);
