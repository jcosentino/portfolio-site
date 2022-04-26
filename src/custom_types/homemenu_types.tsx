import { ReactFragment } from 'react';

export namespace IHomeMenu {
  export interface HomeMenuProps {
    anchorId: string;
    headerTitle: string;
    renderItems: string[];
    customDiv: ReactFragment[];
  }
}
