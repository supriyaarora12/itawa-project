# NEWMARK Warehouse Rental - Template Transformation Plan

## Overview
Converting ITAWA (residential/apartment) template → NEWMARK (industrial warehouse rental) landing page

---

## 1. HEADER COMPONENT (`src/components/header/header.tsx`)

### Changes Needed:
- ✅ **Remove**: "envato market" logo section (lines 35-50)
- ✅ **Update**: "Buy now" button → "Schedule a Call" or "Book a Tour"
- ✅ **Replace**: "ITAWA" logo → "NEWMARK" logo (use logo from assets/warehouse/newmark.png)
- ✅ **Update Navigation Links**:
  ```
  Current: Home, Apartments, Amenities, Floor Plans, Specification, Gallery, Location, Reviews, Contact
  New: Home, Locations, Features, Specifications, Gallery, Location, Contact
  ```
- ✅ **Update Colors**: Replace red accent with NEWMARK brand colors (check brand guidelines)

---

## 2. BANNER/HERO SECTION (`src/components/banner/banner.tsx`)

### Changes Needed:
- ✅ **Update Headline**:
  ```
  Current: "Your Dream House is Waiting For You"
  New: "BRAND-NEW CLASS A INDUSTRIAL FACILITY FOR LEASE – PRIME LOCATION FOR LOGISTICS & LAST-MILE OPERATIONS"
  ```
- ✅ **Update Description**: Use property description from client:
  ```
  "Introducing one of the most attractive new industrial developments in Tlalnepantla—a Class A distribution facility strategically located in the highly demanded Barrientos submarket, the epicenter of logistics, e-commerce, transportation, and last-mile delivery for Mexico City and the entire Metro Area."
  ```
- ✅ **Update CTA Button**: "Enquire Now" → "Book a Tour" or "Schedule a Call"
- ✅ **Update Images**: Replace apartment images with warehouse images from `assets/warehouse/`

---

## 3. APARTMENTS SECTION → WAREHOUSE FEATURES (`src/components/apartments/apartments.tsx`)

### Transformation:
- ✅ **Rename Component**: `apartments.tsx` → `warehouse-features.tsx` (or keep name, update content)
- ✅ **Update Content**: Replace apartment cards with warehouse features:
  - **Key Building Features** (Class A Specifications)
  - **Location Advantages** (Tlalnepantla vs Jilotepec)
  - **Ideal For** (use cases)
  - **Availability Status**

### Data Structure:
```typescript
const warehouseFeatures = {
  tlalnepantla: {
    title: "Tlalnepantla Warehouse",
    siteArea: "9,791 m²",
    rentableArea: "7,390 m²",
    warehouseArea: "6,590 m²",
    mezzanine: "800 m²",
    clearHeight: "11.0 m",
    columnSpacing: "12 × 24 m",
    // ... more features
  },
  jilotepec: {
    // Similar structure
  }
}
```

---

## 4. LOCATIONS SECTION (`src/components/locations/locations.tsx`)

### Changes Needed:
- ✅ **Update Title**: "Location Advantages" → "Prime Strategic Location"
- ✅ **Update Highlights**: Replace residential features with warehouse location benefits:
  ```
  Current: "Located in Heart of the City", "On Main City Road", etc.
  New: 
  - "Direct access to Mexico City"
  - "México–Querétaro Highway (57)"
  - "Vallejo Industrial Zone"
  - "Circuito Exterior Mexiquense"
  - "Key logistics and industrial hubs"
  - "Extremely low vacancy rates"
  ```
- ✅ **Add Map Integration**: Include Google Maps links for both locations
- ✅ **Add Location Comparison**: Show Tlalnepantla vs Jilotepec advantages

---

## 5. PROPERTY SPECIFICATION (`src/components/property/property.tsx`)

### Changes Needed:
- ✅ **Update Title**: "Property Specification" → "Warehouse Specifications"
- ✅ **Update Tabs**:
  ```
  Current: Wall Finishing, Flooring, Toilet Fittings, Kitchen
  New: Building Features, Infrastructure, Security & Safety, Operational Features
  ```
- ✅ **Update Specifications**:
  ```typescript
  const specifications = {
    building: {
      title: "Building Features",
      items: [
        "Clear height: 11.0 m",
        "Column spacing: 12 × 24 m",
        "Walls: Reinforced concrete and Insulated metal panel",
        "Roof: KR-18 panel with thermo-acoustic insulation",
        "Natural lighting: 10%",
        "Artificial lighting: LED fixtures"
      ]
    },
    infrastructure: {
      title: "Infrastructure",
      items: [
        "Parking facilities",
        "Truck docks",
        "Office space (800 m² mezzanine)",
        "Power supply",
        "Fire protection system",
        "Lightning protection system"
      ]
    },
    security: {
      title: "Security & Safety",
      items: [
        "24/7 Security",
        "CCTV surveillance",
        "Controlled access guardhouse",
        "Fire protection: Hydrants, hoses and cabinets"
      ]
    },
    operational: {
      title: "Operational Features",
      items: [
        "24x7 access",
        "Automated systems",
        "High ceilings (11m clear height)",
        "Racking support",
        "Loading docks",
        "Cross-docking capabilities"
      ]
    }
  }
  ```

---

## 6. NEW COMPONENTS TO CREATE

### A. Lead Form Component (`src/components/lead-form/lead-form.tsx`)
**Required Fields** (from questionnaire):
- Full name
- Company name
- Phone number
- Email
- Warehouse size requirement
- Preferred location (Tlalnepantla / Jilotepec)
- Budget
- Lease duration
- Timeline to move in
- Additional notes

**CTAs**:
- "Book a Tour"
- "Schedule a Call"
- WhatsApp integration
- Download brochure option

### B. Location Comparison Component (`src/components/location-comparison/location-comparison.tsx`)
Compare Tlalnepantla vs Jilotepec:
- Location advantages
- Best for (use cases)
- Connectivity
- Operational profile

### C. Ideal For Section (`src/components/ideal-for/ideal-for.tsx`)
Show target industries:
- E-commerce
- Logistics & Distribution (3PL)
- Manufacturing
- Retail supply chain
- etc.

### D. Contact Methods Component (`src/components/contact-methods/contact-methods.tsx`)
- Lead form
- WhatsApp button
- Call button
- Download brochure

---

## 7. GALLERY SECTION (if exists or create new)

### Update:
- ✅ Use warehouse images from `assets/warehouse/`
- ✅ Include: drone shots, interior shots, exterior shots, loading docks, etc.
- ✅ Add floor plan PDF download option

---

## 8. PROJECT LOCATION (`src/components/projlocation/projlocation.tsx`)

### Changes Needed:
- ✅ **Update**: Show warehouse locations instead of residential
- ✅ **Add**: Google Maps embed for both locations
- ✅ **Add**: Location addresses:
  - Location 1: Avenida Prolongación Hidalgo No.3, Col. Pueblo San Pedro Barrientos, Municipio Tlalnepantla De Baez, Edo. De México, C.P. 54010
  - Location 2: Manzana 057, Jilotepec de Molina Enríquez, Edo. De Mexico, C.P. 54250

---

## 9. CLIENT REVIEWS (`src/components/ourclient/ourclient.tsx`)

### Changes Needed:
- ✅ **Note**: Client said "No testimonials" - can remove or hide this section
- ✅ **Alternative**: Show trust elements, certifications (if any), or remove entirely

---

## 10. GLOBAL STYLES & BRANDING (`src/app/globals.css`)

### Changes Needed:
- ✅ **Update CSS Variables**: Replace ITAWA colors with NEWMARK brand colors
- ✅ **Update Fonts**: Use NEWMARK brand fonts (from brand guidelines)
- ✅ **Update Theme**: Change from residential (pink/red) to industrial theme

---

## 11. METADATA & SEO (`src/app/layout.tsx`)

### Changes Needed:
- ✅ **Update Title**: "NEWMARK - Class A Industrial Warehouses for Lease in Mexico"
- ✅ **Update Description**: Use property description for SEO
- ✅ **Add Keywords**: Include target keywords from questionnaire

---

## 12. MAIN PAGE STRUCTURE (`src/app/page.tsx`)

### Updated Structure:
```tsx
<main>
  <Banner /> {/* Hero with warehouse imagery */}
  <WarehouseFeatures /> {/* Key building features */}
  <LocationComparison /> {/* Tlalnepantla vs Jilotepec */}
  <Locations /> {/* Strategic location advantages */}
  <PropertySpecification /> {/* Warehouse specs */}
  <IdealFor /> {/* Target industries */}
  <Gallery /> {/* Warehouse images */}
  <ProjectLocation /> {/* Maps and addresses */}
  <LeadForm /> {/* Contact form */}
  <ContactMethods /> {/* WhatsApp, Call, etc. */}
</main>
```

---

## 13. ASSETS TO UPDATE

### Images to Replace:
- ✅ Banner images → Warehouse images
- ✅ Property images → Warehouse interior/exterior
- ✅ Location images → Warehouse location maps
- ✅ Logo → NEWMARK logo (`assets/warehouse/newmark.png`)

### New Assets Needed:
- Warehouse photos (interior, exterior, loading docks)
- Drone footage (if available)
- Floor plan PDFs
- Location maps

---

## 14. CONTENT UPDATES SUMMARY

### Key Messages to Incorporate:
1. **USP for Tlalnepantla**:
   - Urban/infill advantage
   - Last-mile operations
   - Immediate access to Mexico City

2. **USP for Jilotepec**:
   - Regional logistics & scalability
   - Highway connectivity (57, Arco Norte)
   - Cost advantage

3. **Taglines** (from questionnaire):
   - "Discover industrial spaces engineered for efficiency and optimized for logistics performance."
   - "Accelerate your distribution network with premium warehouse options..."
   - etc.

4. **Availability**: "IMMEDIATE" - highlight prominently

5. **Lease Terms**: 36 months minimum, per SQM + VAT per month

---

## 15. LEGAL/COMPLIANCE

### Required:
- ✅ Privacy Policy page (URL needed)
- ✅ Terms & Conditions page (URL needed)
- ✅ Disclaimer (provided in questionnaire):
  ```
  "This information has been prepared by Newmark for general information only. 
  Newmark makes no warranties nor representations of any kind..."
  ```

---

## 16. MULTILINGUAL SUPPORT

### Note:
- Client wants both English and Spanish
- Consider adding language switcher
- Or create separate pages/routes for each language

---

## PRIORITY ORDER FOR IMPLEMENTATION:

1. **Header** - Brand identity (logo, navigation)
2. **Banner/Hero** - First impression with warehouse content
3. **Warehouse Features** - Core property information
4. **Lead Form** - Lead generation (critical for Google Ads)
5. **Location Section** - Strategic positioning
6. **Specifications** - Detailed features
7. **Contact Methods** - WhatsApp, Call integration
8. **Gallery** - Visual assets
9. **Other sections** - Polish and refinement

---

## NOTES:
- Keep template structure but replace all content
- Maintain responsive design
- Ensure all CTAs work (Book a Tour, Schedule a Call, WhatsApp)
- Test lead form submission
- Add Google Tag Manager / Analytics tracking
- Optimize for SEO with target keywords

