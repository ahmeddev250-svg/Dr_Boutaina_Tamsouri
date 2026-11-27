import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Calendar, Clock, MessageCircle, Phone, X } from 'lucide-react';
import { Lang, PRACTICE } from '../data/practice';
import { TranslationContent } from '../data/translations';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService: string;
  t: TranslationContent;
  lang: Lang;
}

function getTodayISO(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function generate30MinSlots(startHour: number, endHour: number): string[] {
  const slots: string[] = [];
  for (let h = startHour; h < endHour; h += 1) {
    slots.push(`${String(h).padStart(2, '0')}:00`);
    slots.push(`${String(h).padStart(2, '0')}:30`);
  }
  return slots;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  initialService,
  t,
  lang,
}: AppointmentModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || t.services.items[0].title);
  const [date, setDate] = useState(getTodayISO());
  const [selectedSlot, setSelectedSlot] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const daySchedule = useMemo(() => {
    if (!date) return null;
    const [year, month, day] = date.split('-').map(Number);
    const weekday = new Date(year, month - 1, day).getDay();
    return PRACTICE.schedule[weekday] || null;
  }, [date]);

  const slots = useMemo(() => {
    if (!daySchedule) return [];
    return generate30MinSlots(daySchedule.start, daySchedule.end);
  }, [daySchedule]);

  useEffect(() => {
    if (slots.length > 0 && !slots.includes(selectedSlot)) {
      setSelectedSlot(slots[0]);
    } else if (slots.length === 0) {
      setSelectedSlot('');
    }
  }, [slots, selectedSlot]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!daySchedule || !selectedSlot) return;

    const msg =
      lang === 'ar'
        ? `السلام عليكم، أرغب في حجز موعد بمركز الدكتورة بثينة التمسوري:\n• الاسم: ${name || '-'}\n• الهاتف: ${phone || '-'}\n• الخدمة: ${service}\n• التاريخ: ${date}\n• الساعة: ${selectedSlot}\n• ملاحظات: ${notes || '-'}`
        : `Bonjour Centre Dentaire Dr. Boutaina Tamsouri, je souhaite prendre rendez-vous :\n• Nom : ${name || '-'}\n• Téléphone : ${phone || '-'}\n• Motif : ${service}\n• Date : ${date}\n• Créneau : ${selectedSlot}\n• Notes : ${notes || '-'}`;

    const url = `${PRACTICE.whatsappHref}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-[24px] bg-white border border-border shadow-elevated p-6 sm:p-8 my-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 end-4 w-9 h-9 rounded-full bg-secondary hover:bg-accent flex items-center justify-center text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 mb-6 pe-8">
          <h2 id="booking-modal-title" className="font-display font-bold text-2xl text-foreground">
            {t.modal.title}
          </h2>
          <p className="text-sm text-muted-foreground">{t.modal.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                {t.modal.patientName}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.modal.patientNamePlaceholder}
                className="w-full rounded-xl border border-input px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                {t.modal.patientPhone}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.modal.patientPhonePlaceholder}
                className="w-full rounded-xl border border-input px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                {t.modal.serviceLabel}
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-input px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {t.services.items.map((item) => (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{t.modal.dateLabel}</span>
                </span>
              </label>
              <input
                type="date"
                required
                min={getTodayISO()}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-input px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-2">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>{t.modal.slotLabel}</span>
              </span>
            </label>

            {daySchedule ? (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-36 overflow-y-auto p-1">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold border transition-colors ${
                      selectedSlot === slot
                        ? 'bg-primary text-white border-primary'
                        : 'bg-secondary/60 text-foreground border-border hover:bg-accent'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-warm-soft border border-warm/40 px-4 py-3 text-xs sm:text-sm font-medium text-foreground">
                {t.modal.closedDay}
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1.5">
              {t.modal.notesLabel}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.modal.notesPlaceholder}
              className="w-full rounded-xl border border-input px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            disabled={!daySchedule}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-semibold text-sm sm:text-base transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.modal.submitWhatsapp}</span>
          </button>

          <div className="text-center pt-1">
            <a
              href={PRACTICE.phoneHref}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.modal.orCall}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
