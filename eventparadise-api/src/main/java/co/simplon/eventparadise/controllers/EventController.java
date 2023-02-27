package co.simplon.eventparadise.controllers;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.eventparadise.database.Database;
import co.simplon.eventparadise.dtos.EventCreateDto;
import co.simplon.eventparadise.dtos.EventView;
import co.simplon.eventparadise.entities.Event;

@RestController
@RequestMapping("/events")
@CrossOrigin
public class EventController {

    @GetMapping
    public Collection<EventView> getAll() {
	Collection<Event> events = Database.findAll();
	Collection<EventView> views = new ArrayList<>();
	for (Event event : events) {
	    EventView view = new EventView();
	    view.setId(event.getId());
	    view.setName(event.getName());
	    view.setDate(event.getDate());
	    // view.setPlace(event.getPlace());
	    // view.setTheme(event.getTheme());
	    // view.setRate(event.getRate());
	    view.setDescription(event.getDescription());
	    views.add(view);
	}
	return views;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void create(@RequestBody EventCreateDto inputs) {
	Event event = new Event();
	event.setName(inputs.getName());
	event.setDate(inputs.getDate());
	// event.setPlace(inputs.getPlaceId());
	// event.setTheme(inputs.getThemeId);
	// event.setRate(inputs.getRate);
	event.setDescription(inputs.getDescription());
	Database.saveEvent(event);
	System.out.println(event);
    }
}
