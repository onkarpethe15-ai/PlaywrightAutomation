import ExcelJS from "exceljs";

async function radXl(excelpath: string) {
  let excel_data: any[][] = [];
  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile(excelpath);

  const sheet = workbook.getWorksheet("Sheet1");

  // Iterate rows
  sheet?.eachRow((row, rowNumber) => {
    // Iterate cells
    let eachrow_data: any[] = [];
    row.eachCell((cell, colNumber) => {
      console.log(rowNumber, colNumber, cell.value);
      eachrow_data.push(cell.value);
    });
    excel_data.push(eachrow_data);
  });
  return excel_data;
}

async function fetch_cordinates(excelpath: string, valueupdateof: string) {
  let obj_cordinate = {
    row: -1,
    col: -1,
  };
  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile(excelpath);

  const sheet = workbook.getWorksheet("Sheet1");

  sheet?.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === valueupdateof) {
        obj_cordinate.row = rowNumber;
        obj_cordinate.col = colNumber + 2;
      }
    });
  });
  return obj_cordinate;
}

async function writeXl(
  excelpath: string,
  valtochange: string,
  valueupdateof: string,
) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelpath);

  const sheet = workbook.getWorksheet("Sheet1");

  let co_ordinates = await fetch_cordinates(excelpath, valueupdateof);

  // Write value
  if (sheet) {
    sheet.getRow(co_ordinates.row).getCell(co_ordinates.col).value =
      valtochange;
  }
  // Save workbook

  await workbook.xlsx.writeFile(excelpath);
}

module.exports = { radXl, fetch_cordinates, writeXl };
