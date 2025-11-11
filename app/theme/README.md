# Theme

Purpose: Centralizes Gluestack UI theming and design tokens shared across platforms.

Key files:
- `gluestack.config.ts`: Spreads the base `gluestackUIConfig` and overrides brand tokens (colors, radii, font sizes, shadows).

Supabase tables: Not applicable.

Usage example:
```tsx
import themeConfig from 'app/theme/gluestack.config';

<GluestackUIProvider config={themeConfig}>{children}</GluestackUIProvider>
```
