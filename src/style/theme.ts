export type ColorKey =
  | 'primary'
  | 'border'
  | 'placeholder'
  | 'deepGrey'
  | 'grey'
  | 'lightgrey'
  | 'white'
  | 'red'
  | 'green'
  | 'navy';

export type HeadingSize =
  | 'large'
  | 'semiLarge'
  | 'medium'
  | 'semiSmall'
  | 'small'
  | 'verySmall';

export type ButtonSize = 'primary' | 'large' | 'small';

export type ButtonSchema = 'primary';

export type LayoutWidth = 'desktop' | 'tablet' | 'mobile';

export type BorderRadiusSize = 'primary' | 'large' | 'small';

export type MediaQuery = 'mobile' | 'tablet' | 'desktop';

interface Theme {
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
      tabletFontSize: string;
    };
  };
  buttonSize: {
    [key in ButtonSize]: {
      fontSize: string;
      padding: string;
    };
  };
  borderRadius: {
    [key in BorderRadiusSize]: string;
  };
  buttonScheme: {
    [key in ButtonSchema]: {
      color: string;
      bg: string;
    };
  };
  layout: {
    width: {
      [key in LayoutWidth]: string;
    };
  };
  mediaQuery: {
    [key in MediaQuery]: string;
  };
}

export const defaultTheme: Theme = {
  color: {
    primary: '#000000',
    border: '#e3e3e3',
    placeholder: '#cdcdcd',
    deepGrey: '#6D6D6D',
    grey: '#ececec',
    lightgrey: '#f9f9f9',
    white: '#ffffff',
    red: '#ff0000',
    green: '#a2d393',
    navy: '#213555',
  },
  heading: {
    large: { fontSize: '1.75rem', tabletFontSize: '1.5rem' },
    semiLarge: { fontSize: '1.5rem', tabletFontSize: '1.25rem' },
    medium: { fontSize: '1.25rem', tabletFontSize: '1.1rem' },
    semiSmall: { fontSize: '1.1rem', tabletFontSize: '0.9rem' },
    small: { fontSize: '1rem', tabletFontSize: '0.8rem' },
    verySmall: { fontSize: '0.5rem', tabletFontSize: '0.4rem' },
  },
  buttonSize: {
    small: {
      fontSize: '0.8rem',
      padding: '0.35rem 1rem',
    },
    primary: {
      fontSize: '1rem',
      padding: '0.5rem 1.375rem',
    },
    large: {
      fontSize: '1rem',
      padding: '1.25rem 1.875rem',
    },
  },
  borderRadius: {
    small: '10px',
    primary: '15px',
    large: '30px',
  },
  buttonScheme: {
    primary: {
      color: '#ffffff',
      bg: '#3E5879',
    },
  },
  layout: {
    width: {
      desktop: '1440px',
      tablet: '768px',
      mobile: '320px',
    },
  },
  mediaQuery: {
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 1024px)',
    desktop: '(min-width: 1025px)',
  },
};
