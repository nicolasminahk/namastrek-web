import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Calendario = () => {
    return (
        <div style={{ display: 'flex', alignContent: 'center', flex: 1 }}>
            <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </div>
    )
}

export default Calendario
