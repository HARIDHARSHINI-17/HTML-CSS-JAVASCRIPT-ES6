<?php
class chocolate {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color; 
  }
  public function intro() {
    echo "The chocolate is {$this->name} and the color is {$this->color}."; 
  }
}
class kitkat extends chocolate {
  public function message() {
    echo "sweetest one" ; 
  }
}
?>