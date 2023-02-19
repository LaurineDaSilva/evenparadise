package co.simplon.eventparadise.database;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import co.simplon.eventparadise.entities.Event;

public class DatabaseEvent {

    private static Long eventId = 0L;
    private static final Map<Long, Event> EVENTS = new HashMap<>();

    public static void saveEvent(Event event) {
	eventId++;
	event.setId(eventId);
	EVENTS.put(eventId, event);
    }

    public static Collection<Event> findAll() {
	return EVENTS.values();
    }

}
