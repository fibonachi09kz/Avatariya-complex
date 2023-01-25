<?//require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");?>
<?
$dir = __DIR__ ."/";
$recursiveIteratorIterator = new \RegexIterator(new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($dir), \RecursiveIteratorIterator::SELF_FIRST), '/^.+(.html)$/i');
	$j=0;
	foreach ($recursiveIteratorIterator as $file)
	{
		$getFilename = $file->getPath() . '/' . $file->getFilename();
		$templatePath = str_replace($_SERVER["DOCUMENT_ROOT"],"",$getFilename);
		$getName = str_replace(__DIR__ ."/","",$getFilename);
		$link = "https://".$_SERVER["SERVER_NAME"].$templatePath;
		echo "<p><a target=\"_blank\" href=".$link.">".$getName."</a></p>";
	}
// print "<pre>";print_r(($link));print "</pre>";	
?>