import { gluestackUIConfig } from '@gluestack-ui/config';

const themeConfig = {
  ...gluestackUIConfig,
  tokens: {
    ...gluestackUIConfig.tokens,
    colors: {
      ...gluestackUIConfig.tokens.colors,
      primary0: '#2563EB',
      backgroundLight0: '#FFFFFF',
      backgroundLight50: '#F8FAFC',
      backgroundLight100: '#F1F5F9',
      backgroundLight300: '#E5E7EB',
      textLight0: '#0F172A',
      textLight200: '#1E293B',
      textLight500: '#6B7280',
      dividerLight: '#E5E7EB',
      shadowColor: '#0F172A',
    },
    space: {
      ...gluestackUIConfig.tokens.space,
      '1': 4,
      '2': 8,
      '3': 12,
      '4': 16,
      '5': 20,
      '6': 24,
      '7': 32,
    },
    radii: {
      ...gluestackUIConfig.tokens.radii,
      sm: 6,
      md: 10,
      lg: 14,
      xl: 18,
    },
    fontSizes: {
      ...gluestackUIConfig.tokens.fontSizes,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
    },
    shadows: {
      ...gluestackUIConfig.tokens.shadows,
      card: {
        shadowColor: '$shadowColor',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: {
          width: 0,
          height: 4,
        },
      },
    },
  },
};

export default themeConfig;
