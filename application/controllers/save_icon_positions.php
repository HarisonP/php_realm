<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Save_icon_positions extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		if (file_exists( 'C:/wamp/www/hackaton/application/resources/images/'. $_FILES["file"]["name"])){
			header('Location:'.$this->config->item('base_url').'/desktop');
		}
		else
		{	
			if(isset($_FILES["file"]["name"])){
				move_uploaded_file($_FILES["file"]["tmp_name"], 
					'C:/wamp/www/hackaton/application/resources/images/'. $_FILES["file"]["name"]);
				$this->db->order_by("left", "desc"); 
				$leftSorted = $this->db->get('icons')->result();
				$this->db->order_by("top", "desc"); 
				$left = intval($leftSorted[0]->left);
				$topSorted = $this->db->get('icons')->result();
				$top = intval($topSorted[0]->top);
				$details= array('name' => $_FILES["file"]["name"], 'left' => $left	, 'top'=> $top + 30 	);
				$this->db->insert('icons',$details);
				header('Location:'.$this->config->item('base_url').'desktop');
		
			}
		}

	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */