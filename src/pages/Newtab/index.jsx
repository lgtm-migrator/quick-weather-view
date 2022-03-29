import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab';

import "../../styles/global.css"

render(<Newtab title="This is Title!" />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
