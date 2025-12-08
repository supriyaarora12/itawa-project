# How to Update Content - Quick Guide

## 🎯 Easy Content Updates

All content is now **dynamic** and can be easily changed in **ONE file**: `src/config/warehouse-content.ts`

---

## 📝 Main Content Sections

### 1. **Banner/Hero Section** (Top of page)

**File**: `src/config/warehouse-content.ts` → `banner` object

```typescript
banner: {
  title: "YOUR TITLE HERE",
  subtitle: "YOUR SUBTITLE HERE",  // Optional - leave empty string if not needed
  description: "Your description text here...",
  ctaText: "Book a Tour",  // Button text
  ctaLink: "#form",  // Where button links to
}
```

**What it changes:**
- Main headline on the homepage
- Description text below headline
- Call-to-action button text and link

---

### 2. **Warehouse Features** (Key Building Features section)

**File**: `src/config/warehouse-content.ts` → `warehouseFeatures` object

```typescript
warehouseFeatures: {
  title: "Key Building Features",
  subtitle: "Class A Specifications",
  features: [
    {
      label: "Site Area",
      value: "9,791 m²",
      description: "Optional description",  // Can be removed if not needed
      icon: "area",  // Options: area, rentable, warehouse, mezzanine, height, spacing
    },
    // Add more features...
  ],
}
```

**What it changes:**
- Section title and subtitle
- Feature cards showing building specifications
- Add/remove features by adding/removing items from the array

---

### 3. **Location Information**

**File**: `src/config/warehouse-content.ts` → `locations` object

```typescript
locations: {
  title: "Prime Strategic Location",
  subtitle: "Direct, efficient access to key industrial zones",
  highlights: [
    "Mexico City",
    "México–Querétaro Highway (57)",
    // Add more highlights...
  ],
  description: "Your location description...",
  addresses: [
    {
      name: "Tlalnepantla Warehouse",
      address: "Full address here...",
      mapLink: "https://maps.app.goo.gl/...",
      usps: ["USP 1", "USP 2"],  // Unique selling points
      idealFor: ["Use case 1", "Use case 2"],
    },
    // Add more locations...
  ],
}
```

**What it changes:**
- Location section title and description
- List of location highlights/access points
- Warehouse addresses and details

---

### 4. **Specifications** (Property Specifications section)

**File**: `src/config/warehouse-content.ts` → `specifications` object

```typescript
specifications: {
  title: "Warehouse Specifications",
  subtitle: "World-class construction features...",
  tabs: [
    {
      id: "building",
      label: "Building Features",
      items: [
        "Clear height: 11.0 m",
        "Column spacing: 12 × 24 m",
        // Add more items...
      ],
    },
    // Add more tabs...
  ],
}
```

**What it changes:**
- Specification section title
- Tabs and their content
- Add/remove tabs by adding/removing objects from the array

---

### 5. **Target Industries** (Ideal For section)

**File**: `src/config/warehouse-content.ts` → `targetIndustries` object

```typescript
targetIndustries: {
  title: "Ideal For",
  subtitle: "Perfect for various industrial operations",
  industries: [
    {
      name: "E-commerce",
      description: "Fulfillment centers and last-mile distribution",
    },
    // Add more industries...
  ],
}
```

---

### 6. **Availability & Pricing**

**File**: `src/config/warehouse-content.ts` → `availability` object

```typescript
availability: {
  status: "IMMEDIATE",
  statusText: "Perfect timeline for operational planning...",
  pricing: "Contact for pricing",
  pricingModel: "Per SQM plus VAT per month",
  leaseTerms: "36 months minimum contract",
}
```

---

### 7. **Call-to-Action Buttons**

**File**: `src/config/warehouse-content.ts` → `ctas` object

```typescript
ctas: {
  primary: {
    text: "Book a Tour",
    link: "#form",
  },
  secondary: {
    text: "Schedule a Call",
    link: "#form",
  },
  whatsapp: {
    text: "Contact via WhatsApp",
    link: "https://wa.me/1234567890",  // Add WhatsApp number
  },
  download: {
    text: "Download Brochure",
    link: "/path/to/brochure.pdf",  // Add brochure PDF path
  },
}
```

---

### 8. **Brand Information**

**File**: `src/config/warehouse-content.ts` → `brand` object

```typescript
brand: {
  name: "NEWMARK",
  logo: "/warehouse/newmark.png",  // Path to logo image
  website: "www.nmrk.com",
}
```

**What it changes:**
- Company name in header
- Logo (if using image logo)
- Website link in top bar

---

### 9. **Navigation Links**

**File**: `src/components/header/header.tsx` → `navLinks` array

```typescript
const navLinks = [
  'Home',
  'Locations',
  'Features',
  'Specifications',
  'Gallery',
  'Contact',
];
```

**What it changes:**
- Header navigation menu items
- Add/remove menu items by modifying the array

---

## 🖼️ Updating Images

### Banner Images
Images are imported in `src/components/banner/banner.tsx`:
- Currently using: `warehouseIndustrial`, `warehouseShot1`, `warehouseShot2`
- To change: Update the imports and array in the Banner component

### Feature Images
Images are imported in `src/components/apartments/apartments.tsx`:
- Currently using: `warehouseIndustrial`, `warehouseShot1`, `warehouseShot2`, `warehouseArea`
- To change: Update the `featureImages` array

### Adding New Images
1. Add image to `assets/warehouse/` folder
2. Import in `assets/index.ts`
3. Export from `assets/index.ts`
4. Use in component

---

## 🎨 Styling & Colors

Colors are defined in `src/app/globals.css`:
- `--red`: Primary accent color
- `--gray-dark`: Dark text color
- `--gray`: Secondary text color
- `--green-buy-now`: CTA button color

To change colors, update the CSS variables in `globals.css`.

---

## ✅ Quick Checklist for Content Updates

- [ ] Update banner title/description in `warehouse-content.ts`
- [ ] Update warehouse features in `warehouse-content.ts`
- [ ] Update location information in `warehouse-content.ts`
- [ ] Update specifications tabs in `warehouse-content.ts`
- [ ] Update CTA button texts/links in `warehouse-content.ts`
- [ ] Update brand name/logo in `warehouse-content.ts`
- [ ] Update navigation links in `header.tsx` (if needed)
- [ ] Replace images in `assets/warehouse/` folder (if needed)

---

## 💡 Tips

1. **Always edit `warehouse-content.ts`** - This is the single source of truth
2. **Keep descriptions concise** - Long text may break layout on mobile
3. **Test after changes** - Run the dev server to see updates
4. **Backup before major changes** - Save a copy of `warehouse-content.ts`

---

## 🚀 After Making Changes

1. Save the file (`warehouse-content.ts`)
2. The page will automatically reload (if dev server is running)
3. Check the page to verify changes
4. Test on mobile view (responsive design)

---

## 📞 Need Help?

- All content is in: `src/config/warehouse-content.ts`
- Component files are in: `src/components/`
- Images are in: `assets/warehouse/`

