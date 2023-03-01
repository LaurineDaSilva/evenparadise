package co.simplon.eventparadise.controllers;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.eventparadise.database.Database;
import co.simplon.eventparadise.dtos.ThemeView;
import co.simplon.eventparadise.entities.Theme;

@RestController
@RequestMapping("/themes")
@CrossOrigin
public class ThemeController {

    @GetMapping
    public Collection<ThemeView> getThemes() {
	Collection<Theme> themes = Database.findThemes();
	Collection<ThemeView> views = new ArrayList<>();
	for (Theme theme : themes) {
	    System.out.println(theme);
	    ThemeView view = new ThemeView();
	    view.setId(theme.getId());
	    view.setName(theme.getName());
	    views.add(view);
	}
	return views;
    }

}
