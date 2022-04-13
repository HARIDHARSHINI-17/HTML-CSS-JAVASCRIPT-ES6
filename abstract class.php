<?php
// Parent class
abstract class Chocolate{
  public $name;
  public function __construct($name) {
    $this->name = $name;
  }
  abstract public function description() : string;
}

// Child classes
class Kitkat extends Chocolate {
  public function description() : string {
    return " I'm an $this->name!";
  }
}

class Diarymilk extends Chocolate {
  public function description() : string {
    return " I'm a $this->name!";
  }
}

// Create objects from the child classes
$kitkat = new Kitkat("Kitkat");
echo $kitkat->description();
echo "<br>";

$diarymilk = new Diarymilk("Diarymilk");
echo $diarymilk->description();
echo "<br>";
?>