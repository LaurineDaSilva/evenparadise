package co.simplon.eventparadise.controllers;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.eventparadise.database.DatabaseEvent;
import co.simplon.eventparadise.dtos.EventView;
import co.simplon.eventparadise.entities.Event;

@RestController
@RequestMapping("/events")
@CrossOrigin
public class EventController {

    public Collection<EventView> getAll() {
	Collection<Event> events = DatabaseEvent.findAll();
	Collection<EventView> views = new ArrayList<>();
	for (Event event : events) {
	    EventView view = new EventView();
	    view.setId(event.getId());
	    view.setName(event.getName());
	    view.setDate(event.getDate());
	    view.setPlace(event.getPlace());
	    view.setTheme(event.getTheme());
	    view.setRate(event.getRate());
	    view.setDescription(event.getDescription());
	}
	return views;
    }
}
