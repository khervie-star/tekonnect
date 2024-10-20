import { ImageSourcePropType } from "react-native";

export interface GenderOption {
  value: string;
  label: string;
  gradientColors: string[];
  icon: string;
}

export interface Role {
  id: string;
  name: string;
  icon: string;
}

export interface LinkType {
  id: string;
  name: string;
  icon: string | ImageSourcePropType;
  placeholder: string;
  handle: string;
}

export interface UserLink {
  type: LinkType;
  value: string;
}
