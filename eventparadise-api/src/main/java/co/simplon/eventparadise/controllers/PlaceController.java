package co.simplon.eventparadise.controllers;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.eventparadise.database.Database;
import co.simplon.eventparadise.dtos.PlaceView;
import co.simplon.eventparadise.entities.Place;

@RestController
@RequestMapping("/places")
@CrossOrigin
public class PlaceController {

    public PlaceController() {
	// TODO Auto-generated constructor stub
    }

    @GetMapping
    public Collection<PlaceView> getPlaces() {
	Collection<Place> places = Database.findPlaces();
	Collection<PlaceView> views = new ArrayList<>();
	for (Place place : places) {
	    System.out.println(place);
	    PlaceView view = new PlaceView();
	    view.setId(place.getId());
	    view.setName(place.getName());
	    views.add(view);
	}
	return views;
    }

}
