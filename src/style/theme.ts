export type ColorKey =
  | 'primary'
  | 'border'
  | 'placeholder'
  | 'deepgrey'
  | 'grey'
  | 'lightgrey'
  | 'white'
  | 'red'
  | 'navy';

export type HeadingSize =
  | 'large'
  | 'semiLarge'
  | 'medium'
  | 'small'
  | 'verySmall';

export type ButtonSize = 'primary' | 'large';

export type ButtonSchema = 'primary';

export type LayoutWidth = 'desktop' | 'tablet' | 'mobile';

export type BorderRadiusSize = 'primary' | 'large';
interface Theme {
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
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
}

export const defaultTheme: Theme = {
  color: {
    primary: '#000000',
    border: '#e3e3e3',
    placeholder: '#cdcdcd',
    deepgrey: '#6D6D6D',
    grey: '#ececec',
    lightgrey: '#f9f9f9',
    white: '#ffffff',
    red: '#ff0000',
    navy: '#213555',
  },
  heading: {
    large: { fontSize: '1.75rem' },
    semiLarge: { fontSize: '1.5rem' },
    medium: { fontSize: '1.25rem' },
    small: { fontSize: '1rem' },
    verySmall: { fontSize: '0.5rem' },
  },
  buttonSize: {
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
};
