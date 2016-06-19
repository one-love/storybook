import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/components/atoms');
  require('../stories/components/molecules');
  require('../stories/components/layouts');
  require('../stories/components/pages');
}

configure(loadStories, module);
