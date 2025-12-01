export interface ProjectImage {
  src: string;
  alt: string;
  type?: string;
}

export interface ProjectTextBlock {
  paragraph: string;
}

export interface SoundDesign {
  title: string;
  description: string;
  "audio-caption"?: string;
}

export interface Credit {
  role: string;
  name: string;
}

export interface StyleframesBreakdown {
  "top-images"?: ProjectImage[];
  "top-text"?: {
    title: string;
    content: string[];
  };
  "grid-media"?: ProjectImage[];
}

export interface ProjectData {
  project: string;
  title: string;
  description1: string;
  styleframes: ProjectImage[];
  "styleframes-title"?: string;
  "styleframes-breakdown"?: StyleframesBreakdown;
  "design-process-title"?: string;
  "design-process-par"?: string;
  "design-process-images"?: ProjectImage[];
  "design-text-block-1"?: string;
  "design-text-block-2"?: string;
  "design-challenge-title"?: string;
  "motion-process-title"?: string;
  "motion-process-par"?: string;
  "motion-process-images"?: ProjectImage[];
  "motion-process-text-blocks"?: ProjectTextBlock[];
  "motion-text-block-1"?: string;
  "motion-text-block-2"?: string;
  "motion-text-block-3"?: string;
  "motion-text-block-4"?: string;
  "credits-gifs"?: ProjectImage[];
  "sound-design"?: SoundDesign;
  credits?: Credit[];
}

