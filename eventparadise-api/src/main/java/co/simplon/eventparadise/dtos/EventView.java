package co.simplon.eventparadise.dtos;

import java.time.LocalDate;

import co.simplon.eventparadise.entities.Place;
import co.simplon.eventparadise.entities.Theme;

public class EventView {
    private Long id;
    private String name;
    private LocalDate date;
    private Place place;
    private Theme theme;
    private double rate;
    private String description;

    public EventView() {
	// TODO Auto-generated constructor stub
    }

    public Long getId() {
	return id;
    }

    public void setId(Long id) {
	this.id = id;
    }

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    public LocalDate getDate() {
	return date;
    }

    public void setDate(LocalDate date) {
	this.date = date;
    }

    public Place getPlace() {
	return place;
    }

    public void setPlace(Place place) {
	this.place = place;
    }

    public Theme getTheme() {
	return theme;
    }

    public void setTheme(Theme theme) {
	this.theme = theme;
    }

    public double getRate() {
	return rate;
    }

    public void setRate(double rate) {
	this.rate = rate;
    }

    public String getDescription() {
	return description;
    }

    public void setDescription(String description) {
	this.description = description;
    }

    @Override
    public String toString() {
	return "{id=" + id + ", name=" + name + ", date="
		+ date + ", place=" + place + ", theme="
		+ theme + ", rate=" + rate
		+ ", description=" + description + "}";
    }

}
