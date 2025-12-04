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
  "channel-image"?: string;
  "main-image"?: string;
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
  "side-images"?: ProjectImage[];
  "layout-images"?: ProjectImage[];
}

export interface MotionProcessImages {
  "set1"?: ProjectImage[];
  "banner"?: string;
  "set2"?: ProjectImage[];
}

export interface ProjectMetadata {
  year: string;
  role: string;
  tools: string;
  type: string;
}

export interface ProjectData {
  project: string;
  title: string;
  description1: string;
  videoId?: string;
  videoSrc?: string;
  wireframeVideoSrc?: string;
  videoTitle?: string;
  metadata?: ProjectMetadata;
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
  "motion-process-images-sets"?: MotionProcessImages;
  "motion-process-text-blocks"?: ProjectTextBlock[];
  "motion-text-block-1"?: string;
  "motion-text-block-2"?: string;
  "motion-text-block-3"?: string;
  "motion-text-block-4"?: string;
  "credits-gifs"?: ProjectImage[];
  "sound-design"?: SoundDesign;
  "preview-media"?: ProjectImage;
  credits?: Credit[];
  moreCredits?: {
    role: string;
    entity: string;
  }[];
  inProduction?: boolean;
}
