

var libros = [
    {
      id_titulo: 'BU1032',
      titulo: 'The Busy Executive\'s Database Guide',
      tipo: 'business',
      id_pub: '1389',
      precio: 20,
      avance: 5000,
      total_ventas: 4095,
      notas: 'An overview of available database systems with emphasis on common business applications. Illustrated.',
      fecha_pub: new Date('1986-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'BU1111',
      titulo: 'Cooking with Computers: Surreptitious Balance Sheets',
      tipo: 'business',
      id_pub: '1389',
      precio: 12,
      avance: 5000,
      total_ventas: 3876,
      notas: 'Helpful hints on how to use your electronic resources to the best advantage.',
      fecha_pub: new Date('1988-06-09 12:00:00'),
      contrato: '1'
    },
    // Continuar con el resto de los libros...
    
  ];
  // Parte 3: Datos de los libros (continuación)

libros.push(
    {
      id_titulo: 'MC3021',
      titulo: 'The Gourmet Microwave',
      tipo: 'mod_cook',
      id_pub: '0877',
      precio: 2.99,
      avance: 15000,
      total_ventas: 22246,
      notas: 'Traditional French gourmet recipes adapted for modern microwave cooking.',
      fecha_pub: new Date('1985-06-18 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'MC3026',
      titulo: 'The Psychology of Computer Cooking',
      tipo: 'UNDECIDED',
      id_pub: '0877',
      precio: null,
      avance: null,
      total_ventas: null,
      notas: '',
      fecha_pub: new Date('2000-01-10 12:19:59'),
      contrato: '0'
    },
    {
      id_titulo: 'PC1035',
      titulo: 'But Is It User Friendly?',
      tipo: 'popular_comp',
      id_pub: '1389',
      precio: 23,
      avance: 7000,
      total_ventas: 8780,
      notas: "'A survey of software for the naive user, focusing on the ''friendliness'' of each.'",
      fecha_pub: new Date('1986-06-30 12:00:00'),
      contrato: '1'
    },
    // Continuar con el resto de los libros...
  );
  
  // Parte 4: Datos de los libros (continuación)

libros.push(
    {
      id_titulo: 'PC8888',
      titulo: 'Secrets of Silicon Valley',
      tipo: 'popular_comp',
      id_pub: '1389',
      precio: 20,
      avance: 8000,
      total_ventas: 4095,
      notas: "'Muckraking reporting by two courageous women on the world''s largest computer hardware and software manufacturers'.",
      fecha_pub: new Date('1987-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PC9999',
      titulo: 'Net Etiquette',
      tipo: 'popular_comp',
      id_pub: '1389',
      precio: null,
      avance: null,
      total_ventas: null,
      notas: 'A must-read for computer conferencing debutantes!',
      fecha_pub: new Date('2000-01-10 12:19:13'),
      contrato: '0'
    },
    {
      id_titulo: 'PS1372',
      titulo: 'Computer Phobic and Non-Phobic Individuals: Behavior Variati',
      tipo: 'psychology',
      id_pub: '0877',
      precio: 21.6,
      avance: 7000,
      total_ventas: 375,
      notas: 'A must for the specialist, this book examines the difference between those who hate and fear computers and those who think they are swell.',
      fecha_pub: new Date('1989-06-15 12:00:00'),
      contrato: '1'
    },
    // Continuar con el resto de los libros...
  );
// Parte 5: Datos de los libros (continuación)

libros.push(
    {
      id_titulo: 'PS2091',
      titulo: 'Is Anger the Enemy?',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 11,
      avance: 2275,
      total_ventas: 2045,
      notas: 'Carefully researched study of the effects of strong emotions on the body. Metabolic charts included.',
      fecha_pub: new Date('1989-06-15 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS2106',
      titulo: 'Life Without Fear',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 7,
      avance: 6000,
      total_ventas: 111,
      notas: 'New exercise, meditation, and nutritional techniques that can reduce the shock of daily interactions. Popular audience. Sample menus included, exercise video available separately.',
      fecha_pub: new Date('1990-10-05 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS3333',
      titulo: 'Prolonged Data Deprivation: Four Case Studies',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 20,
      avance: 2000,
      total_ventas: 4072,
      notas: 'What happens when the data runs dry? Searching evaluations of information-shortage effects on heavy users.',
      fecha_pub: new Date('1988-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS7777',
      titulo: 'Emotional Security: A New Algorithm',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 7.99,
      avance: 4000,
      total_ventas: 3336,
      notas: 'Protecting yourself and your loved ones from undue emotional stress in the modern world. Use of computer and nutritional aids emphasized.',
      fecha_pub: new Date('1988-06-12 12:00:00'),
      contrato: '1'
    },
    // Continuar con el resto de los libros...
  );
// Parte 6: Datos de los libros (continuación)

libros.push(
    {
      id_titulo: 'TC3218',
      titulo: 'Onions, Leeks, and Garlic: Cooking Secrets of the Mediterran',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 21,
      avance: 7000,
      total_ventas: 375,
      notas: 'Profusely illustrated in color, this makes a wonderful gift book for a cuisine-oriented friend.',
      fecha_pub: new Date('1990-10-21 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'TC4203',
      titulo: 'Fifty Years in Buckingham Palace Kitchens',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 12,
      avance: 4000,
      total_ventas: 15096,
      notas: 'More anecdotes from the Queen\'s favorite cook describing life among English royalty. Recipes, techniques, tender vignettes.',
      fecha_pub: new Date('1985-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'TC7777',
      titulo: 'Sushi, Anyone?',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 15,
      avance: 8000,
      total_ventas: 4095,
      notas: 'Detailed instructions on improving your position in life by learning how to make authentic Japanese sushi in your spare time. 5-10% increase in number of friends per recipe reported from beta test.',
      fecha_pub: new Date('1987-06-12 12:00:00'),
      contrato: '1'
    }
    // Continuar con el resto de los libros...
  );
  
// Parte 7: Datos de los libros (continuación)

libros.push(
    {
      id_titulo: 'PS1372',
      titulo: 'Computer Phobic and Non-Phobic Individuals: Behavior Variati',
      tipo: 'psychology',
      id_pub: '0877',
      precio: 21.6,
      avance: 7000,
      total_ventas: 375,
      notas: 'A must for the specialist, this book examines the difference between those who hate and fear computers and those who think they are swell.',
      fecha_pub: new Date('1989-06-15 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS2091',
      titulo: 'Is Anger the Enemy?',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 11,
      avance: 2275,
      total_ventas: 2045,
      notas: 'Carefully researched study of the effects of strong emotions on the body. Metabolic charts included.',
      fecha_pub: new Date('1989-06-15 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS2106',
      titulo: 'Life Without Fear',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 7,
      avance: 6000,
      total_ventas: 111,
      notas: 'New exercise, meditation, and nutritional techniques that can reduce the shock of daily interactions. Popular audience. Sample menus included, exercise video available separately.',
      fecha_pub: new Date('1990-10-05 12:00:00'),
      contrato: '1'
    }
    // Continuar con el resto de los libros...
  );
  
        // Parte 8: Datos de los libros (continuación)

libros.push(
    {
      id_titulo: 'PS3333',
      titulo: 'Prolonged Data Deprivation: Four Case Studies',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 20,
      avance: 2000,
      total_ventas: 4072,
      notas: 'What happens when the data runs dry? Searching evaluations of information-shortage effects on heavy users.',
      fecha_pub: new Date('1988-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS7777',
      titulo: 'Emotional Security: A New Algorithm',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 7.99,
      avance: 4000,
      total_ventas: 3336,
      notas: 'Protecting yourself and your loved ones from undue emotional stress in the modern world. Use of computer and nutritional aids emphasized.',
      fecha_pub: new Date('1988-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'TC3218',
      titulo: 'Onions, Leeks, and Garlic: Cooking Secrets of the Mediterran',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 21,
      avance: 7000,
      total_ventas: 375,
      notas: 'Profusely illustrated in color, this makes a wonderful gift book for a cuisine-oriented friend.',
      fecha_pub: new Date('1990-10-21 12:00:00'),
      contrato: '1'
    }
    // Continuar con el resto de los libros...
  );
  
// Parte 9: Datos de los libros (continuación)

libros.push(
    {
      id_titulo: 'TC4203',
      titulo: 'Fifty Years in Buckingham Palace Kitchens',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 12,
      avance: 4000,
      total_ventas: 15096,
      notas: 'More anecdotes from the Queen\'s favorite cook describing life among English royalty. Recipes, techniques, tender vignettes.',
      fecha_pub: new Date('1985-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'TC7777',
      titulo: 'Sushi, Anyone?',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 15,
      avance: 8000,
      total_ventas: 4095,
      notas: 'Detailed instructions on improving your position in life by learning how to make authentic Japanese sushi in your spare time. 5-10% increase in number of friends per recipe reported from beta test.',
      fecha_pub: new Date('1987-06-12 12:00:00'),
      contrato: '1'
    }
    // Continuar con el resto de los libros...
  );
  
    // Parte 10: Datos de los libros (continuación)

libros.push(
  {
    id_titulo: 'MC2222',
    titulo: 'Silicon Valley Gastronomic Treats',
    tipo: 'mod_cook',
    id_pub: '0877',
    precio: 20,
    avance: 0,
    total_ventas: 2032,
    notas: 'Favorite recipes for quick, easy, and elegant meals, tried and tested by people who never have time to eat, let alone cook.',
    fecha_pub: new Date('1989-06-09 12:00:00'),
    contrato: '1'
  },
  {
    id_titulo: 'MC3021',
    titulo: 'The Gourmet Microwave',
    tipo: 'mod_cook',
    id_pub: '0877',
    precio: 2.99,
    avance: 15000,
    total_ventas: 22246,
    notas: 'Traditional French gourmet recipes adapted for modern microwave cooking.',
    fecha_pub: new Date('1985-06-18 12:00:00'),
    contrato: '1'
  }
  // Continuar con el resto de los libros...
);

// Parte 11: Datos de los libros (continuación)

libros.push(
    {
      id_titulo: 'MC3026',
      titulo: 'The Psychology of Computer Cooking',
      tipo: 'UNDECIDED',
      id_pub: '0877',
      precio: null,
      avance: null,
      total_ventas: null,
      notas: '',
      fecha_pub: new Date('2000-01-10 12:19:59'),
      contrato: '0'
    },
    {
      id_titulo: 'PC1035',
      titulo: 'But Is It User Friendly?',
      tipo: 'popular_comp',
      id_pub: '1389',
      precio: 23,
      avance: 7000,
      total_ventas: 8780,
      notas: 'A survey of software for the naive user, focusing on the "friendliness" of each.',
      fecha_pub: new Date('1986-06-30 12:00:00'),
      contrato: '1'
    }
    // Continuar con el resto de los libros...
  );
  
// Parte 12: Datos de los libros (continuación)

libros.push(
    {
      id_titulo: 'PC8888',
      titulo: 'Secrets of Silicon Valley',
      tipo: 'popular_comp',
      id_pub: '1389',
      precio: 20,
      avance: 8000,
      total_ventas: 4095,
      notas: "Muckraking reporting by two courageous women on the world's largest computer hardware and software manufacturers.",
      fecha_pub: new Date('1987-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PC9999',
      titulo: 'Net Etiquette',
      tipo: 'popular_comp',
      id_pub: '1389',
      precio: null,
      avance: null,
      total_ventas: null,
      notas: 'A must-read for computer conferencing debutantes!',
      fecha_pub: new Date('2000-01-10 12:19:13'),
      contrato: '0'
    }
    // Continuar con el resto de los libros...
  );
  
// Parte 13: Datos de los libros (continuación)

libros.push(
    {
      id_titulo: 'PS1372',
      titulo: 'Computer Phobic and Non-Phobic Individuals: Behavior Variati',
      tipo: 'psychology',
      id_pub: '0877',
      precio: 21.6,
      avance: 7000,
      total_ventas: 375,
      notas: "A must for the specialist, this book examines the difference between those who hate and fear computers and those who think they are swell.",
      fecha_pub: new Date('1989-06-15 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS2091',
      titulo: 'Is Anger the Enemy?',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 11,
      avance: 2275,
      total_ventas: 2045,
      notas: 'Carefully researched study of the effects of strong emotions on the body. Metabolic charts included.',
      fecha_pub: new Date('1989-06-15 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS2106',
      titulo: 'Life Without Fear',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 7,
      avance: 6000,
      total_ventas: 111,
      notas: 'New exercise, meditation, and nutritional techniques that can reduce the shock of daily interactions. Popular audience. Sample menus included, exercise video available separately.',
      fecha_pub: new Date('1990-10-05 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS3333',
      titulo: 'Prolonged Data Deprivation: Four Case Studies',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 20,
      avance: 2000,
      total_ventas: 4072,
      notas: 'What happens when the data runs dry? Searching evaluations of information-shortage effects on heavy users.',
      fecha_pub: new Date('1988-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS7777',
      titulo: 'Emotional Security: A New Algorithm',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 7.99,
      avance: 4000,
      total_ventas: 3336,
      notas: 'Protecting yourself and your loved ones from undue emotional stress in the modern world. Use of computer and nutritional aids emphasized.',
      fecha_pub: new Date('1988-06-12 12:00:00'),
      contrato: '1'
    }
    // Continuar con el resto de los libros...
  );
  
// Parte 14: Datos de los libros (continuación)

libros.push(
    {
      id_titulo: 'TC3218',
      titulo: 'Onions, Leeks, and Garlic: Cooking Secrets of the Mediterran',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 21,
      avance: 7000,
      total_ventas: 375,
      notas: 'Profusely illustrated in color, this makes a wonderful gift book for a cuisine-oriented friend.',
      fecha_pub: new Date('1990-10-21 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'TC4203',
      titulo: 'Fifty Years in Buckingham Palace Kitchens',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 12,
      avance: 4000,
      total_ventas: 15096,
      notas: "More anecdotes from the Queen's favorite cook describing life among English royalty. Recipes, techniques, tender vignettes.",
      fecha_pub: new Date('1985-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'TC7777',
      titulo: 'Sushi, Anyone?',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 15,
      avance: 8000,
      total_ventas: 4095,
      notas: 'Detailed instructions on improving your position in life by learning how to make authentic Japanese sushi in your spare time. 5-10% increase in number of friends per recipe reported from beta test.',
      fecha_pub: new Date('1987-06-12 12:00:00'),
      contrato: '1'
    }
    // Continuar con el resto de los libros...
  );
  
// Parte 15: Datos de las tiendas

var tiendas = [
    {
      id_tienda: '7066',
      nombre_tienda: "Barnum's",
      direcc_tienda: '567 Pasadena Ave.',
      ciudad: 'Tustin',
      estado: 'CA',
      pais: 'USA',
      cod_postal: '92789',
      terminos: 'Net 30'
    },
    {
      id_tienda: '7067',
      nombre_tienda: 'News & Brews',
      direcc_tienda: '577 First St.',
      ciudad: 'Los Gatos',
      estado: 'CA',
      pais: 'USA',
      cod_postal: '96745',
      terminos: 'Net 30'
    },
    {
      id_tienda: '7131',
      nombre_tienda: 'Doc-U-Mat: Quality Laundry and Books',
      direcc_tienda: '24-A Avrogado Way',
      ciudad: 'Remulade',
      estado: 'WA',
      pais: 'USA',
      cod_postal: '98014',
      terminos: 'Net 60'
    },
    {
      id_tienda: '8042',
      nombre_tienda: 'Bookbeat',
      direcc_tienda: '679 Carson St.',
      ciudad: 'Portland',
      estado: 'OR',
      pais: 'USA',
      cod_postal: '89076',
      terminos: 'Net 30'
    },
    {
      id_tienda: '6380',
      nombre_tienda: 'Eric the Read Books',
      direcc_tienda: '788 Catamaugus Ave.',
      ciudad: 'Seattle',
      estado: 'WA',
      pais: 'USA',
      cod_postal: '98056',
      terminos: 'Net 60'
    },
    {
      id_tienda: '7896',
      nombre_tienda: 'Fricative Bookshop',
      direcc_tienda: '89 Madison St.',
      ciudad: 'Fremont',
      estado: 'CA',
      pais: 'USA',
      cod_postal: '90019',
      terminos: 'Net 60'
    },
    {
      id_tienda: '5023',
      nombre_tienda: 'Thoreau Reading Discount Chain',
      direcc_tienda: '20435 Walden Expressway',
      ciudad: 'Concord',
      estado: 'MA',
      pais: 'USA',
      cod_postal: '01776',
      terminos: 'Net 60'
    }
    // Continuar con el resto de las tiendas...
  ];
  
// Parte 16: Datos de los títulos

var titulos = [
    {
      id_titulo: 'BU1032',
      titulo: "The Busy Executive's Database Guide",
      tipo: 'business',
      id_pub: '1389',
      precio: 20,
      avance: 5000,
      total_ventas: 4095,
      notas: 'An overview of available database systems with emphasis on common business applications. Illustrated.',
      fecha_pub: new Date('1986-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'BU1111',
      titulo: 'Cooking with Computers: Surreptitious Balance Sheets',
      tipo: 'business',
      id_pub: '1389',
      precio: 12,
      avance: 5000,
      total_ventas: 3876,
      notas: 'Helpful hints on how to use your electronic resources to the best advantage.',
      fecha_pub: new Date('1988-06-09 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'BU2075',
      titulo: 'You Can Combat Computer Stress!',
      tipo: 'business',
      id_pub: '0736',
      precio: 2.99,
      avance: 10125,
      total_ventas: 18722,
      notas: 'The latest medical and psychological techniques for living with the electronic office. Easy-to-understand explanations.',
      fecha_pub: new Date('1985-06-30 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'BU7832',
      titulo: 'Straight Talk About Computers',
      tipo: 'business',
      id_pub: '1389',
      precio: 20,
      avance: 5000,
      total_ventas: 4095,
      notas: 'Annotated analysis of what computers can do for you: a no-hype guide for the critical user.',
      fecha_pub: new Date('1987-06-22 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'MC2222',
      titulo: 'Silicon Valley Gastronomic Treats',
      tipo: 'mod_cook',
      id_pub: '0877',
      precio: 20,
      avance: 0,
      total_ventas: 2032,
      notas: 'Favorite recipes for quick, easy, and elegant meals, tried and tested by people who never have time to eat, let alone cook.',
      fecha_pub: new Date('1989-06-09 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'MC3021',
      titulo: 'The Gourmet Microwave',
      tipo: 'mod_cook',
      id_pub: '0877',
      precio: 2.99,
      avance: 15000,
      total_ventas: 22246,
      notas: 'Traditional French gourmet recipes adapted for modern microwave cooking.',
      fecha_pub: new Date('1985-06-18 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'MC3026',
      titulo: 'The Psychology of Computer Cooking',
      tipo: 'UNDECIDED',
      id_pub: '0877',
      precio: null,
      avance: null,
      total_ventas: null,
      notas: '',
      fecha_pub: new Date('2000-01-10 12:19:59'),
      contrato: '0'
    },
    {
      id_titulo: 'PC1035',
      titulo: 'But Is It User Friendly?',
      tipo: 'popular_comp',
      id_pub: '1389',
      precio: 23,
      avance: 7000,
      total_ventas: 8780,
      notas: 'A survey of software for the naive user, focusing on the "friendliness" of each.',
      fecha_pub: new Date('1986-06-30 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PC8888',
      titulo: 'Secrets of Silicon Valley',
      tipo: 'popular_comp',
      id_pub: '1389',
      precio: 20,
      avance: 8000,
      total_ventas: 4095,
      notas: 'Muckraking reporting by two courageous women on the world\'s largest computer hardware and software manufacturers.',
      fecha_pub: new Date('1987-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PC9999',
      titulo: 'Net Etiquette',
      tipo: 'popular_comp',
      id_pub: '1389',
      precio: null,
      avance: null,
      total_ventas: null,
      notas: 'A must-read for computer conferencing debutantes!',
      fecha_pub: new Date('2000-01-10 12:19:13'),
      contrato: '0'
    },
    {
      id_titulo: 'PS1372',
      titulo: 'Computer Phobic and Non-Phobic Individuals: Behavior Variati',
      tipo: 'psychology',
      id_pub: '0877',
      precio: 21.6,
      avance: 7000,
      total_ventas: 375,
      notas: 'A must for the specialist, this book examines the difference between those who hate and fear computers and those who think they are swell.',
      fecha_pub: new Date('1989-06-15 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS2091',
      titulo: 'Is Anger the Enemy?',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 11,
      avance: 2275,
      total_ventas: 2045,
      notas: 'Carefully researched study of the effects of strong emotions on the body. Metabolic charts included.',
      fecha_pub: new Date('1989-06-15 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS2106',
      titulo: 'Life Without Fear',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 7,
      avance: 6000,
      total_ventas: 111,
      notas: 'New exercise, meditation, and nutritional techniques that can reduce the shock of daily interactions. Popular audience. Sample menus included, exercise video available separately.',
      fecha_pub: new Date('1990-10-05 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS3333',
      titulo: 'Prolonged Data Deprivation: Four Case Studies',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 20,
      avance: 2000,
      total_ventas: 4072,
      notas: 'What happens when the data runs dry? Searching evaluations of information-shortage effects on heavy users.',
      fecha_pub: new Date('1988-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'PS7777',
      titulo: 'Emotional Security: A New Algorithm',
      tipo: 'psychology',
      id_pub: '0736',
      precio: 7.99,
      avance: 4000,
      total_ventas: 3336,
      notas: 'Protecting yourself and your loved ones from undue emotional stress in the modern world. Use of computer and nutritional aids emphasized.',
      fecha_pub: new Date('1988-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'TC3218',
      titulo: 'Onions, Leeks, and Garlic: Cooking Secrets of the Mediterran',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 21,
      avance: 7000,
      total_ventas: 375,
      notas: 'Profusely illustrated in color, this makes a wonderful gift book for a cuisine-oriented friend.',
      fecha_pub: new Date('1990-10-21 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'TC4203',
      titulo: 'Fifty Years in Buckingham Palace Kitchens',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 12,
      avance: 4000,
      total_ventas: 15096,
      notas: 'More anecdotes from the Queen\'s favorite cook describing life among English royalty. Recipes, techniques, tender vignettes.',
      fecha_pub: new Date('1985-06-12 12:00:00'),
      contrato: '1'
    },
    {
      id_titulo: 'TC7777',
      titulo: 'Sushi, Anyone?',
      tipo: 'trad_cook',
      id_pub: '0877',
      precio: 15,
      avance: 8000,
      total_ventas: 4095,
      notas: 'Detailed instructions on improving your position in life by learning how to make authentic Japanese sushi in your spare time. 5-10% increase in number of friends per recipe reported from beta test.',
      fecha_pub: new Date('1987-06-12 12:00:00'),
      contrato: '1'
    }
  
  ];
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>