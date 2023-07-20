import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ESLocale from "@fullcalendar/core/locales/es";
import React from "react";

function Calendar() {
  return (
    <div className="w-full max-w-md py-4">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={ESLocale}
        expandRows={false}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next",
        }}
        footerToolbar={{ end: "today" }}
        height={"auto"}
      />
    </div>
  );
}

export default Calendar;
