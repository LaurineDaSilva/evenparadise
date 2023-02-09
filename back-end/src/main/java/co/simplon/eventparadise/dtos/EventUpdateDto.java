package co.simplon.eventparadise.dtos;

import java.time.LocalDate;

public class EventUpdateDto {

    private String name;
    private LocalDate date;
    private long placeId;
    private long themeId;
    private double rate;
    private String description;

    public EventUpdateDto() {
	// TODO Auto-generated constructor stub
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

    public long getPlaceId() {
	return placeId;
    }

    public void setPlaceId(long placeId) {
	this.placeId = placeId;
    }

    public long getThemeId() {
	return themeId;
    }

    public void setThemeId(long themeId) {
	this.themeId = themeId;
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
	return "{name=" + name + ", date=" + date
		+ ", placeId=" + placeId + ", themeId="
		+ themeId + ", rate=" + rate
		+ ", description=" + description + "}";
    }

}
