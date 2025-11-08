# Plan to Add Custom Pins with Icons on the Map

## Overview
Add custom pins (markers) to the existing MapLibre map in `app/page.tsx`. Pins will have custom icons and data will be stored in a centralized file for easy management.

## Steps

1. **Define Pin Data Structure**
   - Create a TypeScript interface for pins: `{ id: string, latitude: number, longitude: number, icon: string, label?: string }`
   - Icon will be a URL path to the image file.

2. **Create Centralized Pin Data File**
   - Location: `data/pins.ts`
   - Export an array of pin objects with sample data (e.g., locations in Ludwigshafen area).
   - Example: Points of interest like parks, restaurants, etc.

3. **Add Custom Icons**
   - Place icon images in `public/icons/` directory (create if needed).
   - Use PNG or SVG files for icons.
   - Ensure icons are optimized for web use.

4. **Modify Map Component (`app/page.tsx`)**
   - Import pin data from `data/pins.ts`.
   - Import `Marker` from `react-map-gl/maplibre`.
   - Dynamically import `Marker` to avoid SSR issues.
   - Inside the `Map` component, map over pins and render `Marker` for each.
   - Use `<img>` as child of `Marker` for custom icons.
   - Add popup for pin labels and extra information on click.

5. **Testing and Refinement**
   - Test rendering of pins at correct coordinates.
   - Verify icons display properly.
   - Check performance with multiple pins.
   - Add zoom-dependent visibility if needed.

## File Changes
- `data/pins.ts` (new)
- `app/page.tsx` (modify)
- `public/icons/` (new directory with icon files)
