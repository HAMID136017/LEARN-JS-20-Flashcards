const PYTHON_CARDS = [
  {
    "q": "متغیر در پایتون چه کاری می‌کند؟",
    "a": "یک مقدار را با یک نام نگه می‌دارد.",
    "choices": [
      "همیشه متن را چاپ می‌کند.",
      "فقط شمارهٔ خط را نگه می‌دارد.",
      "تعداد تکرار واژه را می‌شمارد."
    ],
    "c": "متن و چاپ",
    "s": [
      "مقدار",
      "نام متغیر",
      "استفاده دوباره"
    ],
    "w": "در مثال، نام متغیر به متن اشاره می‌کند.",
    "example": "text = \"Admin\"\nprint(text)\n# Admin"
  },
  {
    "q": "متن داخل کوتیشن و نام متغیر چه فرقی دارند؟",
    "a": "اولی متن ثابت است؛ دومی مقدار ذخیره‌شده را می‌خواند.",
    "choices": [
      "هر دو همیشه نام متغیر را چاپ می‌کنند.",
      "کوتیشن فقط برای عدد لازم است.",
      "نام متغیر باید همیشه داخل کوتیشن باشد."
    ],
    "c": "متن و چاپ",
    "s": [
      "کوتیشن → متن",
      "نام → مقدار"
    ],
    "w": "برای چاپ مقدار متغیر، نام آن را بدون کوتیشن می‌نویسیم.",
    "example": "line = \"Admin\"\nprint(\"line\")\nprint(line)\n# line\n# Admin"
  },
  {
    "q": "این کد چه چیزی چاپ می‌کند؟",
    "a": "admin",
    "choices": [
      "Admin",
      "True",
      "False"
    ],
    "c": "تبدیل حروف",
    "s": [
      "Admin",
      "حروف کوچک",
      "admin"
    ],
    "w": "تبدیل حروف یک متن برمی‌گرداند؛ در این کد هیچ بررسی وجود عبارتی نداریم.",
    "example": "text = \"Admin\"\nprint(text.lower())\n# admin",
    "prompt": "text = \"Admin\"\nprint(text.lower())"
  },
  {
    "q": "این کد چه خروجی دارد؟",
    "a": "hello",
    "choices": [
      "HELLO",
      "True",
      "False"
    ],
    "c": "تبدیل حروف",
    "s": [
      "HELLO",
      "حروف کوچک",
      "hello"
    ],
    "w": "چاپ تبدیل متن را با چاپ نتیجهٔ منطقی اشتباه نگیر.",
    "example": "line = \"HELLO\"\nprint(line.lower())\n# hello",
    "prompt": "line = \"HELLO\"\nprint(line.lower())"
  },
  {
    "q": "آیا فراخوانی تبدیل حروف به‌تنهایی مقدار اصلی متغیر را عوض می‌کند؟",
    "a": "خیر؛ متن تبدیل‌شده برگردانده می‌شود.",
    "choices": [
      "بله؛ متن اصلی همیشه کوچک می‌شود.",
      "بله؛ متغیر به عدد تبدیل می‌شود.",
      "خیر؛ هیچ متنی برگردانده نمی‌شود."
    ],
    "c": "تبدیل حروف",
    "s": [
      "متن اصلی",
      "نسخهٔ کوچک‌شده",
      "چاپ نسخهٔ اصلی"
    ],
    "w": "برای نگه‌داشتن متن تبدیل‌شده باید نتیجه را در متغیری قرار دهیم.",
    "example": "line = \"Admin\"\nprint(line.lower())\nprint(line)\n# admin\n# Admin"
  },
  {
    "q": "عملگر بررسی وجود عبارت در متن کدام است؟",
    "a": "in",
    "choices": [
      "not in",
      "lower()",
      "print()"
    ],
    "c": "وجود و نبودن",
    "s": [
      "عبارت",
      "متن",
      "نتیجهٔ منطقی"
    ],
    "w": "نتیجه نشان می‌دهد عبارت جست‌وجوشده در متن وجود دارد یا نه.",
    "example": "text = \"admin panel\"\nprint(\"admin\" in text)\n# True"
  },
  {
    "q": "نتیجهٔ این بررسی چیست؟",
    "a": "False",
    "choices": [
      "True",
      "ADMIN panel enabled",
      "NOT FOUND"
    ],
    "c": "وجود و نبودن",
    "s": [
      "admin",
      "ADMIN",
      "حروف متفاوت"
    ],
    "w": "بدون تبدیل، مقایسهٔ متن به بزرگی و کوچکی حروف حساس است.",
    "example": "text = \"ADMIN panel enabled\"\nprint(\"admin\" in text)\n# False",
    "prompt": "text = \"ADMIN panel enabled\"\nprint(\"admin\" in text)"
  },
  {
    "q": "نتیجهٔ این بررسی پس از تبدیل حروف چیست؟",
    "a": "True",
    "choices": [
      "False",
      "admin panel enabled",
      "FOUND"
    ],
    "c": "وجود و نبودن",
    "s": [
      "ADMIN",
      "admin",
      "عبارت پیدا شد"
    ],
    "w": "اول متن کوچک می‌شود؛ سپس وجود عبارت بررسی می‌شود.",
    "example": "text = \"ADMIN panel enabled\"\nprint(\"admin\" in text.lower())\n# True",
    "prompt": "text = \"ADMIN panel enabled\"\nprint(\"admin\" in text.lower())"
  },
  {
    "q": "شکل درست مقدارهای منطقی پایتون کدام است؟",
    "a": "True / False",
    "choices": [
      "true / false",
      "TRUE / FALSE",
      "FOUND / NOT FOUND"
    ],
    "c": "وجود و نبودن",
    "s": [
      "درست → True",
      "نادرست → False"
    ],
    "w": "در پایتون حرف اول این دو مقدار بزرگ است.",
    "example": "print(\"admin\" in \"admin\")\nprint(\"admin\" in \"user\")\n# True\n# False"
  },
  {
    "q": "خروجی دو خط چاپ به‌ترتیب چیست؟",
    "a": "hello سپس False",
    "choices": [
      "False سپس hello",
      "hello سپس True",
      "HELLO سپس False"
    ],
    "c": "متن و چاپ",
    "s": [
      "چاپ متن",
      "بررسی وجود",
      "چاپ نتیجه"
    ],
    "w": "اولین چاپ خود متن را نشان می‌دهد؛ دومین چاپ نتیجهٔ بررسی را.",
    "example": "line = \"HELLO\"\nprint(line.lower())\nprint(\"admin\" in line.lower())\n# hello\n# False",
    "prompt": "line = \"HELLO\"\nprint(line.lower())\nprint(\"admin\" in line.lower())"
  },
  {
    "q": "برای بررسی نبودن یک عبارت از چه چیزی استفاده می‌کنیم؟",
    "a": "not in",
    "choices": [
      "in",
      "lower()",
      "count + 1"
    ],
    "c": "وجود و نبودن",
    "s": [
      "عبارت وجود ندارد؟",
      "بله",
      "True"
    ],
    "w": "نبودن عبارت، شرط را درست می‌کند.",
    "example": "line = \"user\"\nprint(\"admin\" not in line)\n# True"
  },
  {
    "q": "این کد کدام پیام را چاپ می‌کند؟",
    "a": "NOT FOUND",
    "choices": [
      "FOUND",
      "False",
      "User panel enabled"
    ],
    "c": "شرط‌ها",
    "s": [
      "متن user",
      "admin وجود ندارد",
      "شاخهٔ دوم"
    ],
    "w": "چون کد پیام دلخواه چاپ می‌کند، خروجی مقدار منطقی نیست.",
    "example": "text = \"User panel enabled\"\nif \"admin\" in text.lower():\n    print(\"FOUND\")\nelse:\n    print(\"NOT FOUND\")\n# NOT FOUND",
    "prompt": "text = \"User panel enabled\"\nif \"admin\" in text.lower():\n    print(\"FOUND\")\nelse:\n    print(\"NOT FOUND\")"
  },
  {
    "q": "با این شرط، کدام پیام چاپ می‌شود؟",
    "a": "FOUND",
    "choices": [
      "NOT FOUND",
      "True",
      "admin"
    ],
    "c": "شرط‌ها",
    "s": [
      "ADMIN",
      "تبدیل حروف",
      "شاخهٔ اول"
    ],
    "w": "تبدیل قبل از بررسی انجام می‌شود و سپس متن پیام با حروف اصلی خودش چاپ می‌شود.",
    "example": "text = \"ADMIN\"\nif \"admin\" in text.lower():\n    print(\"FOUND\")\nelse:\n    print(\"NOT FOUND\")\n# FOUND",
    "prompt": "text = \"ADMIN\"\nif \"admin\" in text.lower():\n    print(\"FOUND\")\nelse:\n    print(\"NOT FOUND\")"
  },
  {
    "q": "چه زمانی بخش دوم شرط اجرا می‌شود؟",
    "a": "وقتی شرط بخش اول نادرست باشد.",
    "choices": [
      "همیشه بعد از بخش اول اجرا می‌شود.",
      "فقط وقتی متن با حروف بزرگ باشد.",
      "وقتی شمارنده صفر نباشد."
    ],
    "c": "شرط‌ها",
    "s": [
      "بررسی شرط",
      "نادرست",
      "else"
    ],
    "w": "از دو شاخهٔ این شرط فقط یکی انتخاب می‌شود.",
    "example": "if \"admin\" in \"user\":\n    print(\"FOUND\")\nelse:\n    print(\"NOT FOUND\")"
  },
  {
    "q": "تورفتگی در بدنهٔ شرط و حلقه چه کاربردی دارد؟",
    "a": "مشخص می‌کند کدام دستورها داخل آن بخش هستند.",
    "choices": [
      "فقط ظاهر کد را زیباتر می‌کند.",
      "همهٔ متغیرها را عددی می‌کند.",
      "تفاوت حروف را نادیده می‌گیرد."
    ],
    "c": "شرط‌ها",
    "s": [
      "تورفتگی",
      "محدودهٔ بدنه",
      "ترتیب اجرا"
    ],
    "w": "چاپ نهایی بیرون حلقه با چاپ داخل حلقه رفتار متفاوتی دارد.",
    "example": "count = 0\nfor line in [\"admin\", \"user\"]:\n    if \"admin\" in line:\n        count = count + 1\nprint(count)\n# 1"
  },
  {
    "q": "حلقهٔ این مثال در هر دور چه می‌کند؟",
    "a": "یکی از اعضای فهرست را در متغیر حلقه قرار می‌دهد.",
    "choices": [
      "همهٔ اعضا را هم‌زمان در یک متن ادغام می‌کند.",
      "فقط عضو اول را می‌خواند.",
      "تعداد اعضا را خودکار چاپ می‌کند."
    ],
    "c": "حلقه و فیلتر",
    "s": [
      "فهرست",
      "یک عضو در هر دور",
      "اجرای بدنه"
    ],
    "w": "در این مثال حلقه سه بار اجرا می‌شود.",
    "example": "lines = [\"Admin\", \"user\", \"admin\"]\nfor line in lines:\n    print(line)"
  },
  {
    "q": "خروجی این حلقه به‌ترتیب چیست؟",
    "a": "True سپس False سپس True",
    "choices": [
      "Admin سپس user سپس admin",
      "False سپس True سپس False",
      "فقط عدد 2"
    ],
    "c": "حلقه و فیلتر",
    "s": [
      "Admin → True",
      "user → False",
      "admin → True"
    ],
    "w": "دستور چاپ نتیجهٔ بررسی را می‌گیرد و خود متن‌ها را چاپ نمی‌کند.",
    "example": "lines = [\"Admin\", \"user\", \"admin\"]\nfor line in lines:\n    print(\"admin\" in line.lower())\n# True\n# False\n# True",
    "prompt": "lines = [\"Admin\", \"user\", \"admin\"]\nfor line in lines:\n    print(\"admin\" in line.lower())"
  },
  {
    "q": "این حلقه چه متن‌هایی چاپ می‌کند؟",
    "a": "admin سپس user سپس admin",
    "choices": [
      "True سپس False سپس True",
      "Admin سپس user سپس admin",
      "فقط دو بار admin"
    ],
    "c": "حلقه و فیلتر",
    "s": [
      "هر عضو",
      "تبدیل به کوچک",
      "چاپ متن"
    ],
    "w": "بدون شرط، هر سه عضو چاپ می‌شوند.",
    "example": "for line in [\"Admin\", \"user\", \"admin\"]:\n    print(line.lower())\n# admin\n# user\n# admin",
    "prompt": "for line in [\"Admin\", \"user\", \"admin\"]:\n    print(line.lower())"
  },
  {
    "q": "این فیلتر چه خروجی دارد؟",
    "a": "Admin سپس admin",
    "choices": [
      "1 سپس 3",
      "admin سپس admin",
      "True سپس True"
    ],
    "c": "حلقه و فیلتر",
    "s": [
      "بررسی بدون حساسیت",
      "دو عضو مطابق",
      "چاپ متن اصلی"
    ],
    "w": "بررسی با حروف کوچک انجام می‌شود، ولی چاپ مقدار اصلی را می‌گیرد.",
    "example": "for line in [\"Admin\", \"user\", \"admin\"]:\n    if \"admin\" in line.lower():\n        print(line)\n# Admin\n# admin",
    "prompt": "for line in [\"Admin\", \"user\", \"admin\"]:\n    if \"admin\" in line.lower():\n        print(line)"
  },
  {
    "q": "در این فیلتر برای چاپ حروف کوچک چه چیزی به چاپ بدهیم؟",
    "a": "line.lower()",
    "choices": [
      "line",
      "\"line\"",
      "\"admin\" in line"
    ],
    "c": "حلقه و فیلتر",
    "s": [
      "انتخاب عضو",
      "تبدیل متن",
      "چاپ حروف کوچک"
    ],
    "w": "عبارتی که به چاپ می‌دهیم تعیین می‌کند متن اصلی، متن تبدیل‌شده یا نتیجهٔ منطقی دیده شود.",
    "example": "for line in [\"Admin\", \"user\", \"admin\"]:\n    if \"admin\" in line.lower():\n        print(line.lower())\n# admin\n# admin"
  },
  {
    "q": "این حلقهٔ معکوس چه چیزی چاپ می‌کند؟",
    "a": "فقط user",
    "choices": [
      "Admin و admin",
      "True و False",
      "شماره‌های 1 و 3"
    ],
    "c": "حلقه و فیلتر",
    "s": [
      "تبدیل حروف",
      "نبودن admin",
      "انتخاب user"
    ],
    "w": "تنها عضو دوم فاقد عبارت است.",
    "example": "for line in [\"Admin\", \"user\", \"admin\"]:\n    if \"admin\" not in line.lower():\n        print(line)\n# user",
    "prompt": "for line in [\"Admin\", \"user\", \"admin\"]:\n    if \"admin\" not in line.lower():\n        print(line)"
  },
  {
    "q": "برای شمارش از ابتدا، شمارنده را با چه مقداری شروع کردیم؟",
    "a": "0",
    "choices": [
      "1",
      "5",
      "تعداد اعضای فهرست"
    ],
    "c": "شمارنده",
    "s": [
      "مقدار اولیه صفر",
      "هر تطبیق یک افزایش",
      "نتیجهٔ نهایی"
    ],
    "w": "اگر از عدد دیگری شروع کنیم، نتیجه آن عدد به‌علاوه تعداد افزایش‌ها خواهد بود.",
    "example": "count = 0\nfor line in [\"Admin\", \"user\", \"admin\"]:\n    if \"admin\" in line.lower():\n        count = count + 1\nprint(count)\n# 2"
  },
  {
    "q": "این دستور چه تغییری می‌دهد؟",
    "a": "یک واحد به مقدار قبلی شمارنده اضافه می‌کند.",
    "choices": [
      "شمارنده را همیشه برابر 1 می‌کند.",
      "شمارهٔ خط بعد را چاپ می‌کند.",
      "همهٔ تکرارهای واژه را می‌شمارد."
    ],
    "c": "شمارنده",
    "s": [
      "مقدار قبلی",
      "افزودن یک",
      "ذخیرهٔ نتیجه"
    ],
    "w": "ابتدا سمت راست محاسبه و بعد نتیجه در متغیر سمت چپ ذخیره می‌شود.",
    "example": "count = 5\ncount = count + 1\nprint(count)\n# 6",
    "prompt": "count = count + 1"
  },
  {
    "q": "شمارندهٔ نهایی این کد چند است؟",
    "a": "2",
    "choices": [
      "1",
      "3",
      "0"
    ],
    "c": "شمارنده",
    "s": [
      "Admin → افزایش",
      "user → بدون افزایش",
      "admin → افزایش"
    ],
    "w": "تبدیل حروف باعث می‌شود عضو اول و سوم مطابق باشند.",
    "example": "count = 0\nfor line in [\"Admin\", \"user\", \"admin\"]:\n    if \"admin\" in line.lower():\n        count = count + 1\nprint(count)\n# 2",
    "prompt": "count = 0\nfor line in [\"Admin\", \"user\", \"admin\"]:\n    if \"admin\" in line.lower():\n        count = count + 1\nprint(count)"
  },
  {
    "q": "بدون تبدیل حروف، شمارندهٔ نهایی چند می‌شود؟",
    "a": "1",
    "choices": [
      "2",
      "3",
      "0"
    ],
    "c": "شمارنده",
    "s": [
      "حساس به حروف",
      "فقط عضو سوم",
      "یک افزایش"
    ],
    "w": "عضو اول به دلیل تفاوت حرف بزرگ مطابق نیست.",
    "example": "count = 0\nfor line in [\"Admin\", \"user\", \"admin\"]:\n    if \"admin\" in line:\n        count = count + 1\nprint(count)\n# 1",
    "prompt": "count = 0\nfor line in [\"Admin\", \"user\", \"admin\"]:\n    if \"admin\" in line:\n        count = count + 1\nprint(count)"
  },
  {
    "q": "با دو تکرار در عضو اول، خروجی شمارنده چیست؟",
    "a": "2",
    "choices": [
      "3",
      "1",
      "4"
    ],
    "c": "شمارنده",
    "s": [
      "عضو اول یک بار",
      "عضو دوم صفر",
      "عضو سوم یک بار"
    ],
    "w": "این حلقه تعداد عضوهای مطابق را می‌شمارد؛ تعداد همهٔ تکرارها داخل متن را نمی‌شمارد.",
    "example": "count = 0\nfor line in [\"admin admin\", \"user\", \"admin\"]:\n    if \"admin\" in line:\n        count = count + 1\nprint(count)\n# 2",
    "prompt": "count = 0\nfor line in [\"admin admin\", \"user\", \"admin\"]:\n    if \"admin\" in line:\n        count = count + 1\nprint(count)"
  },
  {
    "q": "با مقدار اولیهٔ پنج و دو تطبیق، خروجی چیست؟",
    "a": "7",
    "choices": [
      "2",
      "5",
      "6"
    ],
    "c": "شمارنده",
    "s": [
      "شروع 5",
      "افزایش اول 6",
      "افزایش دوم 7"
    ],
    "w": "نتیجه به مقدار اولیه هم بستگی دارد.",
    "example": "count = 5\nfor line in [\"admin\", \"user\", \"admin\"]:\n    if \"admin\" in line:\n        count = count + 1\nprint(count)\n# 7",
    "prompt": "count = 5\nfor line in [\"admin\", \"user\", \"admin\"]:\n    if \"admin\" in line:\n        count = count + 1\nprint(count)"
  },
  {
    "q": "این کد تعداد چه چیزهایی را محاسبه می‌کند؟",
    "a": "متن‌هایی که عبارت admin را ندارند، بدون حساسیت به حروف.",
    "choices": [
      "تمام تکرارهای عبارت admin",
      "شمارهٔ عضوهای بدون عبارت",
      "فقط متن‌های دارای حروف بزرگ"
    ],
    "c": "شمارنده",
    "s": [
      "تبدیل حروف",
      "نبودن عبارت",
      "افزایش شمارنده"
    ],
    "w": "دو متن بدون عبارت وجود دارند، پس نتیجه دو است.",
    "example": "count = 0\nfor line in [\"ADMIN\", \"user\", \"guest\"]:\n    if \"admin\" not in line.lower():\n        count = count + 1\nprint(count)\n# 2",
    "prompt": "count = 0\nfor line in [\"ADMIN\", \"user\", \"guest\"]:\n    if \"admin\" not in line.lower():\n        count = count + 1\nprint(count)"
  },
  {
    "q": "برای چاپ فقط عدد نهایی، چاپ شمارنده کجا باشد؟",
    "a": "بیرون حلقه و پس از تمام شدن آن.",
    "choices": [
      "داخل شرط، قبل از افزایش",
      "داخل حلقه، قبل از شرط",
      "پیش از مقداردهی شمارنده"
    ],
    "c": "شمارنده",
    "s": [
      "پایان همهٔ دورها",
      "خواندن مقدار نهایی",
      "یک چاپ"
    ],
    "w": "تورفتگی کمتر، چاپ نهایی را از بدنه حلقه بیرون می‌آورد.",
    "example": "count = 0\nfor line in [\"admin\", \"user\", \"admin\"]:\n    if \"admin\" in line:\n        count = count + 1\nprint(count)\n# 2"
  },
  {
    "q": "بررسی وجود عبارت، الزاماً یک کلمهٔ مستقل را پیدا می‌کند؟",
    "a": "خیر؛ وجود زیررشته در متن را بررسی می‌کند.",
    "choices": [
      "بله؛ فقط کلمهٔ مستقل",
      "بله؛ فقط ابتدای خط",
      "خیر؛ فقط تعداد حروف را می‌دهد."
    ],
    "c": "وجود و نبودن",
    "s": [
      "عبارت admin",
      "متن administrator",
      "True"
    ],
    "w": "وجود زیررشته را با برابر بودن کل متن یا تشخیص واژهٔ مستقل یکی ندان.",
    "example": "print(\"admin\" in \"administrator\")\n# True"
  }
];
