<?php
class chocolate {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  public function description() {
    echo "The chocolate is {$this->name} and the color is {$this->color}.";
  }
}

class Kitkat extends chocolate{
  public $price;
  public function __construct($name, $color, $price) {
    $this->name = $name;
    $this->color = $color;
    $this->weight = $price;
  }
  public function description() {
    echo "The chocolate is {$this->name}, the color is {$this->color}, and the price is {$this->weight}.";
  }
}

$kitkat = new Kitkat("kitkat", "black", 25);
$kitkat->description();
?>