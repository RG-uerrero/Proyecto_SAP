<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Template extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->helper('url');
    }

    public function index() {
        $this->load->view('header');
        $this->load->view('sidebar');
        $this->load->view('template/profesionales');
        $this->load->view('footer');
    }

    public function profesionales() {
        $this->load->view('header');
        $this->load->view('sidebar');
        $this->load->view('template/profesionales');
        $this->load->view('footer');
    }

    public function agendamiento() {
        $this->load->view('header');
        $this->load->view('sidebar');
        $this->load->view('template/agendamiento');
        $this->load->view('footer');
    }

    public function consulta() {
        $this->load->view('header');
        $this->load->view('sidebar');
        $this->load->view('template/consulta');
        $this->load->view('footer');
    }

    public function operador() {
        $this->load->view('header');
        $this->load->view('sidebar');
        $this->load->view('template/operador');
        $this->load->view('footer');
    }

    public function pacientes() {
        $this->load->view('header');
        $this->load->view('sidebar');
        $this->load->view('template/pacientes');
        $this->load->view('footer');
    }

    public function historiaclinica() {
        $this->load->view('header');
        $this->load->view('sidebar');
        $this->load->view('template/historiaclinica');
        $this->load->view('footer');
    }


    public function reportes() {
        $this->load->view('header');
        $this->load->view('sidebar');
        $this->load->view('template/reportes');
        $this->load->view('footer');
    }


}