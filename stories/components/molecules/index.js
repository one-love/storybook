import { storiesOf } from '@kadira/storybook';
import Cluster from './cluster';
import Header from './header';
import Host from './host';
import Provision from './provision';
import Service from './service';


storiesOf('Molecules', module)
  .add('cluster', Cluster)
  .add('header', Header)
  .add('provision', Provision)
  .add('service', Service)
  .add('host', Host);
