export const loveWordsList = [
  "بحبك", "I Love You", "جرجورتي", "Te Amo", "Je t'aime", "بحبك أوي", "Ti Amo",
  "كتكوتي", "Ich liebe dich", "يمامي", "Seni Seviyorum", "사랑해", "بنوتي",
  "愛してる", "أحبك", "Eu te amo", "يا هاجر", "Σ' αγαπώ", "جورتي", "Te quiero",
  "روحي", "Ik hou van jou", "بعشقك", "Mahal kita", "عمري", "Wo ai ni", "قلبي",
  "Jag älskar dig", "حياتي", "Mi Vida", "نور عيني", "Amor", "سندي",
];

export const birthdayWordsList = [
  "كل سنة وإنتي طيبة", "Happy Birthday", "جرجورتي", "Joyeux Anniversaire",
  "عيد ميلاد سعيد", "Feliz Cumpleaños", "يا كتكوتي", "Buon Compleanno",
  "عقبال مليون سنة", "생일 축하해요", "يا هاجر", "お誕生日おめでとう",
  "19 سنة حلوة", "Feliz Aniversário", "بحبك أوي", "Alles Gute",
  "يا محور الكون", "İYİ Kİ DOĞDUN", "يا بنوتي", "Χρόνια Πολλά",
];

export interface ChatMessage {
  sender: "me" | "her";
  text: string;
  time: string;
}

export interface ChatSituation {
  title: string;
  date: string;
  messages: ChatMessage[];
}

export const realFightSituations: ChatSituation[] = [
  {
    title: "خناقة ١: التأخير بالليل 🕙",
    date: "25 سبتمبر",
    messages: [
      { sender: "me", text: "الساعه ١٠", time: "9:46 PM" },
      { sender: "me", text: "معلش اسف والله", time: "9:50 PM" },
      { sender: "her", text: "هتنااام", time: "10:01 PM" },
    ],
  },
  {
    title: "خناقة ٢: لما بغير عليكي 😠",
    date: "26 سبتمبر",
    messages: [
      { sender: "me", text: "انتي بتهدديني يعني؟", time: "1:26 PM" },
      { sender: "me", text: "اما بغير علفكرا", time: "1:26 PM" },
      { sender: "me", text: "انتي هناا؟", time: "1:28 PM" },
    ],
  },
  {
    title: "خناقة ٣: متقولش هغور دي 😤",
    date: "26 سبتمبر",
    messages: [
      { sender: "her", text: "ومتقولش هغور دي", time: "1:34 PM" },
      { sender: "me", text: "انا اتقمصت و زعلت", time: "1:34 PM" },
      { sender: "her", text: "خلاص خلاص", time: "1:34 PM" },
    ],
  },
  {
    title: "خناقة ٤: جوري انتي زعلتي؟ 🥺",
    date: "26 سبتمبر",
    messages: [
      { sender: "me", text: "جوريي", time: "5:59 PM" },
      { sender: "me", text: "انتي زعلتييي", time: "5:59 PM" },
    ],
  },
  {
    title: "خناقة ٥: متكلمنيش! 🙈",
    date: "26 سبتمبر",
    messages: [
      { sender: "me", text: "هاجر", time: "6:39 PM" },
      { sender: "me", text: "زعلانه مني لييي", time: "6:39 PM" },
      { sender: "her", text: "متكلمنيش!", time: "6:39 PM" },
    ],
  },
  {
    title: "خناقة ٦: انتا لي قولت كد 💬",
    date: "26 سبتمبر",
    messages: [
      { sender: "her", text: "انتا لي قولت كد", time: "6:48 PM" },
      { sender: "her", text: "مينفعش", time: "6:48 PM" },
      { sender: "me", text: "علي ايهيي", time: "6:48 PM" },
    ],
  },
  {
    title: "خناقة ٧: مفيش حاجه ييوسف 🤍",
    date: "26 سبتمبر",
    messages: [
      { sender: "me", text: "يهاجر عشان خاطري سامحيني", time: "6:54 PM" },
      { sender: "me", text: "بجد انا اسفف", time: "6:55 PM" },
      { sender: "her", text: "مفيش حاجه ييوسف", time: "6:55 PM" },
    ],
  },
  {
    title: "خناقة ٨: خناقة صورة البروفايل ورقبتك 🔥",
    date: "26 سبتمبر",
    messages: [
      { sender: "her", text: "ي اوفس", time: "7:02 PM" },
      {
        sender: "me",
        text: "فين للاثبات في كده مش فاهم؟ و بعدين انتي اايه الي خلاكي تغيري البرفايل و البروفايل بتاعك باين في رقبتك و لنا بغيرر",
        time: "7:03 PM",
      },
      { sender: "her", text: "عادي غيرتو", time: "7:03 PM" },
    ],
  },
  {
    title: "خناقة ٩: يعني ايه عادي 🤨",
    date: "26 سبتمبر",
    messages: [
      { sender: "her", text: "عارفه", time: "7:12 PM" },
      { sender: "me", text: "امال بتقولي كده ليه طالما عارفه و زعلتي مني ليه ؟", time: "7:12 PM" },
      { sender: "me", text: "يعني ايه عادي", time: "7:12 PM" },
    ],
  },
  {
    title: "خناقة ١٠: مش هقول تاني 🙃",
    date: "26 سبتمبر",
    messages: [
      { sender: "me", text: "زي انقلاب الجيوش و كده علي الدول", time: "7:21 PM" },
      { sender: "me", text: "انا اسففف و مش هقول تانييي", time: "7:21 PM" },
      { sender: "me", text: "لا معملتيش خالثث🙃", time: "7:22 PM" },
    ],
  },
  {
    title: "خناقة ١١: لسه زعلانة والمايك بايظ 🎙️",
    date: "26 سبتمبر",
    messages: [
      { sender: "me", text: "انتي الي ايهه", time: "7:32 PM" },
      { sender: "me", text: "لسه زعلانه", time: "7:32 PM" },
      { sender: "me", text: "بتقزلي ايه المايك بايظ بتاعك تقريبا", time: "7:33 PM" },
    ],
  },
  {
    title: "خناقة ١٢: تتقمصي من مستر في المدرسة؟ 😂",
    date: "27 سبتمبر",
    messages: [
      { sender: "her", text: "حرفيا", time: "2:30 PM" },
      {
        sender: "me",
        text: "انا كنت بروح مدرسه اخويا لما انا دخلت واعدادي كنت بروح اودي اخويا و اشتري من العيال الي في الفصل البسكوت 😂",
        time: "2:33 PM",
      },
      { sender: "me", text: "يلاهوي ١٦ و تتقمصي من مستر في المدرسه ؟", time: "2:34 PM" },
    ],
  },
  {
    title: "خناقة ١٣: هتصالحيني 🥺",
    date: "27 سبتمبر",
    messages: [
      { sender: "me", text: "منتي السبب", time: "10:22 PM" },
      { sender: "me", text: "لا مزهقت انا زعلان", time: "10:23 PM" },
      { sender: "me", text: "هتصالخيني", time: "10:23 PM" },
    ],
  },
  {
    title: "خناقة ١٤: انا بجد عايزك جمبي ❤️",
    date: "27 سبتمبر",
    messages: [
      { sender: "me", text: "انا بجد عايزك جكبي", time: "10:48 PM" },
      { sender: "me", text: "و اوعي تكوني لسه زعلاني مني من امبارح", time: "10:48 PM" },
      { sender: "me", text: "انتي قريتي رسايليييي", time: "10:49 PM" },
    ],
  },
  {
    title: "خناقة ١٥: حقك عليا أنا آسفة 🫡❤️",
    date: "27 سبتمبر",
    messages: [
      { sender: "her", text: "حقك عليا", time: "11:03 PM" },
      { sender: "her", text: "انا اسفه", time: "11:03 PM" },
      { sender: "me", text: "انا اكتر بكتييير و معندكيش اثابت بقا ها🫡", time: "11:03 PM" },
    ],
  },
];

export const realSweetMemories: ChatSituation[] = [
  {
    title: "ذكرى ١: هنتجوز بدري إن شاء الله 💍",
    date: "25 سبتمبر",
    messages: [
      {
        sender: "me",
        text: "ايوا فعلا فرق السن هوا رقم و بعدين انيدتي بتتكلمي و انتي بتكلي و انا مش فاهم حاجه و انا هقوم اشوفلي حاجه اكلها كده عشان عظتيني",
        time: "6:28 PM",
      },
      {
        sender: "me",
        text: "اول ما اتخرج من الكلية ممكن اجي اتقدملك و لما اخرج من الجيش نتجوز و عادي ممكن اتقدملك و انا لسه في الجامعه عادي",
        time: "6:29 PM",
      },
      {
        sender: "me",
        text: "علفكرا انا بقلك اتقدم بدري عشان انا اساسا لو كنت هتجوز واحده قدي كنت هتجوز علي ال ٣٠ مثلا",
        time: "6:31 PM",
      },
    ],
  },
  {
    title: "ذكرى ٢: جرجورتي وجوري ❤️",
    date: "26 سبتمبر",
    messages: [
      { sender: "me", text: "استني اشوفها", time: "4:25 PM" },
      { sender: "me", text: "جرجورتي", time: "4:49 PM" },
      { sender: "me", text: "جوريي", time: "5:01 PM" },
    ],
  },
  {
    title: "ذكرى ٣: اي الشياكه دي بغيييرررر 🙂🩴",
    date: "27 سبتمبر",
    messages: [
      { sender: "me", text: "مش عارف البس شيبش ولل كوتش", time: "2:52 PM" },
      { sender: "her", text: "وااااووو اي الشياكه دي بق", time: "2:53 PM" },
      { sender: "her", text: "بغيييرررر🙂🩴", time: "2:53 PM" },
    ],
  },
  {
    title: "ذكرى ٤: نداء الفجر لجرجورتي 🌙",
    date: "28 سبتمبر",
    messages: [
      { sender: "me", text: "هااااااااااااااااااااا جر", time: "1:36 AM" },
      { sender: "me", text: "هجورتي", time: "1:36 AM" },
      { sender: "me", text: "جرجورتي", time: "1:36 AM" },
    ],
  },
  {
    title: "ذكرى ٥: حاضر يكوتي وهات حضن 🫂♥️",
    date: "28 سبتمبر",
    messages: [
      { sender: "me", text: "حاضر يكوتي ♥️", time: "10:53 PM" },
      { sender: "me", text: "ولا انا بحبكبككك", time: "10:53 PM" },
      { sender: "her", text: "هات حضن", time: "10:53 PM" },
    ],
  },
  {
    title: "ذكرى ٦: مش هخليكي تحطي إيدك في حاجة 👑",
    date: "29 سبتمبر",
    messages: [
      { sender: "her", text: "شوفت", time: "10:54 PM" },
      {
        sender: "me",
        text: "تراك ايه ده تحفهه ها و كفاية كنيس بقا زهقت منه انا مش هخليكي تحطي ايدك في حاجه لمل نتجوز هل",
        time: "10:54 PM",
      },
    ],
  },
  {
    title: "ذكرى ٧: بحبك انتا 🎮❤️",
    date: "30 سبتمبر",
    messages: [
      { sender: "her", text: "انتو بتلعبو اييي", time: "7:19 PM" },
      { sender: "her", text: "بحبك انتا", time: "7:19 PM" },
      { sender: "me", text: "Peees", time: "7:19 PM" },
    ],
  },
  {
    title: "ذكرى ٨: سلامتك يكتكوتي 🐣",
    date: "1 أكتوبر",
    messages: [
      { sender: "me", text: "خدي انتي بالك من نفسك", time: "1:16 PM" },
      { sender: "her", text: "سلامتك يكتكوتي", time: "1:16 PM" },
      { sender: "her", text: "عيونيي", time: "1:16 PM" },
    ],
  },
  {
    title: "ذكرى ٩: متتأسفش يكتكوتي 😘",
    date: "1 أكتوبر",
    messages: [
      { sender: "me", text: "اسف", time: "8:49 PM" },
      { sender: "her", text: "متتأسفش يكتكوتي", time: "8:49 PM" },
      { sender: "her", text: "هات بوسه", time: "8:49 PM" },
    ],
  },
  {
    title: "ذكرى ١٠: ويارب تفضل معايا 🤲❤️",
    date: "2 أكتوبر",
    messages: [
      { sender: "me", text: "عارف و ده بجد باسطنيي جدااا", time: "3:23 AM" },
      { sender: "her", text: "ونااا كمان بحبكككك كتيييير جدا جدااااا", time: "3:24 AM" },
      { sender: "her", text: "ويارب تفضل معايا", time: "3:24 AM" },
    ],
  },
  {
    title: "ذكرى ١١: بحبك اويي وهعورك 😂❤️",
    date: "2 أكتوبر",
    messages: [
      { sender: "me", text: "بال ريك", time: "2:45 PM" },
      { sender: "me", text: "بحبك اويي", time: "2:45 PM" },
      { sender: "her", text: "هعورك", time: "2:45 PM" },
    ],
  },
  {
    title: "ذكرى ١٢: بتقفي قدام المراية كتير 🪞",
    date: "3 أكتوبر",
    messages: [
      { sender: "me", text: "ده مش شيخ الي يقول كده", time: "6:00 PM" },
      { sender: "her", text: "م عارفه قالي انتي بتقفي قدام المرايه كتير", time: "6:00 PM" },
      { sender: "me", text: "ماشب", time: "6:00 PM" },
    ],
  },
  {
    title: "ذكرى ١٣: كلها عشروميت سنة يكتكوتي 😂",
    date: "4 أكتوبر",
    messages: [
      { sender: "her", text: "هاانت", time: "11:53 AM" },
      { sender: "her", text: "كلها عشروميت سنه يكتكوتي", time: "11:53 AM" },
      { sender: "me", text: "ايه البهدلة دي كلها لا مسلسل", time: "11:56 AM" },
    ],
  },
  {
    title: "ذكرى ١٤: مشوار الصبح والعربية 🚗",
    date: "5 أكتوبر",
    messages: [
      { sender: "her", text: "فين بقا", time: "7:07 AM" },
      { sender: "me", text: "بس بركب عربية", time: "7:07 AM" },
      { sender: "her", text: "انا كنت باخد الفون", time: "7:07 AM" },
    ],
  },
  {
    title: "ذكرى ١٥: بالهنا والشفا يكتكوتي 🥰",
    date: "5 أكتوبر",
    messages: [
      { sender: "her", text: "ونتا فضلت تبعت", time: "9:58 PM" },
      { sender: "her", text: "بلهنااا والشفا يكتكوتي", time: "9:58 PM" },
      { sender: "her", text: "بجددد", time: "9:58 PM" },
    ],
  },
  {
    title: "ذكرى ١٦: شطوري وبحبك اويييي ❤️",
    date: "6 أكتوبر",
    messages: [
      { sender: "her", text: "شطورييييي", time: "10:32 PM" },
      { sender: "her", text: "وبحبك اويييي", time: "10:32 PM" },
      { sender: "her", text: "هااا", time: "10:32 PM" },
    ],
  },
  {
    title: "ذكرى ١٧: هتسيبيني أسهر بره لما نتجوز؟ 😂",
    date: "7 أكتوبر",
    messages: [
      { sender: "me", text: "طيب عندي فكره", time: "10:00 PM" },
      { sender: "me", text: "انتي لما نتجوز هتسبيني اسهر بره؟", time: "10:00 PM" },
      { sender: "her", text: "اومال", time: "10:00 PM" },
    ],
  },
  {
    title: "ذكرى ١٨: الساعة 12:12 بحبككك 🕛❤️",
    date: "9 أكتوبر",
    messages: [
      { sender: "her", text: "ونتا كمان هتوحشنييي اوييي", time: "11:52 PM" },
      { sender: "her", text: "بحبككك", time: "12:12 AM" },
      { sender: "her", text: "الساعه 12و 12", time: "12:12 AM" },
    ],
  },
  {
    title: "ذكرى ١٩: نتجوز ومش هنزل من البيت 🏡",
    date: "9 أكتوبر",
    messages: [
      { sender: "me", text: "يلاهوي ده صوت مريم 🤨", time: "10:32 PM" },
      { sender: "me", text: "عادي كلها عشروميت سنه و نتجوز و مش هنزل من البيت", time: "10:32 PM" },
    ],
  },
  {
    title: "ذكرى ٢٠: شوف مين الهيعملك أكل لم نتجوز 🍳😂",
    date: "11 أكتوبر",
    messages: [
      { sender: "her", text: "وربنا ماشي", time: "7:01 PM" },
      { sender: "her", text: "شوف مين الهيعملك اكل لم نتجوز", time: "7:01 PM" },
      { sender: "her", text: "ماااشي", time: "7:01 PM" },
    ],
  },
  {
    title: "ذكرى ٢١: حاضر يمامي 🤍",
    date: "12 أكتوبر",
    messages: [
      { sender: "her", text: "لا", time: "8:59 PM" },
      { sender: "me", text: "حاضر يمامي", time: "8:59 PM" },
      { sender: "her", text: "معلش لا", time: "9:00 PM" },
    ],
  },
  {
    title: "ذكرى ٢٢: لما نتجوز هتبوس إيدي؟ 👰‍♀️",
    date: "13 أكتوبر",
    messages: [
      { sender: "her", text: "هتقمص", time: "9:27 PM" },
      { sender: "her", text: "ايوا لم نتجوز", time: "9:27 PM" },
      { sender: "her", text: "هتبوس ايدي؟", time: "9:27 PM" },
    ],
  },
  {
    title: "ذكرى ٢٣: انتا مبتغلطش يكتكوتي!! 🥺❤️",
    date: "15 أكتوبر",
    messages: [
      { sender: "me", text: "انا اسف", time: "8:29 PM" },
      { sender: "her", text: "انتا مبتغلطش يكتكوتي!!", time: "8:29 PM" },
      { sender: "her", text: "مفيش حاجه", time: "8:29 PM" },
    ],
  },
  {
    title: "ذكرى ٢٤: تصبح على خير يكتكوتي هتوحشني 🌙",
    date: "17 أكتوبر",
    messages: [
      { sender: "her", text: "وهنام", time: "2:47 AM" },
      { sender: "her", text: "تصبح على خير يكتكوتي هتوحشني", time: "2:47 AM" },
      { sender: "her", text: "تقريبا منمتش", time: "5:45 AM" },
    ],
  },
  {
    title: "ذكرى ٢٥: هتوحشيني أوي يا مامي ❤️",
    date: "19 أكتوبر",
    messages: [
      { sender: "me", text: "هتوحشيني اوي يا مامي", time: "11:19 PM" },
      { sender: "me", text: "بجد بحبككك", time: "11:19 PM" },
      { sender: "me", text: "و نفسي تفضلي جمبي", time: "11:19 PM" },
    ],
  },
];

export const relationshipStory = [
  "١. أول صدفة جمعتني بيكي يوم 24/9.. الأساس اللي نور دنيتي ❤️",
  "٢. أول مرة عيني شافت ضحكتك.. خطفتيني من وقتها ✨",
  "٣. أول رسالة وكلام بينا.. بداية أجمل حكاية في عمري 💬",
  "٤. خوفنا على بعض واهتمامنا اللي مبيخلصش أبداً 🤍",
  "٥. غيرتي عليكي لما غيرتي البروفايل عشان بحبك وبخاف عليكي 😠❤️",
  "٦. كل خناقة وقمصة زعلنا فيها ورجعنا متبتين في بعض أكتر 🤝",
  "٧. كلمتك ليا 'سلامتك يكتكوتي' وحنيتك اللي ملهاش مثيل 🥺",
  "٨. سهرنا وكلامنا لوش الصبح والساعة 12:12 بالليل 🌙",
  "٩. أول مرة قلتيلي فيها 'بحبك انتا'.. الكلمة اللي غيرتني 💓",
  "١٠. لما بتقوليلي 'انتا مبتغلطش يكتكوتي' وبتطيبى خاطري 🐣",
  "١١. هزارنا في اللبس والشياكة لما قلتيلي 'بغيييرررر' 😂🩴",
  "١٢. وعودنا لبعض إننا مستحيل نسيب إيد بعض مهما حصل 💍",
  "١٣. حلمنا أول ما أتخرج وأتقدملك ونبني بيتنا سوا 🏡",
  "١٤. أوضة الجيمنج اللي هنلعب فيها سوا في بيتنا 🎮😂",
  "١٥. دعمنا لبعض في الدراسة والكلية وكل خطوة بنخطيها 📚",
  "١٦. وعدي ليكي إني أشتغل على نفسي وأظبط جسمي عشانك 💪",
  "١٧. لما نتجوز ومش هخليكي تحطي إيدك في حاجة وتكوني ملكة بيتي 👑",
  "١٨. عيلتنا الصغيرة اللي هنبنيها بالحب والحنان في الحلال 👨‍👩‍👧",
  "١٩. السنة الجاية أو اللي بعدها نحتفل بعيد ميلادك وإنتي مراتي في بيتنا 👰‍♀️🤵‍♂️❤️",
];
