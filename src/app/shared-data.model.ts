export interface BotonOnlyText {
     texto: string;
     accion: () => void;
}

export interface BotonWithIcon {
  icono: string;
  background: string;
  accion: () => void;
}