import './style.scss';

//-подключение всех картинок из блоков
require.context('../src/components/', true, /\.(jpg|png|gif|svg)$/);
require('./pages/colors_type/colors_type.js');
require('./pages/form_elements/form_elements.js');
require('./pages/cards/cards.js');
require('./pages/headers_footers/headers_footers.js');

//- содержит require js-файлов использованных в разметке блоков и доп. файлов.