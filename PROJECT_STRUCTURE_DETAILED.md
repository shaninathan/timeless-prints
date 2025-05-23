# מבנה הפרויקט Timeless Prints

## תרשים היררכי של הפרויקט

```
📁 src/
├── 📁 components/           # קומפוננטות משותפות
│   ├── 📁 accessibilitySettings/  # הגדרות נגישות
│   │   ├── AccessibilitySettings.jsx    # קומפוננטת הגדרות נגישות
│   │   └── AccessibilitySettings.styles.jsx
│   ├── 📁 navbar/          # סרגל ניווט
│   │   ├── Navbar.jsx      # קומפוננטת ניווט ראשית
│   │   └── Navbar.styles.jsx
│   ├── 📁 footer/          # פוטר
│   │   ├── Footer.jsx      # קומפוננטת פוטר
│   │   └── Footer.styles.jsx
│   ├── 📁 chatBot/         # צ'אט בוט
│   │   ├── ChatBot.jsx     # קומפוננטת צ'אט
│   │   └── ChatBot.styles.jsx
│   └── 📁 loader/          # טוען
│       ├── Loader.jsx      # קומפוננטת טעינה
│       └── Loader.styles.jsx
│
├── 📁 pages/               # דפי האפליקציה
│   ├── 📁 home/           # דף הבית
│   │   ├── Home.jsx       # דף הבית הראשי
│   │   └── Home.styles.jsx
│   ├── 📁 products/       # דף מוצרים
│   │   ├── Products.jsx   # רשימת מוצרים
│   │   └── Products.styles.jsx
│   ├── 📁 productDetail/  # דף פרטי מוצר
│   │   ├── ProductDetail.jsx  # פרטי מוצר
│   │   └── ProductDetail.styles.jsx
│   ├── 📁 cart/          # דפי עגלת קניות
│   │   ├── 📁 Cart/      # עגלת קניות
│   │   ├── 📁 Checkout/  # תשלום
│   │   └── 📁 OrderConfirmation/  # אישור הזמנה
│   ├── 📁 favorites/     # דף מועדפים
│   │   ├── Favorites.jsx
│   │   └── Favorites.styles.jsx
│   ├── 📁 about/         # דף אודות
│   │   ├── About.jsx
│   │   └── About.styles.jsx
│   ├── 📁 contact/       # דף צור קשר
│   │   ├── Contact.jsx
│   │   └── Contact.styles.jsx
│   └── 📁 notFound/      # דף 404
│       ├── NotFound.jsx
│       └── NotFound.styles.jsx
│
├── 📁 store/              # ניהול מצב גלובלי
│   ├── index.js          # הגדרת סטור
│   ├── cartSlice.js      # ניהול עגלה
│   ├── favoritesSlice.js # ניהול מועדפים
│   └── accessibilitySlice.js  # ניהול נגישות
│
├── 📁 styles/             # סגנונות גלובליים
│   └── global.styles.jsx  # סגנונות משותפים
│
├── App.jsx               # קומפוננטת האפליקציה הראשית
└── main.jsx             # נקודת כניסה לאפליקציה
```

## תרשים מפורט של הקומפוננטות

```
📦 App.jsx (קומפוננטת האפליקציה הראשית)
├── 🎨 ThemeProvider (תמה גלובלית)
│   └── 📦 CacheProvider (ניהול קאש)
│       └── 📦 Provider (Redux Store)
│           └── 📦 Router (ניהול ניווט)
│               ├── 📦 ScrollToTop (ניהול גלילה)
│               └── 📦 AppContainer (מבנה האפליקציה)
│                   ├── 📦 Navbar (סרגל ניווט)
│                   │   ├── 📦 StyledAppBar (סרגל ניווט מעוצב)
│                   │   ├── 📦 StyledToolbar (סרגל כלים)
│                   │   ├── 📦 Logo (לוגו)
│                   │   ├── 📦 NavigationLinks (קישורי ניווט)
│                   │   └── 📦 CartIcon (אייקון עגלה)
│                   │
│                   ├── 📦 MainContent (תוכן ראשי)
│                   │   ├── 📦 Routes (מערכת דפים)
│                   │   │   ├── 📦 Home (דף הבית)
│                   │   │   │   ├── 📦 HeroSection (חלק עליון)
│                   │   │   │   ├── 📦 FeaturedProducts (מוצרים מומלצים)
│                   │   │   │   └── 📦 AboutSection (חלק אודות)
│                   │   │   │
│                   │   │   ├── 📦 Products (דף מוצרים)
│                   │   │   │   ├── 📦 ProductGrid (רשת מוצרים)
│                   │   │   │   ├── 📦 ProductCard (כרטיס מוצר)
│                   │   │   │   └── 📦 FilterBar (סרגל סינון)
│                   │   │   │
│                   │   │   ├── 📦 ProductDetail (דף מוצר)
│                   │   │   │   ├── 📦 ProductImage (תמונת מוצר)
│                   │   │   │   ├── 📦 ProductInfo (מידע מוצר)
│                   │   │   │   └── 📦 AddToCartButton (כפתור קנייה)
│                   │   │   │
│                   │   │   ├── 📦 Cart (עגלת קניות)
│                   │   │   │   ├── 📦 CartItems (רשימת מוצרים)
│                   │   │   │   ├── 📦 CartSummary (סיכום עגלה)
│                   │   │   │   └── 📦 CheckoutButton (כפתור תשלום)
│                   │   │   │
│                   │   │   ├── 📦 Checkout (תשלום)
│                   │   │   │   ├── 📦 CheckoutForm (טופס תשלום)
│                   │   │   │   ├── 📦 OrderSummary (סיכום הזמנה)
│                   │   │   │   └── 📦 PaymentSection (חלק תשלום)
│                   │   │   │
│                   │   │   ├── 📦 Favorites (מועדפים)
│                   │   │   │   ├── 📦 FavoritesGrid (רשת מועדפים)
│                   │   │   │   └── 📦 FavoriteCard (כרטיס מועדף)
│                   │   │   │
│                   │   │   ├── 📦 About (אודות)
│                   │   │   │   ├── 📦 AboutContent (תוכן אודות)
│                   │   │   │   └── 📦 TeamSection (חלק צוות)
│                   │   │   │
│                   │   │   ├── 📦 Contact (צור קשר)
│                   │   │   │   ├── 📦 ContactForm (טופס יצירת קשר)
│                   │   │   │   └── 📦 ContactInfo (מידע יצירת קשר)
│                   │   │   │
│                   │   │   └── 📦 NotFound (דף 404)
│                   │   │       └── 📦 NotFoundContent (תוכן 404)
│                   │   │
│                   │   └── 📦 ProtectedRoute (דף מוגן)
│                   │       └── 📦 Checkout (דף תשלום מוגן)
│                   │
│                   ├── 📦 AccessibilitySettings (הגדרות נגישות)
│                   │   ├── 📦 StyledDrawer (מגירה מעוצבת)
│                   │   ├── 📦 FontSizeControls (בקרות גודל טקסט)
│                   │   ├── 📦 ContrastControls (בקרות ניגודיות)
│                   │   └── 📦 MotionControls (בקרות אנימציה)
│                   │
│                   ├── 📦 ChatBot (צ'אט בוט)
│                   │   ├── 📦 ChatButton (כפתור צ'אט)
│                   │   ├── 📦 ChatWindow (חלון צ'אט)
│                   │   └── 📦 MessageList (רשימת הודעות)
│                   │
│                   └── 📦 Footer (פוטר)
│                       ├── 📦 FooterContent (תוכן פוטר)
│                       ├── 📦 SocialLinks (קישורים חברתיים)
│                       └── 📦 ContactInfo (מידע יצירת קשר)
│
└── 📦 GlobalStyle (סגנונות גלובליים)
    ├── 📦 BaseStyles (סגנונות בסיס)
    ├── 📦 RTLStyles (סגנונות RTL)
    ├── 📦 AccessibilityStyles (סגנונות נגישות)
    └── 📦 ThemeStyles (סגנונות תמה)
```

## הסבר מפורט על המבנה

### 1. קומפוננטות משותפות (`/components`)
- **accessibilitySettings**: קומפוננטה גלובלית לניהול הגדרות נגישות
  - ממוקמת בכל הדפים
  - מאפשרת התאמת גודל טקסט, ניגודיות וכו'
- **navbar**: סרגל ניווט ראשי
  - ממוקם בראש כל דף
  - מנהל ניווט בין דפי האפליקציה
- **footer**: פוטר האפליקציה
  - ממוקם בתחתית כל דף
  - מציג מידע תחתון וקישורים
- **chatBot**: צ'אט בוט
  - ממוקם בכל דף
  - מספק תמיכה ללקוחות
- **loader**: קומפוננטת טעינה
  - מוצגת בזמן טעינת נתונים
  - משותפת לכל הדפים

### 2. דפי האפליקציה (`/pages`)
- **home**: דף הבית
  - מציג את הדף הראשי
  - כולל תצוגת מוצרים מומלצים
- **products**: דף מוצרים
  - מציג רשימת מוצרים
  - כולל סינון וחיפוש
- **productDetail**: דף פרטי מוצר
  - מציג מידע מפורט על מוצר
  - כולל אפשרויות קנייה
- **cart**: דפי עגלת קניות
  - `Cart`: הצגת עגלת קניות
  - `Checkout`: תהליך תשלום
  - `OrderConfirmation`: אישור הזמנה
- **favorites**: דף מועדפים
  - מציג מוצרים שסומנו כמועדפים
- **about**: דף אודות
  - מציג מידע על החברה
- **contact**: דף צור קשר
  - טופס יצירת קשר
- **notFound**: דף 404
  - מוצג כשדף לא נמצא

### 3. ניהול מצב (`/store`)
- **index.js**: הגדרת הסטור הראשי
- **cartSlice.js**: ניהול עגלת קניות
- **favoritesSlice.js**: ניהול מועדפים
- **accessibilitySlice.js**: ניהול הגדרות נגישות

### 4. סגנונות (`/styles`)
- **global.styles.jsx**: סגנונות גלובליים
  - מגדיר תמה אחידה
  - כולל הגדרות RTL
  - כולל הגדרות נגישות

### 5. קבצים ראשיים
- **App.jsx**: קומפוננטת האפליקציה הראשית
  - מגדיר את מבנה האפליקציה
  - מנהל ראוטינג
  - מספק תמה וסטור
- **main.jsx**: נקודת כניסה
  - מרנדר את האפליקציה
  - מגדיר StrictMode

## זרימת המידע
1. `main.jsx` מרנדר את `App.jsx`
2. `App.jsx` מספק סטור ותמה לכל האפליקציה
3. הראוטר ב-`App.jsx` מנהל ניווט בין דפים
4. כל דף יכול להשתמש בקומפוננטות משותפות
5. כל הקומפוננטות מקבלות גישה לסטור הגלובלי
6. הסגנונות הגלובליים מוחלים על כל האפליקציה

## תכונות עיקריות של הקומפוננטות
- מקבלות גישה לסטור הגלובלי
- משתמשות בסגנונות הגלובליים
- תומכות בנגישות
- מגיבות לשינויים במצב האפליקציה
- מעוצבות עם Material-UI
- תומכות ב-RTL 