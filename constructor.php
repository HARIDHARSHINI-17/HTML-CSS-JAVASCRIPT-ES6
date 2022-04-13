<?php

class BankAccount
{
	private $accountNumber;
	private $balance;

	public function __construct($accountNumber, $balance)
	{
		$this->accountNumber = $accountNumber;
		$this->balance = balance;
	}	
}
$account = new BankAccount(1,1000);
echo $account->accountNumber;
echo $account->$balance;
?>