import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import ESLocale from '@fullcalendar/core/locales/es';
import React, { useRef } from 'react';
import useCitaStore from '@/citas/useCitaStore';
import { shallow } from 'zustand/shallow';

function Calendar() {
  const today = new Date().setHours(0, 0, 0, 0);
  const calendarRef = useRef<FullCalendar>(null);
  const { setField, fecha, hora } = useCitaStore(
    state => ({
      setField: state.setField,
      fecha: state.fecha,
      hora: state.hora,
    }),
    shallow
  );
  const onDatePick = (info: DateClickArg) => {
    if (new Date(info.date).setDate(info.date.getUTCDate() + 1) < today)
      return alert('Selecciona una fecha valida');

    if (!calendarRef.current) return;

    const calendarApi = calendarRef.current.getApi();
    if (info.view.type === 'dayGridMonth') {
      calendarApi.gotoDate(info.date);
      calendarApi.changeView('timeGridDay');
      setField('fecha', info.date.toUTCString());
    } else {
      setField('hora', info.dateStr.split('T')[1].slice(0, 5));
      console.log(`Fecha: ${fecha} Hora: ${hora}`);
    }
  };

  return (
    <div className="w-full max-w-md py-4">
      <button
        className="bg-slate-700 text-slate-200 py-2 px-4 my-2 rounded"
        onClick={() => {
          if (!calendarRef.current) return;

          const api = calendarRef.current.getApi();

          api.changeView('dayGridMonth');
        }}
      >
        Volver
      </button>
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
        // height={'auto'}
      />
    </div>
  );
}

export default Calendar;
