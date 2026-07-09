// Central product data (bilingual: every field has an `en` and `ar` version)
// -----------------------------------------------------------------------------
// HOW TO ADD OR EDIT A PRODUCT — read this if you want to manage the catalog:
//
// 1. Every product is an object keyed by a unique numeric id (e.g. `33: {...}`).
// 2. `category` is INTERNAL and must stay in English — it is used for
//    filtering/search logic (values used elsewhere: "insecticide",
//    "acaricide", "fungicide", "herbicide", "Nutrients & micronutrients").
//    Do not translate it.
// 3. `categoryLabel` is what users SEE, so it must have both `en` and `ar`.
// 4. `image` is the path to the product photo inside /public/assets.
//    Drop a new image file in public/assets and reference it here,
//    e.g. "/assets/my-new-product.jpg".
// 5. Everything else lives inside the `en` and `ar` blocks: `title`,
//    `subtitle`, `description`, `features` (array), `pestsControlled`
//    (array), `cropsUsedFor` (array), `activeIngredient`, `phi`,
//    `usageRate`. Keep the SAME NUMBER of items in `features`,
//    `pestsControlled`, and `cropsUsedFor` between `en` and `ar` (order
//    matters, they're just translations of each other).
// 6. To feature a product on the homepage carousel, add its id to the
//    `featuredIds` array exported below.
// -----------------------------------------------------------------------------

const products = {
  1: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/betasol.jpg",
    en: {
      title: "Beta Thol",
      subtitle: "Bifenthrin 10%",
      description:
        "Beta Thol is a powerful pyrethroid insecticide containing Bifenthrin 10%. It provides fast knockdown and strong residual control against a wide range of chewing and sucking pests.",
      features: [
        "Fast knockdown of insect pests.",
        "Long residual protection.",
        "Broad-spectrum insect control.",
      ],
      pestsControlled: ["Aphids", "Whiteflies", "Thrips", "Caterpillars"],
      cropsUsedFor: ["Vegetables", "Cotton", "Fruit Trees"],
      activeIngredient: "Bifenthrin 10%",
      phi: "7 days on vegetables and cotton; 14 days on fruit trees.",
      usageRate: "30–50 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "بيتا ثول",
      subtitle: "بايفنثرين 10%",
      description:
        "بيتا ثول مبيد حشري قوي من مجموعة البيرثرويدات يحتوي على مادة بايفنثرين 10%. يعمل على إسقاط سريع للحشرات وحماية متبقية قوية ضد مجموعة واسعة من الآفات القارضة والماصة.",
      features: [
        "إسقاط سريع للحشرات.",
        "حماية متبقية طويلة المدى.",
        "مكافحة واسعة الطيف للحشرات.",
      ],
      pestsControlled: ["المن", "الذبابة البيضاء", "التربس", "الديدان (اليرقات)"],
      cropsUsedFor: ["الخضروات", "القطن", "أشجار الفاكهة"],
      activeIngredient: "بايفنثرين 10%",
      phi: "7 أيام على الخضروات والقطن؛ 14 يومًا على أشجار الفاكهة.",
      usageRate: "30–50 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  2: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/amidatop.jpg",
    en: {
      title: "Amida TOP",
      subtitle: "Imidacloprid 35% SC",
      description:
        "Amida TOP is a systemic insecticide containing Imidacloprid 35% SC used to control sucking insects by penetrating plant tissues and protecting crops internally.",
      features: [
        "Systemic protection inside the plant.",
        "Highly effective against sucking insects.",
        "Long lasting control.",
      ],
      pestsControlled: ["Aphids", "Whiteflies", "Leafhoppers", "Thrips"],
      cropsUsedFor: ["Vegetables", "Potatoes", "Fruit Trees"],
      activeIngredient: "Imidacloprid 35% SC",
      phi: "7 days on vegetables and potatoes; 14 days on fruit trees.",
      usageRate: "20–30 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "أميدا توب",
      subtitle: "إيميداكلوبريد 35% SC",
      description:
        "أميدا توب مبيد حشري جهازي يحتوي على إيميداكلوبريد 35% SC، يُستخدم لمكافحة الحشرات الماصة عن طريق النفاذ داخل أنسجة النبات وحمايته من الداخل.",
      features: [
        "حماية جهازية داخل النبات.",
        "فعالية عالية ضد الحشرات الماصة.",
        "مكافحة طويلة المفعول.",
      ],
      pestsControlled: ["المن", "الذبابة البيضاء", "نطاطات الأوراق", "التربس"],
      cropsUsedFor: ["الخضروات", "البطاطس", "أشجار الفاكهة"],
      activeIngredient: "إيميداكلوبريد 35% SC",
      phi: "7 أيام على الخضروات والبطاطس؛ 14 يومًا على أشجار الفاكهة.",
      usageRate: "20–30 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  3: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/clorotop.jpg",
    en: {
      title: "Cloro Top",
      subtitle: "Chlorpyrifos 48% EC",
      description:
        "Cloro Top contains Chlorpyrifos 48% EC, a powerful insecticide effective against soil and foliar pests in many agricultural crops.",
      features: [
        "Strong contact and stomach action.",
        "Effective soil pest control.",
        "Reliable field performance.",
      ],
      pestsControlled: ["Cutworms", "Armyworms", "Termites", "Root worms"],
      cropsUsedFor: ["Corn", "Wheat", "Vegetables"],
      activeIngredient: "Chlorpyrifos 48% EC",
      phi: "14–21 days depending on crop.",
      usageRate:
        "150–200 ml per 100 liters of water; 1.5–2 L/feddan for soil treatment.",
    },
    ar: {
      title: "كلورو توب",
      subtitle: "كلوربيريفوس 48% EC",
      description:
        "كلورو توب يحتوي على كلوربيريفوس 48% EC، مبيد حشري قوي فعّال ضد آفات التربة والمجموع الخضري في العديد من المحاصيل الزراعية.",
      features: [
        "فعل تلامسي ومعوي قوي.",
        "مكافحة فعّالة لآفات التربة.",
        "أداء موثوق في الحقل.",
      ],
      pestsControlled: [
        "الدودة القارضة",
        "دودة الحشد",
        "النمل الأبيض",
        "ديدان الجذور",
      ],
      cropsUsedFor: ["الذرة", "القمح", "الخضروات"],
      activeIngredient: "كلوربيريفوس 48% EC",
      phi: "14–21 يومًا حسب المحصول.",
      usageRate: "150–200 مل لكل 100 لتر ماء؛ 1.5–2 لتر/فدان لمعاملة التربة.",
    },
  },
  4: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/delta_top.jpg",
    en: {
      title: "Delta Top",
      subtitle: "Deltamethrin 5% EC",
      description:
        "Delta Top contains Deltamethrin 5% EC and provides fast knockdown and long residual control against many insect pests.",
      features: [
        "Very fast insect knockdown.",
        "Low application rates.",
        "Long lasting protection.",
      ],
      pestsControlled: ["Caterpillars", "Beetles", "Leaf miners"],
      cropsUsedFor: ["Vegetables", "Fruit Trees", "Field Crops"],
      activeIngredient: "Deltamethrin 5% EC",
      phi: "3–7 days on vegetables; 7 days on field crops and fruit trees.",
      usageRate: "30–50 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "دلتا توب",
      subtitle: "دلتامثرين 5% EC",
      description:
        "دلتا توب يحتوي على دلتامثرين 5% EC ويوفر إسقاطًا سريعًا للحشرات وحماية متبقية طويلة المدى ضد العديد من الآفات الحشرية.",
      features: [
        "إسقاط سريع جدًا للحشرات.",
        "معدلات استخدام منخفضة.",
        "حماية طويلة الأمد.",
      ],
      pestsControlled: ["الديدان (اليرقات)", "الخنافس", "صانعات الأنفاق"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة", "المحاصيل الحقلية"],
      activeIngredient: "دلتامثرين 5% EC",
      phi: "3–7 أيام على الخضروات؛ 7 أيام على المحاصيل الحقلية وأشجار الفاكهة.",
      usageRate: "30–50 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  5: {
    category: "insecticide",
    categoryLabel: { en: "Anti-peeling", ar: "منظم نمو حشري" },
    image: "/assets/fendex.jpg",
    en: {
      title: "Findoron",
      subtitle: "Lufenuron 5% SC",
      description:
        "Findoron contains Lufenuron 5% SC, an insect growth regulator that disrupts insect development and prevents larvae from completing their life cycle.",
      features: [
        "Insect growth regulator.",
        "Effective against larvae stages.",
        "Reduces pest population growth.",
      ],
      pestsControlled: ["Caterpillars", "Leaf miners", "Moths"],
      cropsUsedFor: ["Vegetables", "Fruit Trees"],
      activeIngredient: "Lufenuron 5% SC",
      phi: "14 days.",
      usageRate: "40–50 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "فيندورون",
      subtitle: "لوفينيورون 5% SC",
      description:
        "فيندورون يحتوي على لوفينيورون 5% SC، وهو منظم نمو حشري يعطل تطور الحشرة ويمنع اليرقات من إتمام دورة حياتها.",
      features: [
        "منظم نمو حشري.",
        "فعّال ضد أطوار اليرقات.",
        "يقلل من نمو أعداد الآفات.",
      ],
      pestsControlled: ["الديدان (اليرقات)", "صانعات الأنفاق", "العث (الفراشات)"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة"],
      activeIngredient: "لوفينيورون 5% SC",
      phi: "14 يومًا.",
      usageRate: "40–50 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  6: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/lambada.png",
    en: {
      title: "Lambada Mex",
      subtitle: "Lambda-cyhalothrin 10% + Acetamiprid 5% EC",
      description:
        "Lambada Mex combines Lambda-cyhalothrin and Acetamiprid for strong contact and systemic control of many agricultural pests.",
      features: [
        "Dual active ingredients.",
        "Contact and systemic action.",
        "Wide pest control spectrum.",
      ],
      pestsControlled: ["Aphids", "Whiteflies", "Thrips", "Caterpillars"],
      cropsUsedFor: ["Vegetables", "Cotton", "Fruit Trees"],
      activeIngredient: "Lambda-cyhalothrin 10% + Acetamiprid 5% EC",
      phi: "7 days.",
      usageRate: "30 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "لامبادا مكس",
      subtitle: "لامبدا سيهالوثرين 10% + أسيتامبريد 5% EC",
      description:
        "لامبادا مكس يجمع بين لامبدا سيهالوثرين وأسيتامبريد لمكافحة تلامسية وجهازية قوية للعديد من الآفات الزراعية.",
      features: [
        "مادتان فعالتان مزدوجتان.",
        "فعل تلامسي وجهازي معًا.",
        "طيف واسع لمكافحة الآفات.",
      ],
      pestsControlled: ["المن", "الذبابة البيضاء", "التربس", "الديدان (اليرقات)"],
      cropsUsedFor: ["الخضروات", "القطن", "أشجار الفاكهة"],
      activeIngredient: "لامبدا سيهالوثرين 10% + أسيتامبريد 5% EC",
      phi: "7 أيام.",
      usageRate: "30 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  7: {
    category: "acaricide",
    categoryLabel: { en: "Acaricide", ar: "مبيد أكاروسي" },
    image: "/assets/strela.jpg",
    en: {
      title: "Strella",
      subtitle: "Abamectin 1.8% + Pyridaben 15% EC",
      description:
        "Strella combines Abamectin and Pyridaben to provide powerful control of mites and difficult pests.",
      features: [
        "Excellent spider mite control.",
        "Dual mode of action.",
        "Fast reduction of pest populations.",
      ],
      pestsControlled: ["Spider mites", "Leaf miners"],
      cropsUsedFor: ["Vegetables", "Strawberries", "Fruit Trees"],
      activeIngredient: "Abamectin 1.8% + Pyridaben 15% EC",
      phi: "7 days.",
      usageRate: "50 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "ستريلا",
      subtitle: "أباميكتين 1.8% + بيريدابين 15% EC",
      description:
        "ستريلا يجمع بين أباميكتين وبيريدابين لتوفير مكافحة قوية للعناكب والآفات صعبة المكافحة.",
      features: [
        "مكافحة ممتازة للعنكبوت الأحمر.",
        "آلية عمل مزدوجة.",
        "خفض سريع لأعداد الآفة.",
      ],
      pestsControlled: ["العنكبوت الأحمر", "صانعات الأنفاق"],
      cropsUsedFor: ["الخضروات", "الفراولة", "أشجار الفاكهة"],
      activeIngredient: "أباميكتين 1.8% + بيريدابين 15% EC",
      phi: "7 أيام.",
      usageRate: "50 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  8: {
    category: "acaricide",
    categoryLabel: { en: "Acaricide", ar: "مبيد أكاروسي" },
    image: "/assets/toksan.jpg",
    en: {
      title: "Toksan",
      subtitle: "Abamectin 1.8%",
      description:
        "Toksan contains Abamectin 1.8% and is widely used to control mites and leaf miners in vegetables and fruit crops.",
      features: [
        "Strong mite control.",
        "Translaminar activity.",
        "Improves crop health.",
      ],
      pestsControlled: ["Spider mites", "Leaf miners"],
      cropsUsedFor: ["Vegetables", "Fruit Trees"],
      activeIngredient: "Abamectin 1.8%",
      phi: "3–7 days.",
      usageRate: "50–75 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "توكسان",
      subtitle: "أباميكتين 1.8%",
      description:
        "توكسان يحتوي على أباميكتين 1.8% ويُستخدم على نطاق واسع لمكافحة العناكب وصانعات الأنفاق في محاصيل الخضر والفاكهة.",
      features: [
        "مكافحة قوية للعناكب.",
        "نشاط نافذ عبر الأنسجة.",
        "يحسّن صحة المحصول.",
      ],
      pestsControlled: ["العنكبوت الأحمر", "صانعات الأنفاق"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة"],
      activeIngredient: "أباميكتين 1.8%",
      phi: "3–7 أيام.",
      usageRate: "50–75 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  9: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/topstar.jpg",
    en: {
      title: "Topstar",
      subtitle: "Azoxystrobin 20% + Difenoconazole 12.5%",
      description:
        "Topstar combines Azoxystrobin and Difenoconazole for strong preventive and curative control of fungal diseases.",
      features: [
        "Dual fungicide formulation.",
        "Systemic plant protection.",
        "Broad spectrum disease control.",
      ],
      pestsControlled: ["Powdery mildew", "Leaf spot", "Rust"],
      cropsUsedFor: ["Vegetables", "Grapes", "Fruit Trees"],
      activeIngredient: "Azoxystrobin 20% + Difenoconazole 12.5%",
      phi: "7–14 days.",
      usageRate: "30–40 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "توبستار",
      subtitle: "أزوكسيستروبين 20% + ديفينوكونازول 12.5%",
      description:
        "توبستار يجمع بين أزوكسيستروبين وديفينوكونازول لمكافحة وقائية وعلاجية قوية للأمراض الفطرية.",
      features: [
        "تركيبة مزدوجة من مبيدين فطريين.",
        "حماية جهازية للنبات.",
        "مكافحة واسعة الطيف للأمراض.",
      ],
      pestsControlled: ["البياض الدقيقي", "تبقع الأوراق", "الصدأ"],
      cropsUsedFor: ["الخضروات", "العنب", "أشجار الفاكهة"],
      activeIngredient: "أزوكسيستروبين 20% + ديفينوكونازول 12.5%",
      phi: "7–14 يومًا.",
      usageRate: "30–40 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  10: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/Iron.png",
    en: {
      title: "Grow Iron",
      subtitle: "Iron EDDHA 6% ortho ortho",
      description:
        "Grow Iron contains Iron EDDHA 6% ortho-ortho used to correct iron deficiency and improve plant growth.",
      features: [
        "Highly stable chelated iron.",
        "Quick correction of chlorosis.",
        "Improves leaf color.",
      ],
      pestsControlled: ["Iron Chlorosis"],
      cropsUsedFor: ["Citrus", "Grapes", "Vegetables"],
      activeIngredient: "Iron EDDHA 6% ortho ortho",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "2–3 kg/feddan via soil (fertigation) application.",
    },
    ar: {
      title: "جرو أيرون",
      subtitle: "حديد EDDHA 6% أورثو أورثو",
      description:
        "جرو أيرون يحتوي على حديد مخلبي EDDHA 6% أورثو أورثو يُستخدم لعلاج نقص الحديد وتحسين نمو النبات.",
      features: [
        "حديد مخلبي عالي الثبات.",
        "علاج سريع لاصفرار الأوراق.",
        "يحسّن لون الأوراق.",
      ],
      pestsControlled: ["اصفرار الأوراق (نقص الحديد)"],
      cropsUsedFor: ["الموالح", "العنب", "الخضروات"],
      activeIngredient: "حديد EDDHA 6% أورثو أورثو",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "2–3 كجم/فدان عن طريق التربة (التسميد بمياه الري).",
    },
  },
  11: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/kabisat.png",
    en: {
      title: "Kabisat",
      subtitle: "Mineral Oil 80%",
      description:
        "Kabisat is a mineral winter oil used to control overwintering insects and mites in orchards.",
      features: [
        "Controls dormant pests.",
        "Safe winter application.",
        "Improves pesticide efficiency.",
      ],
      pestsControlled: ["Scale insects", "Mites", "Aphid eggs"],
      cropsUsedFor: ["Citrus", "Apple", "Peach"],
      activeIngredient: "Mineral Oil 80%",
      phi: "Not required for dormant-season application.",
      usageRate: "2–3 liters per 100 liters of water as a dormant spray.",
    },
    ar: {
      title: "كابيسات",
      subtitle: "زيت معدني 80%",
      description:
        "كابيسات زيت معدني شتوي يُستخدم لمكافحة الحشرات والعناكب المتشتية في البساتين.",
      features: [
        "مكافحة الآفات في طور السكون.",
        "استخدام آمن في الشتاء.",
        "يحسّن كفاءة المبيدات.",
      ],
      pestsControlled: ["الحشرات القشرية", "العناكب", "بيض المن"],
      cropsUsedFor: ["الموالح", "التفاح", "الخوخ"],
      activeIngredient: "زيت معدني 80%",
      phi: "غير مطلوبة عند الاستخدام في فترة السكون الشتوي.",
      usageRate: "2–3 لتر لكل 100 لتر ماء كرشة شتوية.",
    },
  },
  12: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/mexazim.png",
    en: {
      title: "Mexazim",
      subtitle: "Carbendazim 50% SC",
      description:
        "Mexazim contains Carbendazim 50% SC, a systemic fungicide used to control many plant diseases.",
      features: [
        "Systemic fungicide action.",
        "Controls leaf and root diseases.",
        "Improves plant health.",
      ],
      pestsControlled: ["Powdery mildew", "Leaf spot", "Root rot"],
      cropsUsedFor: ["Vegetables", "Wheat", "Rice"],
      activeIngredient: "Carbendazim 50% SC",
      phi: "14 days.",
      usageRate: "30–50 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "ميكسازيم",
      subtitle: "كاربندازيم 50% SC",
      description:
        "ميكسازيم يحتوي على كاربندازيم 50% SC، مبيد فطري جهازي يُستخدم لمكافحة العديد من أمراض النبات.",
      features: [
        "فعل جهازي مضاد للفطريات.",
        "يكافح أمراض الأوراق والجذور.",
        "يحسّن صحة النبات.",
      ],
      pestsControlled: ["البياض الدقيقي", "تبقع الأوراق", "عفن الجذور"],
      cropsUsedFor: ["الخضروات", "القمح", "الأرز"],
      activeIngredient: "كاربندازيم 50% SC",
      phi: "14 يومًا.",
      usageRate: "30–50 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  13: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/micromix.png",
    en: {
      title: "MicroMix Plus",
      subtitle: "Chelated micronutrient mix",
      description:
        "MicroMix Plus is a blend of micronutrients chelated with EDTA for improved plant nutrition.",
      features: [
        "Balanced micronutrient formula.",
        "High absorption rate.",
        "Improves plant growth.",
      ],
      pestsControlled: ["Micronutrient deficiency"],
      cropsUsedFor: ["Vegetables", "Fruit Trees", "Field Crops"],
      activeIngredient: "Chelated micronutrient mix",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "100–150 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "مايكرو ميكس بلس",
      subtitle: "خليط عناصر صغرى مخلبية",
      description:
        "مايكرو ميكس بلس خليط من العناصر الصغرى المخلبة بـ EDTA لتحسين تغذية النبات.",
      features: [
        "تركيبة متوازنة من العناصر الصغرى.",
        "معدل امتصاص عالٍ.",
        "يحسّن نمو النبات.",
      ],
      pestsControlled: ["نقص العناصر الصغرى"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة", "المحاصيل الحقلية"],
      activeIngredient: "خليط عناصر صغرى مخلبية",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "100–150 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  14: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/mn.png",
    en: {
      title: "GROW Mn",
      subtitle: "Manganese EDTA 13%",
      description:
        "GROW Mn provides manganese EDTA 13% to improve photosynthesis and plant enzyme activity.",
      features: [
        "Corrects manganese deficiency.",
        "Improves photosynthesis.",
        "Enhances plant growth.",
      ],
      pestsControlled: ["Manganese deficiency"],
      cropsUsedFor: ["Vegetables", "Citrus"],
      activeIngredient: "Manganese EDTA 13%",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "100–150 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "جرو منجنيز",
      subtitle: "منجنيز EDTA 13%",
      description:
        "جرو منجنيز يوفر منجنيز مخلبي EDTA 13% لتحسين عملية البناء الضوئي ونشاط الإنزيمات النباتية.",
      features: [
        "يعالج نقص المنجنيز.",
        "يحسّن عملية البناء الضوئي.",
        "يعزز نمو النبات.",
      ],
      pestsControlled: ["نقص المنجنيز"],
      cropsUsedFor: ["الخضروات", "الموالح"],
      activeIngredient: "منجنيز EDTA 13%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "100–150 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  15: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/super_sal.png",
    en: {
      title: "Super Sal",
      subtitle: "Soil salinity treatment",
      description:
        "Super Sal is a soil treatment used to reduce salinity and improve soil conditions.",
      features: [
        "Reduces soil salinity.",
        "Improves root development.",
        "Enhances nutrient uptake.",
      ],
      pestsControlled: ["Soil salinity"],
      cropsUsedFor: ["Vegetables", "Fruit Trees"],
      activeIngredient: "Soil salinity treatment",
      phi: "Not applicable (soil treatment product).",
      usageRate: "5–10 kg/feddan via soil application.",
    },
    ar: {
      title: "سوبر سال",
      subtitle: "معالج ملوحة التربة",
      description:
        "سوبر سال معاملة أرضية تُستخدم لخفض الملوحة وتحسين خواص التربة.",
      features: [
        "يقلل من ملوحة التربة.",
        "يحسّن نمو الجذور.",
        "يعزز امتصاص العناصر الغذائية.",
      ],
      pestsControlled: ["ملوحة التربة"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة"],
      activeIngredient: "معالج ملوحة التربة",
      phi: "غير مطبق (منتج لمعاملة التربة).",
      usageRate: "5–10 كجم/فدان عن طريق التربة.",
    },
  },
  16: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/toflak.png",
    en: {
      title: "Toflak",
      subtitle: "Thiophanate-methyl 70% SC",
      description:
        "Toflak contains Thiophanate-methyl 70% SC for systemic control of fungal diseases.",
      features: [
        "Systemic disease protection.",
        "Controls many fungal pathogens.",
        "Improves crop health.",
      ],
      pestsControlled: ["Powdery mildew", "Leaf spot", "Root rot"],
      cropsUsedFor: ["Vegetables", "Fruit Trees"],
      activeIngredient: "Thiophanate-methyl 70% SC",
      phi: "14 days.",
      usageRate: "40–50 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "توفلاك",
      subtitle: "ثيوفانات ميثيل 70% SC",
      description:
        "توفلاك يحتوي على ثيوفانات ميثيل 70% SC لمكافحة جهازية للأمراض الفطرية.",
      features: [
        "حماية جهازية من الأمراض.",
        "يكافح العديد من مسببات الأمراض الفطرية.",
        "يحسّن صحة المحصول.",
      ],
      pestsControlled: ["البياض الدقيقي", "تبقع الأوراق", "عفن الجذور"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة"],
      activeIngredient: "ثيوفانات ميثيل 70% SC",
      phi: "14 يومًا.",
      usageRate: "40–50 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  17: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/zink.png",
    en: {
      title: "GROW Zink",
      subtitle: "Zinc EDTA 13%",
      description:
        "GROW Zink contains Zinc EDTA 13% to correct zinc deficiency and improve plant growth.",
      features: [
        "Corrects zinc deficiency.",
        "Improves plant development.",
        "Highly available zinc.",
      ],
      pestsControlled: ["Zinc deficiency"],
      cropsUsedFor: ["Vegetables", "Corn"],
      activeIngredient: "Zinc EDTA 13%",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "100–150 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "جرو زنك",
      subtitle: "زنك EDTA 13%",
      description:
        "جرو زنك يحتوي على زنك مخلبي EDTA 13% لعلاج نقص الزنك وتحسين نمو النبات.",
      features: [
        "يعالج نقص الزنك.",
        "يحسّن تطور النبات.",
        "زنك عالي التيسر للامتصاص.",
      ],
      pestsControlled: ["نقص الزنك"],
      cropsUsedFor: ["الخضروات", "الذرة"],
      activeIngredient: "زنك EDTA 13%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "100–150 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  18: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/acitan.png",
    en: {
      title: "Acitan",
      subtitle: "Acetamiprid 20%",
      description:
        "Acitan contains Acetamiprid 20% used to control sucking insects in crops.",
      features: [
        "Systemic insecticide.",
        "Controls aphids and whiteflies.",
        "Long lasting protection.",
      ],
      pestsControlled: ["Aphids", "Whiteflies", "Thrips"],
      cropsUsedFor: ["Vegetables", "Fruit Trees"],
      activeIngredient: "Acetamiprid 20%",
      phi: "7 days.",
      usageRate: "20–30 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "أسيتان",
      subtitle: "أسيتامبريد 20%",
      description:
        "أسيتان يحتوي على أسيتامبريد 20% ويُستخدم لمكافحة الحشرات الماصة في المحاصيل.",
      features: [
        "مبيد حشري جهازي.",
        "يكافح المن والذبابة البيضاء.",
        "حماية طويلة الأمد.",
      ],
      pestsControlled: ["المن", "الذبابة البيضاء", "التربس"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة"],
      activeIngredient: "أسيتامبريد 20%",
      phi: "7 أيام.",
      usageRate: "20–30 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  19: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/acitan_plus.png",
    en: {
      title: "Acitan Plus",
      subtitle: "Acetamiprid 70%",
      description:
        "Acitan Plus contains Acetamiprid 70% for strong systemic control of sucking pests.",
      features: [
        "High concentration formula.",
        "Powerful pest control.",
        "Extended protection.",
      ],
      pestsControlled: ["Aphids", "Whiteflies", "Thrips"],
      cropsUsedFor: ["Vegetables", "Fruit Trees"],
      activeIngredient: "Acetamiprid 70%",
      phi: "7 days.",
      usageRate: "5–10 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "أسيتان بلس",
      subtitle: "أسيتامبريد 70%",
      description:
        "أسيتان بلس يحتوي على أسيتامبريد 70% لمكافحة جهازية قوية للآفات الماصة.",
      features: [
        "تركيز عالٍ للمادة الفعالة.",
        "مكافحة قوية للآفات.",
        "حماية ممتدة.",
      ],
      pestsControlled: ["المن", "الذبابة البيضاء", "التربس"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة"],
      activeIngredient: "أسيتامبريد 70%",
      phi: "7 أيام.",
      usageRate: "5–10 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  20: {
    category: "insecticide",
    categoryLabel: { en: "Anti-peeling", ar: "منظم نمو حشري" },
    image: "/assets/Admeron.jpg",
    en: {
      title: "Admeron",
      subtitle: "Pyriproxyfen 10% EC",
      description:
        "Admeron contains Pyriproxyfen 10% EC, an insect growth regulator that controls pests by disrupting development.",
      features: [
        "Insect growth regulator.",
        "Controls immature pest stages.",
        "Excellent whitefly management.",
      ],
      pestsControlled: ["Whiteflies", "Scale insects"],
      cropsUsedFor: ["Vegetables", "Cotton"],
      activeIngredient: "Pyriproxyfen 10% EC",
      phi: "7 days.",
      usageRate: "40–50 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "أدميرون",
      subtitle: "بيريبروكسيفين 10% EC",
      description:
        "أدميرون يحتوي على بيريبروكسيفين 10% EC، منظم نمو حشري يكافح الآفات عن طريق تعطيل تطورها.",
      features: [
        "منظم نمو حشري.",
        "يكافح الأطوار غير الكاملة للآفة.",
        "إدارة ممتازة للذبابة البيضاء.",
      ],
      pestsControlled: ["الذبابة البيضاء", "الحشرات القشرية"],
      cropsUsedFor: ["الخضروات", "القطن"],
      activeIngredient: "بيريبروكسيفين 10% EC",
      phi: "7 أيام.",
      usageRate: "40–50 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  21: {
    category: "insecticide",
    categoryLabel: { en: "Anti-peeling", ar: "منظم نمو حشري" },
    image: "/assets/amida70.png",
    en: {
      title: "Amida Top 70",
      subtitle: "Imidacloprid 70%",
      description:
        "Amida Top 70 contains Imidacloprid 70% providing strong systemic control of sucking insects.",
      features: [
        "Highly concentrated insecticide.",
        "Systemic protection.",
        "Effective against aphids and whiteflies.",
      ],
      pestsControlled: ["Aphids", "Whiteflies", "Leafhoppers"],
      cropsUsedFor: ["Vegetables", "Fruit Trees"],
      activeIngredient: "Imidacloprid 70%",
      phi: "7 days.",
      usageRate: "10–15 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "أميدا توب 70",
      subtitle: "إيميداكلوبريد 70%",
      description:
        "أميدا توب 70 يحتوي على إيميداكلوبريد 70% ويوفر مكافحة جهازية قوية للحشرات الماصة.",
      features: [
        "مبيد حشري عالي التركيز.",
        "حماية جهازية.",
        "فعّال ضد المن والذبابة البيضاء.",
      ],
      pestsControlled: ["المن", "الذبابة البيضاء", "نطاطات الأوراق"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة"],
      activeIngredient: "إيميداكلوبريد 70%",
      phi: "7 أيام.",
      usageRate: "10–15 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  22: {
    category: "insecticide",
    categoryLabel: { en: "Anti-peeling", ar: "منظم نمو حشري" },
    image: "/assets/topswit.jpg",
    en: {
      title: "Top Thwit",
      subtitle: "Dimethoate 40% SC",
      description:
        "Top Thwit contains Dimethoate 40% SC used for systemic control of sucking insects in crops.",
      features: [
        "Systemic and contact action.",
        "Reliable pest control.",
        "Wide crop usage.",
      ],
      pestsControlled: ["Aphids", "Leafhoppers", "Thrips"],
      cropsUsedFor: ["Vegetables", "Fruit Trees"],
      activeIngredient: "Dimethoate 40% SC",
      phi: "14–21 days.",
      usageRate: "100–150 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "توب ثويت",
      subtitle: "دايميثويت 40% SC",
      description:
        "توب ثويت يحتوي على دايميثويت 40% SC ويُستخدم لمكافحة جهازية للحشرات الماصة في المحاصيل.",
      features: [
        "فعل جهازي وتلامسي.",
        "مكافحة موثوقة للآفات.",
        "استخدام واسع على المحاصيل.",
      ],
      pestsControlled: ["المن", "نطاطات الأوراق", "التربس"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة"],
      activeIngredient: "دايميثويت 40% SC",
      phi: "14–21 يومًا.",
      usageRate: "100–150 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  23: {
    category: "acaricide",
    categoryLabel: { en: "Acaricide", ar: "مبيد أكاروسي" },
    image: "/assets/acaron.jpg",
    en: {
      title: "Acaron",
      subtitle: "Spirodiclofen 40% SC",
      description:
        "Acaron contains Spirodiclofen 40% SC, a selective, non-systemic acaricide that inhibits lipid biosynthesis in mites for long-lasting control, including excellent activity on eggs.",
      features: [
        "Excellent ovicidal (egg-killing) activity.",
        "Long residual protection, up to 35–50 days.",
        "Low risk of cross-resistance with other acaricides.",
      ],
      pestsControlled: ["Spider mites", "Rust mites", "Scale insects"],
      cropsUsedFor: ["Citrus", "Grapes", "Vegetables", "Fruit Trees"],
      activeIngredient: "Spirodiclofen 40% SC",
      phi: "7 days.",
      usageRate: "20–30 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "أكارون",
      subtitle: "سبيروديكلوفين 40% SC",
      description:
        "أكارون يحتوي على سبيروديكلوفين 40% SC، مبيد أكاروسي انتقائي غير جهازي يثبط تخليق الدهون في العناكب لمكافحة طويلة المدى، مع فعالية ممتازة على البيض.",
      features: [
        "فعالية ممتازة في قتل البيض.",
        "حماية متبقية طويلة تصل إلى 35–50 يومًا.",
        "خطر منخفض لظهور مقاومة متقاطعة مع مبيدات أكاروسية أخرى.",
      ],
      pestsControlled: ["العنكبوت الأحمر", "عث الصدأ", "الحشرات القشرية"],
      cropsUsedFor: ["الموالح", "العنب", "الخضروات", "أشجار الفاكهة"],
      activeIngredient: "سبيروديكلوفين 40% SC",
      phi: "7 أيام.",
      usageRate: "20–30 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  24: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/alphatop.png",
    en: {
      title: "Alphatop",
      subtitle: "Mancozeb 80% WP",
      description:
        "Alphatop contains Mancozeb 80% WP, a broad-spectrum protectant fungicide with multi-site contact action that prevents fungal spore germination.",
      features: [
        "Broad-spectrum protectant action.",
        "Multi-site mode of action reduces resistance risk.",
        "Rainfast and long lasting on foliage.",
      ],
      pestsControlled: [
        "Early blight",
        "Late blight",
        "Downy mildew",
        "Leaf spot",
      ],
      cropsUsedFor: ["Potatoes", "Tomatoes", "Grapes", "Vegetables"],
      activeIngredient: "Mancozeb 80% WP",
      phi: "7 days.",
      usageRate: "250–300 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "ألفاتوب",
      subtitle: "مانكوزيب 80% WP",
      description:
        "ألفاتوب يحتوي على مانكوزيب 80% WP، مبيد فطري وقائي واسع الطيف بآلية تلامس متعددة المواقع يمنع إنبات الجراثيم الفطرية.",
      features: [
        "فعل وقائي واسع الطيف.",
        "آلية عمل متعددة المواقع تقلل خطر ظهور المقاومة.",
        "ثابت أمام الأمطار وطويل المفعول على الأوراق.",
      ],
      pestsControlled: [
        "اللفحة المبكرة",
        "اللفحة المتأخرة",
        "البياض الزغبي",
        "تبقع الأوراق",
      ],
      cropsUsedFor: ["البطاطس", "الطماطم", "العنب", "الخضروات"],
      activeIngredient: "مانكوزيب 80% WP",
      phi: "7 أيام.",
      usageRate: "250–300 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  25: {
    category: "acaricide",
    categoryLabel: { en: "Acaricide", ar: "مبيد أكاروسي" },
    image: "/assets/bivastare.jpg",
    en: {
      title: "Bivastare",
      subtitle: "Bifenazate 48% SC",
      description:
        "Bivastare contains Bifenazate 48% SC, a selective miticide with fast knockdown activity effective against all mobile stages of spider mites.",
      features: [
        "Fast-acting selective miticide.",
        "Effective on all mobile mite stages.",
        "Safe for many beneficial insects.",
      ],
      pestsControlled: ["Spider mites", "Two-spotted mites"],
      cropsUsedFor: ["Vegetables", "Cotton", "Ornamentals", "Fruit Trees"],
      activeIngredient: "Bifenazate 48% SC",
      phi: "3–7 days.",
      usageRate: "30–40 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "بيفاستار",
      subtitle: "بيفينازات 48% SC",
      description:
        "بيفاستار يحتوي على بيفينازات 48% SC، مبيد عناكب انتقائي سريع المفعول فعّال ضد جميع الأطوار المتحركة للعنكبوت الأحمر.",
      features: [
        "مبيد عناكب انتقائي سريع المفعول.",
        "فعّال على جميع الأطوار المتحركة للعنكبوت.",
        "آمن على العديد من الحشرات النافعة.",
      ],
      pestsControlled: ["العنكبوت الأحمر", "العنكبوت ذو البقعتين"],
      cropsUsedFor: ["الخضروات", "القطن", "نباتات الزينة", "أشجار الفاكهة"],
      activeIngredient: "بيفينازات 48% SC",
      phi: "3–7 أيام.",
      usageRate: "30–40 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  26: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide/Acaricide", ar: "مبيد حشري/أكاروسي" },
    image: "/assets/clogro.jpg",
    en: {
      title: "Clogro",
      subtitle: "Chlorfenapyr 36% SC",
      description:
        "Clogro contains Chlorfenapyr 36% SC, a broad-spectrum pro-insecticide that disrupts cellular energy production, giving strong control of resistant insect and mite pests.",
      features: [
        "Unique mode of action for resistance management.",
        "Broad-spectrum insect and mite control.",
        "Effective against difficult-to-control pests.",
      ],
      pestsControlled: [
        "Caterpillars",
        "Whiteflies",
        "Spider mites",
        "Leaf miners",
      ],
      cropsUsedFor: ["Vegetables", "Cotton"],
      activeIngredient: "Chlorfenapyr 36% SC",
      phi: "7 days.",
      usageRate: "30–50 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "كلوجرو",
      subtitle: "كلورفينابير 36% SC",
      description:
        "كلوجرو يحتوي على كلورفينابير 36% SC، مبيد أولي واسع الطيف يعطل إنتاج الطاقة الخلوية، مما يوفر مكافحة قوية للحشرات والعناكب المقاومة.",
      features: [
        "آلية عمل فريدة لإدارة المقاومة.",
        "مكافحة واسعة الطيف للحشرات والعناكب.",
        "فعّال ضد الآفات صعبة المكافحة.",
      ],
      pestsControlled: [
        "الديدان (اليرقات)",
        "الذبابة البيضاء",
        "العنكبوت الأحمر",
        "صانعات الأنفاق",
      ],
      cropsUsedFor: ["الخضروات", "القطن"],
      activeIngredient: "كلورفينابير 36% SC",
      phi: "7 أيام.",
      usageRate: "30–50 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  27: {
    category: "acaricide",
    categoryLabel: { en: "Acaricide", ar: "مبيد أكاروسي" },
    image: "/assets/finbogro.jpg",
    en: {
      title: "Finbogro",
      subtitle: "Fenbutatin oxide 55% SC",
      description:
        "Finbogro contains Fenbutatin oxide 55% SC, a selective, non-systemic organotin acaricide that provides reliable control of mites while being gentle on many beneficial insects.",
      features: [
        "Selective, non-systemic acaricide.",
        "Long residual mite control.",
        "Compatible with integrated pest management programs.",
      ],
      pestsControlled: ["Spider mites", "Rust mites"],
      cropsUsedFor: ["Citrus", "Vegetables", "Ornamentals"],
      activeIngredient: "Fenbutatin oxide 55% SC",
      phi: "14 days.",
      usageRate: "50–75 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "فينبوجرو",
      subtitle: "فينبوتاتين أوكسيد 55% SC",
      description:
        "فينبوجرو يحتوي على فينبوتاتين أوكسيد 55% SC، مبيد أكاروسي انتقائي غير جهازي يوفر مكافحة موثوقة للعناكب مع لطف على العديد من الحشرات النافعة.",
      features: [
        "مبيد أكاروسي انتقائي غير جهازي.",
        "مكافحة متبقية طويلة للعناكب.",
        "متوافق مع برامج المكافحة المتكاملة للآفات.",
      ],
      pestsControlled: ["العنكبوت الأحمر", "عث الصدأ"],
      cropsUsedFor: ["الموالح", "الخضروات", "نباتات الزينة"],
      activeIngredient: "فينبوتاتين أوكسيد 55% SC",
      phi: "14 يومًا.",
      usageRate: "50–75 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  28: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/fostar.png",
    en: {
      title: "Fostar",
      subtitle: "Fosetyl-Aluminium 80% WP",
      description:
        "Fostar contains Fosetyl-Aluminium 80% WP, a systemic broad-spectrum fungicide with preventive and curative action that moves through the whole plant to control fungal and bacterial diseases such as downy mildew and gummosis.",
      features: [
        "Systemic, moves both up and down within the plant.",
        "Preventive and curative dual action.",
        "Induces the plant's natural disease resistance (phytoalexins).",
      ],
      pestsControlled: [
        "Downy mildew",
        "Late blight",
        "Gummosis",
        "Phytophthora",
      ],
      cropsUsedFor: ["Citrus", "Grapes", "Vegetables"],
      activeIngredient: "Fosetyl-Aluminium 80% WP",
      phi: "14 days.",
      usageRate:
        "250 g per 100 liters of water as a foliar spray; 5 g/L for seedling soaking.",
    },
    ar: {
      title: "فوستار",
      subtitle: "فوسيتيل الألمنيوم 80% WP",
      description:
        "فوستار يحتوي على فوسيتيل الألمنيوم 80% WP، مبيد فطري جهازي واسع الطيف بفعل وقائي وعلاجي ينتقل داخل النبات بالكامل لمكافحة الأمراض الفطرية والبكتيرية مثل البياض الزغبي والصمغية.",
      features: [
        "جهازي، ينتقل صعودًا وهبوطًا داخل النبات.",
        "فعل مزدوج وقائي وعلاجي.",
        "يحفز مقاومة النبات الطبيعية للأمراض (الفيتوأليكسينات).",
      ],
      pestsControlled: [
        "البياض الزغبي",
        "اللفحة المتأخرة",
        "الصمغية",
        "الفيتوفثورا",
      ],
      cropsUsedFor: ["الموالح", "العنب", "الخضروات"],
      activeIngredient: "فوسيتيل الألمنيوم 80% WP",
      phi: "14 يومًا.",
      usageRate:
        "250 جم لكل 100 لتر ماء رشًا على الأوراق؛ 5 جم/لتر لنقع الشتلات.",
    },
  },
  29: {
    category: "acaricide",
    categoryLabel: { en: "Acaricide/Insecticide", ar: "مبيد أكاروسي/حشري" },
    image: "/assets/kodac.jpg",
    en: {
      title: "Kodac",
      subtitle: "Abamectin 2% + Spirodiclofen 18% SC",
      description:
        "Kodac combines Abamectin 2% and Spirodiclofen 18% SC for powerful dual-action control of mites and leafminers with a very long residual effect.",
      features: [
        "Dual mode of action.",
        "Excellent control of eggs and mobile stages.",
        "Long-lasting field performance.",
      ],
      pestsControlled: ["Spider mites", "Leaf miners"],
      cropsUsedFor: ["Vegetables", "Fruit Trees", "Citrus"],
      activeIngredient: "Abamectin 2% + Spirodiclofen 18% SC",
      phi: "7 days.",
      usageRate: "40 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "كوداك",
      subtitle: "أباميكتين 2% + سبيروديكلوفين 18% SC",
      description:
        "كوداك يجمع بين أباميكتين 2% وسبيروديكلوفين 18% SC لمكافحة مزدوجة قوية للعناكب وصانعات الأنفاق بمفعول متبقٍ طويل جدًا.",
      features: [
        "آلية عمل مزدوجة.",
        "مكافحة ممتازة للبيض والأطوار المتحركة.",
        "أداء ميداني طويل الأمد.",
      ],
      pestsControlled: ["العنكبوت الأحمر", "صانعات الأنفاق"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة", "الموالح"],
      activeIngredient: "أباميكتين 2% + سبيروديكلوفين 18% SC",
      phi: "7 أيام.",
      usageRate: "40 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  30: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/lambadagro.jpg",
    en: {
      title: "Lambadagro",
      subtitle: "Lambda-cyhalothrin 10% EC",
      description:
        "Lambadagro contains Lambda-cyhalothrin 10% EC, a pyrethroid insecticide that provides very fast knockdown and broad-spectrum control of insect pests.",
      features: [
        "Very fast knockdown effect.",
        "Broad-spectrum insect control.",
        "Effective at low application rates.",
      ],
      pestsControlled: ["Aphids", "Whiteflies", "Caterpillars", "Beetles"],
      cropsUsedFor: ["Cotton", "Vegetables", "Fruit Trees"],
      activeIngredient: "Lambda-cyhalothrin 10% EC",
      phi: "3–7 days.",
      usageRate: "30–40 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "لامبادجرو",
      subtitle: "لامبدا سيهالوثرين 10% EC",
      description:
        "لامبادجرو يحتوي على لامبدا سيهالوثرين 10% EC، مبيد حشري بيرثرويدي يوفر إسقاطًا سريعًا جدًا ومكافحة واسعة الطيف للآفات الحشرية.",
      features: [
        "مفعول إسقاط سريع جدًا.",
        "مكافحة واسعة الطيف للحشرات.",
        "فعّال بمعدلات استخدام منخفضة.",
      ],
      pestsControlled: ["المن", "الذبابة البيضاء", "الديدان (اليرقات)", "الخنافس"],
      cropsUsedFor: ["القطن", "الخضروات", "أشجار الفاكهة"],
      activeIngredient: "لامبدا سيهالوثرين 10% EC",
      phi: "3–7 أيام.",
      usageRate: "30–40 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  31: {
    category: "acaricide",
    categoryLabel: { en: "Acaricide", ar: "مبيد أكاروسي" },
    image: "/assets/praydex.jpg",
    en: {
      title: "Praydex",
      subtitle: "Pyridaben 20% EC",
      description:
        "Praydex contains Pyridaben 20% EC, a contact and stomach acaricide effective against all developmental stages of mites.",
      features: [
        "Fast contact and stomach action.",
        "Effective on eggs, nymphs and adults.",
        "Strong residual mite control.",
      ],
      pestsControlled: ["Spider mites", "Rust mites"],
      cropsUsedFor: ["Citrus", "Vegetables", "Fruit Trees"],
      activeIngredient: "Pyridaben 20% EC",
      phi: "7 days.",
      usageRate: "40–50 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "برايدكس",
      subtitle: "بيريدابين 20% EC",
      description:
        "برايدكس يحتوي على بيريدابين 20% EC، مبيد أكاروسي تلامسي ومعوي فعّال ضد جميع الأطوار التطورية للعناكب.",
      features: [
        "فعل تلامسي ومعوي سريع.",
        "فعّال على البيض والحوريات والحشرات الكاملة.",
        "مكافحة متبقية قوية للعناكب.",
      ],
      pestsControlled: ["العنكبوت الأحمر", "عث الصدأ"],
      cropsUsedFor: ["الموالح", "الخضروات", "أشجار الفاكهة"],
      activeIngredient: "بيريدابين 20% EC",
      phi: "7 أيام.",
      usageRate: "40–50 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  32: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/ridomex.png",
    en: {
      title: "Ridomex",
      subtitle: "Mancozeb 64% + Metalaxyl 8% WP",
      description:
        "Ridomex combines Mancozeb 64% and Metalaxyl 8% WP, pairing systemic and contact modes of action for strong preventive and curative control of downy mildew and late blight.",
      features: [
        "Systemic plus contact dual action.",
        "Effective against resistant fungal strains.",
        "Broad crop-safety profile.",
      ],
      pestsControlled: ["Downy mildew", "Late blight"],
      cropsUsedFor: ["Potatoes", "Tomatoes", "Grapes", "Onions"],
      activeIngredient: "Mancozeb 64% + Metalaxyl 8% WP",
      phi: "7–14 days.",
      usageRate: "250 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "ريدوميكس",
      subtitle: "مانكوزيب 64% + ميتالاكسيل 8% WP",
      description:
        "ريدوميكس يجمع بين مانكوزيب 64% وميتالاكسيل 8% WP، مزاوجًا بين الفعل الجهازي والتلامسي لمكافحة وقائية وعلاجية قوية للبياض الزغبي واللفحة المتأخرة.",
      features: [
        "فعل مزدوج جهازي وتلامسي.",
        "فعّال ضد السلالات الفطرية المقاومة.",
        "أمان واسع على مختلف المحاصيل.",
      ],
      pestsControlled: ["البياض الزغبي", "اللفحة المتأخرة"],
      cropsUsedFor: ["البطاطس", "الطماطم", "العنب", "البصل"],
      activeIngredient: "مانكوزيب 64% + ميتالاكسيل 8% WP",
      phi: "7–14 يومًا.",
      usageRate: "250 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
};

// Products shown in the homepage auto-scrolling carousel.
// Add/remove ids here to control which products appear on the home page.
export const featuredIds = [2, 16, 5, 9, 23, 28, 1, 30];

// Turns a raw product record + language code into a flat object with all
// fields in that language, ready to hand to the UI components.
export function localizeProduct(product, lang) {
  if (!product) return null;
  const safeLang = product[lang] ? lang : "en";
  return {
    category: product.category,
    categoryLabel: product.categoryLabel[safeLang] ?? product.categoryLabel.en,
    image: product.image,
    ...product[safeLang],
  };
}

export default products;
