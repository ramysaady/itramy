# itramy.com

موقع شخصي مجاني على GitHub Pages.

## رفع الموقع على GitHub

1. أنشئ حساب على [GitHub](https://github.com) إذا ما عندك.
2. أنشئ repository جديد باسم `itramy` (Public).
3. ارفع الملفات:

```bash
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/ramysaady/itramy.git
git push -u origin main
```

4. من GitHub: **Settings** → **Pages**
5. **Source**: Deploy from branch → `main` → `/ (root)` → Save

## ربط الدومين itramy.com (Namecheap)

### 1) DNS في Namecheap

اذهب إلى: **Domain List** → **itramy.com** → **Manage** → **Advanced DNS**

أضف هذه السجلات:

| Type | Host | Value |
|------|------|-------|
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `ramysaady.github.io` |

### 2) تفعيل الدومين في GitHub

**Settings** → **Pages** → **Custom domain** → اكتب `itramy.com` → Save

انتظر 10–30 دقيقة حتى يشتغل الدومين.
