export type ColorKey =
  | 'primary'
  | 'border'
  | 'placeholder'
  | 'grey'
  | 'lightgrey'
  | 'white';

export type HeadingSize = 'large' | 'medium' | 'small';

export type ButtonSize = 'primary';

export type ButtonSchema = 'primary';

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
  borderRadius: string;
  buttonScheme: {
    [key in ButtonSchema]: {
      color: string;
      bg: string;
    };
  };
}

export const defaultTheme: Theme = {
  color: {
    primary: '#000000',
    border: '#e3e3e3',
    placeholder: '#cdcdcd',
    grey: '#ececec',
    lightgrey: '#f9f9f9',
    white: '#ffffff',
  },
  heading: {
    large: { fontSize: '2rem' },
    medium: { fontSize: '1.25rem' },
    small: { fontSize: '1rem' },
  },
  buttonSize: {
    primary: {
      fontSize: '1rem',
      padding: '0.5rem 1.375rem',
    },
  },
  borderRadius: '15px',
  buttonScheme: {
    primary: {
      color: '#ffffff',
      bg: '#3E5879',
    },
  },
};
