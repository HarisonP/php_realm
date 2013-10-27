<?php

class Model_icons extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }
    function getPositons(){
    	$result=$this->db->get('icons')->result();
    	return $result;
    }

}