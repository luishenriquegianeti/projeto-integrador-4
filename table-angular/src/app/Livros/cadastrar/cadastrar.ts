import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {
  dataSource!: CdkTableDataSourceInput<any>;
displayedColumns: any;

}
