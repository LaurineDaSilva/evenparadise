package co.simplon.eventparadise.database;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import co.simplon.eventparadise.entities.Event;
import co.simplon.eventparadise.entities.Place;
import co.simplon.eventparadise.entities.Theme;

public class Database {

    private static Long placeId = 0L;
    private static Long themeId = 0L;
    private static Long eventId = 0L;
    private static final Map<Long, Place> PLACES = new HashMap<>();
    private static final Map<Long, Theme> THEMES = new HashMap<>();
    private static final Map<Long, Event> EVENTS = new HashMap<>();

    static {
	Place place = new Place();
	place.setName("Paris");
	Database.savePlace(place);
	place = new Place();
	place.setName("Rennes");
	Database.savePlace(place);
	place = new Place();
	place.setName("Marseille");
	Database.savePlace(place);
    }

    static {
	Theme theme = new Theme();
	theme.setName("Écologie");
	Database.saveTheme(theme);
	theme = new Theme();
	theme.setName("Ressources Humaines");
	Database.saveTheme(theme);
	theme = new Theme();
	theme.setName("Tech");
	Database.saveTheme(theme);
    }

    public static void saveEvent(Event event) {
	eventId++;
	event.setId(eventId);
	EVENTS.put(eventId, event);
    }

    public static void savePlace(Place place) {
	placeId++;
	place.setId(placeId);
	PLACES.put(eventId, place);
    }

    public static void saveTheme(Theme theme) {
	themeId++;
	theme.setId(themeId);
	THEMES.put(themeId, theme);
    }

    public static Collection<Event> findAll() {
	return EVENTS.values();
    }

    public static Collection<Place> findPlaces() {
	return PLACES.values();
    }

    public static Collection<Theme> findThemes() {
	return THEMES.values();
    }

}
