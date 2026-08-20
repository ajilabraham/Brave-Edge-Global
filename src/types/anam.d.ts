import type * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'anam-agent': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id'?: string;
        layout?: 'floating' | 'inline';
        position?: string;
        'initial-state'?: 'expanded' | 'minimized';
        'ui-mute-button'?: string;
        'ui-text-input'?: string;
        'call-to-action'?: string;
        'avatar-url'?: string;
        'avatar-video-url'?: string;
        'agent-name'?: string;
        'api-base-url'?: string;
      };
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'anam-agent': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id'?: string;
        layout?: 'floating' | 'inline';
        position?: string;
        'initial-state'?: 'expanded' | 'minimized';
        'ui-mute-button'?: string;
        'ui-text-input'?: string;
        'call-to-action'?: string;
        'avatar-url'?: string;
        'avatar-video-url'?: string;
        'agent-name'?: string;
        'api-base-url'?: string;
      };
    }
  }
}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'anam-agent': any;
    }
  }
}
