import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements AfterViewInit {
  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'valdir Cezar',
      cpf: '123.456.789-10',
      email: 'email@email.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '15/08/2021'
    }
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes' ];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
