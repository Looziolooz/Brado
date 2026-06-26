export type Burger = {
  code: string; // weigh-tag code, reinforces the "banco" concept
  name: string;
  weight: string; // patty weight, shown in mono
  blurb: string;
  ingredients: string[];
  price: number;
  tag?: "novità" | "piccante" | "veg" | "del banco";
  veg?: boolean;
};

export const burgers: Burger[] = [
  {
    code: "B-01",
    name: "Il Brado",
    weight: "2× 90g",
    blurb: "Il nostro manifesto: doppio manzo, formaggio che cola, cipolla bruciata.",
    ingredients: ["doppio manzo alla brace", "cheddar stagionato", "cipolla bruciata", "salsa Brado", "pane al sesamo"],
    price: 14,
    tag: "del banco",
  },
  {
    code: "B-02",
    name: "La Brace",
    weight: "180g",
    blurb: "Affumicato fino all'osso, come deve essere un burger di fuoco.",
    ingredients: ["manzo alla brace", "scamorza affumicata", "pancetta croccante", "cipolla caramellata", "maionese al carbone"],
    price: 13,
  },
  {
    code: "B-03",
    name: "Parmigiana",
    weight: "160g",
    blurb: "Emilia nel panino: melanzane fritte e parmigiano 24 mesi.",
    ingredients: ["manzo", "melanzane fritte", "parmigiano 24 mesi", "pomodoro", "basilico"],
    price: 13,
  },
  {
    code: "B-04",
    name: "Piccante",
    weight: "160g",
    blurb: "'Nduja di Spilinga e friggitelli: scalda, non brucia.",
    ingredients: ["manzo", "'nduja", "provola", "friggitelli", "maionese affumicata"],
    price: 13.5,
    tag: "piccante",
  },
  {
    code: "B-05",
    name: "La Verde",
    weight: "150g",
    blurb: "Niente carne, nessuna scusa: ceci e spinaci, croccante fuori.",
    ingredients: ["burger di ceci e spinaci", "stracciatella", "pesto", "pomodoro secco", "rucola"],
    price: 12,
    tag: "veg",
    veg: true,
  },
  {
    code: "B-06",
    name: "Il Classico",
    weight: "150g",
    blurb: "Quello che ordini quando vuoi solo un grande hamburger.",
    ingredients: ["manzo", "cheddar", "lattuga", "pomodoro", "cetriolini", "salsa burger"],
    price: 11,
  },
];

export type SideItem = { name: string; note?: string; price: number };

export const sides: SideItem[] = [
  { name: "Patate alla brace", note: "rosmarino e sale grosso", price: 5 },
  { name: "Onion rings", note: "pastella alla birra", price: 5 },
  { name: "Jalapeños fritti", note: "con salsa ranch", price: 5.5 },
  { name: "Insalata di cavolo", note: "coleslaw di casa", price: 4 },
  { name: "Patate dolci", note: "maionese affumicata", price: 5.5 },
];

export const drinks: SideItem[] = [
  { name: "Birra artigianale", note: "spina, rotazione mensile", price: 6 },
  { name: "Chinotto / Cedrata", note: "in bottiglia", price: 3.5 },
  { name: "Limonata di casa", note: "menta e zenzero", price: 4 },
  { name: "Vino della casa", note: "Lambrusco di Modena", price: 5 },
];

export const desserts: SideItem[] = [
  { name: "Tortino al cioccolato", note: "cuore caldo, gelato fiordilatte", price: 6 },
  { name: "Cheesecake ai frutti rossi", price: 5.5 },
];

export const tagStyles: Record<NonNullable<Burger["tag"]>, string> = {
  "del banco": "text-ketchup",
  piccante: "text-ketchup",
  veg: "text-pickle",
  novità: "text-mustard",
};
