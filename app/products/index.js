import * as actions from './actions';
import * as components from './components';
import * as constants from './constants';
import reducer from './reducers';

import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css');
    @import url('https://fonts.googleapis.com/css?family=Lato');

    body {
        margin: 0;
    }
    
    h1,h2,h3,h4 {
       font-family: 'Lato', sans-serif;
    }
`;


export default { actions, components, constants, reducer };