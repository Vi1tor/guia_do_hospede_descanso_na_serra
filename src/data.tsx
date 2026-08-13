import React from 'react';
import { Clock, CheckCircle, Wifi, ShieldAlert, Droplets, Thermometer, Briefcase, MapPin, Coffee, FileText, Compass, UtensilsCrossed, LucideIcon } from 'lucide-react';
import {
  CheckinContent,
  ArrumacaoContent,
  WifiContent,
  RegrasContent,
  BanheiraContent,
  LencolContent,
  EsquecidosContent,
  LocalizacaoContent,
  CafeContent,
  CancelamentoContent,
  PasseiosContent,
  DeliveryContent
} from './content';

export const GALLERY_IMAGES: string[] = [
  '/gallery/chale-1.jpeg',
  '/gallery/chale-2.jpeg',
  '/gallery/chale-3.jpeg',
  '/gallery/chale-4.jpeg',
  '/gallery/chale-5.jpeg',
  '/gallery/chale-6.jpeg',
  '/gallery/chale-7.jpeg',
  '/gallery/chale-8.jpeg',
  '/gallery/chale-9.jpeg',
];

export interface CategoryData {
  id: string;
  title: string;
  icon: LucideIcon;
  content: React.ReactNode;
  highlight?: boolean;
}

export const CATEGORIES: CategoryData[] = [
  {
    id: 'checkin',
    title: 'Check-in e Check-out',
    icon: Clock,
    content: <CheckinContent />
  },
  {
    id: 'cafe',
    title: 'Café da Manhã',
    icon: Coffee,
    content: <CafeContent />
  },
  {
    id: 'arrumacao',
    title: 'Arrumação do Chalé',
    icon: CheckCircle,
    content: <ArrumacaoContent />
  },
  {
    id: 'wifi',
    title: 'Wi-Fi',
    icon: Wifi,
    content: <WifiContent />
  },
  {
    id: 'regras',
    title: 'Regras da Casa',
    icon: ShieldAlert,
    content: <RegrasContent />
  },
  {
    id: 'banheira',
    title: 'Banheira / Hidromassagem',
    icon: Droplets,
    content: <BanheiraContent />
  },
  {
    id: 'lencol',
    title: 'Lençol Térmico',
    icon: Thermometer,
    content: <LencolContent />
  },
  {
    id: 'esquecidos',
    title: 'Objetos Esquecidos',
    icon: Briefcase,
    content: <EsquecidosContent />
  },
  {
    id: 'cancelamento',
    title: 'Política de Cancelamento',
    icon: FileText,
    content: <CancelamentoContent />
  },
  {
    id: 'passeios',
    title: 'Passeios',
    icon: Compass,
    content: <PasseiosContent />
  },
  {
    id: 'delivery',
    title: 'Delivery e Restaurantes',
    icon: UtensilsCrossed,
    content: <DeliveryContent />
  },
  {
    id: 'localizacao',
    title: 'Como Chegar',
    icon: MapPin,
    content: <LocalizacaoContent />,
    highlight: true
  }
];

