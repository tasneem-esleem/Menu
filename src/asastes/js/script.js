const show = document.querySelectorAll('.show');
const showMore = document.querySelectorAll('.show-more');
const cardShow=document.querySelector('.cardShow');
const cardhidden=document.querySelector('.cardhidden');
const Yearly=document.querySelector('.Yearly');
const Monthly=document.querySelector('.Monthly');
const login=document.querySelector('.login');
const form_login=document.querySelector('.form_login');
const form_Continue=document.querySelector('.form_Continue');
const Register=document.querySelector('.Register');
const times=document.querySelector('.times');
const model=document.querySelector('.model');
const Subscribe=document.querySelectorAll('.Subscribe');
show.forEach((el, index) => {
    el.onclick = () => {
    showMore[index].classList.toggle('hidden');
    if (showMore[index].classList.contains('hidden')) {
      el.innerHTML = 'Show more';
    } else {
            el.innerHTML = 'Show less';
        }
    };
});
Yearly.onclick = () => {
    cardhidden.classList.add('hidden');
    cardShow.classList.remove('hidden');
    Yearly.style.backgroundColor = '#4f46e5'; 
    Monthly.style.backgroundColor = '#2d3748'; 
};

Monthly.onclick = () => {
    cardhidden.classList.remove('hidden');
    cardShow.classList.add('hidden');
      Yearly.style.backgroundColor = '#2d3748'; 
    Monthly.style.backgroundColor = '#4f46e5'; 
}
login.onclick=()=>{
form_login.classList.remove('hidden');
form_Continue.classList.add('hidden');
login.classList.add("bg-indigo-600");
login.classList.add("text-white");
Register.classList.add("text-gray-500");
Register.classList.remove("bg-indigo-600");
}
Register.onclick=()=>{
form_login.classList.add('hidden');
form_Continue.classList.remove('hidden'); 
Register.classList.add("bg-indigo-600");
login.classList.remove("bg-indigo-600");
}
times.onclick=()=>{
   model.classList.add('hidden')
}
Subscribe.forEach(el=>{
    el.onclick=()=>{
        model.classList.remove('hidden');
    }
})

const resources = {
  en: {
    translation: {
      "title":"Your Solutions with a Smart Subscription",
      "paragraph": "As his name suggests, he was a pioneer leading his team to success, paving the way for their growth. He was courageous in making decisions for change and development. Be a pioneer in developing yourself too",
      "menu":"Try menu now",
      "Subscriptions":"Subscriptions",
      "Restaurant":"Restaurant panel",
      "Story":"Our Story",
      "design":"We believe that the strength of any digital platform lies in its ability to blend elegant design, seamless usability, and brilliant creativity. That's why we crafted a complete experience that showcases content with sophistication while keeping it effortlessly accessible to the user. Thanks to a modern interface and creative touches, we give your work a distinctive presence that leaves a lasting impression on your audience from the very first moment. Our goal is to provide you with a smooth, intuitive environment where colors harmonize with smart layouts, making navigation more enjoyable and fluid. What we offer is not just visually appealing design, but a comprehensive system that reflects your brand identity and delivers a seamless, engaging experience—keeping your brand closer, easier, and more impressive than ever.",
      "technology":"This platform is more than just technology; it is spirit, heritage, and enduring inspiration. Its concept was born from a vision that wars could not extinguish, flourishing instead in every detail and pulse of its design. Here, creativity meets simplicity, turning every interface into a story. What we offer is not merely a solution, but a tribute to resilience, celebrating ideas that—even in the face of loss—grow, inspire, and leave a lasting impact on every heart they touch.",
      "Services":"Services",
      "Flexible":"Flexible Menu Management",
      "Manage":"Manage your restaurant menu with full flexibility. Add, edit, or remove items and categories anytime to fit your business needs.",
      "Role":"Role-Based Access Control",
      "Assign":"Assign specific roles like Kitchen, Waiter, Cashier, and Delivery to your staff, each with customized permissions for smooth operation.",
      "Dashboard":"Subscription & Dashboard",
      "control":"Subscribe to flexible plans and get a personalized dashboard to control locations, working hours, and monitor all restaurant activities.",
      "Monthly":"Monthly",
      "Yearly":"Yearly",
      "Elite":"Elite Plan",
      "mo":"mo",
      "full":"A full-featured plan for restaurants offering complete in-house and delivery services. Includes Kitc...",
      "Cashier":"hen, Cashier, Waiter, and Delivery management.",
      "Show":"Show more",
      "Includes":"Includes",
       "_Menu":"Menu",
      "Kitchen":"Kitchen",
      "Waiter":"Waiter",
      "Casher":"Casher",
      "Now":"Subscribe Now",
      "Most":"Most Popular",
      "Hospitality":"Hospitality Plan",
      "ideal":"An ideal plan for restaurants focusing on dine-in services. Includes Kitchen, Cashier, and Waiter to…",
      "Basic":"Basic Plan",
      "Designed":"Designed for delivery-based restaurants without dine-in service. Includes Kitchen, Cashier, and Deli…",
      "Need":"Need Help?",
      "support":"Our support team is here to help you with any questions or issues you may have.",
      "Touch":"Get in Touch",
      "questions":"Have questions about our services or need technical support? We're here to help!",
      "WhatsApp":"WhatsApp Support",
      "typically":"We typically respond within 24 hours during business days.",
      "login":"Login",
       "Email": "Email",
      "Password":"Password",
      "Remember":"Remember",
      "Forgot":"Forgot your password?",
      "Phone":"Phone",
      "account":"Don't have account?",
      "Payment":"Continue to Payment",
      "LoginPayment":"Login and Go to Payment",
      "Register":"Register",
      "RestaurantName": "Restaurant Name",
     "email": "Email",
      "phone": "Phone Number",
     "password": "Password",
     "confirmPassword": "Confirm Password",
     "tools":"tools",
     "full-short": "A full-featured plan for restaurants offering complete in-house and delivery services. Includes Kitc...",
    "full-long": "hen, Cashier, Waiter, and Delivery management.",
    "Show": "Show more",
    "Hide": "Show less",
    "ideal-short": "An ideal plan for restaurants focusing on dine-in services. Includes Kitchen, Cashier, and Waiter to…",
    "ideal-long": "tools.",
    "Show": "Show more",
    "Hide": "Show less",
    "designed-short": "Designed for delivery-based restaurants without dine-in service. Includes Kitchen, Cashier, and Deli…",
    "designed-long": "Delivery tools..",
    "Show": "Show more",
    "Hide": "Show less"
    }
  },
  ar: {
    translation: {
      "title": "حلولك مع اشتراك ذكي",
      "paragraph": "كما يوحي اسمه، كان رائدًا يقود فريقه نحو النجاح ويمهد الطريق لهم للتقدم. كان شجاعًا في اتخاذ قرارات التغيير والتطوير. كن أنت أيضًا رائدًا في تطوير ذاتك.",
      "menu":"جرب قائمتنا الان",
      "Subscriptions":"الاشتراكات",
      "Restaurant":"لوحة المطعم",
      "Story":"قصتنا",
      "design":"نحن نؤمن أن قوة أي منصة رقمية تكمن في قدرتها على الجمع بين جمال التصميم، وسهولة الاستخدام، وروعة الإبداع. لذلك صممنا تجربة متكاملة تُبرز المحتوى بأناقة وتجعله في متناول المستخدم بخطوات بسيطة وفعّالة. بفضل الواجهة العصرية واللمسات الإبداعية، نمنح أعمالك حضورًا مميزًا يترك انطباعًا قويًا لدى عملائك منذ اللحظة الأولى. هدفنا أن نوفر لك بيئة استخدام سلسة، حيث تنسجم الألوان مع التخطيط الذكي لتجعل التصفح أكثر متعة وانسيابية. إن ما نقدمه ليس مجرد تصميم جذاب، بل منظومة متكاملة تعكس هوية عملك وتمنح جمهورك تجربة سلسة ومثيرة في آن واحد، لتبقى علامتك التجارية دائمًا أقرب وأسهل وأكثر إبهارًا.",
      "technology":"هذه المنصة أكثر من مجرد تقنية؛ إنها روح وإرث وإلهام متواصل. وُلدت فكرتها من رؤية لم تطفئها الحروب، بل ازدهرت في كل تفصيلها و نبض تصميمها. هنا يلتقي الإبداع بالبساطة لتصبح كل واجهة حكاية. ما نقدمه ليس مجرد حل، بل تحية للصمود، وإشادة بالأفكار التي، حتى بعد الفقد، تنمو، تلهم، وتترك أثرًا خالدًا في كل قلب يمر بها.",
      "Services":"خدماتنا",
      "Flexible":"إدارة المنيو بمرونة",
      "Manage":"تحكم كامل بمنيو مطعمك، أضف، عدل، أو احذف الأصناف والفئات في أي وقت بما يناسب عملك.",
      "Role":"دارة الصلاحيات حسب الدور",
      "Assign":"عيّن أدوار مخصصة مثل المطبخ، الويتر، الكاشير، والدليفري لموظفيك مع صلاحيات محددة لتشغيل سلس.",
      "Dashboard":"الاشتراكات ولوحة التحكم",
      "control":"اشترك بخطط مرنة واحصل على لوحة تحكم شخصية لتحديد المواقع، أوقات العمل، ومتابعة نشاطات المطعم بالكامل.",
      "Monthly":"شهري",
      "Yearly":"سنوي",
      "Elite":"باقة النخبة",
      "mo":"شهر",
      "full":"باقة شاملة ومثالية للمطاعم التي تقدم خدمات متكاملة داخل المطعم وخارجه، تشمل إدارة المطبخ، الكاشير، ا…",
      "Cashier":"الويتر، وخدمة التوصيل.",
      "Show":"عرض المزيد",
       "Includes":"يشمل:",
       "_Menu":"منيو",
      "Kitchen":"مطبخ",
      "Waiter":"نادل",
      "Casher":"كاشير",
      "Now":"اشترك الآن",
       "Most":"الأكثر شهرة",
      "Hospitality":"باقة الضيافة",
      "ideal":"باقة مثالية للمطاعم التي تركز على الخدمة داخل الصالة، توفر أدوات فعالة لإدارة المطبخ، الكاشير، والوي…",
      "Basic":"الباقة الاساسية",
      "Designed":"صُممت هذه الباقة للمطاعم التي تقدم الوجبات دون صالة جلوس، وتحتاج لإدارة المطبخ، الكاشير، وخدمة التوص…",
      "Need":"تحتاج مساعدة؟",
      "support":"فريق الدعم الفني هنا لمساعدتك في أي سؤال أو مشكلة تواجهك.",
      "Touch":"تواصل معنا",
      "questions":" هل لديك أسئلة حول خدماتنا أو تحتاج دعم فني؟ نحن هنا للمساعدة!",
      "WhatsApp":"دعم واتس اب",
      "typically":"نحن نستجيب عادةً خلال 24 ساعة خلال أيام العمل.",
      "login":"تسجيل دخول ",
       "Email": "البريد الإلكتروني",
      "Password":"كلمة المرور",
      "Remember":"تذكرني",
      "Forgot":" هل نسيت كلمة المرور؟",
      "Phone":"الهاتف",
      "RestaurantName": "تسجيل جديد",
      "account":"ليس لديك حساب؟",
      "Payment":"متابعة إلى الدفع",
      "LoginPayment":"تسجيل الدخول والذهاب للدفع",
      "Register":"تسجيل جديد",
      "full-short": "باقة شاملة ومثالية للمطاعم التي تقدم خدمات متكاملة داخل المطعم وخارجه، تشمل إدارة المطبخ، الكاشير، ا…",
    "full-long": "الويتر، وخدمة التوصيل.",
    "Show": "عرض المزيد",
    "Hide": "عرض أقل",
    "ideal-short": "باقة مثالية للمطاعم التي تركز على الخدمة داخل الصالة، توفر أدوات فعالة لإدارة المطبخ، الكاشير، والوي…",
    "ideal-long": "الأدوات.",
    "Show": "عرض المزيد",
    "Hide": "عرض أقل",
     "designed-short": "صُممت هذه الباقة للمطاعم التي تقدم الوجبات دون صالة جلوس، وتحتاج لإدارة المطبخ، الكاشير، وخدمة التوص…",
    "designed-long": "أدوات التوصيل..",
    "Show": "عرض المزيد",
    "Hide": "عرض أقل"
    
 
    }
  }
};
let currentLang = 'en';

// تهيئة i18next
i18next.init({
  lng: currentLang,
  debug: true,
  resources: resources
}, function(err, t) {
  updateContent();
});

// التعامل مع أزرار تغيير اللغة
document.querySelectorAll('.language').forEach(el => {
  el.onclick = () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    i18next.changeLanguage(currentLang, () => {
      updateContent();
    });
  };
});
  
   

function updateContent() {
  // تحديث كل العناصر التي تحتوي على data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    // إذا كان العنصر input أو textarea، نغير placeholder بدل textContent
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.setAttribute('placeholder', i18next.t(key));
    } else {
      el.textContent = i18next.t(key);
    }
  });

  // تحديث اتجاه الصفحة
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  document.body.classList.toggle('rtl', currentLang === 'ar');
  document.body.classList.toggle('ltr', currentLang === 'en');

  // تحديث نص أزرار اللغة نفسها
  document.querySelectorAll('.language').forEach(el => {
    el.textContent = currentLang;
  });
}
