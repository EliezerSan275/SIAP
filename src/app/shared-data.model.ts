export interface BotonOnlyText {
     texto: string;
     accion: () => void;
}

export interface BotonWithIcon {
  icono: string;
  background: string;
  accion: () => void;
}

export interface ModelFirmas {
  title: string;
  imgFirma: string;
  nombre: string;
  cargo: string;
}

export interface ModelHeaderFormat {
  logo: string;
  gerencia: string;
  web: string;
  nameFormat: string;
  codigoFormat:String;
  titleFormat:String;
}