export type Category = {
  id: string
  name: string
  description: string
  color: string
}

export type Book = {
  id: string
  title: string
  author: string
  price: number
  rating: number
  pages: number
  year: number
  genre: string
  cover: string
  description: string
  tags: string[]
  featured?: boolean
}

export const categories: Category[] = [
  { id: "fiction", name: "Fiction", description: "Stories that transport you to other worlds", color: "bg-violet-600" },
  { id: "sci-fi", name: "Science Fiction", description: "Explore the future and beyond", color: "bg-blue-600" },
  { id: "history", name: "History", description: "Learn from the past", color: "bg-amber-600" },
  { id: "biography", name: "Biography", description: "Lives worth knowing", color: "bg-emerald-600" },
  { id: "mystery", name: "Mystery", description: "Puzzles waiting to be solved", color: "bg-rose-600" },
  { id: "self-help", name: "Self-Help", description: "Tools for a better life", color: "bg-cyan-600" },
]

export const books: Book[] = [
  { id: "1", title: "The Last Horizon", author: "Elena Marsh", price: 14.99, rating: 4.5, pages: 342, year: 2022, genre: "fiction", cover: "bg-violet-700", description: "A sweeping tale of love and loss across three generations of a family in coastal Maine. Elena Marsh weaves together past and present in this luminous debut novel that asks what we owe to those who came before us.", tags: ["debut", "literary fiction", "family saga"] },
  { id: "2", title: "Quiet Hours", author: "James Calloway", price: 12.99, rating: 4.0, pages: 280, year: 2021, genre: "fiction", cover: "bg-violet-800", description: "Set against the backdrop of a small Midwestern town, Quiet Hours is an intimate portrait of grief, friendship, and the unexpected ways we find our way back to ourselves.", tags: ["bestseller", "contemporary"] },
  { id: "3", title: "The Glass Garden", featured: true, author: "Sofia Reyes", price: 16.99, rating: 4.8, pages: 410, year: 2023, genre: "fiction", cover: "bg-purple-700", description: "When a botanist discovers a sealed Victorian greenhouse on her inherited estate, she uncovers secrets that challenge everything she believed about her family. A lush, atmospheric novel about memory and belonging.", tags: ["award-winning", "atmospheric"] },
  { id: "4", title: "Void Protocol", author: "Marcus Chen", price: 13.99, rating: 4.7, pages: 488, year: 2023, genre: "sci-fi", cover: "bg-blue-700", description: "In 2189, humanity's first contact with an alien signal triggers a political crisis that fractures the solar alliance. A gripping hard sci-fi thriller about communication, trust, and the cost of first contact.", tags: ["hard sci-fi", "bestseller"] },
  { id: "5", title: "After the Quiet", author: "Priya Nair", price: 11.99, rating: 4.2, pages: 316, year: 2020, genre: "sci-fi", cover: "bg-blue-800", description: "Fifty years after a global communications blackout, a young engineer discovers the blackout was not accidental. A tense, intimate story set in a world rebuilding its relationship with technology.", tags: ["dystopian", "debut"] },
  { id: "6", title: "The Cartographer of Stars", author: "Leo Fontaine", price: 15.99, rating: 4.6, pages: 402, year: 2022, genre: "sci-fi", cover: "bg-indigo-700", description: "An AI tasked with mapping uncharted star systems begins to ask questions its creators never anticipated. Philosophical, lyrical, and quietly devastating — a modern classic of machine consciousness fiction.", tags: ["award-winning", "AI fiction"] },
  { id: "7", title: "Empires of Salt", author: "Dr. Ruth Harmon", price: 18.99, rating: 4.4, pages: 512, year: 2021, genre: "history", cover: "bg-amber-700", description: "A sweeping history of the salt trade from ancient Mesopotamia to the industrial revolution, revealing how a single mineral shaped civilizations, sparked wars, and built empires.", tags: ["popular history", "food history"] },
  { id: "8", title: "The Burning Year", author: "Thomas Wick", price: 17.99, rating: 4.3, pages: 368, year: 2022, genre: "history", cover: "bg-amber-800", description: "A narrative account of 1848 — the year revolutions swept across Europe — told through the lives of seven ordinary people caught in extraordinary times.", tags: ["narrative history", "Europe"] },
  { id: "9", title: "Rivers of Memory", featured: true, author: "Amara Osei", price: 19.99, rating: 4.9, pages: 456, year: 2023, genre: "history", cover: "bg-orange-700", description: "An authoritative and moving account of the ancient kingdoms of West Africa, restoring voices and histories long marginalized by Western historiography.", tags: ["award-winning", "African history"] },
  { id: "10", title: "A Life in Paint", author: "Claire Dupont", price: 16.99, rating: 4.5, pages: 334, year: 2021, genre: "biography", cover: "bg-emerald-700", description: "The definitive biography of abstract expressionist painter Vera Kohl, drawing on previously unpublished letters and interviews with her contemporaries to paint a portrait of an artist who refused every label.", tags: ["art biography", "women artists"] },
  { id: "11", title: "The Unfinished Man", author: "David Leary", price: 15.99, rating: 4.1, pages: 298, year: 2022, genre: "biography", cover: "bg-emerald-800", description: "A candid and compassionate memoir-biography of jazz musician Elias Moore — tracing his rise, fall, and late-career reinvention across six decades of American music.", tags: ["music biography", "jazz"] },
  { id: "12", title: "Citizen of Two Worlds", author: "Yuki Tanaka", price: 14.99, rating: 4.6, pages: 382, year: 2023, genre: "biography", cover: "bg-green-700", description: "The extraordinary life of diplomat and translator Hana Sato, who shaped postwar relations between Japan and the United States through quiet, persistent, unrecognized work.", tags: ["political biography", "Japan"] },
  { id: "13", title: "The Pale Corridor", featured: true, author: "Nina Voss", price: 12.99, rating: 4.7, pages: 310, year: 2022, genre: "mystery", cover: "bg-rose-700", description: "When a renowned architect is found dead in the building she designed, detective Arlo Crane must decode a puzzle hidden in the building's structure itself. A fiendishly clever locked-room mystery.", tags: ["locked-room", "bestseller"] },
  { id: "14", title: "Salt and Shadow", author: "Patrick Drum", price: 11.99, rating: 4.3, pages: 276, year: 2021, genre: "mystery", cover: "bg-rose-800", description: "A retired detective moves to a remote coastal village hoping for quiet — and finds instead a thirty-year-old disappearance that the community has conspired to forget.", tags: ["cozy mystery", "debut"] },
  { id: "15", title: "Seven Clocks", author: "Isabelle Morin", price: 13.99, rating: 4.5, pages: 352, year: 2023, genre: "mystery", cover: "bg-pink-700", description: "Each chapter counts down one hour of the last day before a heist. Seven suspects. Seven alibis. Seven lies. Isabelle Morin's breathless debut reinvents the countdown thriller.", tags: ["thriller", "debut", "award-winning"] },
  { id: "16", title: "The Slow Fix", author: "Dr. Anna Stein", price: 15.99, rating: 4.2, pages: 224, year: 2022, genre: "self-help", cover: "bg-cyan-700", description: "Against the culture of quick solutions, Dr. Stein argues that lasting change requires patience, repetition, and a willingness to sit with discomfort. A calm, research-backed guide to building better habits.", tags: ["habits", "psychology"] },
  { id: "17", title: "On Doing Nothing", author: "Kenji Mori", price: 13.99, rating: 4.4, pages: 186, year: 2021, genre: "self-help", cover: "bg-cyan-800", description: "A philosopher and former corporate lawyer makes the case for deliberate rest — not as laziness, but as a radical and necessary act of reclaiming your time and attention.", tags: ["mindfulness", "philosophy"] },
  { id: "18", title: "The Margin Notes", featured: true, author: "Sara Beck", price: 14.99, rating: 4.6, pages: 258, year: 2023, genre: "self-help", cover: "bg-teal-700", description: "A reading-based framework for self-reflection: Beck shows how annotating books, keeping a commonplace book, and engaging deeply with ideas can transform not just how you read, but how you think.", tags: ["reading", "journaling", "bestseller"] },
  { id: "19", title: "Between Storms", author: "Rachel Okonkwo", price: 12.99, rating: 4.0, pages: 294, year: 2020, genre: "fiction", cover: "bg-fuchsia-700", description: "A coming-of-age story set across Lagos and London, following a young woman navigating identity, ambition, and family expectations across two very different cities.", tags: ["coming of age", "diaspora"] },
  { id: "20", title: "The Fermi Questions", featured: true, author: "Oliver Grant", price: 16.99, rating: 4.8, pages: 436, year: 2023, genre: "sci-fi", cover: "bg-sky-700", description: "A brilliant mathematician working on SETI begins to suspect that the silence of the universe is not emptiness but a deliberate message. Rich, rigorous, and deeply human.", tags: ["hard sci-fi", "SETI", "award-winning"] },
]
