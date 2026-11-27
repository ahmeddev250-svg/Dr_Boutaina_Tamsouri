import logoImg from '../assets/images/logo.jpg';
import doctorPortrait from '../assets/images/dr-boutaina-tamsouri.png';
import receptionWallLogo from '../assets/images/reception-wall-logo.jpg';
import bureauConsultation from '../assets/images/bureau-consultation.jpg';
import salleAttente from '../assets/images/salle-attente.jpg';
import salleSoins from '../assets/images/salle-soins.jpg';
import plateauTechnique from '../assets/images/plateau-technique.jpg';
import casAligneur3d from '../assets/images/cas-aligneur-3d.png';
import casEsthetique1 from '../assets/images/cas-esthetique-1.jpg';
import casProtheseImplant from '../assets/images/cas-prothese-implant.jpg';
import casFacettesBlanchiment from '../assets/images/cas-facettes-blanchiment.jpg';
import casChirurgieRadio from '../assets/images/cas-chirurgie-radio.jpg';
import casCarieComposite from '../assets/images/cas-carie-composite.jpg';

export type Lang = 'fr' | 'ar';

export interface DayHours {
  start: number;
  end: number;
}

export const LOGO_CONFIG = {
  src: logoImg,
  alt: 'Logo Centre Dentaire Dr. Boutaina Tamsouri',
  monogram: 'BT',
  fallbackText: 'Dr. Boutaina Tamsouri',
};

export const IMAGES = {
  logo: logoImg,
  doctorPortrait,
  receptionWallLogo,
  bureauConsultation,
  salleAttente,
  salleSoins,
  plateauTechnique,
  casAligneur3d,
  casEsthetique1,
  casProtheseImplant,
  casFacettesBlanchiment,
  casChirurgieRadio,
  casCarieComposite,
};

export const PRACTICE: {
  name: string;
  shortName: string;
  doctorName: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappDisplay: string;
  whatsappNumber: string;
  whatsappHref: string;
  email: string;
  emailHref: string;
  addressFr: string;
  addressAr: string;
  landmarkFr: string;
  landmarkAr: string;
  plusCode: string;
  rating: string;
  reviewCount: number;
  facebookUrl: string;
  instagramUrl: string;
  mapUrl: string;
  mapEmbedUrl: string;
  schedule: Record<number, DayHours | null>;
} = {
  name: 'Centre Dentaire Dr. Boutaina Tamsouri',
  shortName: 'Dr. Boutaina Tamsouri',
  doctorName: 'Dr. Boutaina Tamsouri',
  phoneDisplay: '05 30 41 90 33',
  phoneHref: 'tel:+212530419033',
  whatsappDisplay: '06 09 14 34 96',
  whatsappNumber: '212609143496',
  whatsappHref: 'https://wa.me/212609143496',
  email: 'contact@drboutainatamsouri.ma',
  emailHref: 'mailto:contact@drboutainatamsouri.ma',
  addressFr: '34, Avenue Al Kifah, Bloc A, appt 01, 1er étage, Al Kamra, Rabat 10120',
  addressAr: '34، شارع الكفاح، عمارة أ، شقة 01، الطابق الأول، القمرة، الرباط 10120',
  landmarkFr: 'Cité CYM (Yaâcoub El Mansour) · En face de l’ancienne gare routière Al Kamra',
  landmarkAr: 'حي يعقوب المنصور · مقابل المحطة الطرقية القديمة القمرة',
  plusCode: 'X4RM+J3 Rabat',
  rating: '4.9',
  reviewCount: 39,
  facebookUrl:
    'https://web.facebook.com/p/Centre-dentaire-Dr-Boutaina-Tamsouri-61576168754113/?_rdc=1&_rdr#',
  instagramUrl: 'https://www.instagram.com/dr.boutaina.tamsouri/',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Centre+dentaire+Dr.+Boutaina+Tamsouri+34+Avenue+Al+Kifah+Rabat',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Centre+dentaire+Dr.+Boutaina+Tamsouri+34+Avenue+Al+Kifah+Rabat&t=&z=16&ie=UTF8&iwloc=&output=embed',
  schedule: {
    0: null,
    1: { start: 9, end: 18 },
    2: { start: 9, end: 18 },
    3: { start: 9, end: 18 },
    4: { start: 9, end: 18 },
    5: { start: 9, end: 18 },
    6: { start: 9, end: 14 },
  },
};
