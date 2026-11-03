// const BASE_URL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdown = document.querySelector("#dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");



// for(let select of dropdowns){
//     for(code in countryList){
//         let option = document.createElement("option");
//         newOption.innerText = currrCode;
//         option.value = currCode;
//         select.append(newOption);
//         if (select.name === "from" && currcode === "USD"){
//             newOption.selected = "selected";
//         }
//         else if (select.name === "to" && currCode === "USD"){
//             newOption.selected = "selected";
//         }
//         select.append(newOption);
//     }

//     select.addEventListnener("change", (evt) => {
//         updateFlag(evt.target);
//     });
// }
// const updateExchangeRate = async () => {

//     let amount = document.querySelector(".amount input");
//     let amtval = amount.value;
//     if(amtval === "" || amtval < 1){
//         amtval = 1;
//         amount.value = "1";
//     }
//     //console.log(fromCurr.value, toCurr.value);
//     const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//     let response = await fetch(URL);
//     let data = await response.json();
//     let rate = data[toCurr.value.toLowerCase()];
    
//     let finalAmount = amtval * rate;
//     msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
// };

// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// };

// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     updateExchangeRate();
// });
// window.addEventListener("load", () => {
//     updateExchangeRate();
// });
const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const languageSelect = document.querySelector("#language");
const dateTime = document.querySelector("#dateTime");
const showCurrencyButton = document.querySelector("#showCurrency");
const currencyPreview = document.querySelector("#currencyPreview");
const currencyPreviewImage = document.querySelector("#currencyPreviewImage");
const currencyPreviewCode = document.querySelector("#currencyPreviewCode");

const languageOptions = [
  ["ar", "Arabic - العربية", "ar-SA"],
  ["bn", "Bengali - বাংলা", "bn-BD"],
  ["bg", "Bulgarian - Български", "bg-BG"],
  ["ca", "Catalan - Català", "ca-ES"],
  ["zh-CN", "Chinese (Simplified) - 简体中文", "zh-CN"],
  ["zh-TW", "Chinese (Traditional) - 繁體中文", "zh-TW"],
  ["hr", "Croatian - Hrvatski", "hr-HR"],
  ["cs", "Czech - Čeština", "cs-CZ"],
  ["da", "Danish - Dansk", "da-DK"],
  ["nl", "Dutch - Nederlands", "nl-NL"],
  ["en", "English", "en-US"],
  ["et", "Estonian - Eesti", "et-EE"],
  ["fil", "Filipino", "fil-PH"],
  ["fi", "Finnish - Suomi", "fi-FI"],
  ["fr", "French - Français", "fr-FR"],
  ["de", "German - Deutsch", "de-DE"],
  ["el", "Greek - Ελληνικά", "el-GR"],
  ["gu", "Gujarati - ગુજરાતી", "gu-IN"],
  ["he", "Hebrew - עברית", "he-IL"],
  ["hi", "Hindi - हिन्दी", "hi-IN"],
  ["hu", "Hungarian - Magyar", "hu-HU"],
  ["id", "Indonesian - Bahasa Indonesia", "id-ID"],
  ["it", "Italian - Italiano", "it-IT"],
  ["ja", "Japanese - 日本語", "ja-JP"],
  ["kn", "Kannada - ಕನ್ನಡ", "kn-IN"],
  ["ko", "Korean - 한국어", "ko-KR"],
  ["lv", "Latvian - Latviešu", "lv-LV"],
  ["lt", "Lithuanian - Lietuvių", "lt-LT"],
  ["ms", "Malay - Bahasa Melayu", "ms-MY"],
  ["ml", "Malayalam - മലയാളം", "ml-IN"],
  ["mr", "Marathi - मराठी", "mr-IN"],
  ["ne", "Nepali - नेपाली", "ne-NP"],
  ["no", "Norwegian - Norsk", "no-NO"],
  ["fa", "Persian - فارسی", "fa-IR"],
  ["pl", "Polish - Polski", "pl-PL"],
  ["pt-BR", "Portuguese (Brazil) - Português", "pt-BR"],
  ["pt-PT", "Portuguese (Portugal) - Português", "pt-PT"],
  ["pa", "Punjabi - ਪੰਜਾਬੀ", "pa-IN"],
  ["ro", "Romanian - Română", "ro-RO"],
  ["ru", "Russian - Русский", "ru-RU"],
  ["sr", "Serbian - Српски", "sr-RS"],
  ["sk", "Slovak - Slovenčina", "sk-SK"],
  ["sl", "Slovenian - Slovenščina", "sl-SI"],
  ["es", "Spanish - Español", "es-ES"],
  ["sw", "Swahili - Kiswahili", "sw-KE"],
  ["sv", "Swedish - Svenska", "sv-SE"],
  ["ta", "Tamil - தமிழ்", "ta-IN"],
  ["te", "Telugu - తెలుగు", "te-IN"],
  ["th", "Thai - ไทย", "th-TH"],
  ["tr", "Turkish - Türkçe", "tr-TR"],
  ["uk", "Ukrainian - Українська", "uk-UA"],
  ["ur", "Urdu - اردو", "ur-PK"],
  ["vi", "Vietnamese - Tiếng Việt", "vi-VN"],
];

for (const [code, label] of languageOptions) {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = label;
  if (code === "en") {
    option.selected = true;
  }
  languageSelect.append(option);
}

const translations = {
  en: {
    amountLabel: "Enter Amount",
    from: "From",
    to: "To",
    getRate: "Get Exchange Rate",
    showCurrency: "See country currency",
    previewTitle: "Country currency",
    initialMessage: "Enter an amount and click Get Exchange Rate.",
  },
  hi: {
    amountLabel: "राशि दर्ज करें",
    from: "से",
    to: "में",
    getRate: "विनिमय दर देखें",
    showCurrency: "देश की मुद्रा देखें",
    previewTitle: "देश की मुद्रा",
    initialMessage: "राशि दर्ज करें और विनिमय दर देखें पर क्लिक करें।",
  },
  gu: {
    amountLabel: "રકમ દાખલ કરો",
    from: "થી",
    to: "માટે",
    getRate: "Exchange Rate મેળવો",
    showCurrency: "દેશની मुद्रा જુઓ",
    previewTitle: "દેશની मुद्रा",
    initialMessage: "રકમ દાખલ કરો અને Exchange Rate મેળવો પર ક્લિક કરો.",
  },
};

const interfaceTranslations = [
  document.querySelector(".exchange h1"),
  document.querySelector(".container > h2"),
  document.querySelector(".amount p"),
  document.querySelector(".from > p"),
  document.querySelector(".to > p"),
  btn,
  showCurrencyButton,
  document.querySelector("#currencyPreviewTitle"),
];

const fallbackInterfaceText = {
  title: "Exchange currency rates widget",
  heading: "Currency Converter",
  amountLabel: "Enter Amount",
  from: "From",
  to: "To",
  getRate: "Get Exchange Rate",
  showCurrency: "See country currency",
  previewTitle: "Country currency",
  initialMessage: "Enter an amount and click Get Exchange Rate.",
};

const translationCache = new Map();

async function translateText(text, language) {
  const apiLanguage = language;
  const cacheKey = `${apiLanguage}:${text}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }
  if (language === "en") {
    return text;
  }

  try {
    const params = new URLSearchParams({
      q: text,
      langpair: `en|${apiLanguage}`,
    });
    const response = await fetch(`https://api.mymemory.translated.net/get?${params}`);
    const data = await response.json();
    const translated = data.responseData?.translatedText;
    if (translated && !translated.includes("PLEASE SELECT TWO DISTINCT")) {
      translationCache.set(cacheKey, translated);
      return translated;
    }
  } catch (error) {
    console.error("Interface translation failed:", error);
  }
  return text;
}

async function translateInterface(language) {
  const [title, heading, amountLabel, from, to, getRate, showCurrency, previewTitle] =
    interfaceTranslations;

  const textItems = [
    title,
    heading,
    amountLabel,
    from,
    to,
    getRate,
    showCurrency,
    previewTitle,
  ];
  const defaultTexts = Object.values(fallbackInterfaceText).slice(0, 8);

  const translatedTexts = await Promise.all(
    defaultTexts.map((text) => translateText(text, language))
  );

  textItems.forEach((element, index) => {
    element.textContent = translatedTexts[index];
  });

  msg.textContent = await translateText(fallbackInterfaceText.initialMessage, language);
  updateDateTime();
}

const updateDateTime = () => {
  const locale = languageOptions.find(([code]) => code === languageSelect.value)?.[2] || "en-US";
  dateTime.textContent = new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());
};

const updateLanguage = () => {
  const text = translations[languageSelect.value] || translations.en;
  document.querySelector(".amount p").textContent = text.amountLabel;
  document.querySelector(".from > p").textContent = text.from;
  document.querySelector(".to > p").textContent = text.to;
  btn.textContent = text.getRate;
  showCurrencyButton.textContent = text.showCurrency;
  document.querySelector("#currencyPreviewTitle").textContent = text.previewTitle;
  document.documentElement.lang = languageSelect.value;
  msg.textContent = text.initialMessage;
  translateInterface(languageSelect.value);
};

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || Number(amtVal) < 0) {
    amtVal = 1;
    amount.value = "1";
  }

  btn.disabled = true;
  msg.innerText = "Loading current exchange rate...";

  try {
    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();
    const response = await fetch(`${BASE_URL}/${from}.json`);

    if (!response.ok) {
      throw new Error(`Exchange-rate service returned ${response.status}`);
    }

    const data = await response.json();
    const rate = data[from]?.[to];

    if (!Number.isFinite(rate)) {
      throw new Error(`No exchange rate found for ${fromCurr.value}/${toCurr.value}`);
    }

    const amountNumber = Number(amtVal);
    const finalAmount = amountNumber * rate;
    msg.innerText = `${formatNumber(amountNumber)} ${fromCurr.value} = ${formatNumber(finalAmount)} ${toCurr.value}`;
  } catch (error) {
    console.error(error);
    msg.innerText = "Unable to load the current exchange rate. Please try again.";
  } finally {
    btn.disabled = false;
  }
};

const formatNumber = (value) => {
  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits: value < 1 ? 8 : 4,
  }).format(value);
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

showCurrencyButton.addEventListener("click", () => {
  const currencyCode = toCurr.value;
  const countryCode = countryList[currencyCode];
  const currencyNames = {
    INR: "Indian rupee",
    USD: "United States dollar",
    EUR: "Euro",
    GBP: "Pound sterling",
    JPY: "Japanese yen",
    AED: "United Arab Emirates dirham",
    AUD: "Australian dollar",
    BDT: "Bangladeshi taka",
    BHD: "Bahraini dinar",
    BRL: "Brazilian real",
    CAD: "Canadian dollar",
    CHF: "Swiss franc",
    CNY: "Renminbi",
    CZK: "Czech koruna",
    DKK: "Danish krone",
    EGP: "Egyptian pound",
    HKD: "Hong Kong dollar",
    IDR: "Indonesian rupiah",
    ILS: "Israeli new shekel",
    KRW: "South Korean won",
    KWD: "Kuwaiti dinar",
    LKR: "Sri Lankan rupee",
    MYR: "Malaysian ringgit",
    MXN: "Mexican peso",
    NPR: "Nepalese rupee",
    NZD: "New Zealand dollar",
    PKR: "Pakistani rupee",
    PLN: "Polish złoty",
    QAR: "Qatari riyal",
    RUB: "Russian ruble",
    SAR: "Saudi riyal",
    SGD: "Singapore dollar",
    THB: "Thai baht",
    TRY: "Turkish lira",
    TWD: "New Taiwan dollar",
    UAH: "Ukrainian hryvnia",
    VND: "Vietnamese dong",
    ZAR: "South African rand",
  };

  currencyPreviewImage.alt = `${currencyCode} currency`;
  currencyPreviewCode.textContent = `${currencyCode} - ${currencyCode}`;
  currencyPreview.hidden = false;
  currencyPreviewImage.classList.remove("banknote-error");
  loadBanknoteImage(currencyCode, countryCode, currencyNames[currencyCode] || `${currencyCode} currency`);
});

async function loadBanknoteImage(currencyCode, countryCode, searchText) {
  try {
    const params = new URLSearchParams({
      action: "query",
      titles: searchText,
      prop: "pageimages",
      piprop: "thumbnail",
      pithumbsize: "320",
      format: "json",
      origin: "*",
    });
    const response = await fetch(`https://en.wikipedia.org/w/api.php?${params}`);
    if (!response.ok) {
      throw new Error("Banknote image request failed");
    }

    const data = await response.json();
    const pages = Object.values(data.query?.pages || {});
    const image = pages.find((page) => page.thumbnail?.source)?.thumbnail.source;
    if (image) {
      currencyPreviewImage.src = image;
      currencyPreviewImage.alt = `${currencyCode} banknote`;
      return;
    }

    const searchParams = new URLSearchParams({
      action: "query",
      generator: "search",
      gsrsearch: `${searchText} currency banknote`,
      gsrlimit: "5",
      prop: "pageimages",
      piprop: "thumbnail",
      pithumbsize: "320",
      format: "json",
      origin: "*",
    });
    const searchResponse = await fetch(`https://en.wikipedia.org/w/api.php?${searchParams}`);
    const searchData = await searchResponse.json();
    const searchPages = Object.values(searchData.query?.pages || {});
    const searchImage = searchPages.find((page) => page.thumbnail?.source)?.thumbnail.source;

    if (!searchImage) {
      throw new Error(`No banknote image found for ${currencyCode}`);
    }

    currencyPreviewImage.src = searchImage;
    currencyPreviewImage.alt = `${currencyCode} banknote`;
  } catch (error) {
    console.error(error);
    currencyPreviewImage.classList.add("banknote-error");
    currencyPreviewImage.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    currencyPreviewImage.alt = `${currencyCode} country flag`;
  }
}

languageSelect.addEventListener("change", updateLanguage);

updateLanguage();
updateDateTime();
setInterval(updateDateTime, 1000);

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});
