<?php

require_once 'autoload.php';
include 'PDF_MC_Table.php';

use mcpdf\PDF_MC_Table;

if (isset($_GET['save'])) {
  generatePdf($_GET, 'download');
}
elseif (isset($_GET['print'])){
  generatePdf($_GET, 'print');
}

function generatePdf(array $parameters, $action) {
  $mpdf = new PDF_MC_Table(['utf-8', 'A4', '8', '', 10, 10, 7, 7, 10, 10]);

  $mpdf->charset_in = 'cp1251';
  $mpdf->list_indent_first_level = 0;

  $mpdf->SetFont('Arial', '', 11);
  $mpdf->AddPage();

  $mpdf->Image('img_acquiring/logo.png', 80, 15, 51, 25);

  $mpdf->SetXY(5, 48);
  $mpdf->Cell(200, 10, 'ОПЕРАЦІЇ РОЗРАХУНКУ В ТОРГОВО СЕРВІСНОМУ', 0, 0, 'C', 0);
  $mpdf->SetXY(5, $mpdf->GetY() + 10);
  $mpdf->Cell(200, 10, 'ПІДПРИЄМСТВІ ' . $parameters['MERCH_NAME'], 0, 0, 'C', 0);

  $mpdf->SetXY(25, $mpdf->GetY() + 10);
  $mpdf->Cell(100, 10, 'Дата та час операції: ' . $parameters['TIMESTAMP'], 0, 0, 'L', 0);
  $mpdf->SetXY(25, $mpdf->GetY() + 10);
  $mpdf->Cell(100, 10, 'Код авторизації: ' . $parameters['AUTHCODE'], 0, 0, 'L', 0);
  $mpdf->SetXY(25, $mpdf->GetY() + 10);
  $mpdf->Cell(100, 10, 'Номер замовлення: ' . $parameters['ORDER'], 0, 0, 'L', 0);
  $mpdf->SetXY(25, $mpdf->GetY() + 10);
  $mpdf->Cell(100, 10, 'Номер картки: ' . $parameters['CARD'], 0, 0, 'L', 0);
  $mpdf->SetXY(25, $mpdf->GetY() + 10);
  $mpdf->Cell(100, 10, 'Номер операції: ' . $parameters['OPNUMBER'], 0, 0, 'L', 0);
  $mpdf->SetXY(25, $mpdf->GetY() + 10);
  $mpdf->Cell(100, 10, 'Отримувач: ' . $parameters['MERCH_NAME'], 0, 0, 'L', 0);
  $mpdf->SetXY(25, $mpdf->GetY() + 10);
  $mpdf->Cell(100, 10, 'Призначення платежу: ' . $parameters['DESC'], 0, 0, 'L', 0);
  $mpdf->SetXY(25, $mpdf->GetY() + 10);
  $mpdf->Cell(100, 10, 'Сума: ' . $parameters['AMOUNT'], 0, 0, 'L', 0);
  $mpdf->SetXY(25, $mpdf->GetY() + 10);
  $mpdf->Cell(100, 10, 'Статус операції: ' . $parameters['OPSTATUS'], 0, 0, 'L', 0);

  $mpdf->Image('img_acquiring/stamp.png', 155, $mpdf->GetY() + 10, 40, 40);

  $var = new DateTime();
  $date = $var->format("YmdHis");

  switch ($action) {
    case 'download':
      $mpdf->Output("acquiring" . $date . ".pdf", 'I');
      break;
    case 'save':
      return $mpdf->Output("name", "S");
    case 'print':
      $mpdf->SetJS('this.print();');
      $mpdf->Output("acquiring" . $date . ".pdf", 'I');
      break;
  }
  return FALSE;
}
