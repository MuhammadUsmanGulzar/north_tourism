export interface ItineraryItem {
  day: string;
  title: string;
  desc: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Expedition {
  id: string;
  tagline: string;
  title: string;
  desc: string;
  difficulty: "Easy" | "Moderate" | "Hard" | "Extreme";
  difficultyClass: string;
  duration: string;
  maxAltitude: string;
  bestSeason: string;
  groupSize: string;
  accommodation: string;
  startingPrice: string;
  overviewSubtitle: string;
  overviewTitle: string;
  overviewDescs: string[];
  overviewImage: string;
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
  faqs: FAQItem[];
}

export const expeditionsData: Record<string, Expedition> = {
  "k2": {
    id: "k2",
    tagline: "THE ULTIMATE KARAKORAM EXPEDITION",
    title: "K2 BASE CAMP TREK",
    desc: "Journey through the legendary Baltoro Glacier to the foot of the world's second-highest mountain and experience one of the greatest trekking adventures on Earth.",
    difficulty: "Extreme",
    difficultyClass: "extreme",
    duration: "21 Days",
    maxAltitude: "5,150m",
    bestSeason: "June – August",
    groupSize: "12 Travelers",
    accommodation: "Camping + Hotels",
    startingPrice: "$2,450",
    overviewSubtitle: "THE JOURNEY",
    overviewTitle: "AN ADVENTURE LIKE NO OTHER",
    overviewDescs: [
      "The K2 Base Camp Trek is widely considered one of the world's most spectacular and demanding adventure journeys. Following the rushing torrents of the Braldu River, the trek leads deep into the high mountain wilderness of Baltistan, where the massive Baltoro Glacier acts as a highway to the highest peaks on the planet.",
      "As you traverse the lateral moraine of the Baltoro Glacier, towering towers of granite like the Trango Towers and Cathedral Peak rise dramatically on either side. You will march up to Concordia, the famous glacial confluence dubbed the 'Throne Room of the Mountain Gods', which offers an unmatched 360-degree amphitheater of snow-capped peaks, including Broad Peak, Gasherbrum, and K2 itself.",
      "This expedition is more than a physical challenge; it is a deep immersion into the unique mountain culture of Baltistan. Supported by the legendary Balti porters and guides, you will experience authentic mountain hospitality, shared stories around campsites, and the raw, spiritual power of the Karakoram Range."
    ],
    overviewImage: "/assets/images/who-we-are-main.png",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Islamabad",
        desc: "Upon arrival at Islamabad International Airport, our team transfers you to the hotel. We gather for an evening briefing, go over gear checklists, and enjoy a welcome dinner."
      },
      {
        day: "Day 2",
        title: "Flight to Skardu",
        desc: "We board a scenic flight to Skardu, capturing aerial views of Nanga Parbat and the Indus River. Spend the afternoon exploring local bazaars and acclimatizing to 2,230m elevation."
      },
      {
        day: "Day 3",
        title: "Preparation & Acclimatization",
        desc: "A dedicated day in Skardu for final government briefings, gear checks, packing, and a short walk to Kharpocho Fort for stunning valley views."
      },
      {
        day: "Day 4–6",
        title: "Journey to Askole & Jhola",
        desc: "We take off in 4x4 jeeps through the rugged Shigar Valley to Askole, the last road-head village. We begin trekking, crossing the Braldu River to reach our first wild campsites at Jhola."
      },
      {
        day: "Day 7–10",
        title: "Baltoro Glacier Trek",
        desc: "We ascend onto the mighty Baltoro Glacier, trekking past Paiju and Urdukas. Towering monoliths like Trango Towers and Cathedral Peak dominate the skyline as we ascend above 4,000m."
      },
      {
        day: "Day 11",
        title: "Concordia",
        desc: "We march up to Concordia, the famous glacial junction. Camp surrounded by the highest concentration of giant peaks on earth, looking directly at the mighty pyramid of K2."
      },
      {
        day: "Day 12",
        title: "K2 Base Camp",
        desc: "A challenging day-hike leads us to K2 Base Camp (5,150m) and the Art Gilkey Memorial. Stand directly beneath the gargantuan mountain wall before returning to Concordia."
      },
      {
        day: "Day 13–20",
        title: "Return Journey",
        desc: "We begin our descent back down the Baltoro Glacier, or optionally cross the Gondogoro La Pass if conditions permit. We return to Askole, take jeeps back to Skardu, and fly back to Islamabad."
      },
      {
        day: "Day 21",
        title: "Departure",
        desc: "Hotel check-out and transfer to Islamabad International Airport for your international return flight home."
      }
    ],
    inclusions: [
      "Professional government-certified mountain guides",
      "Trekking permits and National Park entry fees",
      "Hotel accommodations in Islamabad and Skardu",
      "Full board meals during the entire trek",
      "High-quality camping equipment (tents, mess tents, sleeping mats)",
      "All land transport (jeeps and domestic flights)",
      "Porter services for personal gear (up to 15kg)",
      "First-aid kit, satellite communication, and emergency support"
    ],
    exclusions: [
      "International flights to and from Islamabad",
      "Personal medical and travel insurance (mandatory evacuation cover)",
      "Pakistan entry visa fees",
      "Personal trekking gear and clothing",
      "Tips for guide, porters, and kitchen staff",
      "Additional hotel nights outside the group itinerary"
    ],
    gallery: [
      "/assets/images/k2.png",
      "/assets/images/passu-cones.png",
      "/assets/images/snow-lake.png",
      "/assets/images/deosai-sunrise.png"
    ],
    faqs: [
      {
        question: "How physically demanding is this trek?",
        answer: "This is an extremely demanding trek. You will be walking for 6 to 8 hours daily over rugged moraine and rough glaciers at high altitudes. Prior multi-day trekking experience, excellent cardiovascular fitness, and leg strength are highly recommended."
      },
      {
        question: "Do I need previous trekking experience?",
        answer: "Yes. While it is not a technical climb, you must be comfortable trekking for multiple consecutive days on uneven, loose glacial terrain, and sleeping in cold outdoor tents above 4,000m."
      },
      {
        question: "What gear is essential?",
        answer: "Essential personal items include well-broken-in trekking boots, a down jacket rated for -15°C, a 4-season sleeping bag, thermal base layers, UV-protection sunglasses, and a sturdy 60L duffel bag for the porters."
      },
      {
        question: "Are permits included?",
        answer: "Yes, all mountaineering and trekking permits, national park entry fees, and paperwork are fully included and processed by Broad Peak Adventures."
      },
      {
        question: "How safe is the expedition?",
        answer: "Safety is our primary concern. Our guides are trained in wilderness first aid and high-altitude protocols. We carry satellite communication, pulse oximeters, medical kits, and coordinate with helicopter rescue."
      }
    ]
  },
  "concordia": {
    id: "concordia",
    tagline: "THRONE ROOM OF THE MOUNTAIN GODS",
    title: "CONCORDIA TREK",
    desc: "Journey into the heart of the Karakoram where the Baltoro and Godwin-Austen glaciers converge, surrounded by the highest concentration of 8,000m peaks on Earth.",
    difficulty: "Hard",
    difficultyClass: "hard",
    duration: "18 Days",
    maxAltitude: "4,600m",
    bestSeason: "June – August",
    groupSize: "10 Travelers",
    accommodation: "Camping + Hotels",
    startingPrice: "$1,950",
    overviewSubtitle: "THE AMPHITHEATER",
    overviewTitle: "THE THRONE ROOM",
    overviewDescs: [
      "The Concordia Trek is a spectacular alpine journey that takes you to the legendary confluence of glaciers directly below K2, Broad Peak, and the Gasherbrum massif. The route follows the classical Karakoram highway of ice, traversing the massive Baltoro Glacier through vertical granite walls of immense scale.",
      "Standing at Concordia, you are in the center of the 'Throne Room of the Mountain Gods'. The 360-degree panorama of giant peaks is unparalleled, with the massive wedge of K2 dominating the northern view and Broad Peak rising immediately to the east.",
      "Supported by expert local Balti guides and porters, this trek is a true alpine expedition. It offers the full grandeur of the Karakoram wilderness with a slightly shorter itinerary and lower maximum altitude than the full Gondogoro La traverse."
    ],
    overviewImage: "/assets/images/passu-cones.png",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Islamabad",
        desc: "Welcome to Pakistan. Meet your guide at the airport and transfer to your hotel. Evening briefing and team welcome dinner."
      },
      {
        day: "Day 2",
        title: "Flight to Skardu",
        desc: "An incredible flight over the Himalayas and Karakoram ranges brings us to Skardu (2,230m). Spend the day acclimatizing and visiting local heritage sites."
      },
      {
        day: "Day 3",
        title: "Acclimatization in Skardu",
        desc: "Explore the historic Skardu Bazaar, hike up to Kharpocho Fort for stunning Indus River views, and prepare expedition duffels."
      },
      {
        day: "Day 4–5",
        title: "Drive to Askole & First Steps",
        desc: "A rugged 4x4 jeep ride through the Shigar Valley brings us to Askole village, the starting point of our foot journey. We set out trekking to Jhola campsite."
      },
      {
        day: "Day 6–9",
        title: "Traversing the Baltoro Glacier",
        desc: "We cross Paiju and Urdukas, ascending onto the vast moraine of the Baltoro Glacier. Enjoy surreal views of Trango Towers and Cathedral Peak rising like cathedral spires."
      },
      {
        day: "Day 10–11",
        title: "Concordia Confluence",
        desc: "Trek through Gore II to reach Concordia (4,600m). Spend two nights in this breathtaking glacial sanctuary, taking in the close-up majesty of K2, Broad Peak, and Gasherbrum IV."
      },
      {
        day: "Day 12",
        title: "K2 Viewpoint Hike",
        desc: "Take an optional day hike towards K2 Base Camp or Broad Peak Base Camp, walking across the Godwin-Austen glacier for even closer views of K2."
      },
      {
        day: "Day 13–17",
        title: "Descent to Askole & Skardu",
        desc: "We retrace our steps down the Baltoro Glacier to Askole, board our 4x4 jeeps to Skardu, and fly back to Islamabad."
      },
      {
        day: "Day 18",
        title: "Final Departure",
        desc: "Transfer to Islamabad Airport for your outbound international flight."
      }
    ],
    inclusions: [
      "Licensed English-speaking mountain guide and chef",
      "Karakoram National Park entry fees and trekking permits",
      "Internal flights (Islamabad-Skardu return) and jeep transport",
      "Full camping gear and high-quality double occupancy tents",
      "Healthy, freshly prepared meals daily on trek",
      "Porterage of personal luggage up to 15kg",
      "First-aid kits and emergency satellite communications"
    ],
    exclusions: [
      "International airfare and travel insurance",
      "Pakistan visa fee",
      "Personal trekking boots, sleeping bags, and warm clothing",
      "Tips for porters, cooks, and guiding staff"
    ],
    gallery: [
      "/assets/images/passu-cones.png",
      "/assets/images/k2.png",
      "/assets/images/destination_hunza_1783185596174.png",
      "/assets/images/destination_fairy_meadows_1783185607151.png"
    ],
    faqs: [
      {
        question: "What makes Concordia Trek different from K2 Base Camp?",
        answer: "The Concordia Trek is slightly shorter (18 days vs 21 days) and avoids the ultimate high altitude of K2 Base Camp (5,150m), turning back at Concordia (4,600m). However, you still enjoy the same breathtaking 360-degree views of K2."
      },
      {
        question: "What is the difficulty rating?",
        answer: "It is rated as 'Hard'. It requires walking on rugged, rocky, and glacial terrain for up to 6 hours daily, but does not involve technical climbing."
      },
      {
        question: "Where do we sleep on the trek?",
        answer: "We sleep in high-quality 4-season tents on the glacier. In Islamabad and Skardu, we stay in comfortable, premium tourist hotels."
      }
    ]
  },
  "snow-lake": {
    id: "snow-lake",
    tagline: "REMOTE GLACIAL WILDERNESS TRAVERSE",
    title: "SNOW LAKE TREK",
    desc: "Cross the magnificent Hispar La Pass and explore Snow Lake — a massive high-altitude glacial basin of pristine snow and ice hidden deep in the Karakoram Range.",
    difficulty: "Extreme",
    difficultyClass: "extreme",
    duration: "24 Days",
    maxAltitude: "5,151m",
    bestSeason: "July – August",
    groupSize: "8 Travelers",
    accommodation: "Camping + Hotels",
    startingPrice: "$2,850",
    overviewSubtitle: "THE WILD TRAVERSE",
    overviewTitle: "UNTOUCHED MAJESTY",
    overviewDescs: [
      "Snow Lake (Lukpe Lawo) is a high-altitude glacial basin located at the head of the Biafo and Hispar Glaciers. Stretching over 16 kilometers wide, this pristine basin of ice is one of the most remote and rarely visited wilderness areas on earth, surrounded by dramatic spires and untouched peaks.",
      "The expedition is a complete traverse, crossing the formidable Hispar La Pass (5,151m) to connect the Baltistan and Hunza valleys. Walking along these massive highways of ice offers a true explorer's experience, with no permanent trails, pure self-sufficiency, and absolute solitude.",
      "This trek is suited only for seasoned hikers. It involves navigating crevassed glaciers, walking roped up, and enduring freezing wilderness camps, supported by our elite crew of high-altitude guides and porters."
    ],
    overviewImage: "/assets/images/snow-lake.png",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Islamabad",
        desc: "Airport meet-and-greet followed by hotel check-in. Evening gear check and welcome dinner."
      },
      {
        day: "Day 2",
        title: "Flight to Skardu",
        desc: "Fly to Skardu. Stunning views of Nanga Parbat. Acclimatize and relax at the hotel."
      },
      {
        day: "Day 3",
        title: "Acclimatization & Prep",
        desc: "Final gear adjustments, shopping, and briefing with local tourism officials in Skardu."
      },
      {
        day: "Day 4",
        title: "Drive to Askole",
        desc: "A rugged 4x4 drive along the deep Shigar Valley to the remote mountain village of Askole."
      },
      {
        day: "Day 5–8",
        title: "Biafo Glacier Ascent",
        desc: "We enter the Biafo Glacier, trekking past Namla and Mango to Baintha. Walk through lateral moraines and rugged rocky paths."
      },
      {
        day: "Day 9–12",
        title: "Snow Lake Basin",
        desc: "Trek higher onto the flat white expanse of Snow Lake. Sleep on the ice field under a spectacular canopy of stars."
      },
      {
        day: "Day 13–14",
        title: "Crossing Hispar La",
        desc: "We rope up to cross crevassed zones and ascend to Hispar La Pass (5,151m) for jaw-dropping views of Hunza peaks."
      },
      {
        day: "Day 15–20",
        title: "Hispar Glacier Descent",
        desc: "We descend the rugged Hispar Glacier, entering green pastures, and reach Hispar village in Hunza."
      },
      {
        day: "Day 21–23",
        title: "Hunza to Gilgit & Islamabad",
        desc: "Drive to Karimabad (Hunza), explore Karimabad Bazaar and Altit Fort, drive to Gilgit, and fly back to Islamabad."
      },
      {
        day: "Day 24",
        title: "Departure",
        desc: "Transfer to Islamabad Airport for international departure."
      }
    ],
    inclusions: [
      "Elite high-altitude mountain guides and safety crew",
      "All permits, environment fees, and park entrance charges",
      "Domestic flights (Islamabad-Skardu, Gilgit-Islamabad) and private jeeps",
      "Specially reinforced 4-season tents and kitchen tents",
      "Fresh and high-energy nutritious meals curated for extreme cold",
      "Porters and high-altitude assistants to carry camp gear and supplies",
      "Climbing rope, pulse oximeter, and professional first aid kits"
    ],
    exclusions: [
      "International airfare and travel visa",
      "Mandatory rescue and evacuation insurance",
      "Personal mountaineering/trekking equipment",
      "Tips and personal gratuities"
    ],
    gallery: [
      "/assets/images/snow-lake.png",
      "/assets/images/passu-cones.png",
      "/assets/images/k2.png",
      "/assets/images/deosai-sunrise.png"
    ],
    faqs: [
      {
        question: "Do we need climbing gear for Snow Lake?",
        answer: "While it is a trek, we do use climbing ropes, harnesses, and crampons for safety while traversing crevassed glacier zones and climbing Hispar La. Training on rope-walking will be provided by your guide."
      },
      {
        question: "What is the best season?",
        answer: "July to August is the only viable window when the snow on the passes melts sufficiently and the crevasses are relatively stable."
      },
      {
        question: "How cold does it get?",
        answer: "Temperatures at Snow Lake and Hispar La can drop to -15°C (5°F) at night, even during summer. A high-quality down jacket and 4-season sleeping bag are mandatory."
      }
    ]
  },
  "nanga-parbat": {
    id: "nanga-parbat",
    tagline: "THE WRATH AND BEAUTY OF THE KILLER MOUNTAIN",
    title: "NANGA PARBAT BASE CAMP",
    desc: "Trek to the base of Nanga Parbat's Rupal Face — the highest single mountain wall in the world — and experience the dramatic contrast of lush valleys and colossal rock.",
    difficulty: "Moderate",
    difficultyClass: "moderate",
    duration: "12 Days",
    maxAltitude: "3,960m",
    bestSeason: "May – September",
    groupSize: "12 Travelers",
    accommodation: "Camping + Hotels",
    startingPrice: "$1,450",
    overviewSubtitle: "THE GIANT WALL",
    overviewTitle: "THE RUPAL FACE",
    overviewDescs: [
      "Nanga Parbat, rising at 8,126m, is the ninth-highest mountain in the world and the western anchor of the Himalayas. The Rupal Face, which rises continuously for over 4,600 meters from the valley floor, is the largest mountain wall on earth, presenting an awe-inspiring, overwhelming vista.",
      "The trek to Nanga Parbat Base Camp is a beautifully contrasted journey. Unlike the dry, rocky Karakoram glaciers, this Himalayan trail leads through pine forests, lush green meadows grazing with livestock, and vibrant local villages, before opening up to giant glaciers and vertical walls.",
      "This trek is highly accessible compared to other 8,000m base camp journeys, keeping to moderate altitudes and offering cozy grassy campsites beneath the towering icy face of the mountain."
    ],
    overviewImage: "/assets/images/deosai-sunrise.png",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Islamabad",
        desc: "Airport pickup and transfer to hotel. Welcome meeting and brief introduction of the trail."
      },
      {
        day: "Day 2",
        title: "Drive along Karakoram Highway",
        desc: "We drive along the iconic Karakoram Highway to Chilas, capturing dramatic views of the Indus River gorge."
      },
      {
        day: "Day 3",
        title: "Drive to Tarashing",
        desc: "We take 4x4 jeeps to Tarashing (2,900m), a gorgeous, green farming village nestled at the foot of Nanga Parbat."
      },
      {
        day: "Day 4",
        title: "Trek to Herrligkoffer Base Camp",
        desc: "We begin our foot journey, crossing the Tarashing Glacier to Herrligkoffer Base Camp (3,550m), situated in a pine-fringed meadow."
      },
      {
        day: "Day 5",
        title: "Trek to Latobo",
        desc: "Walk along the lateral moraine to Latobo, right under the massive, towering Rupal Face. Enjoy close-up views of hanging ice cliffs."
      },
      {
        day: "Day 6",
        title: "Excursion to Rupal High Camp",
        desc: "A day hike to the higher ridges of Rupal for panoramic views of the entire massif and the glaciers below."
      },
      {
        day: "Day 7–9",
        title: "Return Trek to Tarashing & Rama Lake",
        desc: "Trek back to Tarashing, take jeeps to Astore and the spectacular alpine Rama Lake for camping."
      },
      {
        day: "Day 10–11",
        title: "Drive to Gilgit & Islamabad",
        desc: "Drive to Gilgit, board a short flight to Islamabad, and relax at your hotel."
      },
      {
        day: "Day 12",
        title: "Departure",
        desc: "Transfer to Islamabad Airport for outbound flights."
      }
    ],
    inclusions: [
      "Professional English-speaking local mountain guide",
      "All required trekking permits and environmental clearances",
      "Comfortable hotel and alpine camp accommodation",
      "Freshly cooked hot meals daily (breakfast, lunch, dinner)",
      "Jeep transport and airport transfers",
      "Porters to carry camp gear and personal bags up to 15kg",
      "Emergency medical kits"
    ],
    exclusions: [
      "International flights and entry visa",
      "Personal travel and rescue insurance",
      "Trekking poles, sleeping bags, and personal items",
      "Staff tips and gratuities"
    ],
    gallery: [
      "/assets/images/deosai-sunrise.png",
      "/assets/images/destination_fairy_meadows_1783185607151.png",
      "/assets/images/hunza.png",
      "/assets/images/attabad-lake.png"
    ],
    faqs: [
      {
        question: "Why is Nanga Parbat called the 'Killer Mountain'?",
        answer: "Nanga Parbat earned this historical nickname due to the high number of early mountaineering fatalities on its steep, avalanche-prone ridges. However, trekking to the base camp is extremely safe and remains on gentle, secure valleys."
      },
      {
        question: "Is this trek suitable for beginners?",
        answer: "Yes. This trek has a moderate difficulty rating and does not go above 4,000m, making it ideal for regular hikers and active beginners looking to see an 8,000m peak up close."
      },
      {
        question: "What is the best time to visit?",
        answer: "The best season is from late May through September, when the high pastures are green, covered in alpine flowers, and temperatures are warm."
      }
    ]
  },
  "fairy-meadows": {
    id: "fairy-meadows",
    tagline: "A LUSH PARADISE UNDER ICE AND SNOW",
    title: "FAIRY MEADOWS TREK",
    desc: "Walk through pine forests to a lush, green alpine pasture directly under the glistening north face of Nanga Parbat, widely called the most beautiful meadow on Earth.",
    difficulty: "Easy",
    difficultyClass: "easy",
    duration: "8 Days",
    maxAltitude: "3,300m",
    bestSeason: "May – October",
    groupSize: "16 Travelers",
    accommodation: "Wooden Cabins + Hotels",
    startingPrice: "$950",
    overviewSubtitle: "THE MEADOW",
    overviewTitle: "ALPINE ENCHANTMENT",
    overviewDescs: [
      "Fairy Meadows (locally known as Jhel) is a lush grassland nestled at the foot of Nanga Parbat's legendary Raikot Face. Framed by dense pine forests and reflecting in crystal-clear alpine pools, it offers an astonishing, unobstructed view of the massive mountain towering directly above.",
      "The journey begins with a thrilling jeep ride along the narrow Raikot Gorge, followed by an easy, refreshing hike up through fragrant pine woods. It is an ideal blend of gentle physical activity and deep visual rewards, perfect for travelers of all ages.",
      "Stay in cozy wooden cabins, sit around evening bonfires under a clear starry sky, and hike to the spectacular Beyal Camp and Nanga Parbat's Raikot Base Camp for a close-up look at glistening glaciers."
    ],
    overviewImage: "/assets/images/destination_fairy_meadows_1783185607151.png",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Islamabad",
        desc: "Warm welcome at the airport, transfer to hotel, and evening tour of Islamabad."
      },
      {
        day: "Day 2",
        title: "Drive to Chilas / Raikot Bridge",
        desc: "Travel along the Karakoram Highway past Babusar Pass to Raikot Bridge on the Indus River."
      },
      {
        day: "Day 3",
        title: "Jeep Ride & Hike to Fairy Meadows",
        desc: "Take a thrilling 4x4 jeep ride to Tato village, then enjoy a 3-hour walk through pine forests to Fairy Meadows (3,300m)."
      },
      {
        day: "Day 4",
        title: "Excursion to Beyal Camp",
        desc: "Hike through lush forests to Beyal Camp (3,500m) for close-up views of the Raikot Glacier and Nanga Parbat."
      },
      {
        day: "Day 5",
        title: "Raikot Base Camp Hike",
        desc: "An optional, active day-hike to Nanga Parbat Base Camp (3,960m) to stand directly beside the tumbling glacier seracs."
      },
      {
        day: "Day 6–7",
        title: "Return to Islamabad",
        desc: "Walk back down to Tato, take jeeps to Raikot Bridge, and drive back to Islamabad via the scenic Naran Valley."
      },
      {
        day: "Day 8",
        title: "Departure",
        desc: "Hotel check-out and transfer to airport for departure."
      }
    ],
    inclusions: [
      "Professional local guide and support staff",
      "Cozy wood cabin accommodations at Fairy Meadows",
      "All ground transport, including 4x4 Raikot jeeps",
      "Full board meals during the trip",
      "Permits and local community fees",
      "Luggage porter services during the hike"
    ],
    exclusions: [
      "International flights and visa fees",
      "Personal insurance",
      "Tips and personal snacks"
    ],
    gallery: [
      "/assets/images/destination_fairy_meadows_1783185607151.png",
      "/assets/images/deosai-sunrise.png",
      "/assets/images/hunza.png",
      "/assets/images/attabad-lake.png"
    ],
    faqs: [
      {
        question: "How hard is the hike to Fairy Meadows?",
        answer: "It is an easy to moderate 3-hour hike on a well-defined dirt trail with a gentle incline. Horse rentals are also available for those who prefer not to walk."
      },
      {
        question: "What are the accommodations like?",
        answer: "At Fairy Meadows, we stay in charming, authentic wooden log cabins with basic heating and attached bathrooms, offering spectacular views of Nanga Parbat directly from your window."
      },
      {
        question: "Is it safe for families?",
        answer: "Yes, Fairy Meadows is a highly popular, peaceful, and family-friendly destination with excellent local hospitality and safety."
      }
    ]
  },
  "hunza": {
    id: "hunza",
    tagline: "CULTURAL IMMERSION IN THE VALLEY OF YOUTH",
    title: "HUNZA EXPLORER",
    desc: "Explore ancient stone forts, stroll through lush blossom orchards, and experience the unparalleled hospitality and dramatic peaks of the legendary Hunza Valley.",
    difficulty: "Easy",
    difficultyClass: "easy",
    duration: "10 Days",
    maxAltitude: "2,500m",
    bestSeason: "April – October",
    groupSize: "14 Travelers",
    accommodation: "Premium Hotels",
    startingPrice: "$1,150",
    overviewSubtitle: "THE SHANGRI-LA",
    overviewTitle: "THE HEAVENLY VALLEY",
    overviewDescs: [
      "Hunza Valley, often described as a real-life Shangri-La, is a beautiful mountain valley in Gilgit-Baltistan. Ringed by towering peaks like Rakaposhi, Ladyfinger, and Ultar Sar, the valley is famous for its terraced fields, vibrant orchards, and the longevity of its people.",
      "This tour is a delightful blend of history, culture, and stunning views. You will explore the 800-year-old Baltit and Altit Forts, walk through old stone villages, and enjoy local apricot-infused delicacies while meeting the welcoming, highly literate Hunzakut community.",
      "Travel in premium comfort, staying in boutique hotels with stunning balcony views, making this the perfect choice for culture lovers and photographers."
    ],
    overviewImage: "/assets/images/hunza.png",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Islamabad",
        desc: "Meet at airport, transfer to hotel, and explore the grand Faisal Mosque."
      },
      {
        day: "Day 2",
        title: "Fly to Gilgit / Drive to Hunza",
        desc: "Board a scenic mountain flight to Gilgit. Drive along the Karakoram Highway to Karimabad (Hunza), looking up at Rakaposhi peak (7,788m)."
      },
      {
        day: "Day 3",
        title: "Karimabad Heritage Tour",
        desc: "Visit the historic Baltit and Altit Forts, wander Karimabad's craft bazaars, and enjoy local walnut cakes."
      },
      {
        day: "Day 4",
        title: "Duiker Sunset & Hopar Glacier",
        desc: "Drive to Hopar Valley to witness the active black Hopar Glacier. Spend the evening at Duiker (2,900m) for a legendary sunset over Hunza."
      },
      {
        day: "Day 5",
        title: "Attabad Lake & Passu Cones",
        desc: "Drive to the turquoise Attabad Lake for boating, walk across the Hussaini Suspension Bridge, and gaze at the jagged Passu Cones."
      },
      {
        day: "Day 6",
        title: "Khunjerab Pass (China Border)",
        desc: "Take an excursion to the Khunjerab Pass (4,693m), the world's highest paved border crossing, nestled in a high-altitude national park."
      },
      {
        day: "Day 7–9",
        title: "Return via Gilgit & Islamabad",
        desc: "Explore local bazaars in Gilgit, drive back to Islamabad or take a domestic flight, and enjoy a farewell dinner."
      },
      {
        day: "Day 10",
        title: "Departure",
        desc: "Transfer to Islamabad Airport for flight home."
      }
    ],
    inclusions: [
      "Expert local guide specialized in Karakoram history",
      "Stay in premium boutique hotels with scenic mountain views",
      "All internal transport in comfortable private vans",
      "Full board traditional Hunzai and continental meals",
      "Entrance fees to Forts, national parks, and lakes"
    ],
    exclusions: [
      "International airfare and travel visa",
      "Personal items, laundry, and shopping",
      "Tips for driver and guides"
    ],
    gallery: [
      "/assets/images/hunza.png",
      "/assets/images/destination_hunza_1783185596174.png",
      "/assets/images/attabad-lake.png",
      "/assets/images/destination_fairy_meadows_1783185607151.png"
    ],
    faqs: [
      {
        question: "How is the physical demand on this trip?",
        answer: "This trip is rated 'Easy' and is highly accessible. It involves light walking on paved roads, gravel pathways, and stairs inside historical forts, suitable for all ages."
      },
      {
        question: "When is the best time to visit Hunza?",
        answer: "Spring (April) offers stunning cherry and apricot blossoms, while Autumn (October) covers the valley in brilliant gold and orange foliage. Summer (June-August) is perfect for clear peak views."
      },
      {
        question: "What is Hunzai food like?",
        answer: "Hunzai cuisine is mild, healthy, and organic, featuring handmade flatbreads, fresh apricots, walnuts, cherry juice, and local cheese dishes."
      }
    ]
  },
  "attabad": {
    id: "attabad",
    tagline: "TURQUOISE WATERS AND DRAMATIC JAGGED PEAKS",
    title: "ATTABAD LAKE ADVENTURE",
    desc: "Cruise across the stunning turquoise waters of Attabad Lake, walk the thrilling Hussaini Suspension Bridge, and explore the jagged, dramatic Passu Cones.",
    difficulty: "Easy",
    difficultyClass: "easy",
    duration: "7 Days",
    maxAltitude: "2,559m",
    bestSeason: "All Year",
    groupSize: "16 Travelers",
    accommodation: "Boutique Hotels",
    startingPrice: "$850",
    overviewSubtitle: "THE TURQUOISE WONDER",
    overviewTitle: "A NATURAL SPECTACLE",
    overviewDescs: [
      "Attabad Lake was formed in 2010 following a massive landslide in the Hunza River, creating a deep, 21-kilometer-long lake of pure turquoise blue water. Surrounded by steep, vertical gray cliffs, the lake is a breathtaking sight on the Karakoram Highway.",
      "This adventure is designed for those seeking stunning photography, light walks, and comfortable water-based activities. Sail on custom boats, jet-ski beneath the cliffs, and stay at lake-facing boutique resorts.",
      "The itinerary also explores upper Hunza (Gojal), including the dramatic Passu Cones, the ancient Borith Lake, and the thrilling Hussaini Suspension Bridge."
    ],
    overviewImage: "/assets/images/attabad-lake.png",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Islamabad",
        desc: "Airport transfer and hotel check-in. Evening sightseeing around Islamabad."
      },
      {
        day: "Day 2",
        title: "Flight to Gilgit & Drive to Attabad",
        desc: "Fly to Gilgit and drive along the stunning Karakoram Highway directly to Attabad Lake. Check into your lakefront resort."
      },
      {
        day: "Day 3",
        title: "Lake Boating & Jet Skiing",
        desc: "Spend the day enjoying boat cruises, jet-skiing, and lakeside relaxation under the towering Karakoram peaks."
      },
      {
        day: "Day 4",
        title: "Passu Cones & Hussaini Bridge",
        desc: "Explore upper Hunza. Walk across the thrilling Hussaini Suspension Bridge, take photos of the iconic Passu Cones, and hike to Passu Glacier."
      },
      {
        day: "Day 5",
        title: "Borith Lake & Karimabad",
        desc: "Visit the tranquil, salty Borith Lake, walk around Gulmit village, and drive back to Karimabad."
      },
      {
        day: "Day 6",
        title: "Gilgit to Islamabad",
        desc: "Drive to Gilgit airport and fly back to Islamabad. Enjoy a luxury dinner overlooking the Margalla Hills."
      },
      {
        day: "Day 7",
        title: "Departure",
        desc: "Transfer to Islamabad Airport for departure."
      }
    ],
    inclusions: [
      "Experienced local tour coordinator and driver",
      "Stay in premium lakefront resorts and hotels",
      "Private air-conditioned coasters and 4x4 vehicles",
      "Boating and jet-skiing activity tickets",
      "All meals and daily bottled water",
      "Permits and entry clearances"
    ],
    exclusions: [
      "International airfare and travel insurance",
      "Tips for hospitality and guiding staff",
      "Personal laundry and incidentals"
    ],
    gallery: [
      "/assets/images/attabad-lake.png",
      "/assets/images/destination_attabad_lake_1783185617186.png",
      "/assets/images/hunza.png",
      "/assets/images/passu-cones.png"
    ],
    faqs: [
      {
        question: "Is Attabad Lake natural?",
        answer: "The lake was formed due to a massive landslide in January 2010. While the origins were tragic, it has since stabilized into one of Pakistan's most famous and beloved natural wonders."
      },
      {
        question: "What water sports are available?",
        answer: "We offer guided boat cruises, jet-skiing, and speedboating. All activities are accompanied by certified instructors and high-quality life jackets."
      },
      {
        question: "Can this trip be completed in winter?",
        answer: "Yes, Attabad Lake remains accessible throughout the winter, offering a completely different, silent winter wonderland look with snow-capped peaks."
      }
    ]
  },
  "deosai": {
    id: "deosai",
    tagline: "CAMPING ON THE LAND OF MOUNTAIN GIANTS",
    title: "DEOSAI EXPERIENCE",
    desc: "Camp on the world's second-highest alpine plateau, blanketed in millions of wildflowers and home to the rare Himalayan brown bear and clear high-altitude lakes.",
    difficulty: "Moderate",
    difficultyClass: "moderate",
    duration: "9 Days",
    maxAltitude: "4,114m",
    bestSeason: "June – September",
    groupSize: "12 Travelers",
    accommodation: "Glamping + Hotels",
    startingPrice: "$1,200",
    overviewSubtitle: "THE LAND OF GIANTS",
    overviewTitle: "THE ROOF OF THE WORLD",
    overviewDescs: [
      "Deosai National Park, located between Skardu and Astore, is the second-highest alpine plateau on earth, averaging 4,114 meters (13,497 feet) above sea level. In the local Balti language, Deosai means 'The Land of Giants', a fitting name for this vast, high-altitude prairie.",
      "During summer, the endless green plains of Deosai are blanketed in millions of colorful wildflowers and hum with wildlife. It is home to the rare Himalayan brown bear, golden marmots, and the mirror-like waters of Sheosar Lake, which reflects the distant peak of Nanga Parbat.",
      "Enjoy a luxurious glamping experience, sleeping under a brilliant, unpolluted night sky filled with shooting stars, combined with light hiking across the high rolling hills."
    ],
    overviewImage: "/assets/images/destination_deosai_1783185627767.png",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Islamabad",
        desc: "Airport transfer to hotel. Quick briefing and evening dinner at a rooftop restaurant."
      },
      {
        day: "Day 2",
        title: "Flight to Skardu",
        desc: "An spectacular mountain flight over the Karakoram to Skardu. Acclimatize and stroll around Shangrila Lake."
      },
      {
        day: "Day 3",
        title: "Skardu Organic Village Walk",
        desc: "Enjoy a gentle hike to the ancient, water-channel-irrigated Organic Village of Skardu beside the Indus River."
      },
      {
        day: "Day 4",
        title: "Drive to Deosai National Park",
        desc: "Take 4x4 jeeps up the winding road to Deosai Plateau. Set up our premium glamping camp at Sheosar Lake."
      },
      {
        day: "Day 5",
        title: "Wildflower Walk & Bear Spotting",
        desc: "Take guided walks across the rolling green plains, photograph golden marmots, and scan the river basins for Himalayan brown bears."
      },
      {
        day: "Day 6",
        title: "Sheosar Lake & Sunset Over Nanga Parbat",
        desc: "Relax beside the deep blue Sheosar Lake and watch the sunset cast a golden glow on the distant massif of Nanga Parbat."
      },
      {
        day: "Day 7–8",
        title: "Return to Skardu & Islamabad",
        desc: "Drive back to Skardu, board your flight back to Islamabad, and relax."
      },
      {
        day: "Day 9",
        title: "Departure",
        desc: "Transfer to Islamabad Airport for outbound international flights."
      }
    ],
    inclusions: [
      "Professional wildlife guide and naturalist",
      "Stay in premium glamping tents with comfortable cots and bedding",
      "All jeep transport and domestic flight tickets",
      "High-quality cooked hot meals and hot beverages",
      "National Park fees and bear conservation permits",
      "High-altitude safety gear and oxygen support"
    ],
    exclusions: [
      "International flights and entry visa",
      "Personal clothing, hiking boots, and sunblock",
      "Tips for camp assistants and drivers"
    ],
    gallery: [
      "/assets/images/destination_deosai_1783185627767.png",
      "/assets/images/deosai-sunrise.png",
      "/assets/images/attabad-lake.png",
      "/assets/images/snow-lake.png"
    ],
    faqs: [
      {
        question: "How high is Deosai, and will I feel altitude sickness?",
        answer: "Deosai averages over 4,100m. Because of this, we spend two nights in Skardu (2,230m) first to ensure proper acclimatization, and our camps are equipped with supplemental oxygen if needed."
      },
      {
        question: "Are the brown bears dangerous?",
        answer: "The Himalayan brown bears are wild but generally shy away from humans. We travel with experienced park rangers who know safe viewing distances and wildlife protocols."
      },
      {
        question: "What is the glamping camp like?",
        answer: "Our glamping setup features spacious, wind-resistant walk-in tents with raised camping beds, warm blankets, a carpeted mess tent, and private portable toilet facilities."
      }
    ]
  }
};
