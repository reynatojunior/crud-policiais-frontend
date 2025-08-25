import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CrudPolicialService } from '../../services/crud-policial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private crudPolicialService: CrudPolicialService,
    private router: Router
  ) {
    this.cadastroForm = this.fb.group({
      rg_civil: ['', Validators.required],
      rg_militar: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      data_nascimento: ['', Validators.required],
      matricula: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      this.crudPolicialService.cadastrarPolicial(this.cadastroForm.value).subscribe({
        next: () => {
          alert('Policial cadastrado com sucesso!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Erro ao cadastrar policial:', err);
          alert('Erro ao cadastrar policial. Verifique o console.');
        }
      });
    }
  }
}