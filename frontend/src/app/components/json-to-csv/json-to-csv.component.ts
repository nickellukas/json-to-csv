import { Component } from '@angular/core';
import { JsonToCsvService } from 'src/app/services/json-to-csv.service';

@Component({
  selector: 'app-json-to-csv',
  templateUrl: './json-to-csv.component.html',
  styleUrls: ['./json-to-csv.component.scss'],
})

export class JsonToCsvComponent {
  jsonInput: string = '';
  csvOutput: string = '';
  tableData: string[][] = [];
  errorMessage: string = '';

  constructor(private jsonToCsvService: JsonToCsvService) {}

  cleanPage(): void {
    this.jsonInput = '';
    this.csvOutput = '';
    this.tableData = [];
    this.errorMessage = '';
  }

  convertToCsv(): void {
    try {
      const jsonParsed = JSON.parse(this.jsonInput);

      this.jsonToCsvService.convertJsonToCsv(jsonParsed).subscribe({
        next: (response) => {
          this.csvOutput = response.csv;
          this.errorMessage = '';
          this.generateTableFromCsv(response.csv);
        },
        error: (error) => {
          this.errorMessage = error.error || 'Erro ao processar JSON.';
          this.csvOutput = '';
          this.tableData = [];
        },
      });
    } catch (e) {
      this.errorMessage = 'O JSON fornecido é inválido.';
      this.csvOutput = '';
      this.tableData = []
    }
  }

  generateTableFromCsv(csv: string): void {
    const rows = csv.trim().split('\n');
    this.tableData = rows.map((row) =>
      row.split(',').map((cell) => {
        const trimmedCell = cell.trim();
        return trimmedCell.replace(/^"(.*)"$/, '$1');
      })
    );
  }
  
}
