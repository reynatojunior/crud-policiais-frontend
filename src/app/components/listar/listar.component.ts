import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CrudPolicialService } from '../../services/crud-policial.service';
import { Policial } from '../../models/policial.interface'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule], 
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  policiais: Policial[] = [];
  policialEmEdicao: Policial | null = null;
  editarForm: FormGroup;

  constructor(
    private crudPolicialService: CrudPolicialService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.editarForm = this.fb.group({
      id: [''],
      rg_civil: ['', Validators.required],
      rg_militar: ['', Validators.required],
      cpf: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      matricula: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getPoliciais();
  }

  getPoliciais(): void {
    this.crudPolicialService.getPoliciais().subscribe({
      next: (data) => {
        this.policiais = data;
      },
      error: (err) => {
        console.error('Erro ao buscar policiais:', err);
        alert('Erro ao buscar a lista de policiais.');
      }
    });
  }

  onExcluir(id: number | undefined): void {
    if (id !== undefined && confirm('Tem certeza que deseja excluir este policial?')) {
      this.crudPolicialService.excluirPolicial(id).subscribe({
        next: () => {
          alert('Policial excluído com sucesso!');
          this.getPoliciais();
        },
        error: (err) => {
          console.error('Erro ao excluir policial:', err);
          alert('Erro ao excluir policial.');
        }
      });
    }
  }

  onEditar(policial: Policial): void {
    this.policialEmEdicao = { ...policial }; 
    this.editarForm.patchValue(this.policialEmEdicao);
  }

  onSalvarEdicao(): void {
    if (this.editarForm.valid) {
      const policialAtualizado: Policial = this.editarForm.value;
      this.crudPolicialService.atualizarPolicial(policialAtualizado).subscribe({
        next: () => {
          alert('Policial atualizado com sucesso!');
          this.policialEmEdicao = null; 
          this.getPoliciais(); 
        },
        error: (err) => {
          console.error('Erro ao atualizar policial:', err);
          alert('Erro ao atualizar policial.');
        }
      });
    }
  }

  onCancelarEdicao(): void {
    this.policialEmEdicao = null;
  }
}