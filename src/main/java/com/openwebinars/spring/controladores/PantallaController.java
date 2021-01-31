package com.openwebinars.spring.controladores;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PantallaController{
	
	@GetMapping({"/login" })
	public String login(Model model) {
		return "login";
	}
	@GetMapping({"/registrar" })
	public String registrar(Model model) {
		return "registrar";
	}
	@GetMapping({"/reservar" })
	public String reservar(Model model) {
		return "reservar";
	}
	@GetMapping({"/reservarRestaurante" })
	public String reservarRestaurante(Model model) {
		return "reservarRestaurante";
	}
	@GetMapping({"/menu" })
	public String menu(Model model) {
		return "menu";
	}
    @RequestMapping(value = "/resultado", method = RequestMethod.POST)
	public String resultado(Model model) {
		return "resultado";
	}

	@GetMapping({"/reservado" })
	public String reservado(Model model) {
		return "reservado";
	}


}
