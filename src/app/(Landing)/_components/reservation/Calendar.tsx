import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import ESLocale from '@fullcalendar/core/locales/es';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import useCitaStore from '@/citas/useCitaStore';
import { shallow } from 'zustand/shallow';
import Btn from '@/app/_components/Btn';

function Calendar({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
  const today = new Date().setHours(0, 0, 0, 0);
  const [view, setView] = useState('dayGridMonth');
  const calendarRef = useRef<FullCalendar>(null);
  const { setField } = useCitaStore(
    state => ({
      setField: state.setField,
    }),
    shallow
  );
  const onDatePick = (info: DateClickArg) => {
    const [ISODateString, ISOTimeString] = info.date.toISOString().split('T');
    const ISOTodayString = new Date(today).toISOString().split('T')[0];

    if (ISODateString !== ISOTodayString && info.date.getTime() < today)
      return alert('Selecciona una fecha válida');

    if (!calendarRef.current) return;

    const calendarApi = calendarRef.current.getApi();
    if (info.view.type === 'dayGridMonth') {
      calendarApi.gotoDate(info.date);
      calendarApi.changeView('timeGridDay');
      setField('fecha', ISODateString);
      setView('timeGridDay');
    } else {
      setField('hora', ISOTimeString.slice(0, 5));
      setField('fecha', ISODateString);
      setStep(prev => prev + 1);
    }
  };

  return (
    <div className="w-full max-w-md py-4">
      <FullCalendar
        ref={calendarRef}
        firstDay={0}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        allDaySlot={false}
        slotLabelFormat={{
          hour: '2-digit',
          minute: '2-digit',
          omitZeroMinute: false,
        }}
        slotLabelInterval="00:30"
        dateClick={onDatePick}
        locale={ESLocale}
        expandRows={false}
        timeZone="America/Mexico_City"
        headerToolbar={{
          start: 'prev',
          center: 'title',
          end: 'next',
        }}
      />
      <div className="flex justify-between items-center mt-8">
        <Btn
          className="py-2 px-4"
          onClick={() => {
            if (!calendarRef.current) return;

            const api = calendarRef.current.getApi();

            api.changeView('dayGridMonth');
            setView('dayGridMonth');
          }}
          disabled={view === 'dayGridMonth'}
        >
          Volver
        </Btn>
        <Btn
          className="py-2 px-4"
          onClick={() => {
            if (!calendarRef.current) return;

            const api = calendarRef.current.getApi();

            if (api.view.type === 'dayGridMonth') {
              api.changeView('timeGridDay');
              setView('timeGridDay');
            } else {
              setStep(prev => prev + 1);
            }
          }}
        >
          Siguiente
        </Btn>
      </div>
    </div>
  );
}

export default Calendar;
