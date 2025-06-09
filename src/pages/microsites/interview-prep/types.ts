
import React from 'react';

export interface PresentationPage {
  id: number;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  speakerNotes: string;
}
