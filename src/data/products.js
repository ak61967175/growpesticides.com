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
  33: {
    category: "herbicide",
    categoryLabel: { en: "Herbicide", ar: "مبيد حشائش" },
    image: "/assets/arvion.jpg",
    en: {
      title: "Arvion",
      subtitle: "Clethodim 24% EC",
      description:
        "Arvion contains Clethodim 24% EC, a selective post-emergence graminicide that controls annual and perennial grass weeds in broadleaf crops without harming the crop itself.",
      features: [
        "Selective control of grass weeds only.",
        "Rainfast shortly after application.",
        "Safe on a wide range of broadleaf crops.",
      ],
      pestsControlled: [
        "Wild oat",
        "Barnyard grass",
        "Johnson grass",
        "Bermuda grass",
      ],
      cropsUsedFor: ["Soybean", "Cotton", "Vegetables"],
      activeIngredient: "Clethodim 24% EC",
      phi: "30–60 days depending on crop.",
      usageRate: "40–50 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "أرفيون",
      subtitle: "كليثوديم 24% EC",
      description:
        "أرفيون يحتوي على كليثوديم 24% EC، مبيد حشائش انتقائي يستخدم بعد الإنبات لمكافحة الحشائش النجيلية الحولية والمعمرة في المحاصيل عريضة الأوراق دون الإضرار بالمحصول.",
      features: [
        "مكافحة انتقائية للحشائش النجيلية فقط.",
        "ثابت على الأوراق بعد وقت قصير من الرش.",
        "آمن على مجموعة واسعة من المحاصيل عريضة الأوراق.",
      ],
      pestsControlled: [
        "الشوفان البري",
        "حشيشة الدنيبة",
        "حشيشة جونسون",
        "النجيل البلدي",
      ],
      cropsUsedFor: ["فول الصويا", "القطن", "الخضروات"],
      activeIngredient: "كليثوديم 24% EC",
      phi: "30–60 يومًا حسب المحصول.",
      usageRate: "40–50 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  34: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/benzogro.png",
    en: {
      title: "Benzogro",
      subtitle: "Emamectin Benzoate 5.7% WG",
      description:
        "Benzogro contains Emamectin Benzoate 5.7% WG, a powerful larvicide with translaminar movement inside leaf tissue, giving fast and long-lasting control of caterpillars.",
      features: [
        "Fast acting against larvae.",
        "Translaminar movement inside leaf tissue.",
        "Long residual activity.",
      ],
      pestsControlled: [
        "Caterpillars",
        "Cotton leafworm",
        "Tomato borer",
        "Diamondback moth",
      ],
      cropsUsedFor: ["Cotton", "Vegetables", "Fruit Trees"],
      activeIngredient: "Emamectin Benzoate 5.7% WG",
      phi: "3–7 days.",
      usageRate: "20 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "بنزوجرو",
      subtitle: "إيمامكتين بنزوات 5.7% WG",
      description:
        "بنزوجرو يحتوي على إيمامكتين بنزوات 5.7% WG، مبيد يرقي قوي ينتقل داخل أنسجة الورقة (حركة عبر الصفائح) مما يمنح مكافحة سريعة وطويلة المفعول لليرقات.",
      features: [
        "فعالية سريعة ضد اليرقات.",
        "حركة عبر أنسجة الورقة.",
        "نشاط متبقي طويل المدى.",
      ],
      pestsControlled: [
        "الديدان (اليرقات)",
        "دودة ورق القطن",
        "دودة ثمار الطماطم",
        "فراشة الماس",
      ],
      cropsUsedFor: ["القطن", "الخضروات", "أشجار الفاكهة"],
      activeIngredient: "إيمامكتين بنزوات 5.7% WG",
      phi: "3–7 أيام.",
      usageRate: "20 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  35: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/clormactin.jpg",
    en: {
      title: "Clormactin",
      subtitle: "Emamectin Benzoate 5.7% + Chlorpyrifos 36% EC",
      description:
        "Clormactin combines Emamectin Benzoate 5.7% and Chlorpyrifos 36% EC, pairing translaminar and contact/stomach action for broad-spectrum control of chewing and soil-surface insects.",
      features: [
        "Dual mode of action.",
        "Broad-spectrum insect control.",
        "Quick knockdown plus lasting residual effect.",
      ],
      pestsControlled: [
        "Caterpillars",
        "Aphids",
        "Whiteflies",
        "Soil insects",
      ],
      cropsUsedFor: ["Cotton", "Vegetables", "Fruit Trees"],
      activeIngredient: "Emamectin Benzoate 5.7% + Chlorpyrifos 36% EC",
      phi: "14 days.",
      usageRate: "75 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "كلورماكتين",
      subtitle: "إيمامكتين بنزوات 5.7% + كلوربيريفوس 36% EC",
      description:
        "كلورماكتين يجمع بين إيمامكتين بنزوات 5.7% وكلوربيريفوس 36% EC، مزاوجًا بين الحركة عبر الأنسجة والفعل التلامسي والمعوي لمكافحة واسعة الطيف للحشرات القارضة وحشرات سطح التربة.",
      features: [
        "فعل مزدوج مركب.",
        "مكافحة واسعة الطيف للحشرات.",
        "إسقاط سريع مع تأثير متبقي طويل.",
      ],
      pestsControlled: [
        "الديدان (اليرقات)",
        "المن",
        "الذبابة البيضاء",
        "حشرات التربة",
      ],
      cropsUsedFor: ["القطن", "الخضروات", "أشجار الفاكهة"],
      activeIngredient: "إيمامكتين بنزوات 5.7% + كلوربيريفوس 36% EC",
      phi: "14 يومًا.",
      usageRate: "75 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  36: {
    category: "herbicide",
    categoryLabel: { en: "Herbicide", ar: "مبيد حشائش" },
    image: "/assets/corvex.jpg",
    en: {
      title: "Corvex",
      subtitle: "Glufosinate Ammonium 20% SL",
      description:
        "Corvex contains Glufosinate Ammonium 20% SL, a non-selective contact herbicide that gives fast visible burn-down and is a useful alternative mode of action for resistance management.",
      features: [
        "Non-selective, broad-spectrum control.",
        "Fast visible burn-down effect.",
        "Useful in resistance-management rotation programs.",
      ],
      pestsControlled: [
        "Broadleaf weeds",
        "Grass weeds",
        "Perennial weeds",
      ],
      cropsUsedFor: ["Orchards", "Non-crop areas", "Pre-planting fields"],
      activeIngredient: "Glufosinate Ammonium 20% SL",
      phi: "Non-crop / pre-planting use; not applicable to harvested produce.",
      usageRate: "300–400 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "كورڤيكس",
      subtitle: "جلوفوسينات أمونيوم 20% SL",
      description:
        "كورڤيكس يحتوي على جلوفوسينات أمونيوم 20% SL، مبيد حشائش تلامسي غير انتقائي يعطي حرقًا سريعًا وواضحًا، ويُعد بديلاً مفيدًا في برامج إدارة المقاومة.",
      features: [
        "مكافحة واسعة الطيف غير انتقائية.",
        "تأثير حرق سريع وواضح.",
        "مفيد في برامج تدوير آليات المقاومة.",
      ],
      pestsControlled: [
        "الحشائش عريضة الأوراق",
        "الحشائش النجيلية",
        "الحشائش المعمرة",
      ],
      cropsUsedFor: ["البساتين", "الأراضي غير الزراعية", "الأراضي قبل الزراعة"],
      activeIngredient: "جلوفوسينات أمونيوم 20% SL",
      phi: "استخدام قبل الزراعة أو في الأراضي غير الزراعية؛ غير مطبق على المحصول المحصود.",
      usageRate: "300–400 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  37: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/daimorvy.png",
    en: {
      title: "Daimorvy",
      subtitle: "Dimethomorph 50% WG",
      description:
        "Daimorvy contains Dimethomorph 50% WG, a systemic fungicide with strong preventive and curative activity against oomycete diseases such as downy mildew and late blight.",
      features: [
        "Systemic and translaminar movement.",
        "Strong activity against oomycete pathogens.",
        "Rainfast protection shortly after application.",
      ],
      pestsControlled: ["Downy mildew", "Late blight"],
      cropsUsedFor: ["Grapes", "Potatoes", "Tomatoes", "Onions"],
      activeIngredient: "Dimethomorph 50% WG",
      phi: "7 days.",
      usageRate: "30 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "دايمورڤي",
      subtitle: "دايميثومورف 50% WG",
      description:
        "دايمورڤي يحتوي على دايميثومورف 50% WG، مبيد فطري جهازي بفعالية وقائية وعلاجية قوية ضد أمراض الفطريات البيضية مثل البياض الزغبي واللفحة المتأخرة.",
      features: [
        "حركة جهازية وعبر أنسجة الورقة.",
        "فعالية قوية ضد الفطريات البيضية.",
        "ثبات على الأوراق بعد وقت قصير من الرش.",
      ],
      pestsControlled: ["البياض الزغبي", "اللفحة المتأخرة"],
      cropsUsedFor: ["العنب", "البطاطس", "الطماطم", "البصل"],
      activeIngredient: "دايميثومورف 50% WG",
      phi: "7 أيام.",
      usageRate: "30 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  38: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/daivogro.jpg",
    en: {
      title: "Daivogro",
      subtitle: "Difenoconazole 25% EC",
      description:
        "Daivogro contains Difenoconazole 25% EC, a broad-spectrum systemic triazole fungicide offering both protective and curative control against a wide range of fungal diseases.",
      features: [
        "Broad-spectrum disease control.",
        "Long residual protection.",
        "Systemic movement within plant tissue.",
      ],
      pestsControlled: [
        "Powdery mildew",
        "Rust",
        "Leaf spot",
        "Scab",
      ],
      cropsUsedFor: ["Fruit Trees", "Vegetables", "Grapes"],
      activeIngredient: "Difenoconazole 25% EC",
      phi: "7–14 days.",
      usageRate: "20–30 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "دايفوجرو",
      subtitle: "دايفينوكونازول 25% EC",
      description:
        "دايفوجرو يحتوي على دايفينوكونازول 25% EC، مبيد فطري جهازي واسع الطيف من مجموعة الترايازول، يعمل بشكل وقائي وعلاجي ضد مجموعة واسعة من الأمراض الفطرية.",
      features: [
        "مكافحة واسعة الطيف للأمراض الفطرية.",
        "حماية متبقية طويلة المدى.",
        "حركة جهازية داخل أنسجة النبات.",
      ],
      pestsControlled: [
        "البياض الدقيقي",
        "الصدأ",
        "تبقع الأوراق",
        "الجرب",
      ],
      cropsUsedFor: ["أشجار الفاكهة", "الخضروات", "العنب"],
      activeIngredient: "دايفينوكونازول 25% EC",
      phi: "7–14 يومًا.",
      usageRate: "20–30 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  39: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/daygro.jpg",
    en: {
      title: "Daygro",
      subtitle: "Diazinon 60% EC",
      description:
        "Daygro contains Diazinon 60% EC, an organophosphate insecticide with contact and stomach action that controls sucking, chewing, and soil-dwelling insects.",
      features: [
        "Broad-spectrum contact activity.",
        "Effective against soil-dwelling pests.",
        "Fast knockdown of target insects.",
      ],
      pestsControlled: [
        "Aphids",
        "Cutworms",
        "Soil insects",
        "Whiteflies",
      ],
      cropsUsedFor: ["Vegetables", "Field Crops", "Fruit Trees"],
      activeIngredient: "Diazinon 60% EC",
      phi: "14 days.",
      usageRate: "100–150 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "داي جرو",
      subtitle: "ديازينون 60% EC",
      description:
        "داي جرو يحتوي على ديازينون 60% EC، مبيد حشري فوسفوري عضوي ذو فعل تلامسي ومعوي يكافح الحشرات الماصة والقارضة وحشرات التربة.",
      features: [
        "فعالية تلامسية واسعة الطيف.",
        "فعّال ضد الآفات التي تعيش في التربة.",
        "إسقاط سريع للحشرات المستهدفة.",
      ],
      pestsControlled: [
        "المن",
        "دودة القطن (القارضة)",
        "حشرات التربة",
        "الذبابة البيضاء",
      ],
      cropsUsedFor: ["الخضروات", "المحاصيل الحقلية", "أشجار الفاكهة"],
      activeIngredient: "ديازينون 60% EC",
      phi: "14 يومًا.",
      usageRate: "100–150 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  40: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/dublegro.jpg",
    en: {
      title: "Dublegro",
      subtitle: "Chlorpyrifos 24% + Lambda-Cyhalothrin 2.5% EC",
      description:
        "Dublegro combines Chlorpyrifos 24% and Lambda-Cyhalothrin 2.5% EC, an organophosphate/pyrethroid mixture that delivers fast knockdown together with long-lasting residual control.",
      features: [
        "Dual mode of action.",
        "Fast knockdown and long residual effect.",
        "Broad-spectrum insect control.",
      ],
      pestsControlled: [
        "Aphids",
        "Whiteflies",
        "Caterpillars",
        "Leafhoppers",
      ],
      cropsUsedFor: ["Cotton", "Vegetables", "Fruit Trees"],
      activeIngredient: "Chlorpyrifos 24% + Lambda-Cyhalothrin 2.5% EC",
      phi: "14 days.",
      usageRate: "75–100 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "دبل جرو",
      subtitle: "كلوربيرفوس 24% + لمبادا سيهالوثرين 2.5% EC",
      description:
        "دبل جرو يجمع بين كلوربيرفوس 24% ولمبادا سيهالوثرين 2.5% EC، مزيج فوسفوري عضوي وبيرثرويدي يعطي إسقاطًا سريعًا مع تأثير متبقي طويل المدى.",
      features: [
        "فعل مزدوج مركب.",
        "إسقاط سريع وتأثير متبقي طويل.",
        "مكافحة واسعة الطيف للحشرات.",
      ],
      pestsControlled: [
        "المن",
        "الذبابة البيضاء",
        "الديدان (اليرقات)",
        "نطاطات الأوراق",
      ],
      cropsUsedFor: ["القطن", "الخضروات", "أشجار الفاكهة"],
      activeIngredient: "كلوربيرفوس 24% + لمبادا سيهالوثرين 2.5% EC",
      phi: "14 يومًا.",
      usageRate: "75–100 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  41: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide/Nematicide", ar: "مبيد حشري/نيماتودي" },
    image: "/assets/fothiagro.jpg",
    en: {
      title: "Fothiagro",
      subtitle: "Fosthiazate 40% EC",
      description:
        "Fothiagro contains Fosthiazate 40% EC, a systemic soil insecticide-nematicide that controls nematodes and soil-dwelling insects, protecting the root system throughout the season.",
      features: [
        "Systemic activity in the soil.",
        "Controls nematodes and soil insects.",
        "Long-lasting root protection.",
      ],
      pestsControlled: [
        "Root-knot nematodes",
        "Soil insects",
        "Wireworms",
      ],
      cropsUsedFor: ["Potatoes", "Vegetables", "Sugar Beet"],
      activeIngredient: "Fosthiazate 40% EC",
      phi: "60 days (soil application before planting).",
      usageRate: "2–3 liters per feddan as a soil drench/incorporation.",
    },
    ar: {
      title: "فوثياجرو",
      subtitle: "فوسثيازات 40% EC",
      description:
        "فوثياجرو يحتوي على فوسثيازات 40% EC، مبيد حشري ونيماتودي جهازي يعمل في التربة لمكافحة النيماتودا وحشرات التربة، ويحمي المجموع الجذري طوال الموسم.",
      features: [
        "فعالية جهازية داخل التربة.",
        "يكافح النيماتودا وحشرات التربة.",
        "حماية طويلة المدى للمجموع الجذري.",
      ],
      pestsControlled: [
        "نيماتودا تعقد الجذور",
        "حشرات التربة",
        "الديدان السلكية",
      ],
      cropsUsedFor: ["البطاطس", "الخضروات", "بنجر السكر"],
      activeIngredient: "فوسثيازات 40% EC",
      phi: "60 يومًا (يُطبق على التربة قبل الزراعة).",
      usageRate: "2–3 لتر لكل فدان خلطًا/تسميدًا بالتربة.",
    },
  },
  42: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/goldmil.png",
    en: {
      title: "Goldmil",
      subtitle: "Methomyl 90% SP",
      description:
        "Goldmil contains Methomyl 90% SP, a fast-acting carbamate insecticide with contact and stomach action, giving strong knockdown against a broad range of insect pests.",
      features: [
        "Fast knockdown action.",
        "Broad-spectrum insect control.",
        "Effective against resistant strains.",
      ],
      pestsControlled: [
        "Caterpillars",
        "Aphids",
        "Whiteflies",
        "Leafminers",
      ],
      cropsUsedFor: ["Cotton", "Vegetables", "Fruit Trees"],
      activeIngredient: "Methomyl 90% SP",
      phi: "7 days.",
      usageRate: "40 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "جولد ميل",
      subtitle: "ميثوميل 90% SP",
      description:
        "جولد ميل يحتوي على ميثوميل 90% SP، مبيد حشري كارباماتي سريع المفعول ذو فعل تلامسي ومعوي، يعطي إسقاطًا قويًا لمجموعة واسعة من الحشرات.",
      features: [
        "فعل إسقاط سريع.",
        "مكافحة واسعة الطيف للحشرات.",
        "فعّال ضد السلالات المقاومة.",
      ],
      pestsControlled: [
        "الديدان (اليرقات)",
        "المن",
        "الذبابة البيضاء",
        "صانعات الأنفاق",
      ],
      cropsUsedFor: ["القطن", "الخضروات", "أشجار الفاكهة"],
      activeIngredient: "ميثوميل 90% SP",
      phi: "7 أيام.",
      usageRate: "40 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  43: {
    category: "herbicide",
    categoryLabel: { en: "Herbicide", ar: "مبيد حشائش" },
    image: "/assets/greenx.jpg",
    en: {
      title: "Greenx",
      subtitle: "Glyphosate Isopropylamine 48% SL",
      description:
        "Greenx contains Glyphosate Isopropylamine 48% SL, a systemic non-selective herbicide that translocates to the roots, controlling a wide range of annual and perennial weeds.",
      features: [
        "Systemic root-level control.",
        "Non-selective, broad-spectrum activity.",
        "Effective on perennial weeds.",
      ],
      pestsControlled: [
        "Bermuda grass",
        "Nutsedge",
        "Broadleaf weeds",
        "Perennial grasses",
      ],
      cropsUsedFor: ["Orchards", "Non-crop areas", "Pre-planting fields"],
      activeIngredient: "Glyphosate Isopropylamine 48% SL",
      phi: "Non-crop / pre-planting use; not applicable to harvested produce.",
      usageRate: "300–500 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "جرينكس",
      subtitle: "جليفوسات إيزوبروبيل أمونيوم 48% SL",
      description:
        "جرينكس يحتوي على جليفوسات إيزوبروبيل أمونيوم 48% SL، مبيد حشائش جهازي غير انتقائي ينتقل إلى الجذور ويكافح مجموعة واسعة من الحشائش الحولية والمعمرة.",
      features: [
        "مكافحة جهازية على مستوى الجذر.",
        "فعالية واسعة الطيف غير انتقائية.",
        "فعّال ضد الحشائش المعمرة.",
      ],
      pestsControlled: [
        "النجيل البلدي",
        "السعد",
        "الحشائش عريضة الأوراق",
        "الحشائش النجيلية المعمرة",
      ],
      cropsUsedFor: ["البساتين", "الأراضي غير الزراعية", "الأراضي قبل الزراعة"],
      activeIngredient: "جليفوسات إيزوبروبيل أمونيوم 48% SL",
      phi: "استخدام قبل الزراعة أو في الأراضي غير الزراعية؛ غير مطبق على المحصول المحصود.",
      usageRate: "300–500 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  44: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/himexa-m.jpg",
    en: {
      title: "Himexa-M",
      subtitle: "Hymexazol 30% + Metalaxyl-M 5% SL",
      description:
        "Himexa-M combines Hymexazol 30% and Metalaxyl-M 5% SL, a dual systemic seed and soil fungicide that protects seedlings from damping-off and other soil-borne pathogens.",
      features: [
        "Dual systemic action.",
        "Protects seedlings from damping-off.",
        "Controls soil-borne pathogens.",
      ],
      pestsControlled: ["Damping-off", "Root rot", "Pythium"],
      cropsUsedFor: ["Vegetables", "Cotton", "Seedling Nurseries"],
      activeIngredient: "Hymexazol 30% + Metalaxyl-M 5% SL",
      phi: "Seed/soil treatment; not applicable at harvest.",
      usageRate: "200–300 ml per 100 liters of water as a soil drench.",
    },
    ar: {
      title: "هيمكسا-ام",
      subtitle: "هيمكسازول 30% + ميتالاكسيل-ام 5% SL",
      description:
        "هيمكسا-ام يجمع بين هيمكسازول 30% وميتالاكسيل-ام 5% SL، مبيد فطري جهازي مزدوج لمعاملة البذور والتربة يحمي البادرات من أعفان سقوط البادرات ومسببات الأمراض الأخرى في التربة.",
      features: [
        "فعل جهازي مزدوج.",
        "يحمي البادرات من سقوط البادرات.",
        "يكافح مسببات الأمراض المحمولة بالتربة.",
      ],
      pestsControlled: ["سقوط البادرات", "عفن الجذور", "البيثيوم"],
      cropsUsedFor: ["الخضروات", "القطن", "مشاتل البادرات"],
      activeIngredient: "هيمكسازول 30% + ميتالاكسيل-ام 5% SL",
      phi: "معاملة بذور/تربة؛ غير مطبق عند الحصاد.",
      usageRate: "200–300 مل لكل 100 لتر ماء رشًا على التربة.",
    },
  },
  45: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/himexagro.jpg",
    en: {
      title: "Himexagro",
      subtitle: "Hymexazol 30% SL",
      description:
        "Himexagro contains Hymexazol 30% SL, a systemic fungicide that protects young roots and seedlings from damping-off and other soil-borne fungal diseases.",
      features: [
        "Protects young roots from damping-off.",
        "Systemic activity in the soil.",
        "Improves seedling establishment.",
      ],
      pestsControlled: ["Damping-off", "Root rot"],
      cropsUsedFor: ["Vegetables", "Cotton", "Seedling Nurseries"],
      activeIngredient: "Hymexazol 30% SL",
      phi: "Seed/soil treatment; not applicable at harvest.",
      usageRate: "150–200 ml per 100 liters of water as a soil drench.",
    },
    ar: {
      title: "هيمكساجرو",
      subtitle: "هيمكسازول 30% SL",
      description:
        "هيمكساجرو يحتوي على هيمكسازول 30% SL، مبيد فطري جهازي يحمي الجذور الفتية والبادرات من سقوط البادرات وأمراض فطرية أخرى محمولة بالتربة.",
      features: [
        "يحمي الجذور الفتية من سقوط البادرات.",
        "فعالية جهازية داخل التربة.",
        "يحسّن نجاح إنبات البادرات.",
      ],
      pestsControlled: ["سقوط البادرات", "عفن الجذور"],
      cropsUsedFor: ["الخضروات", "القطن", "مشاتل البادرات"],
      activeIngredient: "هيمكسازول 30% SL",
      phi: "معاملة بذور/تربة؛ غير مطبق عند الحصاد.",
      usageRate: "150–200 مل لكل 100 لتر ماء رشًا على التربة.",
    },
  },
  46: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/humicore.png",
    en: {
      title: "Humicore",
      subtitle: "Potassium Humate 20%",
      description:
        "Humicore is a concentrated Potassium Humate 20% formulation that improves soil structure, boosts nutrient uptake efficiency, and stimulates healthy root development.",
      features: [
        "Improves soil structure and aeration.",
        "Enhances nutrient uptake efficiency.",
        "Stimulates root development.",
      ],
      pestsControlled: ["Poor Root Development", "Low Nutrient Uptake"],
      cropsUsedFor: ["Vegetables", "Fruit Trees", "Field Crops"],
      activeIngredient: "Potassium Humate 20%",
      phi: "Not applicable (plant nutrient/soil conditioner).",
      usageRate: "2–3 kg/feddan via soil (fertigation) application.",
    },
    ar: {
      title: "هيوموكور",
      subtitle: "هيومات البوتاسيوم 20%",
      description:
        "هيوموكور تركيبة مركزة من هيومات البوتاسيوم 20% تحسّن بنية التربة وتهويتها، وترفع كفاءة امتصاص العناصر الغذائية، وتحفّز نمو المجموع الجذري بصحة جيدة.",
      features: [
        "يحسّن بنية التربة وتهويتها.",
        "يرفع كفاءة امتصاص العناصر الغذائية.",
        "يحفّز نمو المجموع الجذري.",
      ],
      pestsControlled: ["ضعف نمو الجذور", "انخفاض امتصاص العناصر الغذائية"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة", "المحاصيل الحقلية"],
      activeIngredient: "هيومات البوتاسيوم 20%",
      phi: "غير مطبق (منتج تغذية نباتية/محسّن تربة).",
      usageRate: "2–3 كجم لكل فدان تسميدًا بالتربة (فرتجيشن).",
    },
  },
  47: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide", ar: "مبيد حشري" },
    image: "/assets/indogro.jpg",
    en: {
      title: "Indogro",
      subtitle: "Indoxacarb 15% SC",
      description:
        "Indogro contains Indoxacarb 15% SC, an oxadiazine insecticide with contact and stomach action that stops feeding quickly and controls a wide range of lepidopteran larvae.",
      features: [
        "Effective against resistant caterpillars.",
        "Fast cessation of feeding.",
        "Favorable safety profile for beneficial insects.",
      ],
      pestsControlled: [
        "Cotton leafworm",
        "Diamondback moth",
        "Tomato borer",
        "Caterpillars",
      ],
      cropsUsedFor: ["Cotton", "Vegetables", "Fruit Trees"],
      activeIngredient: "Indoxacarb 15% SC",
      phi: "3–7 days.",
      usageRate: "30–40 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "اندوجرو",
      subtitle: "اندوكس كارب 15% SC",
      description:
        "اندوجرو يحتوي على اندوكس كارب 15% SC، مبيد حشري من مجموعة الأوكساديازين ذو فعل تلامسي ومعوي يوقف التغذية سريعًا ويكافح مجموعة واسعة من يرقات حرشفية الأجنحة.",
      features: [
        "فعّال ضد الديدان المقاومة.",
        "إيقاف سريع للتغذية.",
        "أمان جيد على الحشرات النافعة.",
      ],
      pestsControlled: [
        "دودة ورق القطن",
        "فراشة الماس",
        "دودة ثمار الطماطم",
        "الديدان (اليرقات)",
      ],
      cropsUsedFor: ["القطن", "الخضروات", "أشجار الفاكهة"],
      activeIngredient: "اندوكس كارب 15% SC",
      phi: "3–7 أيام.",
      usageRate: "30–40 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  48: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/mita-m.jpg",
    en: {
      title: "Mita-M",
      subtitle: "Metalaxyl-M 48% EC",
      description:
        "Mita-M contains Metalaxyl-M 48% EC, a systemic fungicide targeting oomycete pathogens, offering strong preventive and curative control of downy mildew.",
      features: [
        "Systemic movement through plant tissue.",
        "Strong activity against oomycete pathogens.",
        "Preventive and curative control.",
      ],
      pestsControlled: ["Downy mildew", "Damping-off"],
      cropsUsedFor: ["Grapes", "Vegetables", "Potatoes"],
      activeIngredient: "Metalaxyl-M 48% EC",
      phi: "7 days.",
      usageRate: "20–30 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "ميتا-ام",
      subtitle: "ميتالاكسيل-ام 48% EC",
      description:
        "ميتا-ام يحتوي على ميتالاكسيل-ام 48% EC، مبيد فطري جهازي يستهدف الفطريات البيضية، ويعطي مكافحة وقائية وعلاجية قوية للبياض الزغبي.",
      features: [
        "حركة جهازية عبر أنسجة النبات.",
        "فعالية قوية ضد الفطريات البيضية.",
        "مكافحة وقائية وعلاجية.",
      ],
      pestsControlled: ["البياض الزغبي", "سقوط البادرات"],
      cropsUsedFor: ["العنب", "الخضروات", "البطاطس"],
      activeIngredient: "ميتالاكسيل-ام 48% EC",
      phi: "7 أيام.",
      usageRate: "20–30 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  49: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/nutrex.png",
    en: {
      title: "Nutrex",
      subtitle:
        "Potassium Sulfate 15% + Potassium Humate 10% + Amino Acids 10% + Potassium Oxide 7%",
      description:
        "Nutrex is a balanced multi-component fertilizer combining potassium sources, humic acid, and amino acids to boost plant vigor, stress tolerance, and fruit quality.",
      features: [
        "Multi-source potassium nutrition.",
        "Amino acids support stress recovery.",
        "Improves fruit quality and yield.",
      ],
      pestsControlled: [
        "Potassium Deficiency",
        "Poor Fruit Quality",
        "Stress Recovery",
      ],
      cropsUsedFor: ["Fruit Trees", "Vegetables", "Field Crops"],
      activeIngredient:
        "Potassium Sulfate 15% + Potassium Humate 10% + Amino Acids 10% + Potassium Oxide 7%",
      phi: "Not applicable (plant nutrient product).",
      usageRate:
        "2–3 kg/feddan via soil (fertigation) or 250–300 g per 100 liters as a foliar spray.",
    },
    ar: {
      title: "نيوتركس",
      subtitle:
        "كبريتات البوتاسيوم 15% + هيومات البوتاسيوم 10% + أحماض أمينية 10% + أكسيد البوتاسيوم 7%",
      description:
        "نيوتركس سماد متعدد المكونات متوازن يجمع بين مصادر البوتاسيوم وحمض الهيوميك والأحماض الأمينية لتعزيز حيوية النبات وتحمّله للإجهاد وتحسين جودة الثمار.",
      features: [
        "تغذية بوتاسيومية من مصادر متعددة.",
        "الأحماض الأمينية تدعم التعافي من الإجهاد.",
        "يحسّن جودة الثمار والمحصول.",
      ],
      pestsControlled: [
        "نقص البوتاسيوم",
        "ضعف جودة الثمار",
        "التعافي من الإجهاد",
      ],
      cropsUsedFor: ["أشجار الفاكهة", "الخضروات", "المحاصيل الحقلية"],
      activeIngredient:
        "كبريتات البوتاسيوم 15% + هيومات البوتاسيوم 10% + أحماض أمينية 10% + أكسيد البوتاسيوم 7%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate:
        "2–3 كجم لكل فدان تسميدًا بالتربة أو 250–300 جم لكل 100 لتر رشًا على الأوراق.",
    },
  },
  50: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide/Nematicide", ar: "مبيد حشري/نيماتودي" },
    image: "/assets/oxigro.jpg",
    en: {
      title: "Oxigro",
      subtitle: "Oxamyl 24% SL",
      description:
        "Oxigro contains Oxamyl 24% SL, a systemic carbamate insecticide-nematicide that is taken up through the roots and foliage to control sucking insects and nematodes.",
      features: [
        "Systemic root and foliar activity.",
        "Controls nematodes and sucking insects.",
        "Rapid uptake into plant tissue.",
      ],
      pestsControlled: [
        "Aphids",
        "Whiteflies",
        "Nematodes",
        "Mites",
      ],
      cropsUsedFor: ["Vegetables", "Potatoes", "Cotton"],
      activeIngredient: "Oxamyl 24% SL",
      phi: "14 days.",
      usageRate:
        "50–75 ml per 100 liters of water as a foliar spray or soil drench.",
    },
    ar: {
      title: "اوكسي جرو",
      subtitle: "اوكساميل 24% SL",
      description:
        "اوكسي جرو يحتوي على اوكساميل 24% SL، مبيد حشري ونيماتودي كارباماتي جهازي يمتصه النبات عبر الجذور والأوراق لمكافحة الحشرات الماصة والنيماتودا.",
      features: [
        "فعالية جهازية عبر الجذور والأوراق.",
        "يكافح النيماتودا والحشرات الماصة.",
        "امتصاص سريع داخل أنسجة النبات.",
      ],
      pestsControlled: [
        "المن",
        "الذبابة البيضاء",
        "النيماتودا",
        "الأكاروس (العناكب)",
      ],
      cropsUsedFor: ["الخضروات", "البطاطس", "القطن"],
      activeIngredient: "اوكساميل 24% SL",
      phi: "14 يومًا.",
      usageRate: "50–75 مل لكل 100 لتر ماء رشًا على الأوراق أو للتربة.",
    },
  },
  51: {
    category: "insecticide",
    categoryLabel: { en: "Nematicide/Insecticide", ar: "مبيد نيماتودي/حشري" },
    image: "/assets/phinapro.jpg",
    en: {
      title: "Phinapro",
      subtitle: "Fenamiphos 40% EC",
      description:
        "Phinapro contains Fenamiphos 40% EC, a systemic organophosphate nematicide-insecticide that gives soil-level control of nematodes and certain soil insects, protecting the root system.",
      features: [
        "Systemic nematode control.",
        "Protects the root system.",
        "Long-lasting soil activity.",
      ],
      pestsControlled: ["Root-knot nematodes", "Soil insects"],
      cropsUsedFor: ["Vegetables", "Potatoes", "Fruit Trees"],
      activeIngredient: "Fenamiphos 40% EC",
      phi: "60 days (soil application).",
      usageRate: "3–4 liters per feddan as a soil drench/incorporation.",
    },
    ar: {
      title: "فينابرو",
      subtitle: "فينامفوس 40% EC",
      description:
        "فينابرو يحتوي على فينامفوس 40% EC، مبيد نيماتودي وحشري فوسفوري عضوي جهازي يعمل في التربة لمكافحة النيماتودا وبعض حشرات التربة، ويحمي المجموع الجذري.",
      features: [
        "مكافحة جهازية للنيماتودا.",
        "يحمي المجموع الجذري.",
        "فعالية طويلة المدى في التربة.",
      ],
      pestsControlled: ["نيماتودا تعقد الجذور", "حشرات التربة"],
      cropsUsedFor: ["الخضروات", "البطاطس", "أشجار الفاكهة"],
      activeIngredient: "فينامفوس 40% EC",
      phi: "60 يومًا (يُطبق على التربة).",
      usageRate: "3–4 لتر لكل فدان خلطًا/تسميدًا بالتربة.",
    },
  },
  52: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/potara.png",
    en: {
      title: "Potara",
      subtitle: "Potassium Humate 10% (Suspension)",
      description:
        "Potara is a liquid suspension of Potassium Humate 10% that improves soil fertility and structure, enhances root growth, and increases nutrient availability.",
      features: [
        "Improves soil fertility and structure.",
        "Enhances root growth.",
        "Increases nutrient availability.",
      ],
      pestsControlled: ["Poor Root Development", "Low Soil Fertility"],
      cropsUsedFor: ["Vegetables", "Fruit Trees", "Field Crops"],
      activeIngredient: "Potassium Humate 10% (Suspension)",
      phi: "Not applicable (soil conditioner/plant nutrient).",
      usageRate: "3–4 liters/feddan via soil (fertigation) application.",
    },
    ar: {
      title: "بوتارا",
      subtitle: "هيومات البوتاسيوم 10% (معلق)",
      description:
        "بوتارا معلق سائل من هيومات البوتاسيوم 10% يحسّن خصوبة التربة وبنيتها، ويعزز نمو الجذور، ويزيد من إتاحة العناصر الغذائية.",
      features: [
        "يحسّن خصوبة التربة وبنيتها.",
        "يعزز نمو الجذور.",
        "يزيد من إتاحة العناصر الغذائية.",
      ],
      pestsControlled: ["ضعف نمو الجذور", "انخفاض خصوبة التربة"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة", "المحاصيل الحقلية"],
      activeIngredient: "هيومات البوتاسيوم 10% (معلق)",
      phi: "غير مطبق (محسّن تربة/منتج تغذية نباتية).",
      usageRate: "3–4 لتر لكل فدان تسميدًا بالتربة (فرتجيشن).",
    },
  },
  53: {
    category: "fungicide",
    categoryLabel: { en: "Fungicide", ar: "مبيد فطري" },
    image: "/assets/profino.jpg",
    en: {
      title: "Profino",
      subtitle: "Difenoconazole 25% + Propiconazole 25% EC",
      description:
        "Profino combines Difenoconazole 25% and Propiconazole 25% EC, a dual triazole fungicide with broad-spectrum protective and curative activity against fungal diseases.",
      features: [
        "Dual systemic triazole action.",
        "Broad-spectrum disease control.",
        "Extended residual protection.",
      ],
      pestsControlled: [
        "Powdery mildew",
        "Rust",
        "Leaf spot",
        "Scab",
      ],
      cropsUsedFor: ["Fruit Trees", "Vegetables", "Grapes"],
      activeIngredient: "Difenoconazole 25% + Propiconazole 25% EC",
      phi: "7–14 days.",
      usageRate: "20 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "بروفينو",
      subtitle: "دايفينوكونازول 25% + بروبيكونازول 25% EC",
      description:
        "بروفينو يجمع بين دايفينوكونازول 25% وبروبيكونازول 25% EC، مبيد فطري مزدوج من مجموعة الترايازول بفعالية وقائية وعلاجية واسعة الطيف ضد الأمراض الفطرية.",
      features: [
        "فعل جهازي مزدوج من مجموعة الترايازول.",
        "مكافحة واسعة الطيف للأمراض الفطرية.",
        "حماية متبقية ممتدة.",
      ],
      pestsControlled: [
        "البياض الدقيقي",
        "الصدأ",
        "تبقع الأوراق",
        "الجرب",
      ],
      cropsUsedFor: ["أشجار الفاكهة", "الخضروات", "العنب"],
      activeIngredient: "دايفينوكونازول 25% + بروبيكونازول 25% EC",
      phi: "7–14 يومًا.",
      usageRate: "20 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  54: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/rootex.png",
    en: {
      title: "Rootex",
      subtitle: "Potassium Humate 10%",
      description:
        "Rootex is a Potassium Humate 10% formulation that supports healthy root development while improving soil fertility, structure, and nutrient uptake efficiency.",
      features: [
        "Stimulates root development.",
        "Improves soil structure.",
        "Enhances nutrient uptake efficiency.",
      ],
      pestsControlled: ["Poor Root Development", "Low Soil Fertility"],
      cropsUsedFor: ["Vegetables", "Fruit Trees", "Field Crops"],
      activeIngredient: "Potassium Humate 10%",
      phi: "Not applicable (soil conditioner/plant nutrient).",
      usageRate: "2–3 kg/feddan via soil (fertigation) application.",
    },
    ar: {
      title: "روتكس",
      subtitle: "هيومات البوتاسيوم 10%",
      description:
        "روتكس تركيبة من هيومات البوتاسيوم 10% تدعم نمو الجذور بصحة جيدة مع تحسين خصوبة التربة وبنيتها وكفاءة امتصاص العناصر الغذائية.",
      features: [
        "يحفّز نمو الجذور.",
        "يحسّن بنية التربة.",
        "يرفع كفاءة امتصاص العناصر الغذائية.",
      ],
      pestsControlled: ["ضعف نمو الجذور", "انخفاض خصوبة التربة"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة", "المحاصيل الحقلية"],
      activeIngredient: "هيومات البوتاسيوم 10%",
      phi: "غير مطبق (محسّن تربة/منتج تغذية نباتية).",
      usageRate: "2–3 كجم لكل فدان تسميدًا بالتربة (فرتجيشن).",
    },
  },
  55: {
    category: "insecticide",
    categoryLabel: { en: "Insecticide/Acaricide", ar: "مبيد حشري/أكاروسي" },
    image: "/assets/seproflow.jpg",
    en: {
      title: "Seproflow",
      subtitle: "Spirotetramat 24% SC",
      description:
        "Seproflow contains Spirotetramat 24% SC, a two-way systemic insecticide moving both up and down within the plant, controlling all life stages of sucking insects and certain mites.",
      features: [
        "Two-way systemic movement.",
        "Controls all life stages of target pests.",
        "Long-lasting protection.",
      ],
      pestsControlled: [
        "Aphids",
        "Whiteflies",
        "Mealybugs",
        "Scale insects",
      ],
      cropsUsedFor: ["Citrus", "Vegetables", "Fruit Trees"],
      activeIngredient: "Spirotetramat 24% SC",
      phi: "7 days.",
      usageRate: "40–50 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "سبروفلو",
      subtitle: "سبيروتترامات 24% SC",
      description:
        "سبروفلو يحتوي على سبيروتترامات 24% SC، مبيد حشري جهازي ثنائي الاتجاه ينتقل صعودًا وهبوطًا داخل النبات، ويكافح جميع أطوار الحشرات الماصة وبعض أنواع الأكاروس.",
      features: [
        "حركة جهازية ثنائية الاتجاه.",
        "يكافح جميع أطوار الآفة المستهدفة.",
        "حماية طويلة المدى.",
      ],
      pestsControlled: [
        "المن",
        "الذبابة البيضاء",
        "البق الدقيقي",
        "الحشرات القشرية",
      ],
      cropsUsedFor: ["الموالح", "الخضروات", "أشجار الفاكهة"],
      activeIngredient: "سبيروتترامات 24% SC",
      phi: "7 أيام.",
      usageRate: "40–50 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  56: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/vulkor.png",
    en: {
      title: "Vulkor",
      subtitle: "Potassium Sulfate 24%",
      description:
        "Vulkor is a concentrated Potassium Sulfate 24% source that improves fruit quality, sugar content, and plant tolerance to stress, without adding chloride to the soil.",
      features: [
        "Chloride-free potassium source.",
        "Improves fruit quality and sugar content.",
        "Enhances stress tolerance.",
      ],
      pestsControlled: ["Potassium Deficiency", "Poor Fruit Quality"],
      cropsUsedFor: ["Fruit Trees", "Vegetables", "Field Crops"],
      activeIngredient: "Potassium Sulfate 24%",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "2–3 kg/feddan via soil (fertigation) application.",
    },
    ar: {
      title: "فولكور",
      subtitle: "كبريتات البوتاسيوم 24%",
      description:
        "فولكور مصدر مركز من كبريتات البوتاسيوم 24% يحسّن جودة الثمار ومحتواها السكري وتحمّل النبات للإجهاد، دون إضافة الكلوريد إلى التربة.",
      features: [
        "مصدر بوتاسيوم خالٍ من الكلوريد.",
        "يحسّن جودة الثمار ومحتواها السكري.",
        "يعزز تحمّل النبات للإجهاد.",
      ],
      pestsControlled: ["نقص البوتاسيوم", "ضعف جودة الثمار"],
      cropsUsedFor: ["أشجار الفاكهة", "الخضروات", "المحاصيل الحقلية"],
      activeIngredient: "كبريتات البوتاسيوم 24%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "2–3 كجم لكل فدان تسميدًا بالتربة (فرتجيشن).",
    },
  },
  57: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/bormix.png",
    en: {
      title: "Bormix",
      subtitle: "Boron 15% + Molybdenum 1%",
      description:
        "Bormix is a micronutrient fertilizer supplying boron and molybdenum, two elements essential for flowering, pollen viability, fruit set, and nitrogen metabolism.",
      features: [
        "Improves flowering and fruit set.",
        "Supports pollen viability.",
        "Aids nitrogen metabolism via molybdenum.",
      ],
      pestsControlled: [
        "Boron Deficiency",
        "Molybdenum Deficiency",
        "Poor Fruit Set",
      ],
      cropsUsedFor: ["Fruit Trees", "Vegetables", "Field Crops"],
      activeIngredient: "Boron 15% + Molybdenum 1%",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "150–250 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "بورميكس",
      subtitle: "بورون 15% + موليبدنم 1%",
      description:
        "بورميكس سماد بالعناصر الصغرى يمد النبات بالبورون والموليبدنم، وهما عنصران أساسيان للإزهار وحيوية حبوب اللقاح وعقد الثمار وأيض النيتروجين.",
      features: [
        "يحسّن الإزهار وعقد الثمار.",
        "يدعم حيوية حبوب اللقاح.",
        "يساعد في أيض النيتروجين عبر الموليبدنم.",
      ],
      pestsControlled: [
        "نقص البورون",
        "نقص الموليبدنم",
        "ضعف عقد الثمار",
      ],
      cropsUsedFor: ["أشجار الفاكهة", "الخضروات", "المحاصيل الحقلية"],
      activeIngredient: "بورون 15% + موليبدنم 1%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "150–250 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  58: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/borocal.png",
    en: {
      title: "Borocal",
      subtitle: "Calcium 18% + Boron 1%",
      description:
        "Borocal combines calcium and boron to strengthen cell walls, reduce fruit cracking and blossom-end rot, and support proper flower and fruit development.",
      features: [
        "Strengthens cell walls.",
        "Reduces fruit cracking and blossom-end rot.",
        "Supports flower and fruit development.",
      ],
      pestsControlled: [
        "Calcium Deficiency",
        "Blossom-End Rot",
        "Fruit Cracking",
      ],
      cropsUsedFor: ["Fruit Trees", "Vegetables", "Field Crops"],
      activeIngredient: "Calcium 18% + Boron 1%",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "200–300 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "بوروكال",
      subtitle: "كالسيوم 18% + بورون 1%",
      description:
        "بوروكال تركيبة من الكالسيوم والبورون تقوي جدران الخلايا وتقلل من تشقق الثمار وتعفن الطرف الزهري، وتدعم النمو السليم للأزهار والثمار.",
      features: [
        "يقوي جدران الخلايا.",
        "يقلل من تشقق الثمار وتعفن الطرف الزهري.",
        "يدعم نمو الأزهار والثمار.",
      ],
      pestsControlled: [
        "نقص الكالسيوم",
        "تعفن الطرف الزهري",
        "تشقق الثمار",
      ],
      cropsUsedFor: ["أشجار الفاكهة", "الخضروات", "المحاصيل الحقلية"],
      activeIngredient: "كالسيوم 18% + بورون 1%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "200–300 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  59: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/grocam.png",
    en: {
      title: "Grocam",
      subtitle: "Indole-3-Butyric Acid (IBA) 2%",
      description:
        "Grocam is a root-stimulating plant hormone that promotes fast, dense root formation in cuttings, transplants, and stressed plants.",
      features: [
        "Stimulates fast root initiation.",
        "Improves transplant establishment.",
        "Increases root mass and density.",
      ],
      pestsControlled: ["Poor Root Development", "Transplant Shock"],
      cropsUsedFor: ["Vegetables", "Fruit Trees", "Nurseries"],
      activeIngredient: "Indole-3-Butyric Acid (IBA) 2%",
      phi: "Not applicable (plant growth stimulant).",
      usageRate: "20–30 ml per 100 liters of water as a soil drench/dip.",
    },
    ar: {
      title: "جروكام",
      subtitle: "حمض الإندول بيوتريك (IBA) 2%",
      description:
        "جروكام هرمون نباتي محفز للتجذير يعزز تكوين جذور سريعة وكثيفة في العقل والشتلات المنقولة والنباتات المجهدة.",
      features: [
        "يحفز بدء تكوين الجذور سريعًا.",
        "يحسّن نجاح الشتلات المنقولة.",
        "يزيد من كتلة وكثافة الجذور.",
      ],
      pestsControlled: ["ضعف نمو الجذور", "إجهاد نقل الشتلات"],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة", "المشاتل"],
      activeIngredient: "حمض الإندول بيوتريك (IBA) 2%",
      phi: "غير مطبق (محفز نمو نباتي).",
      usageRate: "20–30 مل لكل 100 لتر ماء غمسًا أو ريًا للتربة.",
    },
  },
  60: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/magnical.png",
    en: {
      title: "Magnical",
      subtitle: "Calcium 16% + Magnesium 8% + Nitrogen 10%",
      description:
        "Magnical is a combined calcium-magnesium-nitrogen fertilizer that strengthens plant tissue, corrects magnesium-related chlorosis, and supports overall growth.",
      features: [
        "Strengthens cell walls and fruit firmness.",
        "Corrects magnesium-related leaf chlorosis.",
        "Supports balanced vegetative growth.",
      ],
      pestsControlled: [
        "Calcium Deficiency",
        "Magnesium Deficiency",
        "Leaf Chlorosis",
      ],
      cropsUsedFor: ["Fruit Trees", "Vegetables", "Field Crops"],
      activeIngredient: "Calcium 16% + Magnesium 8% + Nitrogen 10%",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "250–300 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "ماجنيكال",
      subtitle: "كالسيوم 16% + مغنسيوم 8% + نيتروجين 10%",
      description:
        "ماجنيكال سماد مركب من الكالسيوم والمغنسيوم والنيتروجين يقوي أنسجة النبات، ويعالج اصفرار الأوراق الناتج عن نقص المغنسيوم، ويدعم النمو الخضري المتوازن.",
      features: [
        "يقوي جدران الخلايا وصلابة الثمار.",
        "يعالج اصفرار الأوراق الناتج عن نقص المغنسيوم.",
        "يدعم النمو الخضري المتوازن.",
      ],
      pestsControlled: [
        "نقص الكالسيوم",
        "نقص المغنسيوم",
        "اصفرار الأوراق",
      ],
      cropsUsedFor: ["أشجار الفاكهة", "الخضروات", "المحاصيل الحقلية"],
      activeIngredient: "كالسيوم 16% + مغنسيوم 8% + نيتروجين 10%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "250–300 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  61: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/magnix.png",
    en: {
      title: "Magnix",
      subtitle: "Magnesium Nitrate 31%",
      description:
        "Magnix is a concentrated magnesium nitrate source that quickly corrects magnesium deficiency, restoring healthy green leaf color and supporting chlorophyll production.",
      features: [
        "Rapid correction of magnesium deficiency.",
        "Restores healthy green leaf color.",
        "Supports chlorophyll production.",
      ],
      pestsControlled: ["Magnesium Deficiency", "Leaf Chlorosis"],
      cropsUsedFor: ["Fruit Trees", "Vegetables", "Field Crops"],
      activeIngredient: "Magnesium Nitrate 31%",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "200–250 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "ماجنيكس",
      subtitle: "نترات مغنسيوم 31%",
      description:
        "ماجنيكس مصدر مركز من نترات المغنسيوم يعالج نقص المغنسيوم بسرعة، ويعيد اللون الأخضر الصحي للأوراق، ويدعم إنتاج الكلوروفيل.",
      features: [
        "علاج سريع لنقص المغنسيوم.",
        "يعيد اللون الأخضر الصحي للأوراق.",
        "يدعم إنتاج الكلوروفيل.",
      ],
      pestsControlled: ["نقص المغنسيوم", "اصفرار الأوراق"],
      cropsUsedFor: ["أشجار الفاكهة", "الخضروات", "المحاصيل الحقلية"],
      activeIngredient: "نترات مغنسيوم 31%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "200–250 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  62: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/microvex.png",
    en: {
      title: "Microvex",
      subtitle: "Chelated Micronutrient Mix",
      description:
        "Microvex is a balanced blend of chelated micronutrients (iron, zinc, manganese, copper, boron) that corrects multiple trace-element deficiencies at once and supports healthy growth.",
      features: [
        "Corrects multiple micronutrient deficiencies at once.",
        "Chelated form for better absorption.",
        "Supports overall plant vigor.",
      ],
      pestsControlled: [
        "Micronutrient Deficiency",
        "Leaf Chlorosis",
        "Poor Growth",
      ],
      cropsUsedFor: ["Vegetables", "Fruit Trees", "Field Crops"],
      activeIngredient: "Chelated Micronutrient Mix",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "150–200 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "ميكروڤيكس",
      subtitle: "خليط عناصر صغرى مخلبية",
      description:
        "ميكروڤيكس خليط متوازن من العناصر الصغرى المخلبية (حديد، زنك، منجنيز، نحاس، بورون) يعالج نقص عدة عناصر صغرى دفعة واحدة ويدعم النمو الصحي.",
      features: [
        "يعالج نقص عدة عناصر صغرى في آن واحد.",
        "صيغة مخلبية لامتصاص أفضل.",
        "يدعم حيوية النبات بشكل عام.",
      ],
      pestsControlled: [
        "نقص العناصر الصغرى",
        "اصفرار الأوراق",
        "ضعف النمو",
      ],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة", "المحاصيل الحقلية"],
      activeIngredient: "خليط عناصر صغرى مخلبية",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "150–200 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  63: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/nitro-k.png",
    en: {
      title: "Nitro-K",
      subtitle: "Potassium Nitrate 31%",
      description:
        "Nitro-K is a fully water-soluble potassium nitrate that supplies potassium and nitrogen together, boosting fruit quality, sugar content, and overall plant vigor.",
      features: [
        "Fully water-soluble.",
        "Boosts fruit quality and sugar content.",
        "Supplies potassium and nitrogen together.",
      ],
      pestsControlled: ["Potassium Deficiency", "Poor Fruit Quality"],
      cropsUsedFor: ["Fruit Trees", "Vegetables", "Field Crops"],
      activeIngredient: "Potassium Nitrate 31%",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "300–400 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "نيترو-كي",
      subtitle: "نترات بوتاسيوم 31%",
      description:
        "نيترو-كي نترات بوتاسيوم كاملة الذوبان تمد النبات بالبوتاسيوم والنيتروجين معًا، مما يعزز جودة الثمار ومحتواها السكري وحيوية النبات العامة.",
      features: [
        "كامل الذوبان في الماء.",
        "يعزز جودة الثمار ومحتواها السكري.",
        "يمد النبات بالبوتاسيوم والنيتروجين معًا.",
      ],
      pestsControlled: ["نقص البوتاسيوم", "ضعف جودة الثمار"],
      cropsUsedFor: ["أشجار الفاكهة", "الخضروات", "المحاصيل الحقلية"],
      activeIngredient: "نترات بوتاسيوم 31%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "300–400 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  64: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/potrix.png",
    en: {
      title: "Potrix",
      subtitle: "Potassium Citrate 31%",
      description:
        "Potrix is a chloride-free potassium citrate source that is rapidly absorbed, improving fruit size, quality, and plant resistance to stress.",
      features: [
        "Chloride-free, rapidly absorbed potassium.",
        "Improves fruit size and quality.",
        "Enhances plant resistance to stress.",
      ],
      pestsControlled: ["Potassium Deficiency", "Poor Fruit Quality"],
      cropsUsedFor: ["Fruit Trees", "Vegetables", "Field Crops"],
      activeIngredient: "Potassium Citrate 31%",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "250–300 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "بوتريكس",
      subtitle: "سترات بوتاسيوم 31%",
      description:
        "بوتريكس مصدر بوتاسيوم من سترات البوتاسيوم خالٍ من الكلوريد وسريع الامتصاص، يحسّن حجم الثمار وجودتها ومقاومة النبات للإجهاد.",
      features: [
        "بوتاسيوم خالٍ من الكلوريد وسريع الامتصاص.",
        "يحسّن حجم الثمار وجودتها.",
        "يعزز مقاومة النبات للإجهاد.",
      ],
      pestsControlled: ["نقص البوتاسيوم", "ضعف جودة الثمار"],
      cropsUsedFor: ["أشجار الفاكهة", "الخضروات", "المحاصيل الحقلية"],
      activeIngredient: "سترات بوتاسيوم 31%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "250–300 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  65: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/silvora.png",
    en: {
      title: "Silvora",
      subtitle: "Silicate 35% + Potassium 25%",
      description:
        "Silvora is a potassium silicate formulation that strengthens cell walls, improves plant resistance to stress and disease, and boosts potassium nutrition.",
      features: [
        "Strengthens cell walls.",
        "Improves resistance to stress and disease.",
        "Boosts potassium nutrition.",
      ],
      pestsControlled: [
        "Weak Cell Structure",
        "Potassium Deficiency",
        "Low Stress Tolerance",
      ],
      cropsUsedFor: ["Vegetables", "Fruit Trees", "Field Crops"],
      activeIngredient: "Silicate 35% + Potassium 25%",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "200–300 ml per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "سيلڤورا",
      subtitle: "سيليكات 35% + بوتاسيوم 25%",
      description:
        "سيلڤورا تركيبة من سيليكات البوتاسيوم تقوي جدران الخلايا وتحسّن مقاومة النبات للإجهاد والأمراض، وتعزز التغذية بالبوتاسيوم.",
      features: [
        "يقوي جدران الخلايا.",
        "يحسّن مقاومة الإجهاد والأمراض.",
        "يعزز التغذية بالبوتاسيوم.",
      ],
      pestsControlled: [
        "ضعف بنية الخلايا",
        "نقص البوتاسيوم",
        "انخفاض تحمل الإجهاد",
      ],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة", "المحاصيل الحقلية"],
      activeIngredient: "سيليكات 35% + بوتاسيوم 25%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "200–300 مل لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  66: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/triomax.png",
    en: {
      title: "Triomax",
      subtitle: "NPK 20-20-20 (Water Soluble)",
      description:
        "Triomax is a balanced, fully water-soluble NPK fertilizer supplying equal ratios of nitrogen, phosphorus, and potassium for steady, all-round plant growth.",
      features: [
        "Balanced N-P-K ratio.",
        "Fully water-soluble.",
        "Supports steady, all-round growth.",
      ],
      pestsControlled: [
        "General Nutrient Deficiency",
        "Poor Vegetative Growth",
      ],
      cropsUsedFor: ["Vegetables", "Fruit Trees", "Field Crops"],
      activeIngredient: "NPK 20-20-20",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "300–400 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "تريوماكس",
      subtitle: "NPK 20-20-20 (كامل الذوبان)",
      description:
        "تريوماكس سماد NPK متوازن كامل الذوبان في الماء يمد النبات بنسب متساوية من النيتروجين والفوسفور والبوتاسيوم لدعم نمو ثابت ومتكامل.",
      features: [
        "نسبة متوازنة من NPK.",
        "كامل الذوبان في الماء.",
        "يدعم نموًا ثابتًا ومتكاملاً.",
      ],
      pestsControlled: [
        "نقص العناصر الغذائية العام",
        "ضعف النمو الخضري",
      ],
      cropsUsedFor: ["الخضروات", "أشجار الفاكهة", "المحاصيل الحقلية"],
      activeIngredient: "NPK 20-20-20",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "300–400 جم لكل 100 لتر ماء رشًا على الأوراق.",
    },
  },
  67: {
    category: "Nutrients & micronutrients",
    categoryLabel: {
      en: "Nutrients & micronutrients",
      ar: "المغذيات والعناصر الصغرى",
    },
    image: "/assets/fostra.png",
    en: {
      title: "Fostra",
      subtitle: "Potassium 36% + Phosphorus 24%",
      description:
        "Fostra is a high-phosphorus, high-potassium fertilizer that promotes strong root development, flowering, and fruit setting.",
      features: [
        "Promotes strong root development.",
        "Boosts flowering and fruit setting.",
        "High phosphorus and potassium content.",
      ],
      pestsControlled: [
        "Phosphorus Deficiency",
        "Potassium Deficiency",
        "Poor Flowering",
      ],
      cropsUsedFor: ["Fruit Trees", "Vegetables", "Field Crops"],
      activeIngredient: "Potassium 36% + Phosphorus 24%",
      phi: "Not applicable (plant nutrient product).",
      usageRate: "250–300 g per 100 liters of water as a foliar spray.",
    },
    ar: {
      title: "فوسترا",
      subtitle: "بوتاسيوم 36% + فوسفور 24%",
      description:
        "فوسترا سماد غني بالفوسفور والبوتاسيوم يعزز نمو الجذور القوي والإزهار وعقد الثمار.",
      features: [
        "يعزز نمو الجذور القوي.",
        "يحفّز الإزهار وعقد الثمار.",
        "محتوى مرتفع من الفوسفور والبوتاسيوم.",
      ],
      pestsControlled: [
        "نقص الفوسفور",
        "نقص البوتاسيوم",
        "ضعف الإزهار",
      ],
      cropsUsedFor: ["أشجار الفاكهة", "الخضروات", "المحاصيل الحقلية"],
      activeIngredient: "بوتاسيوم 36% + فوسفور 24%",
      phi: "غير مطبق (منتج تغذية نباتية).",
      usageRate: "250–300 جم لكل 100 لتر ماء رشًا على الأوراق.",
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
