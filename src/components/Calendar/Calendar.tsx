import { memo, useEffect } from "react";
import { EventsList } from "../EventsList/EventsList";
import { HourLabels } from "../HourLabels/HourLabels";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useEvents } from "../../contexts/EventContext";

export const Calendar = memo(() => {
    const { width: containerWidth, height: containerHeight } = useWindowSize();
    const { events, sortEvents } = useEvents();

    useEffect(() => {
        sortEvents();
    }, [sortEvents]);

    return (
        <div className="calendar-day" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
            <HourLabels containerHeight={containerHeight} />

            <div style={{ position: 'relative' }}>
                <EventsList
                    events={events}
                    containerWidth={containerWidth}
                    containerHeight={containerHeight}
                />
            </div>
        </div>
    )
})

Calendar.displayName = 'Calendar';