export interface IApplication {
  title: string;
  isBorderless?: boolean;
  isResizable?: boolean;
  isPinned?: boolean;
  isActive?: boolean;
    
  width: number;
  height: number;
  zIndex?: number;
  Component?: any;
  icon: string;
}

export interface IShortcut {
  icon: string;
  name: string;
  app_id: string;
}

export interface IWindow {
  exitWindow: () => void;
  id: string;
}

export interface IActivity {
  icon: string;
  title: string;
  description: string;
}

export interface IPosition {
  x: number;
  y: number;
}

export interface Apps {
  [key: string]: IApplication
}

