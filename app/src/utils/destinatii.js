
/* Exercițiul 1 - Funcții de prelucrare */

// 1. Lista cu numele orașelor
export const getOrase = (list) =>
  list.map((d) => d.oras)

// 2. Destinațiile care nu au fost vizitate
export const getNevizitate = (list) =>
  list.filter((d) => d.vizitat === false)

// 3. Numărul total de zile
export const totalZile = (list) =>
  list.reduce((total, d) => total + d.zile, 0)

/* 4. Formatarea unei destinații */
export const formatDestinatie = ({ oras, tara, zile, vizitat }) =>
  `[${vizitat ? 'x' : ' '}] ${oras}, ${tara} (${zile} zile)`

/* 5. Numărul de destinații pe țară */
export const numarPeTara = (list) =>
  list.reduce(
    (acc, { tara }) => ({
      ...acc,
      [tara]: (acc[tara] ?? 0) + 1
    }),
    {}
  )

/* 6. Sortarea descrescătoare după zile */
export const sortDupaZile = (list) =>
  [...list].sort((a, b) => b.zile - a.zile)

/* Exercițiul 2 - Modificarea listei */

// 1. Schimbarea stării unei destinații
export const marcheazaVizitat = (list, id) =>
  list.map((d) =>
    d.id === id
      ? { ...d, vizitat: !d.vizitat }
      : d
  )

// 2. Adăugarea unei destinații noi
export const adaugaDestinatie = (list, d) =>
  [...list, d]

// 3. Ștergerea unei destinații
export const stergeDestinatie = (list, id) =>
  list.filter((d) => d.id !== id)
